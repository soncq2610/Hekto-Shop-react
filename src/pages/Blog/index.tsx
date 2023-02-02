import * as React from "react";
import { BreadCrumb, LeatestBlog } from "../../components";

import styled from "styled-components";

const BlogWrapper = styled.div`
  margin: auto 0;
  display: grid;
  grid-template-columns: auto auto auto;
  margin-top: 50px;
  justify-content: center;
  grid-gap: 50px 50px;
`;
export interface IBlogProps {}

export default function Blog(props: IBlogProps) {
  return (
    <>
      <BreadCrumb title="Blog" />
      <BlogWrapper>
        <LeatestBlog />
        <LeatestBlog />
        <LeatestBlog />
        <LeatestBlog />
        <LeatestBlog />
        <LeatestBlog />
      </BlogWrapper>
    </>
  );
}
