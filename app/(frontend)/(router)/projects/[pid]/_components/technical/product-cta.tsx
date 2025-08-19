import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";

export default function ProductCta() {
  return (
    <section className="py-16 bg-ft-primary-yellow-200 relative lg:my-28 mb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6 text-center lg:text-left xl:ml-[4rem] ml-[2rem] lg:col-span-2">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              View Our Product!
            </h2>

            <Button className="bg-ft-primary-yellow-500 hover:bg-ft-primary-yellow-600 text-black font-medium px-8 py-3 text-lg">
              View Product
            </Button>
          </div>

          {/* Bear positioned to peek over the banner - head extends above, body hidden below */}
          <div className="hidden lg:block relative lg:col-span-1">
            <div className="absolute w-[600px] h-[408px] xl:right-[2rem] -right-8 -top-[18rem] z-10 overflow-hidden">
              <Image
                src="/FinTechBear.svg"
                alt="Bear Mascot Illustration"
                width={600}
                height={600}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
