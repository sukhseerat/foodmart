import React from "react";
import Header from './components/Header';
import Category from './components/Category';
import Newly from './components/Newly';
import TrendingProduct from "./components/TrendingProduct";
import PromoCard from "./components/PromoCard";
import BestSelling from "./components/BestSelling";
import DiscountForm from "../src/components/DiscountForm";
import ProductList from "../src/components/ProductList";
import JustArrived from "../src/components/JustArrived";
const App = () => {
  return (
    <div>
      <Header />
      <Category/>
      <Newly/>
      <TrendingProduct/>
      <PromoCard/>
      <BestSelling/>
      <DiscountForm/>
     <ProductList/>
      <JustArrived/>
     
     
    </div>
  );
};
 
export default App;
 