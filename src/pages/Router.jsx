import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Product from "./Product";
import Pricing from "./Pricing";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="pricing" element={<Pricing />} />
    </Routes>
  );
};

export default Router;
