import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../LayOut/Main";
import ErrorPage from '../LayOut/ErrorPage';
import Home from "../Page/Home/Home/Home";
import Register from "../Page/Register/Register";
import Login from "../Page/Login/Login";
import Dashboard from "../Page/Dashboard/Dashboard";
import CustomersList from "../Page/Dashboard/CustomersList/CustomersList";
import AddProduct from "../Page/Dashboard/AddProduct/AddProduct";
import ProductList from "../Page/Dashboard/ProductList/ProductList";
import AllProductListView from "../Page/AllProductListView/AllProductListView";
import ProductDetailsView from "../Page/AllProductListView/ProductDetailsView";
import CartView from "../Page/CartView/CartView";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [

      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/productListView',
        element: <AllProductListView></AllProductListView>
      },
      {
        path: '/cartView',
        element: <CartView></CartView>
      },
      {
        path: '/productDetailsView/:id',
        element: <ProductDetailsView></ProductDetailsView>,
        loader: ({params})=> fetch(`https://amazing-ecommerce-server-side.vercel.app/allProduct/${params.id}`)
      },

    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path:'customersList',
        element:<CustomersList></CustomersList>

      },
      {
        path:'addProduct',
        element:<AddProduct></AddProduct>
      },
      {
        path:'productList',
        element:<ProductList></ProductList>
      },
    ]
  },
]);
export default router;