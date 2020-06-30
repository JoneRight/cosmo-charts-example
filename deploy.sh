#!/usr/bash

npm run build

cd dist

rm ./charts.zip

zip -r ./charts.zip ./*

scp -v ./charts.zip root@10.159.33.152:/nodeapps/cosmo-charts/
