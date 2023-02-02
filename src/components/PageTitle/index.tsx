import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TitleContainer = styled.div`
  height: 28.6rem;
  background: #f6f5ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleContent = styled.div`
  width: 1177px;
  .title {
    font-size: 3.6rem;
    font-weight: bold;
    color: #101750;
  }

  span {
    font-family: "Lato";
    font-style: normal;
    font-weight: 500;
    color: black;
    margin-right: 0.4rem;
  }
`;

export interface IPageTitleProps {
  title?: string;
  breadcrumb?: {
    name?: string;
    path: string;
  }[];
}

export default function PageTitle(props: IPageTitleProps) {
  const { title, breadcrumb } = props;
  return (
    <TitleContainer>
      <TitleContent>
        <div className="title">My Page</div>
        <div>
          <Link to="/">
            <span>Home .</span>
          </Link>
          <span>Pages .</span>
          <span style={{ color: "#FB2E86" }}>{props.title}</span>
        </div>
      </TitleContent>
    </TitleContainer>
  );
}
