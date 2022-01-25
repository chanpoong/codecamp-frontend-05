import '../styles/globals.css'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import 'antd/dist/antd.css'
// import {AppProps} from 'next/app'

function MyApp({ Component, pageProps }){
  const client = new ApolloClient({
    uri: 'http://example.codebootcamp.co.kr/graphql',
    
    //API 참조를 위한 주소는 uri에 작성
    cache : new InMemoryCache()
  }) //

  return( 
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
