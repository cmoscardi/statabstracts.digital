# Filename - server.py
import datetime
import json
import os
import pprint

# Import flask and datetime module for showing date and time
from dotenv import load_dotenv
from elasticsearch import Elasticsearch
from flask import Flask, request
from flask_restful import Resource, Api 


fpath = os.path.dirname(os.path.realpath(__file__))
load_dotenv(os.path.join(fpath, ".env"))
es = Elasticsearch(f"http://{os.environ['ES_LOCAL_CONTAINER_NAME']}:9200",
                   api_key=os.environ["ES_LOCAL_API_KEY"])


# creating the flask app 
app = Flask(__name__) 
# creating an API object 
api = Api(app) 




class DataSearch(Resource):
    def get(self, search):
        results = es.search(
            index='sad',
            query={
                'match': {
                    'contents': {
                        'query': search
                    }
                }
            }
        )
        return {'myData': results.body}
    def post(self):
        return {'myData':'Posted!'}

api.add_resource(DataSearch, '/searchdata/<string:search>')

    
# Running app
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3001, debug=True)
