"use client";
import { NavCategories } from "./navCategories";
import { Image, Link, Button } from "@nextui-org/react";
import "./mosaic.scss";

const itemsProvaider = [
  {
    id: 1,
    imgUrl:
      "https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/Providers/RVO/2/LogoHub.jpeg",
  },
  {
    id: 2,
    imgUrl:
      "https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/Providers/RVO/84/LogoHub.jpeg",
  },
  {
    id: 3,
    imgUrl:
      "https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/Providers/RVO/115/LogoHub.jpeg",
  },
  {
    id: 4,
    imgUrl:
      "https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/Providers/RVO/13/LogoHub.jpeg",
  },
  {
    id: 5,
    imgUrl:
      "https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/Providers/RVO/108/LogoHub.jpeg",
  },
  {
    id: 6,
    imgUrl:
      "https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/Providers/RVO/17/LogoHub.jpeg",
  },
  {
    id: 7,
    imgUrl:
      "https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/Providers/RVO/116/LogoHub.jpeg",
  },
  {
    id: 8,
    imgUrl:
      "https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/Providers/RVO/22/LogoHub.jpeg",
  },
  {
    id: 9,
    imgUrl:
      "https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/Providers/RVO/23/LogoHub.jpeg",
  },
  {
    id: 10,
    imgUrl:
      "https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/Providers/RVO/24/LogoHub.jpeg",
  },
];

export const Mosaic = () => {
  return (
    <div className="wrapper_mosaic">
      <div className="container mx-auto">
        <div className="contain_mosaic">
          <h2 className="text-5xl  max-sm:text-4xl max-sm:leading-9 fnt_bold mb-3 text-center max-w-screen-sm mx-auto">
            Encuentra <span className="highlighted">tus marcas</span> favoritas
            y sorpréndete
          </h2>
          <NavCategories />
          <div className="drawer_mosaic">
            {itemsProvaider.map((i) => (
              <Button
                as={Link}
                key={i.id}
                href="/companies"
                className="link_company h-auto bg-transparent p-0"
              >
                <Image
                  src={i.imgUrl}
                  alt="Top de empresas en Red Voucher Online "
                  width={200}
                  height={200}
                />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
