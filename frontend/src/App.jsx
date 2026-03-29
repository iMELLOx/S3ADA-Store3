import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import CheckoutPage from "./pages/CheckoutPage";
import UserDashboardPage from "./pages/UserDashboardPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductListingPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/dashboard" element={<UserDashboardPage />} />
    </Routes>
  );
}