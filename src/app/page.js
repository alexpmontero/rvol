import { TitleHome } from "@/components/titleHome/titleHome";
import { TopCompanies } from "@/components/topCompanies/topCompanies";
import { SlideHome } from "@/components/slideHome/slideHome";
import { Coupons } from "@/components/coupons/coupons";
import { TrendingProducts } from "@/components/trendingProducts/trendingProducts";
import { Mosaic } from "@/components/mosaic/mosaic";
import { Featured } from "@/components/featured/featured";
import { Faq } from "@/components/faq/faq";
import { LatestPurchases } from "@/components/latestPurchases/latestPurchases";

export default function HomePage() {
  return (
    <section>
      <TitleHome />
      {/* ====== LATEST PURCHASES ======== */}
      <LatestPurchases />
      {/* ============= */}
      <TopCompanies />
      <SlideHome />
      <Coupons />
      <TrendingProducts />
      <Mosaic />
      <Featured />
      <Faq />
    </section>
  );
}
