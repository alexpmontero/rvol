"use client";
import { useState } from "react";
import { LoginModal } from "@/components/loginModal/loginModal";
import { ShoppingCart } from "@/components/shoppingCart/shoppingCart";
import { BtnUser } from "./btnUser";
import { Button, Link } from "@nextui-org/react";
import { FaWhatsapp } from "react-icons/fa";
import { MenuMobile } from "@/components/header/menuMobile";

export const NavbarComponent = () => {
  const [logeoFake, setLogeoFake] = useState(true);

  return (
    <nav className="navbar ">
      <div className=" items-center gap-2 hidden sm:flex">
        <Button
          as={Link}
          href="https://redvoucher.com/COSTCO"
          variant="light"
          target="_blank"
          className="is_button is_light px-2"
        >
          Activar tarjeta Costco
        </Button>
        <Button
          as={Link}
          href="https://api.whatsapp.com/send/?phone=5581050730&text&type=phone_number&app_absent=0"
          variant="light"
          target="_blank"
          className="is_button is_light gap-1 px-2"
          startContent={<FaWhatsapp className="text-lg" />}
        >
          Ayuda
        </Button>
      </div>

      {logeoFake ? <BtnUser /> : <LoginModal />}
      <ShoppingCart />
      <MenuMobile logeoFake={logeoFake} />
    </nav>
  );
};
