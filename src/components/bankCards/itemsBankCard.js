// import { RiVisaLine, RiMastercardFill } from "react-icons/ri";
import { Image } from "@nextui-org/react";
import VisaLogo from "@/public/imgs/VisaLogo.png";
import MastercardLogo from "@/public/imgs/MastercardLogo.png";

export const ItemsBankCard = (props) => {
  return (
    <div className="inputGroup mb-3">
      <input
        id={props.id}
        name="radio_card"
        type="radio"
        disabled={props.isDisable}
      />
      <label htmlFor={props.id} className="flex gap-4">
        <div className="flex gap-3 sm:gap-6 items-center w-full">
          <span className="type_card">
            <Image
              src={
                props.type === "1" ? `${VisaLogo.src}` : `${MastercardLogo.src}`
              }
              width="auto"
              height={15}
            />
          </span>
          <span>{props.name}</span>
        </div>
        <div className="sm:w-[150px] flex items-center gap-1 text-right">
          <span className="sm:block hidden">**** ****</span> <span>{props.digits}</span>
        </div>
      </label>
    </div>
  );
};
