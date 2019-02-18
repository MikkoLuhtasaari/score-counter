npm run-script build
aws s3 cp build s3://score-counter/ --recursive