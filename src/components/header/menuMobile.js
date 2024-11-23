import { FaRegUser } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";

import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  User,
  cn,
} from "@nextui-org/react";

export const MenuMobile = (props) => {
  const iconClasses =
    "text-lg text-default-500 pointer-events-none flex-shrink-0";

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        {props.logeoFake ? (
          <User
            className="sm:hidden"
            avatarProps={{
              color: "danger",
              className: "w-9 h-9",
              size: "sm",
              name: "Alex",
            }}
          />
        ) : (
          <Button
            variant="flat"
            radius="full"
            className="border-0 max-sm:h-9 max-sm:min-w-9 max-sm:p-2 sm:hidden "
          >
            <IoMenu className="text-lg " />
          </Button>
        )}
      </DropdownTrigger>
      <DropdownMenu className="">
        {props.logeoFake ? (
          <DropdownSection aria-label="Perfil" showDivider>
            <DropdownItem
              isReadOnly
              key="profile"
              className="h-12 gap-2 hover:bg-gray-200"
              href="/account"
            >
              <User
                name="Alejandro"
                description="Mi cuenta"
                classNames={{
                  name: "text-default-600",
                  description: "text-default-500",
                }}
                avatarProps={{
                className: "bg_main",
                  color: "danger",
                  size: "sm",
                  name: "Alejandro",
                }}
              />
            </DropdownItem>
          </DropdownSection>
        ) : (
          ""
        )}

        <DropdownSection
          aria-label="Opciones generales"
          className="mb-0 pb-0"
          showDivider={props.logeoFake ? true:false}
        >
          <DropdownItem
            key="1"
            className="text-black"
            target="_blank"
            href="https://redvoucher.com/COSTCO"
            startContent={<FaRegCreditCard className={iconClasses} />}
          >
            Activar tarjeta Costco
          </DropdownItem>
          <DropdownItem
            key="2"
            className="text-black mb-0"
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=5581050730&text&type=phone_number&app_absent=0"
            startContent={<FaWhatsapp className={iconClasses} />}
          >
            Ayuda
          </DropdownItem>
        </DropdownSection>

        {props.logeoFake ? (
          <DropdownSection aria-label="Cerrar sesión" className="mb-0">
            <DropdownItem
              key="4"
              className="text-danger mb-0"
              color="danger"
              description="Nos vemos pronto"
              startContent={
                <IoMdLogOut
                  className={cn(iconClasses, "text-danger, hover:text-white")}
                />
              }
            >
              Cerrar sesión
            </DropdownItem>
          </DropdownSection>
        ) : (
          ""
        )}
      </DropdownMenu>
    </Dropdown>
  );
};
