import { BankCards } from "@/components/bankCards/bankCards";
import { FormCheckout } from "@/components/formCheckout/formCheckout";
import { AsideResumen } from "@/components/asideResumen/asideResumen";
import { HeadPage } from "@/components/headPage/headPage";
import bgGeneric from "@/public/imgs/02.jpg";


export default function CheckoutPage() {
  return (
    <section className="wrapper_checkout_page is_checkout pb-16">
      <HeadPage
        bgCompany={`url(${bgGeneric.src})`}
        companyBrand="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaozlILAjkSKohQb8KB0eilqM4q3WLpC_Z7Q&s"
        nameCompany="Revisa tu orden y realiza tu pago "
        goHref="/"
        isCheckout
      />
      <div className="max-w-[860px] m-auto p-2">
        <div className="md:flex gap-6 ">
          <div className="content_form_checkout">
            <BankCards />
            <FormCheckout />
          </div>
          <div className="content_resumen_checkout hidden md:block">
            <AsideResumen />
          </div>
        </div>
      </div>
    </section>
  );
}
