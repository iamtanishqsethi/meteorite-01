
import {CircleUserRound,  Send} from "lucide-react";
import { Button } from "./ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Avatar, AvatarImage } from "@radix-ui/react-avatar";
import {AvatarFallback} from "@radix-ui/react-avatar";
import avatar from "@/assets/avatar.png";
import {Input} from "@/components/ui/input.tsx";

const AskMeAnything = () => {

    return (
        <section className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto  mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Personal Travel Planner</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div>
                    <h3 className="text-2xl font-bold mb-4 ">
                        Ask me Anything
                    </h3>
                    <p className="text-muted-foreground mb-6">
                        Rexby is trained on Ása Steinars local knowledge, enabling it to answer questions
                        just like Ása Steinars, but faster
                    </p>
                    <span className={'border-b-2 font-medium border-b-black'}>Preview</span>
                </div>

                <Card className="w-full">
                    <CardHeader className="">
                        <div className="flex items-center gap-3">
                            <Avatar className="w-10 h-10">
                                <AvatarImage src={avatar} alt="Ása Steinars" />
                                <AvatarFallback>AS</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className="text-lg">Ása Steinars</CardTitle>
                                <p className="text-sm text-muted-foreground">Digital version</p>
                            </div>

                        </div>

                            <p className="text-xs  rounded-lg">
                                Hi there, I am Ása Steinars AI. I have been trained to answer travel questions
                                just like Ása Steinars would do in person, but faster.
                            </p>

                    </CardHeader>

                    <CardContent className="">



                        <div className={'flex items-center gap-2 justify-start border-y border-neutral-300 p-2 my-4'}>
                            <CircleUserRound className={'text-muted-foreground'}/>
                            <p className={'font-semibold '}>What is the best season to visit?</p>
                        </div>
                        <h1 className={'text-sm text-muted-foreground animate-pulse my-4'}>Thinking</h1>
                        <form  className="flex gap-2 my-2 relative">
                            <Input
                                placeholder="Message..."
                                className=" flex-1 placeholder:text-muted-foreground placeholder:font-semibold rounded-full border-neutral-400 p-6 text-lg placeholder:text-lg"
                            />
                            <Button type="submit" size="icon" className={' absolute right-2 bottom-2 rounded-full bg-zinc-900 hover:bg-zinc-800'}>
                                <Send className="w-4 h-4" />
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
export default AskMeAnything;