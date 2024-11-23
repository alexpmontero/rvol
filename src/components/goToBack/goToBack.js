import { Link, Button } from "@nextui-org/react";
import { FaArrowLeft } from "react-icons/fa";

export const GoToBack = (props) => {
  return (
    <Button
      href={props.href}
      as={Link}
      size="sm"
      isIconOnly
      variant="flat"
      onClick={props.onClick}
      className={`${props.isColorWhite ? "text-white" : " "} `}
    >
      <FaArrowLeft />
    </Button>
  );
};
