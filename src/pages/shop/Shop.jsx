import React from "react";
import { PRODUCTS } from "../../products";
import ProductItem from "./ProductItem";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Inkar's Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => {
          return <ProductItem data={product} />;
        })}
      </div>
    </div>
  );
};
