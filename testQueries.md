# Some test queries

#### Call IT!

curl 'http://localhost:3000/graphql' \
-H 'content-type: application/json' \
 --data-raw '{"query":"{ hello(name:\"Marcurius\") }" }'

curl 'http://localhost:3000/graphql' -H 'content-type: application/json' --data-raw ' {"query":"{ sauce }" }'

curl 'http://localhost:3000/graphql' '{"sauce":"{ sauce }" }'
