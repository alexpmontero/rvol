"use client";
import Slider from "react-slick";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import "@/theme/react-slick.scss";
import "./coupons.scss";
import Link from "next/link";

const urlCompanies = [
  {
    id: 1,
    url: "https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/Coupons/Cover/7CA86AC7-E36E-4F63-9E11-6C59BEF69ABE.jpg",
  },
  {
    id: 2,
    url: "https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/Coupons/Cover/F332E236-36CE-4BE9-B497-896BCDDBFBC7.jpg",
  },
  {
    id: 3,
    url: "https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/Coupons/Cover/08D5D898-0D3F-465A-B879-CF9B5C389B2A.jpg",
  },
  {
    id: 4,
    url: "https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/Coupons/Cover/E1D3E98E-7C32-49B4-9851-9022C212CA1E.jpg",
  },
  {
    id: 5,
    url: "https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/Coupons/Cover/28919F8A-923C-4307-948A-8F0C6A5B682B.jpg",
  },
  {
    id: 6,
    url: "https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/Coupons/Cover/4D976350-5597-47CB-9411-0D2D3F1AF021.jpg",
  },
  {
    id: 7,
    url: "https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/Coupons/Cover/1AFAE6B5-5638-44F6-B3B5-6D30633E2119.jpg",
  },
  {
    id: 8,
    url: "https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/Coupons/Cover/3FBC5C4F-6A05-4662-BBFF-CB81F27F3C5F.jpg",
  },
  {
    id: 9,
    url: "https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/Coupons/Cover/C7E9FD15-9999-49EF-81B0-B6A6303CF3E0.jpg",
  },
];

export const Coupons = () => {
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
    // infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3500,
    nextArrow: <BtnNextArrow />,
    prevArrow: <BtnPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          className: "center",
          centerMode: true,
          centerPadding: "60px",
        },
      },
    ],
  };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="wrapper_coupons">
        <div className="container mx-auto contain_coupons">
          <div className="mb-5">
            <h2 className="fnt_bold text-xl">Cupones de descuentos</h2>
            <p>Disfruta de promociones y descuentos especiales para ti</p>
          </div>
          <Slider {...settings}>
            {urlCompanies.map((company) => (
              <Button
                key={company.id}
                className="item_content_coupon h-auto bg-transparent"
                onPress={onOpen}
              >
                <Image
                  src={company.url}
                  alt="Cupon de descuento en Red Voucher Online"
                  width={640}
                  height={436}
                  priority
                />
              </Button>
            ))}
          </Slider>
        </div>
      </div>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior={"inside"}
        className="isModal"
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900/75 to-zinc-900/10 backdrop-opacity-10",
        }}
      >
        <ModalContent className="modal_coupon">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Título del Cupón
              </ModalHeader>
              <ModalBody>
                <Image
                  src="https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/Coupons/Cover/7CA86AC7-E36E-4F63-9E11-6C59BEF69ABE.jpg"
                  alt="Cupon de descuento en Red Voucher Online"
                  width={640}
                  height={436}
                  priority
                  className="float-start img_in_coupon_modal "
                />
                <p className="text-sm">
                  Descripción del cupon. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nullam pulvinar risus non risus hendrerit
                  venenatis. Pellentesque sit amet hendrerit risus, sed
                  porttitor quam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="is_button is_primary"
                  onPress={onClose}
                  as={Link}
                  href="https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/Coupons/Templates/F11E8E3A-7D11-4060-958B-A0DE05B5596D.pdf"
                  target="_blank"
                >
                  Descargar cupón <FiDownload />
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
//
