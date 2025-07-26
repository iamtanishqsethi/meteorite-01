import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion.tsx";

const Questions = () => {
    return (
        <div className="container mx-auto px-4 py-16 bg-neutral-100 border-t-2 border-t-neutral-300">
                <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-8 col-span-1">Your questions, answered</h2>
                        <Accordion type="multiple"   className="w-full col-span-3" >
                                <AccordionItem value="item-1">
                                        <AccordionTrigger>How do I access the Guide and Map?</AccordionTrigger>
                                        <AccordionContent className="flex flex-col gap-4 text-balance">
                                                <p>
                                                        You can sign in using your email address, Facebook, or Google account. The guide page, including the map,
                                                        is accessible through your mobile or computer browser. Additionally, offline access is available via the Rexby app!
                                                </p>
                                        </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                        <AccordionTrigger>Do I need internet connection?</AccordionTrigger>
                                        <AccordionContent className="flex flex-col gap-4 text-balance">
                                                <p>
                                                        When you download the Rexby app and purchase my guide, you can access it offline.
                                                        If you’re using a web browser, an internet connection is required.

                                                </p>
                                        </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                        <AccordionTrigger>How long will I have access?</AccordionTrigger>
                                        <AccordionContent className="flex flex-col gap-4 text-balance">
                                                <p>
                                                        Once you buy access, it is forever.
                                                </p>
                                        </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                        <AccordionTrigger>Can I share it with my travel buddy?</AccordionTrigger>
                                        <AccordionContent className="flex flex-col gap-4 text-balance">
                                                <p>
                                                        Yes, you can invite one travel buddy.
                                                </p>
                                        </AccordionContent>
                                </AccordionItem>
                        </Accordion>
                </div>

        </div>
    )
}
export default Questions;