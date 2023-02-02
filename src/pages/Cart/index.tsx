import { cartItemImg, deleteCartItem, greenCheck } from "../../images";
import * as React from "react";
import styled from "styled-components";
import { BreadCrumb, Button, CartItem, Quantity } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  DECREASE_ITEM,
  GET_TOTAL_AMOUNT,
  INCREASE_ITEM,
  REMOVE_PRODUCT,
  selectAmount,
  selectAmountTax,
  selectListCart,
  selectTax,
  SET_PRODUCT,
} from "../../redux/slice/cartSlice";
import { IProduct } from "../../pages/Home";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { selectUserToken } from "../../redux/slice/authSlice";
import { toast } from "react-toastify";

const CartWrapper = styled.div`
  width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  .empty-cart {
    position: relative;
    margin-top: 50px;
    text-align: center;
    width: 100%;

    img {
      margin-left: 40px;
    }
    button {
      margin-top: 20px;
      padding: 10px 15px;
    }
  }
  table {
    width: 718px;
    border-collapse: collapse;
    th {
      text-align: left;
      font-size: 2rem;
      color: #1d3178;
      font-weight: bold;
      padding-bottom: 50px;
    }
    td {
      height: 100px;
    }
    tr {
    }
  }
  .table-th {
  }
  .td-item-info {
  }
  .table-tr-item {
    width: 800px;
    border-bottom: 1px solid #e1e1e4;
  }
  .item-info {
    margin-right: 35px;
    display: flex;
    align-items: center;
    .item-img {
      width: 83px;
      height: 87px;
      position: relative;
      margin-right: 17px;
      .item-background {
        width: 100%;
        height: 100%;
      }
      .remove-item {
        position: absolute;
        top: -5px;
        right: 0;
      }
    }
    .item-name {
      font-size: 1.4rem;
      margin-bottom: 8px;
      width: 250px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .item-detail {
      font-size: 1.2rem;
      color: #a1a8c1;
      margin-bottom: 9px;
    }
  }

  .quantity {
    width: 130px;
  }
  .item-price {
    width: 130px;
  }

  .total-item {
    width: 125px;
  }
  .left-form {
    font-family: "Lato", sans-serif;
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

export interface CartProps extends IProduct {
  productQuantity: number;
  cartTotalAmount: number;
}

export default function Cart(props: CartProps) {
  const token = useSelector(selectUserToken);

  const cartState = useSelector((state: any) => state.cart);
  const listCart = useSelector(selectListCart);
  console.log("------");
  console.log(listCart);
  console.log("------");

  const totalAmount = useSelector(selectAmount);
  const Totaltax = useSelector(selectTax);
  const totalAmountTax = useSelector(selectAmountTax);

  const dispatch = useDispatch<any>();
  const [Amount, setAmount] = React.useState(0);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (token != null) {
      dispatch(GET_TOTAL_AMOUNT(cartState));
    } else {
      navigate("/login");
      toast.info("Login to see your cart!");
    }
    window.scrollTo({ top: 130, behavior: "smooth" });
  }, [listCart]);

  const increaseItemHandle = (cartItem: any) => {
    dispatch(INCREASE_ITEM(cartItem));
  };
  const decreaseItemHandle = (cartItem: any) => {
    dispatch(DECREASE_ITEM(cartItem));
  };
  const removeItemHandle = (product: any) => {
    dispatch(REMOVE_PRODUCT(product));
  };
  return (
    <>
      <BreadCrumb title="Shoping Cart" />
      <CartWrapper>
        {listCart.length === 0 ? (
          <div className="empty-cart">
            <h1>Cart is empty now! Let Shopping</h1>
            <div>
              <img
                src="https://i0.wp.com/www.huratips.com/wp-content/uploads/2019/04/empty-cart.png?fit=603%2C288&ssl=1"
                alt=""
              />
            </div>

            <div>
              <NavLink to="/">
                <Button children="Let Go Shopping" />
              </NavLink>
            </div>
          </div>
        ) : (
          <>
            <table>
              <tr>
                <th className="table-th">Product</th>
                <th className="table-th">Price</th>
                <th className="table-th">Quantity</th>
                <th className="table-th">Total</th>
              </tr>
              {listCart.map((cart: CartProps) => {
                return (
                  <tr className="table-tr-item" key={cart.id}>
                    <td className="td-item-info">
                      <div className="item-info">
                        <div className="item-img">
                          <img
                            className="item-background"
                            src={cart.bigImage}
                            alt=""
                          />
                          <img
                            className="remove-item"
                            src={deleteCartItem}
                            alt=""
                            onClick={() => removeItemHandle(cart)}
                          />
                        </div>
                        <div>
                          <div className="item-name">{cart.name}</div>
                          <div className="item-detail">Color: Brown</div>
                          <div className="item-detail">Size: XL</div>
                        </div>
                      </div>
                    </td>
                    <td className="item-price">£{cart.salePrice.toFixed(2)}</td>
                    <td className="quantity">
                      <Quantity
                        increaseHandle={() => increaseItemHandle(cart)}
                        decreaseHandle={() => decreaseItemHandle(cart)}
                        data={cart.productQuantity}
                      />
                    </td>
                    <td className="total-item">
                      £{(cart.productQuantity * cart.salePrice).toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </table>
            <div className="left-form">
              <div className="total-payment">
                <div className="money-payment">
                  <span className="totals-title">Subtotals:</span>
                  <span className="total-amount">£{totalAmount}</span>
                </div>
                <div className="money-payment">
                  <span className="totals-title">Tax (10%):</span>
                  <span className="total-amount">
                    £{parseFloat(Totaltax).toFixed(2)}
                  </span>
                </div>
                <div className="money-payment">
                  <span className="totals-title">Totals:</span>
                  <span className="total-amount">£{totalAmountTax}</span>
                </div>
                <div className="shiping-note">
                  <img src={greenCheck} alt="" />
                  <span>Shipping & taxes calculated at checkout</span>
                </div>
                <Link to="/payment">
                  <Button
                    children="Proceed To Checkout"
                    className="checkout-btn"
                  />
                </Link>
              </div>
            </div>
          </>
        )}
      </CartWrapper>
    </>
  );
}
