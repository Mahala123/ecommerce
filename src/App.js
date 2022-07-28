import React, { useState, useContext, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Product from "./components/products";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/CART";
import CartProvider from "./components/Store/CartProvider";
import AuthContext from "./components/Store/Auth-Context";
import LoadingSpinner from "./components/Spinner/Spinner";
import Footer from "./components/Pages/Footer";
const About = React.lazy(() => import("./components/Pages/About"));
const Movies = React.lazy(() => import("./components/Pages/Movies"));
const Contactus = React.lazy(() => import("./components/Pages/Contactus"));
const AuthPage = React.lazy(() => import("./components/Pages/Authpage"));
const UserProfile = React.lazy(() =>
  import("./components/Profile/UserProfile")
);
const ItemDetails = React.lazy(() => import("./components/Pages/ItemDetails"));
const Home = React.lazy(() => import("./components/Pages/Home"));
const App = () => {
  const authCtx = useContext(AuthContext);
  const [cartshown, cartisshown] = useState(false);

  const showcarthandler = () => {
    cartisshown(true);
  };
  const hidecarthandler = () => {
    cartisshown(false);
  };

  return (
    <React.Fragment>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <CartProvider>
          <Switch>
            <Route path="/auth">
              <AuthPage />
            </Route>
            <Route path="/store/:productId">
              <ItemDetails />
            </Route>
            <Route path="/store">
              {cartshown && <Cart onclick={hidecarthandler}></Cart>}
              <Header onclick={showcarthandler}></Header>

              {authCtx.isLoggedIn && (
                <Route path="/store" exact>
                  <ul>
                    <Product></Product>
                  </ul>
                </Route>
              )}
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contactus">
              <Contactus></Contactus>
            </Route>

            <Route path="/movies" exact>
              <Movies />
            </Route>
            <Route path="/" exact>
              <Home></Home>
            </Route>

            {authCtx.isLoggedIn && (
              <Route path="/profile">
                <UserProfile />
              </Route>
            )}
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </CartProvider>

        <Footer></Footer>
      </Suspense>
    </React.Fragment>
  );
};

export default App;
