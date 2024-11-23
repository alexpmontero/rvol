"use client";
import { Tabs, Tab } from "@nextui-org/react";
import { TiThSmall } from "react-icons/ti";
import { FaTheaterMasks, FaGlasses, FaFutbol } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { RiGamepadLine } from "react-icons/ri";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { BiBusSchool } from "react-icons/bi";

const categories = [
  {
    id: 1,
    name: "Todas las categorías",
    ico: <TiThSmall />,
  },
  {
    id: 2,
    name: "Entretenimiento",
    ico: <FaTheaterMasks />,
  },
  {
    id: 3,
    name: "Compras y alimentos",
    ico: <FiShoppingBag />,
  },
  {
    id: 4,
    name: "Juegos",
    ico: <RiGamepadLine />,
  },
  {
    id: 5,
    name: "Peajes y transporte",
    ico: <BiBusSchool />,
  },
  {
    id: 6,
    name: "Recargas",
    ico: <MdOutlinePhoneIphone />,
  },
  {
    id: 7,
    name: "Belleza",
    ico: <FaGlasses />,
  },
  {
    id: 8,
    name: "Deporte",
    ico: <FaFutbol />,
  },
];

export const NavCategories = () => {
  return (
    <Tabs
      variant="underlined"
      aria-label="nav categories"
      className="nav_categories w-full"
    >
      {categories.map((cat) => (
        <Tab
          className="h-auto"
          key={cat.id}
          title={
            <div className="item_categories text-center ">
              <div className="ico">{cat.ico}</div>
              <div className="name fnt_medium"> {cat.name}</div>
            </div>
          }
        />
      ))}
    </Tabs>
  );
};
