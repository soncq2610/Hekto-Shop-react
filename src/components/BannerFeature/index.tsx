import { sofa2 } from "../../images";
import React from "react";
import styled from "styled-components";
import Button from "../Button";

const BannerFeatureWrapper = styled.div`
  width: 1173px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  font-family: "lato", sans-serif;
  .banner-feature-left {
    width: 558px;
    height: 550px;
  }
  h3 {
    font-family: "Josefin Sans";
    font-size: 3.5rem;
    letter-spacing: 0.015em;
    margin-bottom: 30px;

    color: #151875;
  }
  .unique-feature {
  }
  .feature-dot {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    display: inline-block;
  }
  .feature-dot.red {
    background-color: #f52b70;
  }
  .feature-dot.blue {
    background-color: #2b2bf5;
  }
  .feature-dot.green {
    background-color: #2bf5cc;
  }
  .unique-feature-desc {
    display: flex;
    align-items: baseline;
    margin-bottom: 13px;
    span {
      margin-right: 17px;
    }
    p {
      width: 481px;
    }
  }
  .unique-feature-price {
    display: flex;
    align-items: center;
    margin-top: 50px;

    button {
      width: 157px;
      height: 45px;
      margin-right: 20px;
    }
    span {
      display: block;
      font-size: 1.4rem;
    }
    .item-name {
      font-family: "Josefin Sans";

      font-weight: 600;
      line-height: 16px;
      letter-spacing: 0.02em;

      /* Text */

      color: #151875;
    }
    .item-price {
      line-height: 17px;
      /* identical to box height */

      /* Text */

      color: #151875;
    }
  }
`;

const BannerFeature = () => {
  return (
    <BannerFeatureWrapper>
      <div className="banner-feature-left">
        <img src={sofa2} alt="" />
      </div>
      <div className="banner-feature-right">
        <h3>Unique Features Of leatest & Trending Poducts</h3>
        <div className="unique-feature">
          <div className="unique-feature-desc">
            <span className="feature-dot red"></span>
            <p>All frames constructed with hardwood solids and laminates</p>
          </div>
          <div className="unique-feature-desc">
            <span className="feature-dot blue"></span>
            <p>
              Reinforced with double wood dowels, glue, screw - nails corner
              blocks and machine nails
            </p>
          </div>
          <div className="unique-feature-desc">
            <span className="feature-dot green"></span>
            <p>Arms, backs and seats are structurally reinforced</p>
          </div>
        </div>
        <div className="unique-feature-price">
          <div>
            <Button children="Add To Cart" />
          </div>
          <div className="name-price">
            <span className="item-name">B&B Italian Sofa </span>
            <span className="item-price">$32.00</span>
          </div>
        </div>
      </div>
    </BannerFeatureWrapper>
  );
};
export default BannerFeature;
