"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const logos = [
  "/log1.svg",
  "/log2.svg",
  "/log3.svg",
  "/log4.svg",
  "/log5.svg",
  "/log6.svg",
];

const Carousell = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
  };

  return (
    <div className="w-full  max-w-screen-xl mx-auto mt-4 overflow-hidden">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="px-4">
            <img
              src={logo}
              alt={`partner ${index}`}
              className="h-8 w-auto object-contain text-foreground-secondary"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousell;
