#!/bin/bash
set -e
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
PROJECT_BASE=$(readlink -f $SCRIPT_DIR/..)

cd $PROJECT_BASE/frontend/app/
docker network create sadnet
docker compose run frontend bash -c "mv /deps/node_modules /app; cd /app; npm run build"
ls $PROJECT_BASE/frontend/app/build
