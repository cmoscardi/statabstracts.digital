#!/bin/bash

set -e
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
PROJECT_BASE=$(readlink -f $SCRIPT_DIR/..)

cd $PROJECT_BASE

# turn on elasticsearch stuff
$PROJECT_BASE/build/initialize_es.sh


docker compose run ingest
docker compose run flask conda run --no-capture-output -n sad python -m pytest /code/test.py
