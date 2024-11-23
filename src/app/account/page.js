import { GoToBack } from "@/components/goToBack/goToBack";
import { FormPersonalInfo } from "@/components/accountComponents/formPersonalInfo";
import { FormCards } from "@/components/accountComponents/formCards";
import { PurchaseHistory } from "@/components/accountComponents/purchaseHistory";
import { Button } from "@nextui-org/react";
import { LatestPurchases } from "@/components/latestPurchases/latestPurchases";
import { IoMdLogOut } from "react-icons/io";

export default function ProfilePage() {
  return (
    <section className="wrapper_profile_page">
      <div
        className="head_profiles"
        style={{
          backgroundImage: `url(https://www.redvoucheronline.com.mx/ClientApp/build/imgs/bgsections-details.jpg)`,
        }}
      ></div>

      <div className="container mx-auto pt-10">
        <div className="grid sm:grid-cols-2 justify-between">
          <div className="flex items-center gap-4">
            <GoToBack href="/" />
            <h1 className="text-2xl fnt_bold w-full ">
              Hola <span>Alejandro San miguel</span>
            </h1>
          </div>
          <div className="text-right">
            <Button
              variant="flat"
              endContent={<IoMdLogOut />}
              className="max-sm:hidden"
            >
              <span> Cerrar sesión</span>
            </Button>
          </div>
        </div>
      </div>
      <LatestPurchases />
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <FormPersonalInfo />
          <FormCards />
        </div>
          <PurchaseHistory />
      </div>
    </section>
  );
}
