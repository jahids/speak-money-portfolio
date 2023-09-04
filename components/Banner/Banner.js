import Image from "next/image";
import React from "react";
import light1 from "../../public/assets/images/banner/home1/bg.png";
import png2 from "../../public/assets/images/banner/home1/4.png";

const Banner = () => {
  return (
    <div className="">
      <div className="banner__bg">
        <div className="banner__bg-element">
          <Image
            src={light1}
            alt="section-bg-element"
            className="dark hidden lg:block "
          />
          <span className="bg-color lg:hidden"></span>
        </div>
      </div>

      <div className="banner__shape">
        <span className="banner__shape-item banner__shape-item--1">
          <Image src={png2} alt="shape icon" />
        </span>
      </div>
    </div>
  );
};

export default Banner;
