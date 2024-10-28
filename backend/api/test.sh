#!/bin/bash

cd /code
py.test
conda run --no-capture-output -n sad python /code/test.py
