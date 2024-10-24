# Filename - server.py
import datetime
import os

# Import flask and datetime module for showing date and time
from dotenv import load_dotenv
from flask import Flask, request
from flask_restful import Resource, Api 


fpath = os.path.dirname(os.path.realpath(__file__))
load_dotenv(os.path.join(fpath, ".env"))


# creating the flask app 
app = Flask(__name__) 
# creating an API object 
api = Api(app) 




class DataSearch(Resource):
    def get(self, search):
        x = datetime.datetime.now()
        return {'myData': f'API Data Returned: {search} {x}'}
    def post(self):
        return {'myData':'Posted!'}

api.add_resource(DataSearch, '/searchdata/<string:search>')

    
# Running app
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3001, debug=True)
