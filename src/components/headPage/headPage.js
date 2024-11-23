import { GoToBack } from "@/components/goToBack/goToBack";
import { Image } from "@nextui-org/react";

export const HeadPage = (props) => {
  return (
    <div
      className={`head_bussiness head_template_page relative h-[180px] sm:h-[220px] ${
        props.isCheckout ? "is_checkout" : ""
      }`}
      style={{
        backgroundImage: `${props.bgCompany}`,
      }}
    >
      <div className="container mx-auto flex justify-between items-center gap-3 head_contain relative z-10">
        <div className="sm:min-w-[100px] go_back_head">
          <GoToBack href={props.goHref} isColorWhite />
        </div>

        <h1 className="sm:text-5xl text-2xl fnt_bold w-full text-white sm:text-center leading-6">
          {props.nameCompany} 
        </h1>
        {props.isCheckout ? (
          ""
        ) : (
          <div className="box_brand_bussiness max-sm:hiddxen box_brand_template bg-white rounded-md ">
            <Image
              src={props.companyBrand}
              alt="Red Voucher Online"
              width={390}
              height="auto"
              className="rounded-none"
            />
          </div>
        )}
      </div>
    </div>
  );
};
