import { Button, Link } from "@nextui-org/react";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export default function CompletePurchase() {
  const styleBg = {
    backgroundImage: `url(https://www.redvoucheronline.com.mx/ClientApp/build/imgs/bgsections-details.jpg)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "200px",
    opacity: ".25",
  };

  return (
    <section className="wrapper_complete_purchase_page">
      <div className="hidden sm:block" style={styleBg} />
      <div className="max-w-[620px] mt-36 sm:mt-0 mx-auto p-2">
        {/* <PurchaseSuccess /> */}
        <PurchaseCancel />
      </div>
    </section>
  );
}

const PurchaseSuccess = () => {
  return (
    <div className="complete_purchase_content cards mt-[-65px]">
      <div className="success">
        <div className="icon">
          <FaCheck />
        </div>
        <h1 className="text-center text-2xl fnt_bold mt-2">Compra exitosa</h1>
      </div>
      <Button className="w-full is_button is_primary mt-7" as={Link} href="/">
        Volver al Inicio
      </Button>
      <hr className="my-5" />
      <div className="grid md:grid-cols-12 gap-5">
        <div className="col-span-3">
          <h3 className="fnt_medium md:text-right">Nota:</h3>
        </div>
        <div className="col-span-9 text-sm">
          <p>
            No olvides revisar la{" "}
            <span className="fnt_medium">
              bandeja de entrada de tu correo electrónico
            </span>{" "}
            o la <span className="fnt_medium">bandeja de “No deseados”</span>,
            ahí encontrarás tus folios.
          </p>
          <h3 className="fnt_bold text-lg">¡Que los disfrutes!</h3>
        </div>
      </div>
    </div>
  );
};

const PurchaseCancel = () => {
  return (
    <div className="complete_purchase_content cards mt-[-65px]">
      <div className="cancel">
        <div className="icon">
          <IoClose color="danger" />
        </div>
        <h1 className="text-center text-2xl fnt_bold mt-2">
        Algo salió mal con tu orden
        </h1>
      </div>
      <hr className="my-5" />

      <div className="grid grid-cols-1 text-center gap-5">
          <p>
            Ocurrió un problema con el pago de tu orden, ha sido <span className="fnt_bold">cancelada o
            rechazada</span> por el banco.
          </p>
      </div>
      <Button className="w-full is_button is_primary mt-7" as={Link} href="/">
        Volver al Inicio
      </Button>
    </div>
  );
};
