"use client";
import { BsFillBasketFill } from "react-icons/bs";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Button,
  Tooltip,
  Image,
  ScrollShadow,
  Link,
  Badge,
} from "@nextui-org/react";
import { logoRedpay } from "@/public/imgs/RedPay.png";
import { ItemShopping } from "./itemShopping";
import { MdOutlineDelete } from "react-icons/md";

export const ShoppingCart = () => {
  return (
    <Dropdown className="wrapper_shopping_cart justify-start" backdrop="blur">
      <Badge content="1" color="danger" size="sm">
        <DropdownTrigger>
          <Button
            isIconOnly
            variant="faded"
            radius="full"
            aria-label="Tu canasta"
            className="border-1  max-sm:min-w-9 max-sm:w-9  max-sm:h-9 "
          >
            <BsFillBasketFill />
          </Button>
        </DropdownTrigger>
      </Badge>
      <DropdownMenu aria-label="shopping cart" className="drawer_shopping_cart">
        <DropdownSection>
          <DropdownItem key="1" isReadOnly textValue="Shopping car">
            <h3 className="text-md fnt_medium mb-2">Tu canasta</h3>

            <ScrollShadow className=" max-h-[45vh]">
              <div className="contain_items_shopping">
                <ItemShopping
                  urlImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaozlILAjkSKohQb8KB0eilqM4q3WLpC_Z7Q&s"
                  nameBussiness="Cinépolis"
                  num="1"
                  price="200.00"
                  priceTotal="400.00"
                  nameProduct="2 Boletos VIP mas 2 refrescos medianos y 1 palomitas grandes VIP"
                />
                <ItemShopping
                  urlImg="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW4ESm?ver=c63e"
                  nameBussiness="XBOX"
                  num="2"
                  price="600.00"
                  priceTotal="600.00"
                  nameProduct="Microsoft Xbox Live - Gift Card"
                />
              </div>
            </ScrollShadow>

            <div className="contain_action_cart">
              <Tooltip
                content="Vaciar todo el carrito"
                color="danger"
                placements="bottom-end"
                offset={-7}
              >
                <Button
                  variant="flat"
                  radius="full"
                  isIconOnly
                  size="sm"
                  className="p-0 text-lg h-10 w-10 min-w-10 "
                >
                  <MdOutlineDelete />
                </Button>
              </Tooltip>
              <Button
                as={Link}
                href="/checkout"
                className="w-full is_button is_primary flex justify-between"
                type="submit"
              >
                <span>Ir a pagar</span>
                <span className="fnt_medium">Total $2250.00</span>
              </Button>
            </div>
            <div className="flex justify-center items-center mt-2 gap-1">
              <span className="text-xs">Powered by</span>
              <Link href="https://redpay.mx/" target="_blank">
                <Image
                  src="https://redpay.mx/imgs/RedPay.png"
                  alt="Pasarela de pagos Red Pay"
                  width={60}
                  height={28}
                />
              </Link>
            </div>
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
