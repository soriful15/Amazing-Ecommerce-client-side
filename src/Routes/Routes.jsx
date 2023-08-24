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

    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path:'customersList',
        element:<CustomersList></CustomersList>

      }
    ]
  },
]);
export default router;