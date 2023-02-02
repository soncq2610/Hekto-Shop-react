import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  emailSchema,
  firstNameSchema,
  lastNameSchema,
  addressSchema,
  apartmentSchema,
  citySchema,
  postalCodeSchema,
} from "../../validation";
import { BreadCrumb, Button, CartItem } from "../../components";
export interface PaymentProps {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment: string;
  city: string;
  postalCode: string;
}
import * as yup from "yup";
import { cartItemImg, greenCheck } from "../../images";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  CHECK_OUT_CART,
  selectAmount,
  selectAmountTax,
  selectListCart,
} from "../../redux/slice/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { selectUserToken } from "../../redux/slice/authSlice";

const PaymentWrapper = styled.div`
  width: 1170px;
  margin: 0 auto;
  padding-top: 150px;

  .payment-form {
    display: flex;
    border-radius: 3px;
  }
  .right-form {
    width: 770px;
    padding-left: 30px;
    padding-top: 45px;
    background: #f8f8fd;
    margin-right: 30px;
    .person-name {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .info-title {
      font-size: 1.8rem;
      font-weight: bold;
      color: #1d3178;
      margin-bottom: 15px;
    }
    .input-field {
      height: 85px;
      padding-bottom: 15px;
    }

    input {
      width: 698px;
      border: none;
      border-bottom: 2px solid #bfc6e0;
      padding: 14px 0px;
      margin-bottom: 10px;
      background-color: transparent;
      &::placeholder {
        font-family: "Lato";
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 17px;
        letter-spacing: 0.02em;
        color: #c1c8e1;
      }
    }
    .person-info {
      width: 698px;
      display: flex;
      justify-content: space-between;
    }
    .first-name {
      width: 336px;
    }
    .last-name {
      width: 336px;
    }
    .error {
      font-size: 1.2rem;
      color: red;
    }
  }

  .left-form {
  }

  .total-payment {
    text-align: center;

    width: 371px;
    background-color: #f4f4fc;
    margin: 0 auto;
    margin-top: 40px;
  }
  .money-payment {
    width: 312px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #e8e6f1;
    align-items: center;
    padding: 11px;
    padding-top: 25px;
    margin-left: 30px;
  }
  .totals-title {
    font-size: 1.8rem;
    font-weight: 600;
  }
  .checkout-btn {
    width: 312px;
    height: 40px;
    background-color: #19d16f;
    margin-top: 35px;
    margin-bottom: 32px;
  }
  .shiping-note {
    margin-left: 30px;

    width: 312px;
    font-family: "Lato";
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 14px;
    margin-top: 27px;
    color: #8a91ab;
    text-align: left;
    img {
      margin-right: 7px;
    }
  }
`;
const schema = yup.object().shape({
  ...emailSchema,
  ...firstNameSchema,
  ...lastNameSchema,
  ...addressSchema,
  ...apartmentSchema,
  ...citySchema,
  ...postalCodeSchema,
});
export default function Payment(props: PaymentProps) {
  const cart = useSelector((state: any) => state.cart);
  const listCart = useSelector(selectListCart);
  const totalAmount = useSelector(selectAmount);
  const totalAmountTax = useSelector(selectAmountTax);
  const dispatch = useDispatch();
  const checkOutHandle = () => {
    dispatch(CHECK_OUT_CART(cart));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentProps>({
    // resolver dùng để validate với yup
    resolver: yupResolver(schema),
  });
  const token = useSelector(selectUserToken);

  const navigate = useNavigate();
  React.useEffect(() => {
    // if (listCart.length <= 0 && token !== null) {
    //   navigate("/cart");
    //   toast.error("Please add product to cart before checkout!");
    // } else {
    //   navigate("/404");
    // }
  }, []);
  const submitForm = () => {
    navigate("/order-complete");
    dispatch(CHECK_OUT_CART(cart));
  };
  return (
    <>
      <BreadCrumb title="Payment" />
      <PaymentWrapper>
        <form className="payment-form" onSubmit={handleSubmit(submitForm)}>
          <div className="right-form">
            <div className="contact-info">
              <div className="info-title">Contact Information</div>
              <div className="input-field">
                <input
                  {...register("email")}
                  type="text"
                  name="email"
                  placeholder="Email or mobile phone number"
                />
                {errors.email && (
                  <p className="error">{errors.email.message}</p>
                )}
              </div>
            </div>
            <div className="ship-address">
              <div className="info-title">Shipping address</div>
              <div className="input-field person-info">
                <div className="person-name">
                  <input
                    className="first-name"
                    {...register("firstName")}
                    type="text"
                    name="firstName"
                    placeholder="First name"
                  />
                  {errors.firstName && (
                    <p className="error">{errors.firstName.message}</p>
                  )}
                </div>
                <div className="person-name">
                  <input
                    className="last-name"
                    {...register("lastName")}
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                  />
                  {errors.lastName && (
                    <p className="error">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
              <div className="input-field">
                <input
                  {...register("address")}
                  type="text"
                  name="address"
                  placeholder="Address"
                />
                {errors.address && (
                  <p className="error">{errors.address.message}</p>
                )}
              </div>
              <div className="input-field">
                <input
                  {...register("apartment")}
                  type="text"
                  name="apartment"
                  placeholder="Apartment, suit, e.t.c (optinal)"
                />
                {errors.apartment && (
                  <p className="error">{errors.apartment.message}</p>
                )}
              </div>
              <div className="input-field">
                <input
                  {...register("city")}
                  type="text"
                  name="city"
                  placeholder="City"
                />
                {errors.city && <p className="error">{errors.city.message}</p>}
              </div>
              <div className="input-field">
                <input
                  {...register("postalCode")}
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                />
                {errors.postalCode && (
                  <p className="error">{errors.postalCode.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="left-form">
            <div className="list-items">
              {listCart.map((cart: any, index: any) => {
                return (
                  <div key={index}>
                    <CartItem data={cart} />
                  </div>
                );
              })}
            </div>
            <div className="total-payment">
              <div className="money-payment">
                <span className="totals-title">Subtotals:</span>
                <span>£{totalAmount}</span>
              </div>
              <div className="money-payment">
                <span className="totals-title">Totals:</span>
                <span>£{totalAmountTax}</span>
              </div>
              <div className="shiping-note">
                <img src={greenCheck} alt="" />
                <span>Shipping & taxes calculated at checkout</span>
              </div>
              <Button children="Proceed To Checkout" className="checkout-btn" />
            </div>
          </div>
        </form>
      </PaymentWrapper>
    </>
  );
}
