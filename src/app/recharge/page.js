import { ContainRecharge } from "@/components/containRecharge/containRecharge";
import { HeadPage } from "@/components/headPage/headPage";

export default function RechargePage() {
  return (
    <section className="wrapper_recharge_page">
      <HeadPage
        bgCompany="url(https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/Providers/RVO/35/Header.jpeg?v=1731546151)"
        companyBrand="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaozlILAjkSKohQb8KB0eilqM4q3WLpC_Z7Q&s"
        nameCompany="Telcel "
        goHref="/"
      />
      <ContainRecharge />
    </section>
  );
}
