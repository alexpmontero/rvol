"use client";
import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { IoEye, IoEyeOff } from "react-icons/io5";

export const FormPersonalInfo = () => {
  const [editInput, setEditInput] = useState(true);

  const handleEditInput = () => {
    setEditInput(!editInput);
  };

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="cards">
      <div className="border-b-1 pb-3 border-gray-300">
        <h3 className="fnt_bold text-lg">Información personal</h3>
        <p className="text-gray-500 text-sm">
          Datos de acceso a Red Voucher Online
        </p>
      </div>
      <form action="">
        <div className="grid sm:grid-cols-2 gap-5 mt-5">
          <Input
            size="md"
            variant="underlined"
            type="text"
            label="Trabasj en"
            defaultValue="Red Companies"
            isDisabled
          />
          <Input
            size="md"
            variant="underlined"
            type="email"
            label="Correo eletrónico"
            defaultValue="ap@redcompanies.com.mx"
            isDisabled
          />
          <Input
            size="md"
            variant="underlined"
            type="text"
            label="Nombre(s)"
            defaultValue="Alejandro"
            isClearable={editInput ? false : true}
            isDisabled={editInput ? true : false}
          />
          <Input
            size="md"
            variant="underlined"
            type="text"
            label="Apellidos"
            defaultValue="Pérez Montero"
            isClearable={editInput ? false : true}
            isDisabled={editInput ? true : false}
          />
          <Input
            label="Password"
            variant="underlined"
            endContent={
              <button
                size="sm"
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
                aria-label="toggle password visibility"
              >
                {isVisible ? (
                  <IoEyeOff className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <IoEye className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            isDisabled={editInput ? true : false}
            defaultValue="123445123445"
          />
          <Input
            label="Password"
            variant="underlined"
            endContent={
              <button
                size="sm"
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
                aria-label="toggle password visibility"
              >
                {isVisible ? (
                  <IoEyeOff className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <IoEye className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            isDisabled={editInput ? true : false}
            defaultValue="123445123445"
          />
          <div className="flex justify-end gap-3 md:col-span-2 ">
            {editInput ? (
              <Button
                variant="flat"
                size="sm"
                className=""
                onClick={handleEditInput}
              >
                <span> Modificar</span>
              </Button>
            ) : (
              <Button
                size="sm"
                color="danger"
                className="bg_main"
                onClick={handleEditInput}
              >
                <span> Guardar</span>
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
