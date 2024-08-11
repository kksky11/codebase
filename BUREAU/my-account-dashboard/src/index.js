import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux';
// import { persistor, store } from '@store/store';
// import { PersistGate } from 'redux-persist/integration/react';
import './styles/globals.scss';
import './styles/common.scss';
import './styles/loaderSkeleton.scss';
import App from './App';
import reportWebVitals from '@public/reportWebVitals';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
      {/* <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> */}
        {/* <Component {...pageProps} /> */}
        <App />
      {/* </PersistGate>
    </Provider> */}
    </BrowserRouter>
);
reportWebVitals();
