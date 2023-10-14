import ProductCard from "@/components/ProductCard";
import { products } from "@/constants";
import React from "react";

const PopularProducts = () => {
  return (
    <section id="products">
      <div className="flex flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">popular</span> products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} rating={4.5} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;