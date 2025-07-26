import {Card, CardContent, CardFooter} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Instagram, Music, Globe, MessageCircle} from "lucide-react";
import avatar from "../assets/avatar.png"
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

const GuideInfo = () => {
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-5 gap-8">
                        <Card className="text-center space-y-4 hidden  md:block col-span-2 md:mx-8 md:py-12  ">
                            <CardContent className={'space-y-4'}>
                                <Avatar className="w-28 h-28 mx-auto">
                                    <AvatarImage
                                        src={avatar}
                                        alt="Ása Steinars"
                                        className="object-cover"
                                    />
                                </Avatar>
                                <div className={'flex flex-col items-center justify-center gap-2'}>
                                    <h3 className="text-xl font-bold ">Ása Steinars</h3>
                                    <p className="text-neutral-400 font-medium ">Travel Business</p>
                                    <div className="flex justify-center gap-4">
                                        <Globe className="h-5 w-5" />
                                        <Instagram className="h-5 w-5" />
                                        <Music className="h-5 w-5" />
                                        <MessageCircle className="h-5 w-5" />
                                    </div>
                                </div>
                                <div className="hidden md:flex justify-center gap-2">
                                    <Badge variant="outline" className="rounded-full py-1 px-6 border-neutral-600">Iceland</Badge>
                                    <Badge variant="outline" className="rounded-full py-1 px-6 border-neutral-600">Norway</Badge>
                                </div>

                            </CardContent>
                            <div className={' bg-neutral-300 rounded-2xl h-[1px] w-full'}></div>
                            <CardFooter className={'hidden md:block'}>
                                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-5 ">
                                    Storefront
                                </Button>
                            </CardFooter>


                        </Card>

                        <div className="space-y-6 col-span-5 md:col-span-3 md:py-16">
                            <div className={'flex items-start justify-between'}>

                                <div>
                                    <h2 className="text-2xl font-bold mb-2">Guide by Ása Steinars</h2>
                                    <p className="text-muted-foreground text-sm">Joined in April 2022</p>
                                    <div className="flex md:hidden justify-start my-1 gap-4">
                                        <Globe className="h-5 w-5" />
                                        <Instagram className="h-5 w-5" />
                                        <Music className="h-5 w-5" />
                                        <MessageCircle className="h-5 w-5" />
                                    </div>
                                </div>
                                <Avatar className="w-14 h-14 md:hidden">
                                    <AvatarImage
                                        src={avatar}
                                        alt="Ása Steinars"
                                        className="object-cover"
                                    />
                                </Avatar>
                            </div>


                            <div className="space-y-4">
                                <p className="md:pr-6 leading-relaxed">
                                    Ása Steinars is an adventure photographer and videographer from Iceland. Growing up in the north,
                                    surrounded by extreme landscapes and forever changing weather has given her a tight bond to nature
                                    and its forces. This you can clearly see in her photography.
                                    She works as a full time content creator, helping people to travel Iceland like she does.
                                    She has a total following of almost 2 million across her social media platforms.
                                </p>
                            </div>

                            <div className="flex flex-col md:flex-row gap-3">
                                <Button variant="outline" className="py-1 px-8 border-neutral-600">
                                    Message
                                </Button>
                                <Button variant="outline" className="py-1 px-8 border-neutral-600">
                                    Storefront
                                </Button>
                            </div>
                        </div>
                    </div>

            </div>
        </section>
    );
};
export default GuideInfo;