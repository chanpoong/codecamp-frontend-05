// import "../styles/globals.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { GlobalStyles } from "../src/commons/styles/globalStyles";
// import {AppProps} from 'next/app'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { createUploadLink } from "apollo-upload-client";
import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { AppProps } from "next/app";
import Head from "next/head"

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

interface IUserInfo {
  name?: string;
  email?: string;
  picture?: string;
}

interface IGlobalContext {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>;
  userInfo?: IUserInfo;
  setUserInfo?: Dispatch<SetStateAction<IUserInfo>>;
}

export const GlobalContext = createContext<IGlobalContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState<IUserInfo>({});
  const value = {
    accessToken,
    setAccessToken,
    userInfo,
    setUserInfo,
  };

  //현재 위치가 Br일때 실행
  // if (process.browser) {
  //   if (localStorage.getItem("accessToken")) {
  //     setAccessToken(localStorage.getItem("accessToken"));
  //   }
  // }
  //window가 undefined가 아닐 때 실행 (윈도우는 브라우저에 있으므로 브라우저에서 실행하는것과 동일)
  // if(typeof window !== "undefined"){
  //   if (localStorage.getItem("accessToken")) {
  //     setAccessToken(localStorage.getItem("accessToken"));
  //   }
  // }

  // 나머지 컴포넌트가 전부 그려지고 난 후 실행되게하는 명령어인 useEffect를 사용해서 pre-rendering에서 오류나지 않게 설정
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
  }); //

  return (
    <div>
    {/* <Head> 모든 페이지에서 head 내부의 데이터를 다운로드 받아서 로딩 시간에 관련한 에러 등은 방지할 수 있는데  비효율적
               <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=b01d65e21d48e9aeaf9d190e4949e5e0"></script>
            </Head> */}
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        <Global styles={GlobalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
    </div>
  );
}

export default MyApp;
