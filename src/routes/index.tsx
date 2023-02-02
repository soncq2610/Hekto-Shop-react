//import layout
import { HomeLayout } from "../components/Layout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetail from "../pages/ProductDetail";
import SearchResult from "../pages/SearchResult";
import Cart from "../pages/Cart";

import NotFound from "../pages/NotFound";
import OrderComplete from "../pages/OrderComplete";
import AboutUs from "../pages/AboutUs";
import Payment from "../pages/Payment";
import Products from "../pages/Products";
import Blog from "../pages/Blog";
import WhistList from "../pages/WhishList";

//public routes
const publicRoutes = [
  { path: "*", component: NotFound },
  { path: "/", component: Home, layout: HomeLayout },
  { path: "/login", component: Login },
  { path: "/product-detail/:id", component: ProductDetail },
  { path: "/search-result/:searchValue", component: SearchResult },
  { path: "/products", component: Products },
  { path: "/cart", component: Cart },
  { path: "/order-complete", component: OrderComplete },
  { path: "/about-us", component: AboutUs },
  { path: "/payment", component: Payment },
  { path: "/blog", component: Blog },
  { path: "/whish-list", component: WhistList },
];

//private routes
//const privateRoutes = [];

export { publicRoutes };
