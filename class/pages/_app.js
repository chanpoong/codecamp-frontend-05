// import "../styles/globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { Global, css } from "@emotion/react";
import { GlobalStyles } from "../src/commons/styles/globalStyles";
// import {AppProps} from 'next/app'

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend05.codebootcamp.co.kr/graphql",

    //API 참조를 위한 주소는 uri에 작성
    cache: new InMemoryCache(),
  }); //

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
