import { ScrollShadow } from "@nextui-org/react";
import { ItemProduct } from "@/components/itemProduct/itemProduct";
import "./latestPurchases.scss";

export const LatestPurchases = () => {
  return (
    <div className="wrapper_latest_purchases">
      <div className="container mx-auto overflow-auto ">
        <div className="mb-4">
          <h2 className="fnt_bold text-xl">
            <span>Alejandro</span>, tus últimas compras
          </h2>
          <p>¿Quieres volver a comprar?</p>
        </div>
        <ScrollShadow
          className="w-[100%] h-[100%] flex gap-5 flex-nowrap overflow-auto pb-5 content_latest_purchases"
          orientation="horizontal"
        >
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
        </ScrollShadow>
      </div>
    </div>
  );
};
