import * as React from "react";
import styled from "styled-components";
import { chair1 } from "../../images";
import {
  CartProductIcon,
  HeartProductIcon,
  SearchPlusIcon,
} from "../../assets/icons";
import Button from "../Button";

const FProductWrapper = styled.div`
  width: 270px;
  height: 360px;
  text-align: center;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #2f1ac4;
    cursor: pointer;
    .icon-list {
      opacity: 100%;
    }
    img {
      /* width: 70%;
        height: 70%; */
    }
    .view-detail {
      display: block;
    }
    .wrapper-down {
      div {
        color: white;
      }
    }
  }

  .wrapper-top {
    height: 236px;
    background-color: #f6f7fb;
    position: relative;
  }

  .icon-list {
    position: absolute;
    opacity: 0%;
    padding-top: 10px;
    display: flex;
    .icon-item {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      background-color: #eeeffb;

      align-items: center;
      margin-left: 10px;
    }
    .icon-item:hover {
      background-color: #fb2e86;
    }
    svg {
      display: block;
      margin: auto;
    }
  }
  .thumnail-img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 100%;
      height: 100%;
    }
  }

  .view-detail {
    display: none;
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translate(-50%);
    button {
      width: 95px;
      height: 30px;
      background-color: #08d15f;
      color: white;
    }
  }

  .wrapper-down {
    font-family: "lato", sans-serif;
  }

  .product-name {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 22px;
    color: #fb2e86;
    padding: 15px 30px 10px 30px;
    margin: 0 auto;
    margin-bottom: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .product-color {
    span {
      display: inline-block;
      width: 14px;
      height: 4px;
      background-color: #fb2e86;
      border-radius: 10px;
      margin-left: 5px;
      margin-bottom: 10px;
    }
  }
  .product-code {
    font-family: "Josefin Sans";
    font-size: 1.4rem;
    line-height: 16px;
    color: #151875;
    margin-bottom: 10px;
  }
  .product-price {
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 17px;
  }
`;
import { IProduct } from "../../pages/Home";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonCircle } from "@chakra-ui/react";
export interface IFeatureProductProps {
  products: IProduct;
  handleClickProduct?: () => void;
  handleClickHeart?: () => void;

  // {
  //   id: number;
  //   name: string;
  //   price: string;
  //   salePrice: string;
  //   numberRated?: string;
  //   sumary: string;
  //   smallImages?: [];
  //   bigImage?: string;
  //   description?: string;
  //   addInfor?: string;
  //   review?: string;
  //   video?: string;
  //   code?: string;
  // };
}

export default function FeatureProduct(props: IFeatureProductProps) {
  return (
    <FProductWrapper>
      <div className="fproduct-content">
        <div className="wrapper-top">
          <div className="thumnail-img">
            <img src={props.products.bigImage} alt="" />
          </div>
          <NavLink to={`/product-detail/${props.products.id}`}>
            <div className="view-detail">
              <Button children="View Details" />
            </div>
          </NavLink>
          <div className="icon-list">
            <div className="icon-item" onClick={props.handleClickProduct}>
              <CartProductIcon />
            </div>
            <div className="icon-item" onClick={props.handleClickHeart}>
              <HeartProductIcon />
            </div>
            <div className="icon-item">
              <SearchPlusIcon />
            </div>
          </div>
        </div>
        <div className="wrapper-down">
          <div className="product-name" title={props.products.name}>
            {props.products.name || <Skeleton />}
          </div>
          <div className="product-color">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="product-code">Code - {props.products.code}</div>
          <div className="product-price">
            £{props.products.price.toFixed(2)}
          </div>
        </div>
      </div>
    </FProductWrapper>
  );
}
