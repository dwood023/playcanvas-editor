#/bin/bash

output=build/index.js
input=index.ts

deno bundle --no-check $input --watch $output
