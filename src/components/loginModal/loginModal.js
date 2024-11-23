"use client";
import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Image,
  Link,
} from "@nextui-org/react";
import { IoMenu, IoEyeOff, IoEye } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { Input } from "@nextui-org/input";
import { GoToBack } from "@/components/goToBack/goToBack";
import logoRVOL from "@/public/imgs/rvol.png";
import "./loginModal.scss";

export const LoginModal = (props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [switchComponent, setSwitchComponent] = useState(1);

  const handleSwitch = (i) => {
    if (switchComponent !== i) setSwitchComponent(i);
  };

  return (
    <>
      <Button
        variant="ghost"
        radius="full"
        className="border-1 max-sm:h-9 max-sm:min-w-9 max-sm:p-2 "
        onPress={onOpen}
      >
        <IoMenu className="text-lg max-sm:hidden" />
        <FaUserCircle className="text-lg" />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="wrapper_modal_login isModal"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 modal_header_login">
                <Image
                  src={logoRVOL.src}
                  alt="Red Voucher Online Logo"
                  width={180}
                  height={38}
                />
              </ModalHeader>
              <ModalBody className="modal_body_login">
                {switchComponent === 1 ? (
                  <ContentLogin handleSwitch={() => handleSwitch(2)} />
                ) : (
                  <ContentRecoveryPass handleSwitch={() => handleSwitch(1)} />
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export const ContentLogin = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div>
      <div className="wlcme">
        <h2 className="fnt_medium text-xl mb-4">
          Inicia sesión para acceder a la mejor plataforma de descuentos y
          beneficios.
        </h2>
      </div>
      <form action="">
        <Input
          type="email"
          variant="underlined"
          label="Correo electrónico"
          required
          errorMessage="Ingresa un correo electrónico válido"
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
                <IoEyeOff className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <IoEye className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
        />
        <div className="text-right mt-1">
          <Link
            className="text-sm text-black hover:text-red-600 cursor-pointer"
            onClick={props.handleSwitch}
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        <div className="mt-5">
          <Button className="w-full is_button is_primary" type="submit">
            Iniciar sesión
          </Button>
        </div>
      </form>
      <div className="mt-8 mb-4">
        <h3 className="fnt_medium text-md text-center mb-2">
          ¿Eres nuevo en Red Voucher Online?
        </h3>
        <Button
          as={Link}
          href="/register"
          className="w-full is_button is_secundary"
        >
          Regístrate aquí
        </Button>
      </div>
    </div>
  );
};

export const ContentRecoveryPass = (props) => {
  return (
    <div className="modal_body_rec_pass">
      <h2 className="fnt_medium text-xl mb-6">
        <GoToBack onClick={props.handleSwitch} />
        <span className="ml-2">Restablece tu contraseña</span>
      </h2>
      <p className="text-sm">
        Te enviaremos un enlace para que puedas crear una nueva contraseña.
      </p>
      <form action="">
        <Input
          type="email"
          label="Correo electrónico"
          variant="underlined"
          isClearable
        />
        <Button className="w-full is_button is_primary mt-5" type="submit">
          Enviar enlace
        </Button>
      </form>
      <div className="text-center my-4">
        <p className="text-sm">
          ¿Tienes una cuenta?{" "}
          <Button
            variant="light"
            className="color_main fnt_medium"
            onClick={props.handleSwitch}
          >
            Inicia sesión
          </Button>
        </p>
      </div>
    </div>
  );
};
