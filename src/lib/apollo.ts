import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl77jechw177401roc5on6fb4/master',
  cache: new InMemoryCache()
})