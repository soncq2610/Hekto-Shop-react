import React from "react";
import styled from "styled-components";

const ShopexWrapper = styled.div`
  width: 270px;
  height: 320px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  box-shadow: 0px 8px 40px rgba(49, 32, 138, 0.05);
  background: #ffffff;
  cursor: pointer;
  p {
    font-size: 2.2rem;
    color: #151875;
    margin-bottom: 15px;
    margin-top: 10px;
  }
  .descript {
    width: 217px;
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.6rem;
    color: #1a0b5b4d;
  }

  .wapperContent::after {
    content: "";
    position: absolute;
    background-color: #ff9100;
    width: 100%;
    height: 0.2rem;
    left: 0;
    bottom: 0;
  }

  .wapperContent::after {
    transform: scale(0, 1);
    transition: transform 0.3s ease;
  }
  .wapperContent:hover::after {
    transform: scale(1, 1);
  }
`;

export interface IShopexProps {
  imgUrl?: any;
  title?: String;
  description?: String;
}

export default function Shopex(props: IShopexProps) {
  const { imgUrl, title, description } = props;
  return (
    <ShopexWrapper>
      <div className="wapperContent">
        <img src={imgUrl} alt="" />
        <p>{title}</p>
        <div className="descript">{description}</div>
      </div>
    </ShopexWrapper>
  );
}
