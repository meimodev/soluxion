"use client"

import {useEffect, useState} from "react";

// export const metadata: Metadata = {
//     title: 'Soluxion',
//     description: 'Kumpulan solusi dibuat dengan hati, untuk membantu kehidpan anda',
//
// }
export default function Home() {

    const [currentLocation, setCurrentLocation] = useState({origin: "", hostname:""});
    useEffect(() => {
        console.log(window.location)
        setCurrentLocation(window.location);
    }, []);
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <div className="font-bold text-4xl mb-4">
                {currentLocation.hostname.replace("www.", "")}
            </div>
            <div>
                Solusi membantu dari hati.
            </div>

            <div className="flex gap-8 mt-12 font-bold text-xl">
                <a href="https://www.instagram.com/soluxion.id/?hl=en">@soluxion.id</a>
                <a href={currentLocation.origin}>{currentLocation.hostname}</a>
            </div>
        </div>
    )
}




