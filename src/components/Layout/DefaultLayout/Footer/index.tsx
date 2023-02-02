import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as Icon from "../../../../assets/icons";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "../../../../assets/icons";

const Container = styled.div`
  margin-top: 110px;
  position: relative;

  background: #eeeffb;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Information = styled.div`
  margin-top: 10rem;

  color: #8a8fb9;
  display: flex;
  justify-content: center;
  .Infortitle {
    font-size: 2.2rem;
    font-weight: 600;
    color: #000000;
    margin-bottom: 4.2rem;
  }
  .tabel-link {
    margin-right: 90px;
  }
  ul {
    list-style-type: none;
  }
  li {
    margin-bottom: 2.1rem;
  }
`;
const ContactInfor = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 7rem;
  .logo {
    font-size: 3.8rem;
    font-weight: bolder;
    color: #000000;
    margin-bottom: 4rem;
  }
  .email-signUp {
    width: 90%;
    margin-bottom: 2.5rem;
  }

  input {
    height: 4rem;
    width: 70%;
    border: 2px solid #e7e6ef;
    border-right: none;
  }

  button {
    width: 30%;
    height: 4rem;
    border: none;
    background-color: #fb2e86;
    border-radius: 3px;
    color: #eeeffb;
  }

  span {
    margin-bottom: 0.1rem;
  }
`;
const InforLink = styled(Link)`
  font-family: "Lato", sans-serif;
  color: #8a8fb9;
  text-decoration: none;
`;
const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e7e4f8;
  position: relative;
  width: 100%;
  bottom: 0%;
  margin-top: 10rem;
  height: 5rem;
  color: #9da0ae;
  font-weight: 600;
  font-family: "lato", sans-serif;

  .social-media {
    margin-right: 1rem;
  }
  #social-container {
    margin-top: 1rem;
  }
`;

const SocialMediaContainer = styled.div`
  width: 100rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export interface FooterProps {}

export default function Footer(props: FooterProps) {
  return (
    <Container>
      <Information>
        <ContactInfor>
          <div className="logo">Hekto</div>
          <div className="email-signUp">
            <input id="searchText" type="text" />
            <button id="searchBtn">Sign Up</button>
          </div>
          <span>Contact Infor</span>
          <span>17 Princess Road, London, Greater London NW1 8JR, UK</span>
        </ContactInfor>
        <div className="tabel-link">
          <div className="Infortitle">Categories</div>
          <ul>
            <li>
              <InforLink to="/">Laptops & Computers</InforLink>
            </li>
            <li>
              <InforLink to="/">Cameras & Photography</InforLink>
            </li>
            <li>
              <InforLink to="/">Smart Phones & Tablets</InforLink>
            </li>
            <li>
              <InforLink to="/">Video Games & Consoles</InforLink>
            </li>
            <li>
              <InforLink to="/">Waterproof Headphones</InforLink>
            </li>
          </ul>
        </div>

        <div className="tabel-link">
          <div className="Infortitle">Customer Care</div>
          <ul>
            <li>
              <InforLink to="/">My Account</InforLink>
            </li>
            <li>
              <InforLink to="/">Discount</InforLink>
            </li>
            <li>
              <InforLink to="/">Returns</InforLink>
            </li>
            <li>
              <InforLink to="/">Orders History</InforLink>
            </li>
            <li>
              <InforLink to="/">Order Tracking</InforLink>
            </li>
          </ul>
        </div>
        <div className="tabel-link">
          <div className="Infortitle">Blog</div>
          <ul>
            <li>
              <InforLink to="/">Blog</InforLink>
            </li>
            <li>
              <InforLink to="/">Browse the Shop</InforLink>
            </li>
            <li>
              <InforLink to="/">Category</InforLink>
            </li>
            <li>
              <InforLink to="/">Pre-Built Pages</InforLink>
            </li>
            <li>
              <InforLink to="/">Visual Composer Elements</InforLink>
            </li>
            <li>
              <InforLink to="/">WooCommerce Pages</InforLink>
            </li>
          </ul>
        </div>
      </Information>
      <SocialMedia>
        <SocialMediaContainer>
          <div>©Webecy - All Rights Reserved</div>
          <div id="social-container">
            <FacebookIcon className="social-media" />
            <InstagramIcon className="social-media" />
            <TwitterIcon className="social-media" />
          </div>
        </SocialMediaContainer>
      </SocialMedia>
    </Container>
  );
}
