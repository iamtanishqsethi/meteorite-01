import {Card,} from "@/components/ui/card.tsx";
import itinerary from "@/assets/itinerary.png";

const Itinerary = () => {
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div>
                    <h3 className="text-2xl font-bold mb-4 ">
                        Build Itinerary with my Spots
                    </h3>
                    <p className="text-muted-foreground mb-6">
                        Start with a pre-made itinerary as a template, or build your own from scratch by using all the listed things to do and adding your own
                    </p>
                    <span className={'border-b-2 font-medium border-b-black'}>Preview</span>
                </div>

                <Card className="w-full h-full p-5">
                    <img
                        src={itinerary}
                        alt="Norwegian fjords with dramatic mountains and pristine waters"
                        className="w-full  object-cover md:rounded-2xl"
                    />
                </Card>
            </div>
        </section>
    )
}
export default Itinerary;