"use client";
import Slider from "react-slick";
import "@/theme/react-slick.scss";
import "./titleHome.scss";

export const TitleHome = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: false,
  };
  return (
    <div className="wrapper_title_home">
      <div className="container mx-auto">
        <Slider {...settings}>
          <h1 className="title_home max-sm:text-5xl">
            Haz algo <span className="highlighted">divertido</span>
          </h1>
          <h1 className="title_home max-sm:text-5xl">
            ¿A <span className="highlighted">dónde</span> vamos?
          </h1>
          <h1 className="title_home max-sm:text-5xl">
            ¡<span className="highlighted">Sorprende</span> a alguien!
          </h1>
        </Slider>
      </div>
    </div>
  );
};
