import HeroSection from "@/components/HeroSection.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Globe, Menu} from "lucide-react";
import AskMeAnything from "@/components/AskMeAnything.tsx";
import {InteractiveMap} from "@/components/InteractiveMap.tsx";
import Itinerary from "@/components/Itinerary.tsx";
import TopRecommendations from "@/components/TopRecomendation.tsx";
import GuideInfo from "@/components/GuideInfo.tsx";
import Questions from "@/components/Questions.tsx";

function App() {

  return (
    <div className="min-h-screen bg-background">
        <div className={'w-full border border-b-neutral-300 h-[5rem] flex items-center justify-between px-8'}>
            <h1 className={'font-semibold text-4xl text-primary'}>
                Rexby
            </h1>
            <div className={'flex items-center justify-center gap-4'}>
                <Button variant={'outline'} className={'px-6 font-medium cursor-pointer'}>Log in</Button>
                <Globe className={'text-neutral-300 cursor-pointer'}/>
                <Menu className={'text-neutral-300 cursor-pointer'} />
            </div>
        </div>
      <HeroSection />
        <div className={' bg-neutral-300 rounded-2xl h-0.5 mx-8  md:mx-24 my-8'}></div>
        <AskMeAnything/>
        <InteractiveMap/>
        <Itinerary/>
        <div className={' bg-neutral-300 rounded-2xl h-0.5 mx-8  md:mx-24 my-8'}></div>
        <TopRecommendations/>
        <GuideInfo/>
        <Questions/>
    </div>
  )
}

export default App
