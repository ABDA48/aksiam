import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function CarouselPlugin({ images }) {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <img
                src={img.src}
                alt={img.alt || `Carousel Image ${index + 1}`}
                className="w-full h-[400px] object-cover object-center"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 text-black">
        <CarouselPrevious />
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-[10px] z-10 text-black">
        <CarouselNext />
      </div>
    </Carousel>
  );
}
