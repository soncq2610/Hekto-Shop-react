import React from "react";
import styled from "styled-components";
import { BrandList, BreadCrumb, Button, Shopex } from "../../components";
import {
  partner,
  carDelevery,
  cashback,
  premiumQuality,
  support,
  client1,
  client2,
  client3,
} from "../../images";

const AboutUsWrapper = styled.div`
  margin: 0 auto;

  .contactUs {
    margin: 0 auto;
    margin-top: 120px;
    width: 1120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left-image {
    width: 550px;
    height: 390px;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
  .right-content {
    width: 550px;
    font-family: "Lato", sans-serif;
    p {
      font-size: 3.6rem;
      color: #151875;
      font-weight: bold;
      margin-bottom: 15px;
      font-family: "Josefin Sans", sans-serif;
    }
  }

  span {
    font-weight: 600;
    color: #8a8fb9;
  }

  button {
    width: 145px;
    height: 45px;
    margin-top: 30px;
    font-size: 18px;
    font-family: "lato", sans-serif;
  }
  .feature {
    margin: 0 auto;
    text-align: center;
    align-items: center;
    margin-top: 140px;
  }
  .shopex {
    margin: 0 auto;
    margin-top: 67px;
    width: 1168px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h2 {
    font-size: 4.2rem;
    font-weight: bold;
  }
  .client-feebback {
    margin-top: 133px;

    h2 {
      padding-top: 70px;
      padding-bottom: 70px;
    }
  }
  .info {
    display: flex;
    justify-content: center;
    position: relative;
  }
  .client {
    width: 55px;
    height: 55px;
    border: 0.5px solid #29e871;
    border-radius: 2px;
    margin-right: 13px;

    img {
      width: 100%;
      border-radius: 1px;
    }
  }

  .client:hover {
    transform: translateY(-10px);
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }
  .client-name {
    margin-bottom: 14px;
  }
  .feedback {
    margin: 0 auto;
    font-family: "lato", sans-serif;
    padding-top: 25px;
    width: 690px;
    .name {
      font-size: 2.2rem;
      font-weight: 600;
      color: #151875;
    }
    .job {
      font-size: 1rem;
      font-weight: 600;
      color: #8a8fb9;
    }

    .feedback-content {
      font-weight: 700;
      font-size: 16px;
      color: #8a8fb9;
    }
  }
`;
const AboutUs = () => {
  return (
    <>
      <BreadCrumb title="About Us" />
      <AboutUsWrapper>
        <div className="contactUs">
          <div className="left-image">
            <img src={partner} alt="" />
          </div>
          <div className="right-content">
            <p>Know About Our Ecomerce Business, History</p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </span>
            <Button children="Contact us" />
          </div>
        </div>

        <div className="feature">
          <h2>Our Features</h2>
          <div className="shopex">
            <Shopex
              imgUrl={carDelevery}
              title="Delevery"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
            />
            <Shopex
              imgUrl={cashback}
              title="100% Cash Back"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
            />
            <Shopex
              imgUrl={premiumQuality}
              title="Quality Product"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
            />
            <Shopex
              imgUrl={support}
              title="24/7 Support"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
            />
          </div>
          <div className="client-feebback">
            <h2>Our Client Say!</h2>
            <div className="info">
              <div className="client">
                <img src={client1} alt="" />
              </div>
              <div className="client">
                <img src={client2} alt="" />
              </div>
              <div className="client">
                <img src={client3} alt="" />
              </div>
            </div>

            <div className="feedback">
              <div className="client-name">
                <div className="name">Selina Gomez</div>
                <div className="job">Ceo At Webecy Digital</div>
              </div>

              <div className="feedback-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam
                vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices
                dolor aliquam lacus volutpat praesent.
              </div>
            </div>
          </div>
        </div>
      </AboutUsWrapper>
    </>
  );
};
export default AboutUs;
