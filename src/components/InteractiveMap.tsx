import {useEffect, useRef} from "react";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {recommendations} from "@/assets/constants.ts";


export const InteractiveMap = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<L.Map | null>(null);

    useEffect(() => {
        if (!mapRef.current || mapInstanceRef.current) return;

        // Initialize map
        const map = L.map(mapRef.current).setView([67.85, 20.22], 6);

        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);


        // Add markers
        recommendations.forEach(location => {
            const marker = L.marker(location.coords).addTo(map);
            marker.bindPopup(`<strong>${location.title}</strong><br>${location.description}`);
        });

        mapInstanceRef.current = map;

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, []);

    return (
        <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive Map</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Get an Interactive, playful and visually appealing map that helps you navigate the noise
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                <div
                    ref={mapRef}
                    className="w-full h-[500px] rounded-xl border border-border shadow-lg"
                />
                <p className="text-sm text-muted-foreground text-center mt-4">
                    Click on markers to explore key destinations in Norway's fjords and Lofoten
                </p>
            </div>
        </section>
    );
};