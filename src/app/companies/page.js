import { ContainItemProduct } from "@/components/itemProduct/ContainItemProduct";
import { HeadPage } from "@/components/headPage/headPage";

export default function CompaniesPage() {
  return (
    <section className="wrapper_bussiness_page">
      <HeadPage
        goHref="/"
        bgCompany="url(https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/Providers/RVO/2/Header.jpeg)"
        companyBrand="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaozlILAjkSKohQb8KB0eilqM4q3WLpC_Z7Q&s"
        nameCompany="Cinépolis "
      />
      <ContainItemProduct />
    </section>
  );
}
