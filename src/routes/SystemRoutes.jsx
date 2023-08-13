import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Authentication from "../pages/Authentication";
import { Accesories } from "../pages/Accesories";
import Catlog from "../pages/Catlog";
import Account from "../pages/Account";
import { Contact } from "../pages/Contact";
import BaseLayout from "../pages/BaseLayout";
import ProductDescription from "../pages/ProductDescription";

import Cart from "../pages/Cart";

import About from "../pages/About";
import { Checkout } from "../pages/Checkout";


const SystemRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Authentication />} />

        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/catlog" element={<Catlog />} />
          <Route path="/product-description/:productId" element={<ProductDescription />} />
          <Route path="/product-description" element={<ProductDescription />} />
          <Route path="/about" element={<About />} />
          <Route path="/my-account" element={<Account />} />
          <Route path="/accesories" element={<Accesories />} />

          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<h3>Page Not Found</h3>} />

          <Route path="/accesories/:page" element={<Accesories />} />
          <Route path="/catlog/:page" element={<Catlog />} />
          <Route path="/checkout" element={<Checkout />} />


          <Route path="*" element={<h3>Page Not Found</h3>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default SystemRoutes;
