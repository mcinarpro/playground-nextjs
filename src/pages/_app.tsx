import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import { createTheme, NextUIProvider } from "@nextui-org/react";

import { store } from "../app/store";

import type { AppProps } from "next/app";
let persistor = persistStore(store);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NextUIProvider
          theme={createTheme({
            type: "dark",
            theme: {
              colors: {},
            },
          })}
        >
          <Component {...pageProps} />
        </NextUIProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
