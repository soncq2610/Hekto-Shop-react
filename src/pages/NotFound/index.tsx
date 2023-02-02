import * as React from "react";
import { BrandList, BreadCrumb, Button } from "../../components";
import { notfound } from "../../images";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFoundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button {
    width: 165px;
    height: 45px;
    background: #fb2e86;
    border-radius: 3px;
    border: none;
    color: white;
    font-family: "Josefin Sans", sans-serif;
    margin-bottom: 133px;
  }
`;

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <>
      <BreadCrumb title="Not Found" />
      <NotFoundWrapper>
        <div>
          <img src={notfound} alt="" />
        </div>
        <Link to="/">
          <Button children="Back to Home" />
        </Link>
        <div>
          <BrandList />
        </div>
      </NotFoundWrapper>
    </>
  );
}
