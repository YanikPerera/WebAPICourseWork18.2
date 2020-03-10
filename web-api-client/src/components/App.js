import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Footer from "./views/Footer/Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import LandingPage from "./views/LandingPage/LandingPage";
import NavBar from "./views/NavBar/NavBar";
import Auth from "../hoc/auth";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import CartPage from './views/CartPage/CartPage';
import UploadProductPage from './views/UploadProductPage/UploadProductPage'
function App() {
    return (
      <Suspense fallback={(<div>Loading...</div>)}>
        <NavBar />
        <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
          <Switch>
            <Route exact path="/" component={Auth(LandingPage, null)} />
            <Route exact path="/login" component={Auth(LoginPage, true)} />
            <Route exact path="/register" component={Auth(RegisterPage, true)} />
            <Route exact path="/user/cart" component={Auth(CartPage, true)} />
            <Route exact path="/product/upload" component={Auth(UploadProductPage, true)} />
          </Switch>
        </div>
        <Footer />
      </Suspense>
    );
  }
  
  export default App;