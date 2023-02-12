import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { productData, productDataTwo } from "./components/Products/data";
import Products from "./components/Products/Index";
import { GlobalStyle } from "./globalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your Favorite!' data={productData} />
      <Feature />
      <Products heading='Sweet Treats for you!' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
