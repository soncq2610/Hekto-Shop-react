import * as React from "react";
import styled from "styled-components";
import { chair1 } from "../../images";
import {
  CartProductIcon,
  HeartProductIcon,
  SearchPlusIcon,
} from "../../assets/icons";
import Button from "../Button";

const LeatestProductWrapper = styled.div`
  width: 360px;
  height: 306px;
  text-align: center;
  &:hover {
    cursor: pointer;
    .wrapper-top {
      background-color: white;
    }
    .icon-list {
      opacity: 100%;
    }
  }

  .wrapper-top {
    height: 236px;
    background-color: #f6f7fb;
    position: relative;
    align-items: center;
  }

  .icon-list {
    opacity: 0%;
    padding-top: 10px;
    display: block;
    position: absolute;
    bottom: 10px;
    .icon-item {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: block;
      position: relative;
      margin-left: 10px;
      background-color: #eeeffb;
      margin-bottom: 10px;
    }
    .icon-item:hover {
      background-color: #fb2448;
    }
    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
    }
  }
  .thumnail-img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* width: 100%; */
    img {
      width: 360px;
      height: 236px;
    }
  }

  .wrapper-down {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    span {
      margin-right: 10px;
    }
  }

  .product-name {
    font-size: 1.9rem;
    color: #151875;
    border-bottom: 2px solid #eeeffb;
    max-width: 160px;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .product-sale {
    font-size: 1.4rem;
    color: #151875;
  }
  .product-price {
    font-size: 1.2rem;
    text-decoration-line: line-through;
    color: #fb2448;
  }
`;
import { IProduct } from "../../pages/Home";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
export interface ILeatestProductProps {
  products: IProduct;
  handleClickProduct?: () => void;
}

export default function LeatestProduct(props: ILeatestProductProps) {
  return (
    <LeatestProductWrapper>
      <div className="fproduct-content">
        <div className="wrapper-top">
          <NavLink to={`/product-detail/${props.products.id}`}>
            <div className="thumnail-img">
              <img src={props.products.bigImage} alt="" />
            </div>
          </NavLink>

          <div className="icon-list">
            <div className="icon-item" onClick={props.handleClickProduct}>
              <CartProductIcon />
            </div>
            <div className="icon-item">
              <HeartProductIcon />
            </div>
            <div className="icon-item">
              <SearchPlusIcon />
            </div>
          </div>
        </div>
        <div className="wrapper-down">
          <div className="product-name" title={props.products.name}>
            {props.products.name}
          </div>
          <div>
            <span className="product-sale">
              £{props.products.salePrice.toFixed(2)}
            </span>
            <span className="product-price">
              £{props.products.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </LeatestProductWrapper>
  );
}
