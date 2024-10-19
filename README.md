# `statabstracts.digital`
## The Statistical Abstracts of the United States, digitized

[![chat on gitter](https://img.shields.io/gitter/room/cmoscardi/statabstracts.digital)](https://app.gitter.im/#/room/#statabstracts-digital:gitter.im)

## Elasticsearch service setup
1. Download / install docker
2. `./run_dev.sh`

## Data ingest setup
1. Install miniconda
2. `conda env create --name sad --file environment.yml`
3. `conda activate sad`
4. (from project root) `python ingest/ingest.py`
5. `python ingest/search-demo.py [query]`

## TK
