import hero from "../assets/hero.png"
import avatar from "../assets/avatar.png"
import { Button } from "./ui/button"
import {MapPin, Star} from "lucide-react";
const HeroSection = () => {
    return (
        <div className=" flex flex-col md:flex-row items-center justify-center  w-full  md:px-10 ">
            <div className=" md:rounded-2xl overflow-hidden w-full h-1/2 md:h-full md:w-[30%] flex justify-center items-center">
                <img
                    src={hero}
                    alt="Norwegian fjords with dramatic mountains and pristine waters"
                    className="w-full md:w-84 object-cover md:rounded-2xl"
                />
            </div>

            <div className=" flex flex-col items-center justify-center w-full md:w-[50%] h-1/2 md:h-full mt-8 px-6 md:px-0  ">
                <div className="text-left mb-8 ">
                    <h1 className="text-4xl md:text-4xl font-bold text-foreground mb-4">
                        Norway Guide
                    </h1>
                    <div className={'flex flex-col-reverse md:flex-col '}>
                        <div className="flex flex-row-reverse md:flex-row items-center justify-between md:justify-start gap-2 mb-6">
                            <img
                                src={avatar}
                                alt="Ása Steinars"
                                className="w-12 md:w-8 h-12 md:h-8 rounded-full"
                            />
                            <div className={'flex flex-col items-start justify-between gap-1'}>
                                <span className="text-black text-lg md:text-base md:text-muted-foreground font-bold md:font-normal">Guide by Ása Steinars</span>
                                <span className="md:hidden text-black text-base font-normal">Made in English</span>
                            </div>

                            <span className="hidden md:inline-flex items-center gap-1 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            Norway
                        </span>
                            <span className="bg-coral hidden md:inline-flex items-center justify-center gap-1 text-coral-foreground px-2 py-1 rounded text-sm font-medium">
                            <Star  className="w-4 h-4"  fill={'currentColor'}/>
                            New
                            </span>
                        </div>
                        <div className="max-w-3xl mx-auto text-base md:pr-24  mb-8 leading-relaxed">
                            <p className="mb-4">
                                Norway is my second home. I was born in Norway and I lived there until I was 7 years old.
                                I often come back and I love this country almost as much as Iceland. Last summer I spent 3 months
                                on the road with my van exploring everything from the south tip up to Lofoten.
                            </p>
                            <p>
                                This guide is my best tips for Norway to make sure you get the most out of your trip. It's
                                focused around the fjords in the west and Lofoten in the north. In my opinion, it's the
                                best areas to explore in Norway.
                            </p>
                        </div>
                    </div>




                    <div className="flex flex-row gap-4 justify-center items-start ">
                        <Button variant="outline" size="lg" className="w-[48%] py-6 border border-neutral-500">
                            Preview
                        </Button>
                        <div className={'flex flex-col items-center gap-1 w-[48%] '}>
                            <Button size="lg" className="bg-primary text-primary-foreground py-6 hover:bg-primary/90 w-full ">
                                Get Access
                            </Button>
                            <p className="text-sm text-muted-foreground font-medium ">
                                Used for <span className={'font-bold'}>100+</span> trips
                            </p>
                        </div>

                    </div>


                </div>
            </div>

        </div>
    )
}
export default HeroSection