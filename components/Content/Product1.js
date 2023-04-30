import React from "react";
import smalllogo from "../../public/images/small-logo.png";
import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";
import ProductsImages from "./ProductsImages";

const SmallCard = ({ title, desc }) => {
  return (
    <div className="smallCard">
      <h4>{title}</h4>
      <h4>{desc}</h4>
    </div>
  );
};

const Product1 = () => {
  return (
    <div className="product">
      <div className="product__left">
        <div className="product__left__top">
          <Image src={smalllogo} alt="IDcode-logo" />
          <h3>
            IDCode <span>website</span>
          </h3>
        </div>
        <div className="product__left__middle">
          <h1>Create a powerful website in an easy way</h1>
          <h4>Choose the platform that suits your needs and skill level</h4>
        </div>
        <div className="product__left__bottom">
          <SmallCard
            title="Landing Page"
            desc="We easily handle the Landing Page. many designs you could start in a low price."
          />
          <SmallCard
            title="WordPress Platform"
            desc="We easily handle the Landing Page. many designs you could start in a low price."
          />
          <SmallCard
            title="Custom websites"
            desc="We easily handle the Landing Page. many designs you could start in a low price."
          />
        </div>
        <div className="product__left__btns flex">
          <button className="main-btn flex-center ">
            Get Start
            <span className="flex-center">
              <BsArrowRightShort />
            </span>
          </button>
          <p>You're in the right way</p>
        </div>
      </div>

      <div className="product__right">
        <ProductsImages/>
      </div>
    </div>
  );
};

export default Product1;
