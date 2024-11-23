import { Link, Image } from "@nextui-org/react";
import "./featured.scss";

export const Featured = () => {
  return (
    <div className="wrapper_featured">
      <div className="container mx-auto">
        <div className="mb-5">
          <h2 className="fnt_bold text-xl">Productos destacados </h2>
          <p>Te pueden interesar </p>
        </div>
        <div className="contain_featured sm:flex-row flex-col flex gap-8">
          <Link
            href="/companies"
            className="item_featured h-auto bg-transparent"
          >
            <Image
              src="https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/Providers/RVO/81/featuredCard.jpeg?v=1730858688"
              alt="Productos destacados en Red Voucher Online"
              width={570}
              height={320}
            />
          </Link>
          <Link
            href="/companies"
            className="item_featured h-auto bg-transparent"
          >
            <Image
              src="https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/Providers/RVO/83/featuredCard.jpeg?v=1730858688"
              alt="Productos destacados en Red Voucher Online"
              width={570}
              height={320}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
