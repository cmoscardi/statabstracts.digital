#!/bin/bash

set -e
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

PROJECT_BASE=$(readlink -f $SCRIPT_DIR/..)

$SCRIPT_DIR/initialize_es.sh
echo "starting API and running ingest..."
cd $PROJECT_BASE
docker-compose up
