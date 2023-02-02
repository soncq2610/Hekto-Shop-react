import { IProduct } from "../../pages/Home";
import * as React from "react";
import styled from "styled-components";

const ItemWrapper = styled.div`
  width: 370px;
  border: none;
  border-bottom: 1px solid #e1e1e4;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 15px;
  margin-bottom: 15px;
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
    font-size: 1.4rem;
    span {
      color: #a1a8c1;
    }
  }
  .item-name {
    font-size: 1.4rem;
  }
  .left-wrap {
    margin-top: 10px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    text-align: center;
  }
  .item-atribute {
    font-size: 1.2rem;
  }
  .item-quantity {
    font-size: 1.6rem;
    margin-top: 15px;
  }
  .item-price {
    color: #15245e;
    margin-top: 15px;
  }
`;

export interface CartItemProp {
  data: any;
}

export default function CartItem(props: CartItemProp) {
  return (
    <ItemWrapper>
      <div className="right-wrap">
        <div className="item-img">
          <img src={props.data.bigImage} alt="" />
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
            <span className="item-atribute">price: £</span>
            <span>{props.data.salePrice}</span>
          </div>
        </div>
      </div>
      <div className="left-wrap">
        <div className="item-name">Quantity</div>
        <span className="item-quantity">x{props.data.productQuantity}</span>
      </div>
      <div className="left-wrap">
        <div className="item-name">Total</div>
        <div className="item-price">
          ${props.data.salePrice * props.data.productQuantity}{" "}
        </div>
      </div>
    </ItemWrapper>
  );
}
