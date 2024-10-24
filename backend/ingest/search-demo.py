import os
import sys

from dotenv import load_dotenv
from elasticsearch import Elasticsearch

def main(query):
    es = Elasticsearch("http://localhost:9200",
                       api_key=os.environ["ES_LOCAL_API_KEY"])

    print(f"searching for {query}")
    results = es.search(
        index='sad',
        query={
            'match': {
                'contents': {
                    'query': query
                }
            }
        }
    )
    print(results)


if __name__ == "__main__":
    load_dotenv()
    query = sys.argv[1]
    main(query)

