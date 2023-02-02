import productApi from "../../api/products";
import * as React from "react";
import styled from "styled-components";
import {
  blogImg,
  cardSearchIcon,
  heartSearchIcon,
  searchItemImg,
  SearchPlusIcon,
  stardark,
  starfiled,
} from "../../images";
import { IProduct } from "../Home";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectListProduct } from "../../redux/slice/productSlice";
import { selectListCart, SET_PRODUCT } from "../../redux/slice/cartSlice";
import { selectUserToken } from "../../redux/slice/authSlice";
import Pagination from "./pagination";
import { BreadCrumb } from "../../components";
const SearchResultWrapper = styled.div`
  margin-top: 125px;
`;
const SearchResultContent = styled.div`
  width: 1141px;
  height: 255px;
  margin: 0 auto;
  margin-bottom: 80px;
  .search-wrap-content {
    background: #ffffff;
    box-shadow: 0px 0px 25px 5px rgba(246, 246, 253, 1);
    display: flex;
    align-items: center;
    padding: 19px 0 19px 19px;
  }
  .wrap-left {
    margin-right: 30px;
    width: 314px;
    height: 218px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .item-result-name {
    font-size: 1.9rem;
    font-weight: bold;
    color: #111c85;
    margin-bottom: 15px;
    padding-right: 30px;
    max-width: 300px;

    .item-names {
      max-width: 300px;

      display: inline-block;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  .item-names {
  }
  .dot-color {
    display: inline-block;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    margin-right: 5px;
  }
  .dot-color.orange {
    margin-left: 20px;
    background-color: #de9034;
  }
  .dot-color.red {
    background-color: #ff2aaa;
  }

  .dot-color.violet {
    background-color: #5e37ff;
  }
  .item-result-price {
    font-size: 1.6rem;
    font-style: regular;
    color: #111c85;
    margin-bottom: 10px;
    span {
      margin-right: 10px;
    }

    .default-price {
      text-decoration-line: line-through;
      color: #ff2aaa;
    }
  }
  .item-result-sumary {
    width: 550px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 1.7rem;
    margin-bottom: 30px;
    color: #9295aa;
  }

  .item-icon-list {
    img {
      margin-right: 40px;
    }
  }
  .add-to-card:hover {
    cursor: pointer;
    border-radius: 50%;
    background-color: #ff2aaa;
  }
  .pagination {
    text-align: center;
    display: flex;
  }
`;
export interface ProductsProps {}

export default function Products(props: ProductsProps) {
  const [listProduct, setListProduct] = React.useState([]);
  const listSearch = useSelector(selectListProduct);
  const token = useSelector(selectUserToken);
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();

  //paging
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const postsPerPage: number = 5;

  // Get current posts
  const indexOfLastPost: number = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentList = listSearch.slice(indexOfFirstPost, indexOfLastPost);
  console.log(
    indexOfLastPost + " aaa " + indexOfFirstPost + "  " + indexOfFirstPost
  );
  console.log(currentList);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  React.useEffect(() => {
    setListProduct(listSearch);
  }, []);

  function addToCart(product: any) {
    if (token) {
      dispatch(SET_PRODUCT(product));
    } else {
      navigate("/login");
    }
  }
  return (
    <>
      <BreadCrumb title="Products" />
      <SearchResultWrapper>
        {currentList.map((product: IProduct) => {
          return (
            <SearchResultContent key={product.id}>
              <div className="search-wrap-content" id="wrap-content-top">
                <div className="wrap-left">
                  <NavLink to={`/product-detail/${product.id}`}>
                    <img src={product.bigImage} alt="" />
                  </NavLink>
                </div>
                <div className="wrap-right">
                  <div className="item-result-name">
                    <span className="item-names" title={product.name}>
                      {product.name}
                    </span>
                    <span className="dot-color orange"></span>
                    <span className="dot-color red"></span>
                    <span className="dot-color violet"></span>
                  </div>
                  <div className="item-result-price">
                    <span>${product.salePrice}</span>
                    <span className="default-price">${product.price}</span>
                    <span className="star-rate">
                      <img src={starfiled} alt="" />
                      <img src={starfiled} alt="" />
                      <img src={starfiled} alt="" />
                      <img src={starfiled} alt="" />
                      <img src={stardark} alt="" />
                    </span>
                  </div>
                  <div className="item-result-sumary">{product.sumary}</div>
                  <div className="item-icon-list">
                    <img
                      className="add-to-card"
                      src={cardSearchIcon}
                      alt=""
                      onClick={() => addToCart(product)}
                    />
                    <img src={heartSearchIcon} alt="" />
                    <img src={SearchPlusIcon} alt="" />
                  </div>
                </div>
              </div>
            </SearchResultContent>
          );
        })}
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={listProduct.length}
          paginate={paginate}
        />
      </SearchResultWrapper>
    </>
  );
}
