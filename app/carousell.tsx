"use client";

import Image from "next/image";
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
    responsive: [
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-[400px] mt-4 overflow-hidden  lg:max-w-[1000px] ">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="px-4">
            <Image
              src={logo}
              alt={`partner ${index}`}
              width={500}
              height={500}
              className="h-8 w-auto object-contain text-foreground-secondary"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousell;
