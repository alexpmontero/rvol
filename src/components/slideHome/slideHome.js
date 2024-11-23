"use client";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import "@/theme/react-slick.scss";
import "./slideHome.scss";

const urlCompanies = [
  {
    id: 1,
    url: "https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/CompanyCarrousel/120.jpeg",
    mobile: "https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/CompanyCarrousel/120R.jpeg"
  },
  {
    id: 2,
    url: "https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/CompanyCarrousel/115.jpeg",
    mobile: "https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/CompanyCarrousel/115R.jpeg",
  },
  {
    id: 3,
    url: "https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/CompanyCarrousel/113.jpeg",
    mobile: "https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/CompanyCarrousel/113R.jpeg",
  },
];

export const SlideHome = () => {
  function BtnNextArrow(props) {
    const { onClick } = props;
    return (
      <span className="btn__slide next" onClick={onClick}>
        <GoChevronRight />
      </span>
    );
  }

  function BtnPrevArrow(props) {
    const { onClick } = props;
    return (
      <span className="btn__slide prev" onClick={onClick}>
        <GoChevronLeft />
      </span>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    fade: true,
    nextArrow: <BtnNextArrow />,
    prevArrow: <BtnPrevArrow />,
  };
  return (
    <div className="wrapper_slide_home">
      <div className="container mx-auto contain_slide_home">
        <Slider {...settings}>
          {urlCompanies.map((company) => (
            <Link key={company.id} href="/companies" className="link_slide">
              <Image
                src={company.url}
                alt="Red Voucher Online"
                width={1900}
                height={550}
                className="hidden md:block"
                priority
              />
               <Image
                src={company.mobile}
                alt="Red Voucher Online"
                width={1200}
                height={600}
                className="block md:hidden"
                priority
              />
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};
