"use client";
import {
  Select,
  SelectItem,
  Image,
  Button,
  Link,
  ScrollShadow,
} from "@nextui-org/react";
import { ItemProduct } from "@/components/itemProduct/itemProduct";
import "./trendingProducts.scss";

export const TrendingProducts = () => {
  return (
    <div className="wrapper_trending_products">
      <div className="container mx-auto">
        <div className="contain_trending">
          <div className="trending_a">
            <h2 className="text-5xl max-sm:text-4xl fnt_bold mb-3">
              <span className="highlighted">Productos</span> en tendencias
            </h2>
            <p>Descubre los productos mas vendidos por marca.</p>
            <div className="mt-8">
              <Select
                label="Productos en tendencia en:"
                placeholder="Selecciona una marca"
                defaultSelectedKeys={["1"]}
                className="select_trend"
              >
                <SelectItem key="1">Cinépolis</SelectItem>
                <SelectItem key="2">Amazon</SelectItem>
                <SelectItem key="3">Microsoft</SelectItem>
                <SelectItem key="4">Uber</SelectItem>
                <SelectItem key="5">Nintendo</SelectItem>
              </Select>
            </div>
          </div>

          <div className="trending_b">
            <div className="product_brand">
              <Button
                as={Link}
                variant="flat"
                className="h-auto link_bussiness"
              >
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaozlILAjkSKohQb8KB0eilqM4q3WLpC_Z7Q&s"
                  alt="Red Voucher Online Logo"
                  width={390}
                  height="auto"
                  className="rounded-none "
                />
              </Button>
            </div>
            <div className="list_item_prod_trendig">
              <ScrollShadow
                className="h-[100%] flex overflow-auto gap-4 pb-4 mt-2 "
                orientation="horizontal"
              >
                <ItemProduct />
                <ItemProduct />
              </ScrollShadow>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
