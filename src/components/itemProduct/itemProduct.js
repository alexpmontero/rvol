"use client";
import {
  Button,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { BiPlus } from "react-icons/bi";
import { FaExclamation } from "react-icons/fa";

export const ItemProduct = (props) => {

  return (
    <article className="wrapper_item_product ">
      <Image
        src="https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/Product/2%20BOLETOS%20VIP%20-%202%20REFRESCOS%20-%201%20PALOMITAS_5566.jpg"
        alt="Red Voucher Online Logo"
        width="auto"
        height="auto"
        className="img_product"
      />
      <div className="info_item_product w-full ">
        <h3 className="title_product pr-6">
          2 Boletos VIP mas 2 refrescos medianos y 1 palomitas grandes{" "}
        </h3>
        <div className="flex justify-between box_data_product">
          <span className="text-md fnt_medium w-full price_item_product">
            $450.00
          </span>
          {props.isList ? (
            <Button
              variant="flat"
              aria-label="Tu canasta"
              className="bg_main text-white text-md"
            >
              <BiPlus className="text-4xl" /> Agregar
            </Button>
          ) : (
            <Button
              isIconOnly
              variant="flat"
              radius="full"
              aria-label="Tu canasta"
              className="bg_main text-white min-w-7 w-7 h-7 text-lg"
            >
              <BiPlus />
            </Button>
          )}
        </div>
      </div>
      <Popover placement="bottom-end" backdrop="opaque" showArrow={true}>
        <PopoverTrigger>
          <Button
            variant="flat"
            radius="full"
            isIconOnly
            size="sm"
            className="bg-black text-white min-w-4 w-4 h-4 text-[10px] btn_more_info"
          >
            <FaExclamation />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="rounded-md">
          <p className="max-w-[200px] more__info__p fnt_regular">
            2 Boletos VIP y combo palomitas VIP : Folio válido únicamente para
            Cinépolis VIP en toda República Mexicana de Lunes a Domingo. No
            válido en Salas Tradicionales, PLUUS, Junior, IMAX, 4DX, 3D, Macro
            XE o Cinema Park.
          </p>
        </PopoverContent>
      </Popover>
    </article>
  );
};
