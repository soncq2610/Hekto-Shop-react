import * as React from "react";
import { relatedProduct, stardark, starfiled } from "../../images";
import styled from "styled-components";

const RelatedProductContent = styled.div`
  width: 270px;
  margin-bottom: 115px;
  .related-top-wrapper {
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .related-product-name {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    color: #151875;

    margin-bottom: 15px;
  }

  .related-product-price {
    font-size: 1.3rem;
    color: #151875;
    margin-bottom: 10px;
  }
`;
import { IProduct } from "../../pages/Home";
import { NavLink } from "react-router-dom";
export interface IRelatedProductProps {
  products: IProduct;
}

export default function RelatedProduct(props: IRelatedProductProps) {
  return (
    <RelatedProductContent>
      <NavLink to={`/product-detail/${props.products.id}`}>
        <div className="related-top-wrapper">
          <img src={props.products.bigImage} alt="" />
        </div>
        <div className="related-bottom-wrapper">
          <div className="related-product-name">
            <div>{props.products.name} </div>
            <div className="star-rating">
              <img src={starfiled} alt="" />
              <img src={starfiled} alt="" />
              <img src={starfiled} alt="" />
              <img src={starfiled} alt="" />
              <img src={stardark} alt="" />
            </div>
          </div>
          <div className="related-product-price">${props.products.price} </div>
        </div>
      </NavLink>
    </RelatedProductContent>
  );
}
