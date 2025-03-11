import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://pvovb7pb.api.sanity.io/v2023-08-01/graphql/production/default", // Replace with your API endpoint
  cache: new InMemoryCache(),
});

export default client;
