
import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function ReadyToBuildSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between gap-16 items-center !bg-[#266DF0]  px-4 md:px-[94px]">
      <div>
        <p
          className={cn(
           
            "text-[40px] leading-tight md:leading-normal text-[#A0BFF8]"
          )}
        >
          Ready to build your team&apos;s{" "}
          <span className="text-white">dream CRM?</span>
        </p>
        <div className="flex gap-[12px] justify-start mt-[32px]">
          <Button
            variant="secondary"
            size="sm"
            className="rounded-[12px]"
          >
            Start for free
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-[12px]"
          >
            Talk to sales
          </Button>
        </div>
      </div>
      <div>
        <Image src="/site/ready.png" alt="security" width={500} height={500} />
      </div>
    </section>
  );
}

export default ReadyToBuildSection;