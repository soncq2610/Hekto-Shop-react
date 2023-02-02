import * as React from "react";
import styled from "styled-components";
import {
  facebookPNG,
  heartSearchIcon,
  instagramPNG,
  productBig,
  productSmall1,
  productSmall2,
  productSmall3,
  starfiled,
  twitterPNG,
  arrow,
} from "../../images";
import { BrandList, BreadCrumb, RelatedProduct } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { selectListProduct } from "../../redux/slice/productSlice";

const ProdudctDetailWrapper = styled.div`
  .product-details {
    margin: 0 auto;
    display: flex;
    align-items: center;
    width: 1170px;
    height: 509px;
    background: #ffffff;
    box-shadow: 0px 0px 25px 10px #f6f4fd;
    border-radius: 2px;
    margin-top: 120px;
    margin-bottom: 130px;
  }
  .product-img-small {
    display: flex;
    flex-direction: column;
    height: 487px;
    justify-content: space-between;
    margin-right: 20px;
    margin-left: 13px;
    img {
      width: 151px;
      height: 155px;
    }
    img:hover {
      cursor: pointer;
      /* transform: scale(1.1);
      transition: 1s; */
    }
  }
  .product-img-big {
    height: 487px;
    width: 375px;
    margin-right: 40px;
    img {
      height: 100%;
      width: 100%;
    }
  }

  .product-name {
    font-size: 36px;
    line-height: 42px;
    color: #0d134e;
    margin-bottom: 13px;
    font-weight: 600;
  }
  .product-rating {
    margin-bottom: 15px;
  }
  .product-price {
    margin-bottom: 12px;
    span {
      margin-right: 18px;
    }
    .default-price {
      text-decoration-line: line-through;
      text-transform: capitalize;

      color: #fb2e86;
    }
  }
  .product-color {
    margin-bottom: 12px;

    span {
      font-weight: 600;
      color: #0d134e;
    }
  }
  .product-sumary {
    color: #a9acc6;
    font-weight: 600;
    margin-bottom: 34px;
  }
  .add-to-cart {
    display: flex;
    align-items: center;
    margin-left: 115px;
    color: #151875;
    text-transform: capitalize;
    margin-bottom: 17px;
    img {
      margin-left: 27px;
    }
    span:hover {
      cursor: pointer;
      color: #fb2e86;
    }
  }
  .index {
    font-weight: 600;
    color: #0d134e;
    margin-bottom: 10px;
  }
  .product-share {
    display: flex;
    span {
      margin-right: 20px;
    }
  }
  .social-media-icon {
    display: flex;
    align-items: center;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 12px;
      height: 12px;
      background-color: #151875;
      border-radius: 50%;
      margin-right: 17px;
    }
    .icon:hover {
      background-color: #fb2e86;
      cursor: pointer;
    }
  }

  .more-details {
    background-color: #f9f8fe;

    .more-details-content {
      width: 1170px;
      margin: 0 auto;
      padding-top: 110px;
      padding-bottom: 120px;
    }
    .more-details-menu {
      display: flex;
      margin-bottom: 60px;
    }
    .menu-option {
      margin-right: 85px;
      font-size: 2.4rem;
      font-weight: 600;
      /* text-decoration-line: underline; */
      color: #151875;

      &:hover {
        text-decoration-line: underline;
      }
    }
  }
  .content-tab {
    display: none;
  }
  .active-tabs {
    text-decoration-line: underline;
  }
  .active-content {
    display: block;
  }
  .more-content-title {
    font-size: 2.2rem;
    font-weight: 600;

    /* Text */

    color: #151875;
    margin-bottom: 14px;
  }
  .varius-tempor {
    margin-bottom: 35px;
  }
  .varius-tempor-content {
    color: #a9acc6;
  }
  .list-item {
    display: flex;
    align-items: center;
    color: #a9acc6;
    margin-bottom: 14px;
    img {
      margin-right: 12px;
    }
    span:hover {
      cursor: pointer;
      color: #fb2e86;
    }
  }
  .related-product-list {
    width: 1170px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
  }
  .brand {
    text-align: center;
  }
`;

export interface ProductDetailProps {}
import { IProduct } from "../../pages/Home";
import productApi from "../../api/products";
import { useNavigate, useParams } from "react-router-dom";
import { SET_PRODUCT } from "../../redux/slice/cartSlice";
import { selectUserToken } from "../../redux/slice/authSlice";
import DetailLoading from "../../components/DetailLoading";
export default function ProductDetail(props: ProductDetailProps) {
  const [listProduct, setListProduct] = React.useState([]);
  const { id } = useParams();
  const [product, setProduct] = React.useState<IProduct>();
  const [toggleState, setToggleState] = React.useState(1);
  const [selectedImg, setSelectedImg] = React.useState<any>();
  console.log(id);
  const [isLoading, setIsLoading] = React.useState(true);

  const loadListProduct = async () => {
    try {
      const res = await productApi.getListProduct();
      return setListProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProduct = async () => {
    try {
      const res = await productApi.getProductById(id);
      setIsLoading(false);
      return setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  // const listProduct = useSelector(selectListProduct);
  const token = useSelector(selectUserToken);

  React.useEffect(() => {
    console.log("load product");
    window.scrollTo({ top: 300, behavior: "smooth" });
    loadListProduct();
  }, []);

  React.useEffect(() => {
    console.log("chang id product");
    getProduct();
    setSelectedImg(undefined);
  }, [id]);

  //Tab menu handle
  const toggleTab = (index: any) => {
    setToggleState(index);
  };
  function addToCart(product: any) {
    if (token) {
      dispatch(SET_PRODUCT(product));
    } else {
      navigate("/login");
    }
  }
  return (
    <>
      <BreadCrumb title="Product Details" />

      <ProdudctDetailWrapper>
        {isLoading ? (
          <DetailLoading />
        ) : (
          <div className="product-details">
            <div className="product-img-small">
              {product?.smallImages?.map((imgUrl, index) => {
                return (
                  <img
                    key={index}
                    src={imgUrl}
                    alt=""
                    onMouseOver={() => setSelectedImg(imgUrl)}
                  />
                );
              })}
            </div>
            <div className="product-img-big">
              <img
                src={
                  selectedImg !== undefined ? selectedImg : product?.bigImage
                }
                alt=""
              />
            </div>
            <div className="product-info">
              <div className="product-name">{product?.name}</div>
              <div className="product-rating">
                <div className="rated-star">
                  <img src={starfiled} alt="" />
                  <img src={starfiled} alt="" />
                  <img src={starfiled} alt="" />
                  <img src={starfiled} alt="" />
                  <img src={starfiled} alt="" />
                </div>
                <span className="number-rating">{product?.numberRated}</span>
              </div>
              <div className="product-price">
                <span className="sale-price">${product?.salePrice}</span>
                <span className="default-price">${product?.price}</span>
              </div>

              <div className="product-color">
                <span>Color</span>
              </div>
              <div className="product-sumary">{product?.sumary}</div>
              <div className="add-to-cart">
                <span onClick={() => addToCart(product)}>Add To Cart</span>
                <img src={heartSearchIcon} alt="" />
              </div>
              <div className="product-category index">Categories:</div>
              <div className="product-tags index">Tags:</div>
              <div className="product-share index">
                <span>Share</span>
                <div className="social-media-icon">
                  <div className="icon">
                    <img src={facebookPNG} alt="" />
                  </div>
                  <div className="icon">
                    <img src={instagramPNG} alt="" />
                  </div>
                  <div className="icon">
                    <img src={twitterPNG} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="more-details">
          <div className="more-details-content">
            <div className="more-details-menu">
              <div
                className={
                  toggleState === 1 ? "menu-option active-tabs" : "menu-option"
                }
                onClick={() => toggleTab(1)}
              >
                Description
              </div>
              <div
                className={
                  toggleState === 2 ? "menu-option active-tabs" : "menu-option"
                }
                onClick={() => toggleTab(2)}
              >
                Additional Info
              </div>
              <div
                className={
                  toggleState === 3 ? "menu-option active-tabs" : "menu-option"
                }
                onClick={() => toggleTab(3)}
              >
                Reviews
              </div>
              <div
                className={
                  toggleState === 4 ? "menu-option active-tabs" : "menu-option"
                }
                onClick={() => toggleTab(4)}
              >
                Video
              </div>
            </div>
            <div className="more-content-tab">
              <div
                className={
                  toggleState === 1
                    ? "content-tab active-content"
                    : "content-tab"
                }
              >
                <div className="more-content-title">Varius tempor.</div>
                <span className="varius-tempor-content">
                  {product?.addInfor}
                </span>
              </div>
              <div
                className={
                  toggleState === 2
                    ? "content-tab active-content"
                    : "content-tab"
                }
              >
                <span className="varius-tempor-content">
                  {product?.addInfor}
                </span>
              </div>
              <div
                className={
                  toggleState === 3
                    ? "content-tab active-content"
                    : "content-tab"
                }
              >
                <span className="varius-tempor-content">{product?.review}</span>
              </div>
              <div
                className={
                  toggleState === 4
                    ? "content-tab active-content"
                    : "content-tab"
                }
              >
                <span className="varius-tempor-content">{product?.video}</span>
              </div>
            </div>
            <div className="more-details-list">
              <div className="more-content-title">More details</div>
              <div className="list-item">
                <img src={arrow} alt="" />
                <span>
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                  diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                  vulputate nunc nec. Dui, massa viverr .
                </span>
              </div>
              <div className="list-item">
                <img src={arrow} alt="" />
                <span>
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                  diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                  vulputate nunc nec. Dui, massa viverr .
                </span>
              </div>
              <div className="list-item">
                <img src={arrow} alt="" />
                <span>
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                  diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                  vulputate nunc nec. Dui, massa viverr .
                </span>
              </div>
              <div className="list-item">
                <span>
                  <img src={arrow} alt="" />
                </span>
                <span>
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                  diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                  vulputate nunc nec. Dui, massa viverr .
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="related-product-list">
          {listProduct.slice(0, 4).map((product: IProduct) => {
            return (
              <div key={product.id}>
                <RelatedProduct products={product} />
              </div>
            );
          })}
        </div>
        <div className="brand">
          <BrandList />
        </div>
      </ProdudctDetailWrapper>
    </>
  );
}
