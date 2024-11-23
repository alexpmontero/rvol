import Image from "next/image";
import logoRVOL from "@/public/imgs/rvol.png";
import Link from "next/link";
import { NavbarComponent } from "@/components/header/navbarComponent";
import { LoginModal } from "@/components/loginModal/loginModal";

import "./header.scss";

export const Header = () => {
  return (
    <header className="wrapper_header">
      {/* <div className="container mx-auto header_contain"> */}
      <div className="container mx-auto ">
        <div className="header_contain ">
          <Link href="/" className="link_brand ">
            <Image
              src={logoRVOL.src}
              alt="Red Voucher Online Logo"
              width={180}
              height={38}
              priority
            />
          </Link>
          {/* <div className="search">
            <code>Buscador</code>
          </div> */}

          <NavbarComponent />
        </div>
      </div>
    </header>
  );
};
