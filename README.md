# Welcome to Saucy! 

An app that lets you document and compare hot sauces from places around the world. 

# Saucy API 

This is the GraphQL API for the Saucy app. 

Tech stack: 
- GraphQL 
- Mecurius 
- Neo4j 
- TAP 

## Want to try it out? 

Try the following curl requests: 

```
curl 'http://localhost:3000/graphql' \
 -H 'content-type: application/json' \
 --data-raw '{"query":"{ hello(name:\"Marcurius\") }" }'
```