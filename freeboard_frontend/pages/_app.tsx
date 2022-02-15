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
import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBdCfpc9Sqb_C1sHS_lBZtw2lXi-2cWIiQ",
  authDomain: "goranii.firebaseapp.com",
  projectId: "goranii",
  storageBucket: "goranii.appspot.com",
  messagingSenderId: "114947965407",
  appId: "1:114947965407:web:dd893b7f3df3cb0cee446a",
};

export const FirebaseApp = initializeApp(firebaseConfig);

interface IGlobalContext {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>;
}

export const GlobalContext = createContext<IGlobalContext>({});

function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("");
  const value = {
    accessToken,
    setAccessToken,
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setAccessToken(localStorage.getItem("accessToken"));
    }
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend05.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    // uploadLink의 타입은 uploadLink as unknown as ApolloLink
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    //API 참조를 위한 주소는 uri에 작성
    cache: new InMemoryCache(),
  });

  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        <Global styles={GlobalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
