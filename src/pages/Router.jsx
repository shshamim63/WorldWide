import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import CityList from "../components/CityList";
import CountryList from "../components/CountryList";
import City from "../components/City";
import CityForm from "../components/CityForm";
import ProtectedRoute from "./ProtectedRoute";
import FullPageSpinner from "../components/FullPageSpinner";

const HomePage = lazy(() => import("./HomePage"));
const Product = lazy(() => import("./Product"));
const Pricing = lazy(() => import("./Pricing"));
const Login = lazy(() => import("./Login"));
const AppLayout = lazy(() => import("./AppLayout"));
const NotFound = lazy(() => import("./NotFound"));

const Router = () => {
  return (
    <Suspense fallback={<FullPageSpinner />}>
      <Routes>
        <Route index element={<HomePage title="home" />} />
        <Route path="login" element={<Login title="login" />} />
        <Route path="product" element={<Product title="product" />} />
        <Route path="pricing" element={<Pricing title="pricing" />} />
        <Route
          path="app"
          element={
            <ProtectedRoute>
              <AppLayout title="app" />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="cities" />} />
          <Route path="countries" element={<CountryList />} />
          <Route path="cities" element={<CityList />} />
          <Route path="cities/:id" element={<City />} />
          <Route path="form" element={<CityForm />} />
        </Route>
        <Route path="*" element={<NotFound title="Page Not found" />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
