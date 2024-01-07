import React from "react";
import { createRoot } from "react-dom";

import "./index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "home/Header";
import Footer from "home/Footer";
import PDPContent from "pdp/PDPContent";
import HomeContent from "home/HomeContent";
import CartContent from "cart/CartContent";

const root = createRoot(document.getElementById("app"));

const App = () => (
  <div className="text-2xl mx-auto max-w-6xl">
    <Header />

    <div className="my-10">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="products/:id" element={<PDPContent />} />
          <Route path="cart" element={<CartContent />} />
        </Routes>
      </BrowserRouter>
    </div>
    <Footer />
  </div>
);

root.render(<App />);
