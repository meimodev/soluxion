import Image from "next/image";
import FAQ from "@/app/faq";
import ButtonBuy from "@/app/buttonBuy";
import {Metadata} from "next";
import Layout from "./layout";
import {ReactNode} from "react";
import {ElementTypeEnum, ElementTypeInterface} from "@/app/interface";
import dynamic from "next/dynamic";
import Script from "next/script";

{/* eslint-disable @next/next/no-img-element */
}

export const metadata: Metadata = {
    title: 'ACTION BOOK BISNIS BARBERSHOP',
    description: 'Penampilan ganteng dompet lebih ganteng',
}

Page.getLayout = function getLayout(page: ReactNode) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

const PixelTracker = dynamic(() => import("../../app/pixelTracker"), {ssr: false});

export default function Page() {

    const paymentLink = "https://soluxion2025.myr.id/pl/actionbook-bisnis-barbershop";
    const pixelId = "1370812530897979";

    const elements: ElementTypeInterface[] = [
        {

            "type": ElementTypeEnum.image,
            "src": "https://ik.imagekit.io/geb6bfhmhx/barber-lp/1.jpg?updatedAt=1746079216053",
        },
        {

            "type": ElementTypeEnum.image,
            "src": "https://ik.imagekit.io/geb6bfhmhx/barber-lp/2.jpg?updatedAt=1746079215956",
        },
        {

            "type": ElementTypeEnum.image,
            "src": "https://ik.imagekit.io/geb6bfhmhx/barber-lp/3.jpg?updatedAt=1746079216011",
        },
        {

            "type": ElementTypeEnum.image,
            "src": "https://ik.imagekit.io/geb6bfhmhx/barber-lp/4.jpg?updatedAt=1746079216062",
        },
        {

            "type": ElementTypeEnum.image,
            "src": "https://ik.imagekit.io/geb6bfhmhx/barber-lp/5.jpg?updatedAt=1746079216086",
        },
        {

            "type": ElementTypeEnum.image,
            "src": "https://ik.imagekit.io/geb6bfhmhx/barber-lp/6.jpg?updatedAt=1746079216015",
        },
        {
            "type": ElementTypeEnum.button,
            "src": paymentLink,
        },
        {

            "type": ElementTypeEnum.image,
            "src": "https://ik.imagekit.io/geb6bfhmhx/barber-lp/7.jpg?updatedAt=1746079214628",
        },
        {
            "type": ElementTypeEnum.image,
            "src": " https://ik.imagekit.io/geb6bfhmhx/barber-lp/8.jpg?updatedAt=1746079216097",
        },
        {
            "type": ElementTypeEnum.button,
            "src": paymentLink,
        },
    ];


    const MetaPixelComponent = () => {
        return <div>
            {/* Meta Pixel Code */}
            <Script id="fb-pixel"
                    dangerouslySetInnerHTML={{
                        __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?                         
              n.callMethod.apply(n,arguments):n.queue.push   
              (arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!
              0;n.version='2.0';n.queue=[];t=b.createElement(e);
              t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,
              'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${pixelId}');
              fbq('track', 'PageView');
            `,
                    }}
            />
            <noscript>
                <img alt=''
                     height="1"
                     width="1"
                     style={{display: "none"}}
                     src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}/>
            </noscript>
            {/* End Meta Pixel Code */}

            <PixelTracker pixelId={pixelId}/>
        </div>
    }


    return (
        <div className="bg-white text-indigo-800">
            <MetaPixelComponent/>

            <a href={paymentLink} target="_blank"
               className="py-3 px-6 fixed bottom-8 right-8 rounded-2xl font-bold bg-indigo-600 text-white animate-bounce ease-in-out text-xl">
                BELI
            </a>

            <div
                className="max-w-2xl mx-auto   items-center justify-items-center min-h-screen ">
                <main className="flex flex-col row-start-2 items-center pb-8">

                    {elements.map((e, index) => {

                        if (e.type === ElementTypeEnum.image) {
                            return <img
                                key={index}
                                src={e.src}
                                alt={"Image " + (index + 1)}
                            />
                        }

                        if (e.type === ElementTypeEnum.button) {
                            return <div key={index} className="w-full px-4 pt-8 pb-4">
                                <ButtonBuy className="w-full rounded-full"
                                           colors={["bg-blue-500", "bg-blue-600", "bg-indigo-500", "bg-indigo-600"]}
                                           link={paymentLink}><p className="text-2xl">PESAN SEKARANG</p></ButtonBuy>
                            </div>
                        }

                        return <></>
                    })}

                    <div className="mt-8 mb-12 border-b-2 w-1/2 wx-auto"/>
                    <FAQ/>

                </main>

            </div>
            <footer
                className="bg-indigo-200 text-gray-700 w-full row-start-3 flex gap-[24px] flex-wrap items-center justify-center py-8">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://www.instagram.com/soluxion.id/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/instagram.svg"
                        alt="instagram icon"
                        width={16}
                        height={16}
                    />
                    @mudajadikaya
                </a>

                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://www.soluxion.id"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    www.soluxion.id
                </a>
            </footer>
        </div>
    );
}




