import { Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";
import Product from "./Product";
import Pricing from "./Pricing";
import NotFound from "./NotFound";
import AppLayout from "./AppLayout";
import CityList from "../components/CityList";
import CountryList from "../components/CountryList";
import City from "../components/City";
import CityForm from "../components/CityForm";

const Router = ({ cities, isLoading }) => {
  return (
    <Routes>
      <Route index element={<HomePage title="home" />} />
      <Route path="product" element={<Product title="product" />} />
      <Route path="pricing" element={<Pricing title="pricing" />} />
      <Route path="app" element={<AppLayout title="app" />}>
        <Route
          index
          element={<CityList cities={cities} isLoading={isLoading} />}
        />
        <Route
          path="countries"
          element={<CountryList cities={cities} isLoading={isLoading} />}
        />
        <Route
          path="cities"
          element={<CityList cities={cities} isLoading={isLoading} />}
        />
        <Route path="cities/:id" element={<City />} />
        <Route path="form" element={<CityForm />} />
      </Route>
      <Route path="*" element={<NotFound title="invalid" />} />
    </Routes>
  );
};

export default Router;
