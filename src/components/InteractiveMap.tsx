import { useEffect } from "react";
import L, { type LatLngExpression } from 'leaflet';
import "leaflet/dist/leaflet.css";
import { recommendations } from "@/assets/constants.ts";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";

const ResizeMap = () => {
    const map = useMap();
    useEffect(() => {
        map.invalidateSize();
    }, []);
    return null;
};

export const InteractiveMap = () => {
    useEffect(() => {
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
            iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
            shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        });

        const style = document.createElement('style');
        style.textContent = `
            .leaflet-popup-content-wrapper {
                padding: 0 !important;
                border-radius: 8px !important;
                overflow: hidden !important;
                background: transparent !important;
            }
            
            .leaflet-popup-content {
                margin: 0 !important;
                padding: 0 !important;
                width: 288px !important;
                height: 384px !important;
            }
            
            .leaflet-popup-tip {
                background: transparent !important;
                border: none !important;
                box-shadow: none !important;
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    const center: LatLngExpression = [64.0, 10.0];

    return (
        <div className="container mx-auto px-4 py-16 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive Map</h2>
            <p className="text-muted-foreground mb-6">
                Get an Interactive, playful and visually appealing map that helps you navigate the noise
            </p>
            <div className="w-full max-w-6xl h-[80vh] rounded-lg shadow-lg overflow-hidden">
                <MapContainer
                    center={center}
                    zoom={5}
                    style={{ height: '100%', width: '100%' }}
                    className="z-0"
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {recommendations.map((rec, index) => (
                        <Marker key={index} position={rec.coords}>
                            <Popup
                                closeButton={false}
                            >
                                <Card className="w-72 h-96 relative overflow-hidden border-0 rounded-lg shadow-none m-0">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${rec.image})` }}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black text-white p-4">
                                        <CardHeader className="p-0 ">
                                            <CardTitle className="text-xl font-bold">{rec.title}</CardTitle>
                                            <CardDescription className="text-xs text-neutral-300">{rec.region}</CardDescription>
                                        </CardHeader>
                                        <CardContent className="p-0">
                                            <p className="text-xs ">{rec.description}</p>
                                            <p className="text-xs"><strong>Highlights:</strong> {rec.highlights.join(', ')}</p>
                                            <p className="text-xs "><strong>Duration:</strong> {rec.duration}</p>
                                            <p className="text-xs "><strong>Season:</strong> {rec.season}</p>
                                            <p className="text-xs"><strong>Rating:</strong> {'★'.repeat(rec.rating)}</p>
                                        </CardContent>
                                    </div>
                                </Card>
                            </Popup>
                        </Marker>
                    ))}
                    <ResizeMap />
                </MapContainer>
            </div>
        </div>
    )
}