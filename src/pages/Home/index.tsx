import * as React from "react";
import styled from "styled-components";
import {
  Button,
  BannerSlider,
  FeatureProduct,
  LeatestProduct,
  Shopex,
  BannerFeature,
  TrendingProduct,
  BrandList,
  LeatestBlog,
  LoadingSkeleton,
} from "../../components";
import {
  bgImg,
  brandList,
  carDelevery,
  cashback,
  premiumQuality,
  support,
  blogImg,
} from "../../images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import productApi from "../../api/products";
import { getListProduct } from "../../redux/slice/productSlice";
import { useDispatch, useSelector } from "react-redux";

import { selectListCart, SET_PRODUCT } from "../../redux/slice/cartSlice";

import { selectUserToken } from "../../redux/slice/authSlice";
import { useNavigate } from "react-router-dom";

const HomeWrapper = styled.div`
  .home-content {
    width: 100%;
    background-color: #f2f0ff;
  }
  .home-banner {
    width: 1173px;
    margin: 0 auto;
    padding-bottom: 150px;
  }

  .slick-prev {
    display: none !important;
  }
  .slick-next {
    display: none !important;
  }

  .slick-dots {
    bottom: -110px;
    li {
      width: 10px;
      height: 10px;
      border: 1px solid #fb2e86;
      transform: rotate(-45deg);
      margin-left: 12px;
      button {
        width: 100%;
        height: 100%;
      }
      button::before {
        width: 100%;
        height: 100%;
        color: transparent;
      }
    }
    .slick-active {
      background-color: #fb2e86;
    }
  }

  .feature-product {
  }
  .content-title {
    font-size: 42px;
    line-height: 49px;
    font-weight: bold;
    color: #1a0b5b;
    margin-bottom: 50px;
    margin-top: 130px;
    text-align: center;
  }
  .items {
    max-width: 1173px;
    margin: 0 auto;
  }

  .items.feature-list {
    display: flex;
    justify-content: space-between;
  }
  .items.leatest-list {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 25px 10px;
  }
  .shopex {
    margin: 0 auto;
    margin-top: 67px;
    width: 1168px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .bottom-banner {
    background-color: #f1f0ff;
    margin-top: 135px;
  }
  .shop-now {
    text-align: center;
    margin-top: 88px;
    h2 {
      margin: 0 auto;
      width: 574px;
      font-size: 3.5rem;
      letter-spacing: 0.015em;
      color: #151875;
      margin-bottom: 22px;
    }
    button {
      width: 173px;
      height: 40px;
    }
  }
  .trending-product {
    margin-bottom: 70px;
  }
  .trending-list {
    display: flex;
    justify-content: space-between;
  }
  .home-bg-img {
    margin-bottom: 75px;
    width: 100%;

    img {
      width: 100%;
    }
  }
  .brand-list {
    text-align: center;
  }
  .leatest-list {
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
  }
`;
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SET_WISHLIST } from "../../redux/slice/wishListSlice";
export interface IProduct {
  id: number;
  name: string;
  price: number;
  salePrice: number;
  numberRated?: string;
  sumary: string;
  smallImages?: [];
  bigImage?: string;
  description?: string;
  addInfor?: string;
  review?: string;
  video?: string;
  code?: string;
}

export interface HomeProps {}

export default function Home(props: HomeProps) {
  const [listProduct, setListProduct] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const token = useSelector(selectUserToken);
  const navigate = useNavigate();

  const loadListProduct = async () => {
    console.log("hihi");
    try {
      const res = await productApi.getListProduct();
      setIsLoading(false);
      return setListProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const dispatch = useDispatch<any>();

  React.useEffect(() => {
    dispatch(getListProduct());
    loadListProduct();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  const listCart = useSelector(selectListCart);
  // console.log(listCart);

  function addToCart(product: any) {
    if (token) {
      dispatch(SET_PRODUCT(product));
    } else {
      navigate("/login");
    }
  }

  function addToWishList(product: any) {
    if (token) {
      dispatch(SET_WISHLIST(product));
    } else {
      navigate("/login");
    }
  }

  return (
    <HomeWrapper>
      <div className="card">
        <div className="card-img skeleton"></div>
        <div className="card-body">
          <h2 className="card-title skeleton"></h2>
          <p className="card-intro skeleton"></p>
        </div>
      </div>
      <div className="home-content">
        <div className="home-banner">
          <Slider {...settings}>
            <BannerSlider />
            <BannerSlider />
            <BannerSlider />
          </Slider>
        </div>
      </div>

      <div className="feature-product">
        <div className="content-title">Featured Products</div>
        <div className="items feature-list">
          {isLoading && <LoadingSkeleton />}
          {isLoading && <LoadingSkeleton />}
          {isLoading && <LoadingSkeleton />}
          {isLoading && <LoadingSkeleton />}

          {listProduct.slice(0, 4).map((product: IProduct) => {
            return (
              <div key={product.id}>
                <FeatureProduct
                  products={product}
                  handleClickProduct={() => addToCart(product)}
                  handleClickHeart={() => addToWishList(product)}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="leatest-product">
        <div className="content-title">Leatest Products </div>
        <div className="items leatest-list">
          {listProduct.slice(0, 6).map((product: IProduct) => {
            return (
              <div key={product.id}>
                <LeatestProduct
                  products={product}
                  handleClickProduct={() => addToCart(product)}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="shopex-content">
        <div className="content-title">What Shopex Offer!</div>
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
      </div>
      <div className="bottom-banner">
        <BannerFeature />
      </div>
      <div className="shop-now">
        <h2>Get Leatest Update By Subscribe 0ur Newslater</h2>
        <div>
          <Button children="Shop Now" />
        </div>
      </div>

      <div className="trending-product">
        <div className="content-title">Trending Products</div>
        <div className="items trending-list">
          {listProduct.slice(0, 4).map((product: IProduct) => {
            return (
              <div key={product.id}>
                <TrendingProduct products={product} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="home-bg-img">
        <img src={bgImg} alt="" />
      </div>
      <div className="brand-list">
        {" "}
        <BrandList />
      </div>

      <div className="leatest-blog">
        <div className="content-title">Leatest Blog</div>
        <div className="items leatest-list">
          <LeatestBlog />
          <LeatestBlog />
          <LeatestBlog />
        </div>
      </div>
    </HomeWrapper>
  );
}
