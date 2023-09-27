import { Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";
import Product from "./Product";
import Pricing from "./Pricing";
import NotFound from "./NotFound";
import AppLayout from "./AppLayout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="home" element={<HomePage />} />
      <Route path="product" element={<Product />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="app" element={<AppLayout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
