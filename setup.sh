#!/bin/bash

cd ./demo-js || exit $?
npm ci || exit $?

cd ..

cd ./demo-ts || exit $?
npm ci || exit $?
