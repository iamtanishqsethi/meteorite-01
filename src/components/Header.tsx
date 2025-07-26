import { useState, useEffect } from 'react';
import {Button} from "@/components/ui/button.tsx";

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsVisible(scrollTop > 500);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={`z-50 w-full bg-white border-b border-gray-200 hidden md:block fixed top-0 left-0 transition-transform duration-300 ease-in-out ${
                isVisible ? 'translate-y-0' : '-translate-y-full'
            }`}>
                <div className="flex items-center justify-between  py-3 max-w-6xl mx-auto">
                    <span className={'border-b-2 font-medium border-b-black'}>Unclear? Ask me a question</span>
                    <div className="flex gap-3">
                        <Button variant="outline" size="lg" className="w-[48%] py-6 px-24 border border-neutral-500  cursor-pointer">
                            Preview
                        </Button>
                        <Button size="lg" className="bg-gradient-to-r from-primary to-cyan-800 text-primary-foreground py-6 px-24 cursor-pointer ">
                            Get Access
                        </Button>
                    </div>
                </div>
            </div>
            <div className={`z-50 w-full   md:hidden flex items-center justify-center fixed bottom-12 transition-transform duration-300 ease-in-out px-6 ${
                isVisible ? 'translate-y-0' : 'translate-y-100'
            }`}>
                <Button size="lg" className="bg-gradient-to-r from-primary to-cyan-800 text-primary-foreground py-6 w-full cursor-pointer ">
                    Get Access
                </Button>
            </div>
        </>

    );
};

export default Header;