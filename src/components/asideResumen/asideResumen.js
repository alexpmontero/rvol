import { ItemShopping } from "@/components/shoppingCart/itemShopping";
import "./asideResumen.scss";

export const AsideResumen = () => {
  return (
    <aside className="aside_resumen ">
      <div className="content_aside" >
        <h4 className="fnt_medium">Resumen</h4>
        <p className="text-sm flex justify-between items-center ">
          Número de pedido <span className="fnt_medium">234LS2</span>
        </p>
        <div className="mt-5">
          <ItemShopping
            urlImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaozlILAjkSKohQb8KB0eilqM4q3WLpC_Z7Q&s"
            nameBussiness="Cinépolis"
            num="2"
            price="600.00"
            priceTotal="600.00"
            nameProduct="Microsoft Xbox Live - Gift Card"
          />
          <ItemShopping
            urlImg="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW4ESm?ver=c63e"
            nameBussiness="XBOX"
            num="2"
            price="600.00"
            priceTotal="600.00"
            nameProduct="Microsoft Xbox Live - Gift Card"
          />
        </div>
        <div className="border-t-1 border-gray-300 pt-4">
          <h4 className="text-lg fnt_medium flex justify-between items-center">
            <span>Total</span>
            <span>$400</span>
          </h4>
        </div>
      </div>
      <div className="px-2 mt-4">
        <h6 className="fnt_medium text-md">Tu información está protegida</h6>
        <p className="text-xs">
          Empleamos los más altos estándares de seguridad (SSL, 3D Secure) para
          proteger su información personal y la de su tarjeta.
        </p>
      </div>
    </aside>
  );
};
