import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "antd/dist/antd.css";
import Layout from "./src/components/commons/layout";
import { Global, css } from "@emotion/react";
import { GlobalStyles } from "./src/commons/styles/globalstyles";

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend05.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={GlobalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
