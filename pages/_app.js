// import App from 'next/app'
import GlobalStyle from "../src/theme/GlobalStyle";
import { wrapper, store } from "../src/store/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
    return ( 
        <>
            <Provider store={store}>
                <GlobalStyle/>
                <Component {...pageProps} />
            </Provider>
        </>
    )
  }

export default wrapper.withRedux(MyApp);