"use client";
import { Accordion, AccordionItem, Chip, Button } from "@nextui-org/react";
import Image from "next/image";
import { MdOutlineDelete } from "react-icons/md";
import { CounterControl } from "@/components/counterControl/counterControl";

export const SinglePurchase = (props) => {
  return (
    <div className="content_single_purchase border-t-1 border-gray-300 py-2">
      <div className="item_single_purchase">
        <Button
          variant="light"
          radius="full"
          isIconOnly
          size="sm"
          className="p-0 text-md btn_delete_ind  h-5 w-5 min-w-5"
        >
          <MdOutlineDelete />
        </Button>
        <div className="info_item_single_purchase w-full">
          <p className="fnt_regular mb-1 ">{props.nameProduct}</p>
          <p className="fnt_medium">${props.price}</p>
        </div>
        <CounterControl />
      </div>
    </div>
  );
};

export const ItemShopping = (props) => {
  return (
    <Accordion className="general_purchase">
      <AccordionItem
        as="div"
        key="1"
        aria-label="shopping 1"
        subtitle={
          <div className="head_general_purchase flex justify-between items-center gap-2">
            <div className="box_brand_shop">
              <Image
                src={props.urlImg}
                alt={props.nameBussiness}
                width={390}
                height={120}
              />
            </div>
            <div className="flex justify-between w-full items-center text-black">
              <h2 className="fnt_medium text-md">{props.nameBussiness}</h2>
              <div className="flex gap-2 items-center data_price_purchase">
                <Chip
                  size="sm"
                  className="bg-red-500 text-white min-w-4 min-h-4 h-4 text-xs"
                >
                  {props.num}
                </Chip>
                <span className="fnt_medium">${props.priceTotal}</span>
              </div>
            </div>
          </div>
        }
      >
        <SinglePurchase nameProduct={props.nameProduct} price={props.price} />
        <SinglePurchase nameProduct={props.nameProduct} price={props.price} />
      </AccordionItem>
    </Accordion>
  );
};
