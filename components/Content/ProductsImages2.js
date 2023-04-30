import React from "react";
import product1 from "../../public/images/product4.png";
import product2 from "../../public/images/product3.png";
import Image from "next/image";
const ProductsImages2 = () => {
  return (
    <div className="product__right__images">
      <Image
        src={product1}
        className="product__right__images-top2"
        alt="product2"
      />
      <Image
        src={product2}
        className="product__right__images-bottom2"
        alt="product1"
      />
    </div>
  );
};

export default ProductsImages2;
