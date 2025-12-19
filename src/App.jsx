import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'
import HomePage from "./pages/HomePage";
import Authentication from './layout/Authentication';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import Wishlist from './pages/WishList';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import MyAccount from './pages/MyAccount';
import ProductDetails from './pages/ProductDetails';
import Login from './components/common/Login';
import SignUp from './components/common/Signup';

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/about",
      element: <AboutPage />
    },
    {
      path: "/auth",
      element: <Authentication />,
      children: [
        { path: "login", element: <Login /> },
        { path: "signup", element: <SignUp /> }
      ]
    },
    {
      path: "wishlist",
      element: <Wishlist />
    },
    {
      path: "cart",
      element: <CartPage />
    },
    {
      path: "checkout",
      element: <CheckoutPage />
    },
    {
      path: "account",
      element: <MyAccount />
    },{
      path: "product/:id",
      element: <ProductDetails />
    }
]);

function App() {

  return (
    <>
    <RouterProvider router={router} />
      {/* <HomePage /> */}
      {/* <Authentication type="SignUp" /> */}
      {/* <AboutPage /> */}
      {/* <Contact /> */}
      {/* <Wishlist /> */}
      {/* <CartPage /> */}
      {/* <CheckoutPage /> */}
      {/* <MyAccount /> */}
      {/* <ProductDetails /> */}
    </>
  )
}

export default App
