"use client";
import {
  Input,
  Checkbox,
  Button,
  Select,
  SelectItem,
  Link,
  Image,
} from "@nextui-org/react";
import "./formCheckout.scss";
import btnRP from "@/public/imgs/RedPay.png";

export const FormCheckout = () => {
  return (
    <div className="wrapper_form_checkout cards mt-6">
      <h4 className="fnt_medium mb-2">Tipo de tarjeta</h4>
      <div className="type_card_form">
        <div className="radio-input">
          <label>
            <input
              name="value-radio"
              id="value-1"
              type="radio"
              value="Débito"
              defaultChecked
            />
            <span>Débito</span>
          </label>
          <label>
            <input
              name="value-radio"
              id="value-2"
              type="radio"
              value="Crédito"
            />
            <span>Crédito</span>
          </label>
          <span className="selection"></span>
        </div>
      </div>

      <div className="box_input_card grid sm:grid-cols-2 gap-x-5 gap-y-2 ">
        <Input
          type="text"
          variant="underlined"
          label="Número de tarjeta"
          className="col-span-2"
        />
        <Input type="text" variant="underlined" label="Fecha de expiración" />
        <Input type="text" variant="underlined" label="CVV" />
      </div>

      <div className=" grid sm:grid-cols-3 gap-x-5 gap-y-2 ">
        <div className="sm:col-span-2 mt-8">
          <h4 className="fnt_medium">Datos del propietario </h4>
        </div>
        <Input type="text" variant="underlined" label="Nombre(s)" />

        <Input type="text" variant="underlined" label="Apellidos" />
        <Select label="País" variant="underlined" className="">
          <SelectItem key="1">Select uno</SelectItem>
        </Select>
        <Select label="Estado" variant="underlined" className="">
          <SelectItem key="1">Select uno</SelectItem>
        </Select>
        <Input type="text" variant="underlined" label="Ciudad" />
        <Input type="text" variant="underlined" label="C.P." />
        <Input type="text" variant="underlined" label="Calle" />
        <Input type="text" variant="underlined" label="Número" />
      </div>
      <div className="mt-8">
        <Checkbox
          defaultSelected
          color="danger"
          radius="sm"
          size="sm"
          className="items-start"
        >
          <div>
            <h6
              className="fnt_medium mb-1"
              style={{ marginTop: "-2px", fontSize: "18px" }}
            >
              Guarda tu info para un pago más rápido{" "}
            </h6>
            <p className="text-xs">
              Al hacerlo, aceptas el 
              <Link href="/" className="text-xs fnt_medium text-black">
                Aviso de Privacidad
              </Link>
               y tus datos quedarán guardados para tu próximo pago en un solo
              click. 
            </p>
          </div>
        </Checkbox>
        <div className="mt-5 mb-5">
          <Button className="w-full is_button is_primary" type="submit">
            Pagar <span>$400.00 MXN</span>
            <Image
              src={btnRP.src}
              alt="Paga Seguro en Red Voucher Online con Red Pay"
              width="auto"
              height={30}
              className="rounded-none h-100"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
