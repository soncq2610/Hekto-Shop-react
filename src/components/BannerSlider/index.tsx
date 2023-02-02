import * as React from "react";
import styled from "styled-components";
import { Button } from "..";
import { lamp, sofa } from "../../images";
const BannerWarpper = styled.div`
  .promotional {
    display: flex;
    justify-content: center;
  }
  .left-promotional {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
  }
  .promotional-img {
    width: 507px;
    height: 464px;
    margin-top: 150px;
  }
  .promotional-content {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 700;

    span {
      color: #fb2e86;
      width: 560px;
    }
    h1 {
      font-size: 53px;
      font-weight: bold;
      font-family: "Josefin Sans";
    }
    .promotional-descript {
      color: #8a8fb9;
      width: 560px;
    }
    button {
      width: 163px;
      height: 50px;
      margin-top: 40px;
      margin-left: 2px;
    }
  }
`;

export default function BannerSlider() {
  return (
    <BannerWarpper>
      <div className="promotional">
        <div className="left-promotional">
          <div className="image">
            <img src={lamp} alt="" />
          </div>
          <div className="promotional-content">
            <span className="">Best Furniture For Your Castle....</span>
            <h1>New Furniture Collection Trends in 2020</h1>
            <div className="promotional-descript">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </div>
            <div>
              <Button children="Shop Now" />
            </div>
          </div>
        </div>
        <div className="right-promotional">
          <div className="promotional-img">
            <img src={sofa} alt="" />
          </div>
        </div>
      </div>
    </BannerWarpper>
  );
}
