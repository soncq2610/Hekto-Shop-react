import React from "react";
import HeadingBar from "./HeadingBar";
import NavBar from "./NavBar";
import Footer from "./Footer";

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
