import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { recommendations } from "@/assets/constants.ts";
import {Star} from "lucide-react";

function Cards() {
    return (
        <div className="w-full col-span-4 md:col-span-3 overflow-hidden md:overflow-visible">
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent className="relative ">
                    {recommendations.map((location, index) => (
                        <CarouselItem
                            key={index}
                            className=" basis-[85%] sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
                        >
                            <div className="p-1 h-100">
                                <Card className="h-full rounded-xl p-0">
                                    <CardContent className="p-0 h-full">
                                        <img
                                            src={location.image}
                                            alt={location.title}
                                            className="h-full w-full object-cover object-center rounded-xl"
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                            <div className={'flex flex-col  px-4'}>
                                <h1 className={'font-medium text-lg'}>{location.title}</h1>
                                <div className={'flex items-center justify-between'}>
                                    <h1 className={'font-medium text-sm text-muted-foreground'}>{location.region}</h1>
                                    <span  className={'font-medium text-sm text-muted-foreground inline-flex items-center gap-1'}>{location.rating} <Star  className="w-3 h-3 inline"  fill={'currentColor'}/></span>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                    <CarouselItem
                        className=" basis-[85%] sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
                    >
                        <div className="p-1 h-100">
                            <Card className="h-full rounded-xl p-0 border-black">
                                <CardContent className="flex flex-col h-full items-center justify-center">
                                    <span className={'text-xl font-semibold '}>Preview</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute z-50 top-1/2 -left-1 -translate-y-1/2" />
                <CarouselNext className="absolute z-50 top-1/2 -right-1 -translate-y-1/2" />
            </Carousel>
        </div>
    )
}

export default Cards