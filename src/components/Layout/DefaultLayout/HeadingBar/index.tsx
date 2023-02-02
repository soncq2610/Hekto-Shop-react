import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  selectEmail,
  selectUserName,
  selectUserToken,
  SET_lOGOUT_USER,
} from "../../../../redux/slice/authSlice";

import styled from "styled-components";

import {
  CartIcon,
  DropDownIcon,
  EmailIcon,
  HeartIcon,
  PersonIcon,
  PhoneIcon,
} from "../../../../assets/icons";
import { toast } from "react-toastify";
import { selectTotalCount } from "../../../../redux/slice/cartSlice";

const Wrapper = styled.div`
  height: 44px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7e33e0;
  color: #f1f1f1;
  font-family: "josefin Sans";
  line-height: 19px;
  font-weight: 400;
  position: fixed;
  top: 0;
  z-index: 9999;
`;

const Container = styled.div`
  width: 1177px;
  height: 16px;
  display: flex;
  justify-content: space-between;
`;

const Contacts = styled.div`
  display: flex;
  justify-content: space-between;

  .mail-address {
    margin-right: 50px;
  }
  .icon {
    margin-right: 10px;
  }
`;

const Option = styled.div`
  display: flex;
  justify-content: center;

  div.option {
    margin-right: 2rem;
  }

  .icon {
    margin-left: 0.4rem;
    &:hover {
      cursor: pointer;
    }
  }

  .option.cart {
    margin-right: 0px;
    margin-left: 0px;
  }
  .header-top-right {
    position: relative;
  }
  .header-top-right:hover {
    cursor: pointer;
    .header-top-right-child {
      display: block;
    }
  }
  .header-top-right-child:before {
    top: 5px;
    width: 100px;
    left: 0px;
    content: "";
    height: 50px;
    position: absolute;
    left: 0;
    right: 0;
    background-color: transparent;
  }
  .header-top-right-child {
    display: none;
  }
  .login-text {
    color: white;
  }
  .logout-header {
    top: 40px;
    width: 100px;
    height: 50px;
    position: absolute;
    text-align: center;
    background-color: #7e33e0;
    color: white;
    span {
      display: inline-block;
      padding-top: 10px;
    }
  }
  .arrow-up {
    position: absolute;
    top: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #7e33e0;
  }
  .cart {
    position: relative;
  }
  .total-product {
    position: absolute;
    height: 20px;
    width: 20px;
    background-color: red;
    color: white;
    font-size: 1.2rem;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
    right: -15px;
    top: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: center;
  }
  .option {
    span {
      color: white;
    }
  }
`;

export interface HeadingBarProps {}

const Logout = () => {
  return (
    <Link to={"/"} className="logout-header">
      <div className="arrow-up"></div>
      <span>Log out ↪</span>
    </Link>
  );
};

export default function HeadingBar(props: HeadingBarProps) {
  const dispatch = useDispatch();
  const token = useSelector(selectUserToken);
  const userName = useSelector(selectUserName);
  const totalCount = useSelector(selectTotalCount);
  const handleClickLogout = () => {
    const data = {
      email: null,
      userName: null,
      token: null,
    };
    dispatch(SET_lOGOUT_USER(data));
    toast.success("Logout Successful..!!");
  };
  const navigate = useNavigate();

  const goToCartHandle = () => {
    if (token) {
      navigate("/cart");
    } else {
      navigate("/login");
      toast.info("Login to use cart!");
    }
  };
  return (
    <Wrapper>
      <Container>
        <Contacts>
          <div className="mail-address">
            <EmailIcon className="email icon" />
            <span>congquyson@gmail.com</span>
          </div>
          <div className="phone-number">
            <PhoneIcon className="phone icon" />
            <span>0362631223</span>
          </div>
        </Contacts>
        <Option>
          <div className="option langue">
            <span>English</span>
            <DropDownIcon className="dropdown icon" />
          </div>
          <div className="option currency">
            <span>USD</span>
            <DropDownIcon className="dropdown icon" />
          </div>
          {token ? (
            <div className="header-top-right">
              {`${userName} 👋`}
              <div
                className="header-top-right-child"
                onClick={handleClickLogout}
              >
                <Logout />
              </div>
            </div>
          ) : (
            <div className="option login">
              <Link to={"/login"}>
                <span className="login-text">Login</span>
                <PersonIcon className="person icon" />
              </Link>
            </div>
          )}

          <div className="option wishlist">
            <Link to={"/whish-list"}>
              <span>Wishlist</span>
              <HeartIcon className="heart icon" />
            </Link>
          </div>

          <div className="option cart" onClick={() => goToCartHandle()}>
            <CartIcon className="cart icon" />
            {totalCount > 0 && token != null ? (
              <span className="total-product">{totalCount}</span>
            ) : (
              ""
            )}
          </div>
        </Option>
      </Container>
    </Wrapper>
  );
}
