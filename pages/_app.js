// import App from 'next/app'
import React from 'react';
import { wrapper, store } from "../src/store/store";
import { Provider } from "react-redux";
import GlobalStyle from "../src/theme/GlobalStyle";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Provider store={store}>
                <GlobalStyle />
                <Component {...pageProps} />
            </Provider>
        </>
    )
  }

export default wrapper.withRedux(MyApp);