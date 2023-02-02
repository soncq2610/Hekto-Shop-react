import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import * as React from "react";
import debounce from "lodash.debounce";
import * as Icon from "../../../../assets/icons";
import { SearchIcon } from "../../../../assets/icons";
import { Propper } from "../../../../components";
import { chair1 } from "../../../../images";
import SearchItem from "../../../../components/SearchItem";
import { IProduct } from "../../../../pages/Home";
import { useSelector } from "react-redux";
import {
  getListProduct,
  selectListProduct,
} from "../../../../redux/slice/productSlice";

const Nav = styled.div`
  height: 81px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
  .items-container {
    width: 100%;
    background-color: #ffffff;
    box-shadow: rgb(0 0 0 / 12%) 0px 2px 12px;
    border-radius: 5px;
    max-height: min((100vh - 96px) - 60px, 734px);
  }
  .search-result {
    width: 31.7rem;
  }
`;

const NavLeft = styled.div`
  display: flex;
  justify-content: center;
`;

const NavContainer = styled.div`
  width: 1177px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    font-size: 3.4rem;
    font-weight: bold;
    margin-right: 9rem;
    color: #0d0e43;
  }
  a:active {
    color: #fb2e86;
  }
  .active {
    color: #fb2e86;
  }
`;

const NavBarLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lato", sans-serif;
`;

const NavBarLink = styled(NavLink)`
  margin-right: 3.5rem;
  text-decoration: none;
`;

const NavSearch = styled.div`
  display: flex;
  width: 31.7rem;
  height: 4rem;

  border: 2px solid #e7e6ef;

  input {
    width: 100%;
    border: none;
    margin-left: 15px;
  }

  button {
    height: 100%;
    width: 5rem;
    border: none;
    background-color: #fb2e86;
  }
`;

export interface NavBarProps {}
export default function NavBar(props: NavBarProps) {
  const [searchValue, setSearchValue] = React.useState("");
  const [searchResult, setSearchResult] = React.useState<any>([]);
  const [showResult, setShowResult] = React.useState<boolean>(false);
  const [onFocusIput, setOnFocusInput] = React.useState(true);
  const onShow = onFocusIput && searchResult.length > 0;
  const inputRef = React.useRef();

  const listProduct = useSelector(selectListProduct);

  React.useEffect(() => {
    if (!searchValue.trim()) {
      setSearchResult([]);
      return;
    }

    const search = listProduct.filter((item: IProduct) =>
      item.name.includes(searchValue)
    );
    setSearchResult(search.slice(0, 4));
    console.log("serchvalue");
    console.log(search);
    console.log("---------------");
  }, [searchValue]);

  React.useEffect(() => {
    setShowResult(onShow);
  }, [onShow]);

  const handleHideResult = () => {
    setOnFocusInput(false);
  };

  console.log("re-render");
  console.log(showResult);

  return (
    <Nav>
      <NavContainer>
        <NavLeft>
          <Link to="/">
            <div className="logo">Hekto</div>
          </Link>
          <NavBarLinkContainer>
            <NavBarLink to="/">Home</NavBarLink>
            <NavBarLink to="/*">Pages</NavBarLink>
            <NavBarLink to="/products">Products</NavBarLink>
            <NavBarLink to="/blog">Blog</NavBarLink>
            <NavBarLink to="/about-us">Contact</NavBarLink>
          </NavBarLinkContainer>
        </NavLeft>

        <Tippy
          interactive
          visible={onShow}
          placement={"bottom"}
          render={(attrs) => (
            <div className="search-result" tabIndex={-1} {...attrs}>
              {showResult && (
                <div className="items-container">
                  {searchResult.map((item: IProduct) => {
                    return (
                      <NavLink to={`/product-detail/${item.id}`}>
                        <SearchItem data={item} key={item.id} />
                      </NavLink>
                    );
                  })}
                </div>
              )}
            </div>
          )}
          onClickOutside={handleHideResult}
        >
          <NavSearch>
            <input
              id="searchText"
              value={searchValue}
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => {
                setOnFocusInput(true);
              }}
            />
            <NavLink to={`/search-result/${searchValue}`}>
              <button id="searchBtn">
                <SearchIcon />
              </button>
            </NavLink>
          </NavSearch>
        </Tippy>
      </NavContainer>
    </Nav>
  );
}
