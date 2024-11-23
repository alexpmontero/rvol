import { Button } from "@nextui-org/react";
import { BiPlus } from "react-icons/bi";
import { ItemsBankCard } from "@/components/bankCards/itemsBankCard";
import "./bankCards.scss";

export const BankCards = () => {
  return (
    <div className="wrapper_bank_cards cards">
      <div className="info_user">
        <h4 className="fnt_medium">Comprador</h4>
        <p className="text-sm md:text-medium"> Alejandro Zentella Freidson</p>
        <p className="text-sm md:text-medium"> 
          Núm. de pedido: <span className="fnt_medium">234LS2</span>
        </p>
        <p className="text-sm md:text-medium"> 
          Total <span className="fnt_medium">$400.00</span>
        </p>
      </div>
      <div className="info_bank_cards">
        <h4 className="fnt_medium flex items-center justify-between ">
          <span>Mis tarjetas</span>
          <Button
            variant="light"
            startContent={<BiPlus />}
            size="sm"
            className="color_main fnt_regular p-0 h-5"
          >
            Agregar tarjeta nueva
          </Button>
        </h4>

        <ItemsBankCard
          type="1" // type=1 => visa *******
          name="Alejandro Zentella"
          digits="1243"
          id="card_1"
        />
        <ItemsBankCard
          type="2" // type=2 => mastercard ********
          name="Alejandro Montero"
          digits="0967"
          id="card_2"
        />
      </div>
    </div>
  );
};
