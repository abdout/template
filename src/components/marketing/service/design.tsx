import React from "react";
import Image from "next/image";

export default function Design() {
  return (
    <div className="py-8">
      {/* Heading with Icon */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <Image
          src="/site/design.png"
          alt="Design Icon"
          width={32}
          height={32}
          className="w-8 h-8"
        />
        <h2 className="text-3xl font-bold text-foreground">Design</h2>
      </div>

      {/* Service Description */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Creating stunning visual designs with modern UI/UX, graphics, and layouts. 
          We bring innovative concepts to life with creative excellence.
        </p>
      </div>

      {/* Videos */}
      <div className="flex gap-8 justify-center items-center">
        <video 
          autoPlay
          muted
          loop
          className="rounded-lg w-[500px] h-[400px] object-cover"
          preload="metadata"
        >
          <source src="/site/resize.mp4" type="video/mp4" />
        </video>
        
        <video 
          autoPlay
          muted
          loop
          className="rounded-lg w-[500px] h-[400px] object-cover"
          preload="metadata"
        >
          <source src="/site/creative.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}