import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { chair2 } from "../../images";

const TrendingProductWrapper = styled.div`
  width: 270px;
  height: 350px;
  text-align: center;
  filter: drop-shadow(0px 8px 40px rgba(49, 32, 138, 0.05));
  &:hover {
    cursor: pointer;
  }
  .wrap-content {
    padding-top: 11px;
    background: linear-gradient(0deg, #ffffff, #ffffff), #ffffff;
  }
  .treding-wrap-top {
    width: 247px;
    height: 244px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 11px 0;
    background-color: #f5f6f8;
    img {
      width: 100%;
    }
  }

  .trending-wrap-bottom {
    color: #151875;
    padding-bottom: 32px;
  }

  .trending-product-name {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 1.6rem;
    padding: 15px 30px 0 30px;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .treding-sale-price {
    font-size: 1.4rem;
    margin-right: 12px;
  }
  .treding-default-price {
    font-size: 1.2rem;

    text-decoration-line: line-through;

    color: rgba(21, 24, 117, 0.3);
  }
`;
import { IProduct } from "../../pages/Home";
interface ITrendingProduct {
  products: IProduct;
}
const TrendingProduct = (props: ITrendingProduct) => {
  return (
    <TrendingProductWrapper>
      <NavLink to={`/product-detail/${props.products.id}`}>
        <div className="wrap-content">
          <div className="treding-wrap-top">
            <img src={props.products.bigImage} alt="" />
          </div>
          <div className="trending-wrap-bottom">
            <div className="trending-product-name" title={props.products.name}>
              {props.products.name}
            </div>
            <div>
              <span className="treding-sale-price">
                £{props.products.salePrice}{" "}
              </span>
              <span className="treding-default-price">
                £{props.products.price.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </NavLink>
    </TrendingProductWrapper>
  );
};
export default TrendingProduct;
