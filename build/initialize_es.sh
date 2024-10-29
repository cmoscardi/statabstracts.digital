#!/bin/bash

set -e
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

PROJECT_BASE=$(readlink -f $SCRIPT_DIR/..)

cp $SCRIPT_DIR/env.dev $PROJECT_BASE/.env
cp $SCRIPT_DIR/env.dev $PROJECT_BASE/backend/elasticsearch/.env
set -a && source $PROJECT_BASE/.env && set +a

# Create an API key for Elasticsearch
# parameter 1: the Elasticsearch password
# parameter 2: name of the API key to generate
create_api_key() {
  local es_password=$1
  local name=$2
  local response="$(curl -s -u "elastic:${es_password}" -X POST http://localhost:9200/_security/api_key -d "{\"name\": \"${name}\"}" -H "Content-Type: application/json")"
  if [ -z "$response" ]; then
    echo ""
  else
    local api_key="$(echo "$response" | grep -Eo '"encoded":"[A-Za-z0-9+/=]+' | grep -Eo '[A-Za-z0-9+/=]+' | tail -n 1)"
    echo $api_key
  fi
}

cd backend/elasticsearch
docker compose up --wait
cd ../..

api_key=`create_api_key $ES_LOCAL_PASSWORD devkey`
echo "api key is $api_key"
echo "(autocopied to .env)"

new_dotenv="`cat $PROJECT_BASE/.env | grep -v ES_LOCAL_API_KEY`"
echo "new dotenv"
echo "$new_dotenv"
echo "done"

echo "$new_dotenv" > $PROJECT_BASE/.env
echo "ES_LOCAL_API_KEY=$api_key" >> $PROJECT_BASE/.env
cp $PROJECT_BASE/.env $PROJECT_BASE/backend/api/
cp $PROJECT_BASE/.env $PROJECT_BASE/backend/ingest/
