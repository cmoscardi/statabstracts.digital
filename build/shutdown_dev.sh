#!/bin/bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
PROJECT_BASE=$(readlink -f $SCRIPT_DIR/..)

cd $PROJECT_BASE
docker compose down

cd $PROJECT_BASE/backend/elasticsearch
docker compose down
