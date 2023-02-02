import React from "react";
import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { persistor } from "./redux/store";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <SkeletonTheme baseColor="#F6F7FB" highlightColor="#dcdcdcd5">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </SkeletonTheme>
  // </React.StrictMode>
);
