import { GraphQLClient } from 'graphql-request';

const API_ENDPOINT =
  'https://api-ca-central-1.graphcms.com/v2/ckot3pgbrkppn01z28o38fein/master';

const client = new GraphQLClient(API_ENDPOINT);

export default client;
