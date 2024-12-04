#!/bin/bash

docker compose run ingest 'conda run --no-capture-output -n sad python /code/ingest.py --prod'

