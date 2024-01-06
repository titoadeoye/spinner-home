import React from "react";
import { createRoot } from "react-dom";

import "./index.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "home/Header";
import Footer from "home/Footer";
// import PDPContent from "pdp/PDPContent";
import HomeContent from "home/HomeContent";
// import CartContent from "cart/CartContent";

const root = createRoot(document.getElementById("app"));

const App = () => (
  <Router>
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        <Routes>
          <Route exact path="/" component={HomeContent} />
          {/* <Route path="/product/:id" component={PDPContent} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

root.render(<App />);
