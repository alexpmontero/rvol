"use client";
import {
  Input,
  DateInput,
  Button,
  Select,
  SelectItem,
  RadioGroup,
  Radio,
  cn,
  Autocomplete,
  AutocompleteItem,
  Checkbox,
} from "@nextui-org/react";
import bgRegister from "@/public/imgs/bglogin.jpg";
import { GoToBack } from "@/components/goToBack/goToBack";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

export const CustomRadio = (props) => {
  const { children, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
          "flex-row-reverse w-full cursor-pointer rounded-lg gap-4  border-2 border-grey-100",
          "data-[selected=true]:border-primary"
        ),
      }}
    >
      {children}
    </Radio>
  );
};

export default function RegisterPage() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <section className="wrapper_register_page">
      <div className="container mx-auto">
        <div className="content_register_page">
          <div
            className="content_bg_register"
            style={{
              backgroundImage: `url(${bgRegister.src})`,
            }}
          ></div>
          <div className="content_register_form">
            <form action="" className="form_register">
              <div>
                <GoToBack href="/" />
              </div>
              <h2 className="text-center text-xl fnt_medium md:my-8">
                Crear usuario
              </h2>
              <div className="content_form_register grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2 ">
                <Input
                  type="text"
                  variant="underlined"
                  label="Nombre(s)"
                  isClearable
                />
                <Input
                  type="text"
                  variant="underlined"
                  label="Apellidos"
                  isClearable
                />
                <DateInput variant="underlined" label={"Fecha de nacimiento"} />
                <RadioGroup
                  label="Sexo"
                  orientation="horizontal"
                  className="box_input_sex"
                >
                  <CustomRadio value="2" className="radio_sexo">
                    <span className="r_sex_span">Masculino</span>
                  </CustomRadio>
                  <CustomRadio value="1" className="radio_sexo">
                    <span className="r_sex_span">Femenino</span>
                  </CustomRadio>
                </RadioGroup>
              </div>
              <div className="mt-8">
                <div className="grid grid-cols-1">
                  <h4 className="fnt_medium">Datos de tu empresa</h4>
                </div>

                <div className="content_form_register grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2 ">
                  <Autocomplete label="Tu empresa" variant="underlined">
                    <AutocompleteItem key={1}>Red Companies</AutocompleteItem>
                    <AutocompleteItem key={2}>Red Bussiness</AutocompleteItem>
                    <AutocompleteItem key={3}>Pride MX</AutocompleteItem>
                  </Autocomplete>
                  <Select label="Tipo de registro" variant="underlined">
                    <SelectItem key="1">Select uno</SelectItem>
                  </Select>
                  <Input
                    type="email"
                    variant="underlined"
                    label="Correo electrónico"
                    className="sm:col-span-2"
                    isClearable
                  />
                  <Input
                    label="Password"
                    variant="underlined"
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                        aria-label="toggle password visibility"
                      >
                        {isVisible ? (
                          <IoEyeOff className="text-md text-default-400 pointer-events-none" />
                        ) : (
                          <IoEye className="text-md text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                    type={isVisible ? "text" : "password"}
                  />
                  <Input
                    label="Password"
                    variant="underlined"
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                        aria-label="toggle password visibility"
                      >
                        {isVisible ? (
                          <IoEyeOff className="text-md text-default-400 pointer-events-none" />
                        ) : (
                          <IoEye className="text-md text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                    type={isVisible ? "text" : "password"}
                  />
                </div>
                <div className="mt-4">
                    <Checkbox color="danger" radius="sm" size="sm">
                      Acepto términos y condiciones
                    </Checkbox>
                  </div>
                <div className="mt-8">
                  <Button className="w-full is_button is_primary" type="submit">
                    Quiero registrarme
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
