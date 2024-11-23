"use client";
import {
  Image,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Pagination,
  ScrollShadow,
} from "@nextui-org/react";

export const PurchaseHistory = () => {
  return (
    <div className="cards lg mt-10">
      <div className="border-b-1 pb-3 border-gray-300">
        <h3 className="fnt_bold text-lg">Mis compras</h3>
        <p className="text-gray-500 text-sm">
          Encuentra el historial de tus compras
        </p>
      </div>

      <ScrollShadow className="min-w-[280px] content_items_history" orientation="horizontal">
        <div className="">
          <div className="items_history text-sm items-center leading-4">
            <div className="data_history">
              <Image
                src="https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/Providers/RVO/2/LogoHub.jpeg"
                alt="Top de empresas en Red Voucher Online "
                width={50}
                height={50}
                className="min-w-[50px] "
              />
            </div>
            <div className="data_history min-w-[200px] max-w-[200px]">
              2 boletos VIP + 3 refrescos medianos y 1 palomitas grandes
            </div>
            <div className="data_history min-w-[150px]">
              12 de Noviembre 2024
            </div>
            <div className="data_history">9001234</div>
            <div className="data_history">$450.00</div>
            <div className="data_history min-w-[150px]">
              <Chip
                className="capitalize border-none gap-1 text-default-600"
                color="warning"
                size="sm"
                variant="dot"
              >
                En proceso
              </Chip>
            </div>
          </div>
          <div className="items_history text-sm items-center leading-4">
            <div className="data_history">
              <Image
                src="https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/Providers/RVO/2/LogoHub.jpeg"
                alt="Top de empresas en Red Voucher Online "
                width={50}
                height={50}
                className="min-w-[50px] "
              />
            </div>
            <div className="data_history min-w-[200px] max-w-[200px]">
              2 boletos VIP + 3 refrescos medianos y 1 palomitas grandes
            </div>
            <div className="data_history min-w-[150px]">
              12 de Noviembre 2024
            </div>
            <div className="data_history">9001234</div>
            <div className="data_history">$450.00</div>
            <div className="data_history min-w-[150px]">
              <Chip
                className="capitalize border-none gap-1 text-default-600"
                color="warning"
                size="sm"
                variant="dot"
              >
                En proceso
              </Chip>
            </div>
          </div>
          <div className="items_history text-sm items-center leading-4">
            <div className="data_history">
              <Image
                src="https://storagervadminprod.blob.core.windows.net/ctnadmincontentmx/Providers/RVO/2/LogoHub.jpeg"
                alt="Top de empresas en Red Voucher Online "
                width={50}
                height={50}
                className="min-w-[50px] "
              />
            </div>
            <div className="data_history min-w-[200px] max-w-[200px]">
              2 boletos VIP
            </div>
            <div className="data_history min-w-[150px]">
              12 de Noviembre 2024
            </div>
            <div className="data_history">9001234</div>
            <div className="data_history">$450.00</div>
            <div className="data_history min-w-[150px]">
              <Chip
                className="capitalize border-none gap-1 text-default-600"
                color="success"
                size="sm"
                variant="dot"
              >
                Pagado
              </Chip>
            </div>
          </div>
        </div>
      </ScrollShadow>

      <div className="flex justify-center mt-4">
        <Pagination
          size="sm"
          // isCompact
          total={5}
          initialPage={1}
          color="danger"
        />
      </div>
    </div>
  );
};
