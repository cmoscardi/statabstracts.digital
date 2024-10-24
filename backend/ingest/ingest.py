import glob
import os
from pprint import pprint

from dotenv import load_dotenv
from elasticsearch import Elasticsearch
import pymupdf as pdf

"""
This script idempotently loads all pdfs from /data into ES index
"""

def main():
    es = Elasticsearch(f"http://{os.environ['ES_LOCAL_CONTAINER_NAME']}:9200",
                       api_key=os.environ["ES_LOCAL_API_KEY"])
    client_info = es.info()

    es.indices.delete(index="sad", ignore_unavailable=True)
    es.indices.create(index="sad")

    for fname in glob.glob("/data/*.pdf"):
        basename = os.path.basename(fname)
        print("loading file", basename)
        doc = pdf.open(fname)
        for i, page in enumerate(doc):
            to_load = {"title": f"{basename} page {i}",
                       "contents": page.get_text()}
            response = es.index(index="sad",
                                body=to_load)
            if response['result'] != 'created':
                print("yikes")
                print(response)
                raise




if __name__ == "__main__":
    fpath = os.path.dirname(os.path.realpath(__file__))
    envpath = os.path.join(fpath, ".env")
    print(envpath)
    load_dotenv(envpath)
    print(os.environ)
    main()
