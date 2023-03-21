import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  split,
  ApolloLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getAuth, getIdToken } from "firebase/auth";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

const ApolloProviderWithFirebase = ({ children }: any) => {
  const publicHttpLink = new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_API_PUBLIC_URL,
  });

  const privateHttpLink = new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_API_PRIVATE_URL,
  });

  const wsLink = new GraphQLWsLink(
    createClient({
      url: process.env.REACT_APP_GRAPHQL_WS_PRIVATE_URL || "",
      // connectionParams: {
      //   authToken: getIdToken(user),
      // },
    })
  );

  const authLink = setContext(async (_, { headers, ...rest }) => {
    const token = await new Promise((resolve: any, reject: any) =>
    getAuth().onAuthStateChanged(async (user: any) =>
      resolve(await getIdToken(user)), (e: any) => reject(e)));
    if (token) {
      return {
        ...rest,
        headers: {
          ...headers,
          authToken: token,
        },
      };

    } else return { headers, ...rest };
    
    
  });  

  // const splitLink = split(

  //   (operation) => {
  //     const definition = getMainDefinition(operation.query);

  //     return (
  //       definition.kind === "OperationDefinition" &&
  //       definition.operation === "subscription"
  //     );
  //   },
  //   wsLink,
  //   authLink.concat(privateHttpLink)
  // );

  const client = new ApolloClient({
    link: ApolloLink.split(
      (operation) => operation.getContext().clientName === "public",
      publicHttpLink,
      authLink.concat(privateHttpLink)
    ),
    cache: new InMemoryCache(),
    credentials: "include",
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export { ApolloProviderWithFirebase };
