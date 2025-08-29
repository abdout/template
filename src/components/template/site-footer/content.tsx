import React from "react";
import { footerData } from "./constant";
import { Button } from "@/components/ui/button";
import ExpandButton from "@/components/atom/expand-button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function SiteFooter() {
  return (
    <section className="bg-[#232529] px-4 md:px-[94px] py-[90px] full-bleed">
      <div>
        <Image src="/site/logo.png" alt="footer logo" width={24} height={24} className="invert" />
      </div>

      <div className="mt-[32px] pb-[50px] flex justify-between w-full gap-8 flex-col md:flex-row flex-wrap">
        <div>
          <p className="text-[#9098A0] mb-[12px]">Product</p>
          <div className="flex flex-col gap-3">
            {footerData.product.map((item, index) => (
              <p key={index} className="text-[#555E67] hover:cursor-pointer">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[#9098A0] mb-[12px]">Company</p>
          <div className="flex flex-col gap-3">
            {footerData.company.map((item, index) => (
              <p key={index} className="text-[#555E67] hover:cursor-pointer">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[#9098A0] mb-[12px]">Attio for</p>
          <div className="flex flex-col gap-3">
            {footerData.attioFor.map((item, index) => (
              <p key={index} className="text-[#555E67] hover:cursor-pointer">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[#9098A0] mb-[12px]">Support</p>
          <div className="flex flex-col gap-3">
            {footerData.support.map((item, index) => (
              <p key={index} className="text-[#555E67] hover:cursor-pointer">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="min-w-[300px]">
          <p className="font-medium text-[#9098A0] mb-4">Ready to build?</p>
          <ExpandButton variant="white" className="group flex items-center">
                <span className="order-1 transition-all duration-300 group-hover:order-2">
                  Get started
                </span>
                <ArrowRight className="order-2 ml-2 group-hover:ml-0 group-hover:mr-2 h-4 w-4 transition-all duration-300 group-hover:order-1 group-hover:translate-x-1" />
              </ExpandButton>
        </div>
      </div>
    </section>
  );
}
  