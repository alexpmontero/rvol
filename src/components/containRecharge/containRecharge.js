"use client";
import { useState } from "react";
import {
  Input,
  Checkbox,
  Button,
  RadioGroup,
  Radio,
  Link,
  Select,
  SelectItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { RiErrorWarningLine } from "react-icons/ri";

export const ContainRecharge = () => {
  const [steps, setSteps] = useState(1);
  const handleStep = (i) => {
    if (steps !== i) setSteps(i);
  };

  return (
    <div className="max-w-[1024px] px-3 mx-auto">
      <div className="wrapper_recharge grid md:grid-cols-2">
        <div className="drescrip_recharge md:max-w-[325px] mt-0 mb-14 sm:my-10 ">
          <div className="sticky top-[90px]">
            <h2 className="fnt_bold text-2xl">
              Recarga <span className="highlighted">fácil y seguro </span>
            </h2>
            <p className="max-md:hidden mb-16">
              Disfruta de promociones y descuentos especiales para ti
            </p>
            <p className="">
              Ingresa el número{" "}
              <span className="highlighted fnt_medium">Telcel</span>, elige el
              monto que deseas recargar y sigue los pasos hasta completar tu
              compra.
            </p>
          </div>
        </div>
        <div className="w-full">
          <form action="">
            {steps === 1 ? (
              <StepOne handleStep={() => handleStep(2)} />
            ) : (
              <StepTwo handleStep={() => handleStep(1)} />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

const StepOne = (props) => {
  const [showInputSave, setShowInputSave] = useState(false);
  const handleShow = () => {
    setShowInputSave(!showInputSave);
  };

  const [hasReferences, setHasReferences] = useState(true);
  const handleReference = () => {
    setHasReferences(!hasReferences);
  };

  return (
    <div className="content_step_one cards">
      {hasReferences ? (
        <>
          <h2 className="fnt_medium text-xl flex justify-between mb-4">
            <span>1. Número telefónico</span>{" "}
            <Button
              variant="light"
              className="color_main fnt_regular w-30 text-left p-2  h-7"
              onClick={handleReference}
            >
              Nuevo número
            </Button>
          </h2>
          <Select
            label="Selecciona una de tus referencias"
            className=""
            variant="underlined"
          >
            <SelectItem key="1">Joseito Rubieta - (551) 356 5413</SelectItem>
            <SelectItem key="2">Gustavo - (551) 455 0098</SelectItem>
          </Select>
        </>
      ) : (
        <>
          <h2 className="fnt_medium text-xl flex justify-between mb-4">
            <span>1. Ingresa tu número</span>{" "}
            <Button
              variant="light"
              className="color_main fnt_regular w-30 text-left p-2  h-7"
              onClick={handleReference}
            >
              Mis números
            </Button>
          </h2>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-4">
            <Input
              type="number"
              variant="underlined"
              label="Teléfono"
              isClearable
            />
            <Input
              type="number"
              variant="underlined"
              label="Confirmar teléfono"
              isClearable
            />
            <Input
              type="text"
              variant="underlined"
              label="Agrega un nombre para identificar este número"
              isClearable
              className={`md:col-span-2 ${showInputSave ? "" : "hidden"}`}
            />
          </div>
          <Checkbox color="danger" radius="sm" size="sm" onClick={handleShow}>
            Guardar número
          </Checkbox>
        </>
      )}

      <div className="mb-4 mt-10">
        <h2 className="fnt_medium text-xl mb-2">2. Selecciona un monto</h2>
        <RadioGroup className="content_amounts">
          <Radio className="item_amount" color="danger" value="20">
            <span className="text-md"> $20</span>
            <Popover placement="left-end">
              <PopoverTrigger>
                <Button
                  variant="light"
                  radius="full"
                  isIconOnly
                  size="sm"
                  className="p-0 text-lg more__info h-5 w-5 min-w-5 "
                >
                  <RiErrorWarningLine />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <p className="max-w-[150px] more__info__p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates laudantium impedit natus facilis enim. Harum magnam
                  nemo voluptatem enim voluptatum, repudiandae libero temporibus
                  tempore est, iure quod, ullam cumque? In.
                </p>
              </PopoverContent>
            </Popover>
          </Radio>
          <Radio className="item_amount" color="danger" value="30">
            <span className="text-md"> $30</span>
            <Popover placement="left-end">
              <PopoverTrigger>
                <Button
                  variant="flat"
                  radius="full"
                  isIconOnly
                  size="sm"
                  className="p-0 text-lg more__info h-5 w-5 min-w-5 "
                >
                  <RiErrorWarningLine />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <p className="max-w-[150px] more__info__p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates laudantium impedit natus facilis enim. Harum magnam
                  nemo voluptatem enim voluptatum, repudiandae libero temporibus
                  tempore est, iure quod, ullam cumque? In.
                </p>
              </PopoverContent>
            </Popover>
          </Radio>
          <Radio className="item_amount" color="danger" value="50">
            <span className="text-md"> $50</span>
            <Popover placement="left-end">
              <PopoverTrigger>
                <Button
                  variant="flat"
                  radius="full"
                  isIconOnly
                  size="sm"
                  className="p-0 text-lg more__info h-5 w-5 min-w-5 "
                >
                  <RiErrorWarningLine />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <p className="max-w-[150px] more__info__p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates laudantium impedit natus facilis enim. Harum magnam
                  nemo voluptatem enim voluptatum, repudiandae libero temporibus
                  tempore est, iure quod, ullam cumque? In.
                </p>
              </PopoverContent>
            </Popover>
          </Radio>
          <Radio className="item_amount" color="danger" value="100">
            <span className="text-md"> $100</span>
            <Popover placement="left-end">
              <PopoverTrigger>
                <Button
                  variant="flat"
                  radius="full"
                  isIconOnly
                  size="sm"
                  className="p-0 text-lg more__info h-5 w-5 min-w-5 "
                >
                  <RiErrorWarningLine />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <p className="max-w-[150px] more__info__p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates laudantium impedit natus facilis enim. Harum magnam
                  nemo voluptatem enim voluptatum, repudiandae libero temporibus
                  tempore est, iure quod, ullam cumque? In.
                </p>
              </PopoverContent>
            </Popover>
          </Radio>
          <Radio className="item_amount" color="danger" value="150">
            <span className="text-md"> $150</span>
            <Popover placement="left-end">
              <PopoverTrigger>
                <Button
                  variant="flat"
                  radius="full"
                  isIconOnly
                  size="sm"
                  className="p-0 text-lg more__info h-5 w-5 min-w-5 "
                >
                  <RiErrorWarningLine />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <p className="max-w-[150px] more__info__p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates laudantium impedit natus facilis enim. Harum magnam
                  nemo voluptatem enim voluptatum, repudiandae libero temporibus
                  tempore est, iure quod, ullam cumque? In.
                </p>
              </PopoverContent>
            </Popover>
          </Radio>
          <Radio className="item_amount" color="danger" value="200">
            <span className="text-md"> $200</span>
            <Popover placement="left-end">
              <PopoverTrigger>
                <Button
                  variant="flat"
                  radius="full"
                  isIconOnly
                  size="sm"
                  className="p-0 text-lg more__info h-5 w-5 min-w-5 "
                >
                  <RiErrorWarningLine />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <p className="max-w-[150px] more__info__p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates laudantium impedit natus facilis enim. Harum magnam
                  nemo voluptatem enim voluptatum, repudiandae libero temporibus
                  tempore est, iure quod, ullam cumque? In.
                </p>
              </PopoverContent>
            </Popover>
          </Radio>
        </RadioGroup>
      </div>
      <div className="mt-8">
        <Button
          className="w-full is_button is_primary"
          onClick={props.handleStep}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};

const StepTwo = (props) => {
  return (
    <div className="content_step_two cards">
      <div className="flex justify-between ">
        <h2 className="">
          Recarga <span className="fnt_bold text-lg ">$30.00</span>
        </h2>
        <Button
          variant="light"
          className="color_main fnt_regular w-20 text-left p-2  h-7"
          onClick={props.handleStep}
        >
          Modificar
        </Button>
      </div>
      <div className="mb-8">
        <h3>Número a recargar</h3>
        <h2 className="text-xl fnt_medium">5505234567</h2>
      </div>

      <div className="mb-4 ">
        <h3>
          Monto a pagar:{" "}
          <span className="text-xl fnt_bold color_main"> $29.4</span>
        </h3>
      </div>

      <div className="mt-8">
        <Button
          className="w-full is_button is_primary"
          as={Link}
          href="/checkout"
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};
