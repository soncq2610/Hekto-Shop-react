import React from "react";
import HeadingBar from "../DefaultLayout/HeadingBar";
import NavBar from "../DefaultLayout/NavBar";
import Footer from "../DefaultLayout/Footer";
import ScrollToTop from "../../../components/ScrollToTop";

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <div>
      <ScrollToTop />
      <HeadingBar />
      <NavBar />
      <div className="content">{props.children}</div>
      <Footer />
    </div>
  );
}
