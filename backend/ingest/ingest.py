import glob
import os
from pprint import pprint
import sys
import io

from dotenv import load_dotenv
from elasticsearch import Elasticsearch
import pandas as pd
import pymupdf as pdf
import requests

"""
This script idempotently loads all pdfs from /data into ES index
"""



DEV_BASE_URL = "http://s3:4001"
PROD_BASE_URL = "https://sad.nyc3.digitaloceanspaces.com"


def main(base_url):

    metrics = pd.read_csv(io.StringIO(requests.get(base_url + "/page_metrics_with_url.csv").text))
    fnames = (metrics['fchunk'] + '.pdf').unique()
    orig_urls = metrics.drop_duplicates(subset=['fchunk']).set_index("fchunk")["url"]
    confidences = metrics.set_index(["fchunk", "page"])["confidence"]

    es = Elasticsearch(f"http://{os.environ['ES_LOCAL_CONTAINER_NAME']}:9200",
                       api_key=os.environ["ES_LOCAL_API_KEY"])
    client_info = es.info()

    es.indices.delete(index="sad", ignore_unavailable=True)
    es.indices.create(index="sad")

    for fname in fnames:
        print("loading file", fname)
        fchunk = fname.split(".")[0]

        ingest_url = base_url + "/" + fname
        # sorry
        if base_url == DEV_BASE_URL:
            public_url = ingest_url.replace("s3", "localhost")
        else:
            public_url = ingest_url

        orig_url = orig_urls.loc[fchunk]

        resp = requests.get(ingest_url)
        doc = pdf.Document(stream=resp.content)
        for i, page in enumerate(doc):
            to_load = {"title": f"{fname} page {i}",
                       "contents": page.get_text(),
                       "url": public_url,
                       "orig_url": orig_url,
                       "confidence": float(confidences.loc[fchunk, i])}
            response = es.index(index="sad",
                                body=to_load)
            if response['result'] != 'created':
                print("yikes")
                print(response)
                raise



if __name__ == "__main__":
    dev_or_prod = sys.argv[1] if len(sys.argv) > 1 else None
    if dev_or_prod == "--prod":
        base_url = PROD_BASE_URL
    else:
        base_url = DEV_BASE_URL


    fpath = os.path.dirname(os.path.realpath(__file__))
    envpath = os.path.join(fpath, ".env")
    #print(envpath)
    load_dotenv(envpath)
    #print(os.environ)
    main(base_url)
