"use client";
import React, { useState } from "react";
import {
  Button,
  useDisclosure,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Avatar,
  User,
  cn,
} from "@nextui-org/react";
import { RiProfileLine } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";

import { IoMenu } from "react-icons/io5";

export const BtnUser = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Button
          variant="ghost"
          radius="full"
          className="border-1 max-sm:hidden"
          onPress={onOpen}
        >
          <IoMenu className="text-lg " />
          <Avatar
            variant="light"
            className="w-6 h-6 bg_main"
            color="danger"
            name="Alejandro"
            size="sm"
          />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dropdown menu with description">
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
                name: "text-default-600 ",
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
      </DropdownMenu>
    </Dropdown>
  );
};
