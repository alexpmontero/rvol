import { FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";

export const Footer = () => {

  const AnioActual = () => {
    var fecha = new Date().getFullYear();
    return <>{fecha}</>;
  };

  return (
    <footer className="wrapper_footer bg-white px-4">
      <div className="flex sm:flex-row flex-col border-t-2 pt-7 pb-6">
        <div className="text-center w-full pb-8">
          <h6 className="text-sm font-bold">Síguenos en</h6>
          <div className="flex justify-center gap-3 mt-1 sm:mt-3">
            <Link href="https://www.facebook.com/redvoucher" target="_blank">
              <FaFacebookSquare className="text-xl color_main" />
            </Link>
            <Link href="https://x.com/redvoucher" target="_blank">
              <RiTwitterXFill className="text-xl color_main" />
            </Link>
            <Link
              href="https://www.instagram.com/redvoucheronline/"
              target="_blank"
            >
              <BsInstagram className="text-xl color_main" />
            </Link>
          </div>
        </div>
        <div className="text-center w-full pb-8">
          <h6 className="text-sm font-bold">Información legal</h6>
          <div className="fnt_regular text-sm gap-2 flex sm:justify-between justify-around mt-1 sm:mt-3">
            <Link href="" target="_blank">
              Aviso de privacidad
            </Link>
            <Link href="" target="_blank">
              Términos y condiciones
            </Link>
          </div>
        </div>
        <div className="text-center w-full ">
          <h6 className="text-sm font-bold">Contacto</h6>
          <div className="text-sm mt-1 sm:mt-3">
            <a href="mailto:contacto@redvoucheronline.com.mx" className="break-all">
              contacto@redvoucheronline.com.mx
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center text-sm border-t-2 py-2">
      <AnioActual />. Red Voucher Online. Todos los derechos reservados.
      </div>
    </footer>
  );
};
