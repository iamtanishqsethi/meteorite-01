import Cards from "@/components/Cards.tsx";


const TopRecommendations = () => {


    return (
        <section className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto  mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Access My Local Secrets</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                <div className={'col-span-4 md:col-span-1'}>
                    <h3 className="text-2xl font-bold mb-4 ">
                        161 things to do
                    </h3>
                    <p className="text-muted-foreground mb-6">
                        Get a curated list of all the best things to do with exact location, detailed info and inspiring content
                    </p>
                    <span className={'border-b-2 font-medium border-b-black'}>Preview</span>
                </div>

            <Cards/>
            </div>
        </section>
    )
}
export default TopRecommendations