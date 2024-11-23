"use client";
import { ScrollShadow, Image, Link } from "@nextui-org/react";
import "@/theme/react-slick.scss";
import "./topCompanies.scss";

export const TopCompanies = () => {
  const urlCompanies = [
    {
      id: 1,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaozlILAjkSKohQb8KB0eilqM4q3WLpC_Z7Q&s",
    },
    {
      id: 2,
      url: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW4ESm?ver=c63e",
    },
    {
      id: 3,
      url: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
    },
    {
      id: 4,
      url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    },
    {
      id: 5,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Nintendo_red_logo.svg/2560px-Nintendo_red_logo.svg.png",
    },
    {
      id: 6,
      url: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW4ESm?ver=c63e",
    },
    {
      id: 7,
      url: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
    },
    {
      id: 8,
      url: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW4ESm?ver=c63e",
    },
    {
      id: 9,
      url: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
    },
    {
      id: 10,
      url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    },
  ];

  return (
    <div className="wrapper_top_companies ">
      <div className="container mx-auto">
        <h2 className="text-center fnt_bold text-xl">¡Los 10 más elegidos!</h2>
          <ScrollShadow
            className="w-[100%] h-[100%] flex gap-3 justify-start  overflow-auto pb-2 mt-2 content_companies"
            orientation="horizontal"
          >
            {urlCompanies.map((company) => (
              <Link key={company.id} href="/companies" className="link_company rounded-none">
                <Image
                  src={company.url}
                  alt="Top de empresas en Red Voucher Online "
                  width="auto"
                  height="auto"
                />
              </Link>
            ))}
          </ScrollShadow>
      </div>
    </div>
  );
};
