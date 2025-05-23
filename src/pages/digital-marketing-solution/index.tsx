import Image from "next/image";
import FAQ from "@/app/faq";
import ButtonBuy from "@/app/buttonBuy";
import {Metadata} from "next";
import Layout from "./layout";
import {ReactNode} from "react";
import {ElementTypeEnum, ElementTypeInterface} from "@/app/interface";
import Script from "next/script";
import dynamic from "next/dynamic";

{/* eslint-disable @next/next/no-img-element */
}

export const metadata: Metadata = {
    title: 'Solusi Penjualan online',
    description: 'Ebook sakti untuk penjualan online berlipat ganda',
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

    const paymentLink = "https://soluxion2025.myr.id/pl/jualan-auto-laris-di-marketplace-online";
    const pixelId = "1370812530897979";

    const elements: ElementTypeInterface[] = [
        {
            "type": ElementTypeEnum.image,
            "src": "https://www.dropbox.com/scl/fi/6ysbux8uvvsueg79wv9p7/1.jpg?rlkey=xcfs7fca3gowpa5zmflm12ba0&st=kx8wckog&dl=1",
        },
        {
            "type": ElementTypeEnum.image,
            "src": "https://www.dropbox.com/scl/fi/lnhpr6pc5o47uulz2slt2/2.jpg?rlkey=j42qwb0p2s70j7td6oe1e0op9&st=5zxql1b1&dl=1",
        },
        {
            "type": ElementTypeEnum.image,
            "src": "https://www.dropbox.com/scl/fi/l6omyfv1odlcldfrno82m/books.gif?rlkey=gvbwwfjiq5xebzbd9p28thvcd&st=39z7e4qj&dl=1"
        },
        {
            "type": ElementTypeEnum.image,
            "src": "https://www.dropbox.com/scl/fi/jmdl7ykb9vef71fxn8v6f/3.jpg?rlkey=21p7arzkhai2z49bj6bza9qly&st=51l6qy61&dl=1",
        },
        {
            "type": ElementTypeEnum.image,
            "src": "https://www.dropbox.com/scl/fi/bas96na8s4d0k2hvwoptp/4.jpg?rlkey=2vjs0rikdodhe1gl06s0qk887&st=eocpbgta&dl=1",
        },
        {
            "type": ElementTypeEnum.image,
            "src": "https://www.dropbox.com/scl/fi/pdr5l2vbcvmj71k8dnsbl/5.jpg?rlkey=rjmz8ptiesllen98xs82xholx&st=yzjdc7ln&dl=1",
        },
        {
            "type": ElementTypeEnum.button,
            "src": paymentLink,
        },
        {
            "type": ElementTypeEnum.image,
            "src": "https://www.dropbox.com/scl/fi/c4reundc46ekuxtevps5d/6.jpg?rlkey=5rb4yjsy66gsox6y7ro7xkaxx&st=5wmu3xfw&dl=1",
        },
        {
            "type": ElementTypeEnum.image,
            "src": "https://www.dropbox.com/scl/fi/mkcvlx16auvgua1g79y1i/7.jpg?rlkey=k9r8wlb7jsrtcvc4g8c4d1ykz&st=jkjk6k05&dl=1",
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
        <div className="bg-white text-neutral-700">
            <MetaPixelComponent/>
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
                            return <div key={index} className="w-full px-4 pt-4">
                                <ButtonBuy className="w-full"
                                           link={paymentLink}/>
                            </div>
                        }

                        return <></>
                    })}

                    <div className="mt-8 mb-12 border-b-2 w-1/2 wx-auto"/>
                    <FAQ/>

                </main>

            </div>
            <footer
                className="bg-gray-900 text-gray-300 w-full row-start-3 flex gap-[24px] flex-wrap items-center justify-center py-8">
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
                    @soluxion.id
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




