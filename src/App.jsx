import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import HomePage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";

export default function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />

          <Route path="app" element={<AppLayout />}>
            {/* Parent Route and three child Route */}
            <Route index element={<Navigate replace to="cities" />} />
            {/* Defalut child route */}
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            {/* dynamic Route with URL parameters  */}
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}
