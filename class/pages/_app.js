// import "../styles/globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { GlobalStyles } from "../src/commons/styles/globalStyles";
// import {AppProps} from 'next/app'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdCfpc9Sqb_C1sHS_lBZtw2lXi-2cWIiQ",
  authDomain: "goranii.firebaseapp.com",
  projectId: "goranii",
  storageBucket: "goranii.appspot.com",
  messagingSenderId: "114947965407",
  appId: "1:114947965407:web:dd893b7f3df3cb0cee446a",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

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
