"use client";
import { useState } from "react";
import { ItemProduct } from "@/components/itemProduct/itemProduct";
import { Button } from "@nextui-org/react";
import { BiSolidGridAlt } from "react-icons/bi";
import { FaList } from "react-icons/fa";
import { Select, SelectItem } from "@nextui-org/react";
import "./itemProduct.scss";

export const ContainItemProduct = () => {
  const [isList, setIsList] = useState(false);

  const handleIsList = (i) => {
    if (isList !== i) setIsList(i);
  };

  return (
    <div className="container mx-auto content_item_product">
      <div className="mb-8 sm:flex justify-between gap-10 items-center">
        <div className="w-full">
          <h2 className="fnt_bold text-2xl leading-6 mb-2">
            <span className="highlighted">Promociones</span> los especiales
          </h2>
          <p>Disfruta de promociones y descuentos especiales para ti</p>
        </div>
        <div className="flex items-end sm:justify-end gap-3 w-full">
          <Select
            size="sm"
            labelPlacement="outside"
            label="Ordena por precio"
            radius="full"
            className="max-w-40"
            variant="bordered"
          >
            <SelectItem key="1">Menor a mayor</SelectItem>
            <SelectItem key="2">Mayor a menor</SelectItem>
          </Select>
          <div className="hidden md:flex gap-3 box_order items-center justify-between">
            <Button
              variant="light"
              className="rounded-none min-w-6 w-6 h-6 p-0 text-md"
              onClick={() => handleIsList(false)}
            >
              <BiSolidGridAlt />
            </Button>
            <Button
              variant="light"
              className="rounded-none min-w-6 w-6 h-6 p-0 text-md"
              onClick={() => handleIsList(true)}
            >
              <FaList />
            </Button>
          </div>
        </div>
      </div>
      <div className={`content_bussiness_page ${isList ? "is_list" : ""}`}>
        <ItemProduct isList={isList} />
        <ItemProduct isList={isList} />
        <ItemProduct isList={isList} />
        <ItemProduct isList={isList} />
        <ItemProduct isList={isList} />
        <ItemProduct isList={isList} />
        <ItemProduct isList={isList} />
      </div>
    </div>
  );
};
