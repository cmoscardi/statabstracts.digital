#!/bin/bash

# this script removes the binary info from conda packages
# and also deletes the 'prefix' indicator at the end

set -e

#conda env export > environment.yml
sed -ie 's/=\([^=].*\)=.*/=\1/' environment.yml
sed -ie 's/^.*prefix.*//' environment.yml
