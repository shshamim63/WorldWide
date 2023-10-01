import { Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";
import Product from "./Product";
import Pricing from "./Pricing";
import NotFound from "./NotFound";
import AppLayout from "./AppLayout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage title="home" />} />
      <Route path="home" element={<HomePage title="home" />} />
      <Route path="product" element={<Product title="product" />} />
      <Route path="pricing" element={<Pricing title="pricing" />} />
      <Route path="app" element={<AppLayout title="app" />} />
      <Route path="*" element={<NotFound title="invalid" />} />
    </Routes>
  );
};

export default Router;
