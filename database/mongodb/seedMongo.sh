#!/bin/bash
mongoimport -d db_name -c coll_name --type csv --file ../data.csv --headerline