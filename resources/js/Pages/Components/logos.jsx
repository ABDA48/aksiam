import React from 'react';
import { Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
 
import Autoplay from "embla-carousel-autoplay";
 
import { Link } from '@inertiajs/react';
 



export const CarouselSize = ({logos}) => {
     const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
    return (
        <Carousel opts={{ align: "start" }} className="w-full max-w-4xl relative"   plugins={[plugin.current]} onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}>
            <CarouselContent>
                {logos.map((logo, index) => (
                    <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/5 lg:basis-1/7">
                        <div className="p-1 my-5">
                                   <Link href={logo.link ? logo.link : "/"}>
                                    <img src={`/storage/${logo.image}`} alt={`Logo ${index + 1}`} className="w-[100px] h-[100px]  object-cover rounded-xl " />
                                    </Link>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
          
        </Carousel>
    );
};
