#!/bin/bash
mongoimport -d zillower -c mortgage --type csv --file ../data.csv --headerline