import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { DefaultLayout, HomeLayout } from "./components/Layout";
import { Fragment } from "react";
import GlobalStyle from "./components/GlobalStyles";
import Home from "./pages/Home";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div>
      <Router>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;
              if (route.component === Home) {
                Layout = HomeLayout;
              }
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page
                        email={""}
                        password={""}
                        firstName={""}
                        address={""}
                        apartment={""}
                        city={""}
                        postalCode={""}
                        productQuantity={0}
                        cartTotalAmount={0}
                        id={0}
                        name={""}
                        price={0}
                        salePrice={0}
                        sumary={""}
                        lastName={""}
                      />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Router>
      <GlobalStyle />
      <ToastContainer />
    </div>
  );
}
