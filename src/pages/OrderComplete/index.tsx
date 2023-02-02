import { BrandList, BreadCrumb, Button } from "../../components";
import React, { useEffect } from "react";
import styled from "styled-components";
import { clock, checklist, checkMark } from "../../images";
import { selectUserToken } from "../../redux/slice/authSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CompleteWrapper = styled.div`
  width: 1046px;
  margin: 0 auto;
  text-align: center;

  .content {
    margin-top: 265px;
    border-bottom: 1px dashed #d2d1d1;
    border-left: 1px dashed #d2d1d1;

    position: relative;
  }
  .clock {
    position: absolute;
    top: 0px;
    left: -46px;
  }
  .postScript {
    margin: 0 auto;
    margin-top: 28px;
    width: 625px;
    height: 90px;
    color: #8d92a7;
  }
  button {
    width: 210px;
    height: 60px;
    font-family: "Lato", sans-serif;
    font-weight: 600;

    margin-bottom: 65px;
  }
  .checklist {
    position: absolute;
    bottom: -40px;
    right: -20px;
  }
  .brandlist {
    margin-top: 115px;
  }
`;
const OrderComplete = () => {
  const token = useSelector(selectUserToken);

  const navigate = useNavigate();
  useEffect(() => {
    if (token === null) {
      navigate("/404");
    }
  }, []);
  return (
    <>
      <BreadCrumb title="Order Completed" />
      <CompleteWrapper>
        <div className="content">
          <div className="clock">
            <img src={clock} alt="" />
          </div>
          <div className="checkmark">
            <img src={checkMark} alt="" />
          </div>
          <h1>Your Order Is Completed! </h1>
          <div className="postScript">
            <span>
              Thank you for your order! Your order is being processed and will
              be completed within 3-6 hours. You will receive an email
              confirmation when your order is completed.
            </span>
          </div>
          <Button children="Continue Shopping" />
          <div className="checklist">
            <img src={checklist} alt="" />
          </div>
        </div>
        <div className="brandlist">
          <BrandList />
        </div>
      </CompleteWrapper>
    </>
  );
};

export default OrderComplete;
