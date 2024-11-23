"use client";
import { ItemsBankCard } from "@/components/bankCards/itemsBankCard";
import { Button } from "@nextui-org/react";
import { MdOutlineDelete } from "react-icons/md";

export const FormCards = () => {
  return (
    <div className="cards wrapper_form_cards">
      <div className="border-b-1 pb-3 border-gray-300">
        <h3 className="fnt_bold text-lg">Mis tarjetas</h3>
        <p className="text-gray-500 text-sm">Tarjetas guardadas en tu cuenta</p>
      </div>
      <form className="mt-4">
        <div className="itemcard_in_profile">
          <Button
            className="btn_delate bg_main"
            color="danger"
            size="sm"
            startContent={<MdOutlineDelete className="text-xl" />}
          >
            Eliminar
          </Button>
          <ItemsBankCard
            type="1" //visa *******
            name="Alejandro Zentella"
            digits="1243"
            id="card_1"
            isDisable
          />
        </div>
        <div className="itemcard_in_profile">
          <Button
            className="btn_delate bg_main"
            color="danger"
            size="sm"
            startContent={<MdOutlineDelete className="text-xl" />}
          >
            Eliminar
          </Button>
          <ItemsBankCard
            type="2" //mastercard ********
            name="Alejandro Montero"
            digits="0967"
            id="card_2"
            isDisable
          />
        </div>
      </form>
      <div className="px-2 mt-6">
        <h6 className="fnt_medium text-md">Tu información está protegida</h6>
        <p className="text-xs">
          Empleamos los más altos estándares de seguridad (SSL, 3D Secure) para
          proteger su información personal y la de su tarjeta.
        </p>
      </div>
    </div>
  );
};
