import { IProduct } from "../../pages/Home";
import * as React from "react";
import styled from "styled-components";
import { chair1 } from "../../images";
import { NavLink } from "react-router-dom";

const ItemWrapper = styled.div`
  width: 100%;
  border: none;
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid #e1e1e4;
  &:hover {
    background-color: rgba(22, 34, 35, 0.03);
    cursor: pointer;
  }
  .right-wrap {
    display: flex;
  }
  .item-img {
    width: 83px;
    height: 87px;
    margin-right: 17px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
  }
  .item-info {
    font-size: 1.2rem;
    span {
      color: #a1a8c1;
    }
  }
  .item-name {
    font-size: 1.2rem;
  }
  .left-wrap {
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .item-atribute {
    font-size: 1.2rem;
  }
  .item-quantity {
    font-size: 1.6rem;
  }
  .item-price {
    color: #15245e;
    margin-top: 15px;
  }
`;

export interface SearchItemProp {
  data: IProduct;
  handleClickItemSearch?: () => void;
}

export default function SearchItem(props: SearchItemProp) {
  return (
    <ItemWrapper onClick={props.handleClickItemSearch}>
      <div className="right-wrap">
        <div className="item-img">
          <img src={chair1} alt="" />
        </div>
        <div className="item-info">
          <div className="item-name">{props.data.name} </div>
          <div>
            <span className="item-atribute">Color: </span>
            <span>Brown</span>
          </div>
          <div>
            <span className="item-atribute">Size: </span>
            <span>XL</span>
          </div>
          <div>
            {/* <span className="item-atribute">price: £</span>
            <span>120</span> */}
          </div>
        </div>
      </div>
      <div className="left-wrap">
        <div className="item-name">Price</div>
        <div className="item-price">${props.data.salePrice}</div>
      </div>
    </ItemWrapper>
  );
}
