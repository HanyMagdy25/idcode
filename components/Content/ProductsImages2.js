import React from "react";
import product1 from "../../public/images/product4.png";
import product2 from "../../public/images/product3.png";
import Image from "next/image";
const ProductsImages2 = () => {
  return (
    <div className="product__right__images">
      <Image
        src={product2}
        className="product__right__images-top"
        alt="product2"
      />
      {/* <div className="product__right__images-middle">
        <div className="product__right__images-middle-top" />
        <div className="product__right__images-middle-bottom" />
      </div> */}
      <Image
        src={product1}
        className="product__right__images-bottom"
        alt="product1"
      />
    </div>
  );
};

export default ProductsImages2;
