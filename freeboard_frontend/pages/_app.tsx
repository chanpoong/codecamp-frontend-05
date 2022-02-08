import {
  ApolloLink,
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import "antd/dist/antd.css";
import Layout from "./src/components/commons/layout/index";
import { Global, css } from "@emotion/react";
import { GlobalStyles } from "./src/commons/styles/globalstyles";
import { initializeApp } from "firebase/app";
import { createUploadLink } from "apollo-upload-client";

const firebaseConfig = {
  apiKey: "AIzaSyBdCfpc9Sqb_C1sHS_lBZtw2lXi-2cWIiQ",
  authDomain: "goranii.firebaseapp.com",
  projectId: "goranii",
  storageBucket: "goranii.appspot.com",
  messagingSenderId: "114947965407",
  appId: "1:114947965407:web:dd893b7f3df3cb0cee446a",
};

export const FirebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }) {
  const uploadLink = createUploadLink({
    uri: "http://backend05.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    // uploadLink의 타입은 uploadLink as unknown as ApolloLink
    link: ApolloLink.from([uploadLink]),
    //API 참조를 위한 주소는 uri에 작성
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
