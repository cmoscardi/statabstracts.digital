#!/bin/bash

cp env.dev .env

docker-compose up --wait
