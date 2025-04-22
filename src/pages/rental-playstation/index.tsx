import Image from "next/image";
import FAQ from "@/app/faq";
import ButtonBuy from "@/app/buttonBuy";
import {Metadata} from "next";
import Layout from "./layout";
import {ReactNode} from "react";
import {ElementTypeEnum, ElementTypeInterface} from "@/app/interface";

{/* eslint-disable @next/next/no-img-element */
}

export const metadata: Metadata = {
    title: 'Jual Cake Jadi Duit',
    description: 'Ebook panduan jualan cake untuk laku keras anti main stream',
}

Page.getLayout = function getLayout(page: ReactNode) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default function Page() {

    const paymentLink = "https://soluxion2025.myr.id/pl/dari-hobi-jadi-bisnis-roadmap-bisnis-rental-game-modern";

    const elements: ElementTypeInterface[] = [
        {
            "type": ElementTypeEnum.image,
            "src": "https://www.dropbox.com/scl/fi/dwh117mcnak0zrfin0c9q/1.jpg?rlkey=8y5no4lax03e5tk1fd4wddtju&dl=1",
        },
        {
            "type": ElementTypeEnum.image,
            "src": "https://www.dropbox.com/scl/fi/so1inxkw6gd7w25wr19f1/2.jpg?rlkey=al06phv6s5qxs1dad2qm2cat0&dl=1",
        },
        {
            "type": ElementTypeEnum.image,
            "src": "https://www.dropbox.com/scl/fi/howp8pwk6llan85hd4gde/3.jpg?rlkey=lsibdwi87dedcz1wmaf817wh7&dl=1",
        },
        {
            "type": ElementTypeEnum.image,
            "src": "https://www.dropbox.com/scl/fi/tucnodsxp920wtygfdwu7/4.jpg?rlkey=dio4tkpyv4vg5w1kygem69d5e&dl=1",
        },
        {
            "type": ElementTypeEnum.image,
            "src": "https://www.dropbox.com/scl/fi/fyoqg5esodxppe6xy8oqq/5.jpg?rlkey=akpiyr6jp1pscr13zirm7u1ng&dl=1",
        },
        {
            "type": ElementTypeEnum.image,
            "src": "https://www.dropbox.com/scl/fi/jhx78ezvbwhkcf1crtf5o/6.jpg?rlkey=y08nbbwlenkyanqc7sgv1w5f8&dl=1",
        },
        {
            "type": ElementTypeEnum.button,
            "src": paymentLink,
        },
        {
            "type": ElementTypeEnum.image,
            "src": "https://www.dropbox.com/scl/fi/9uur57xgin9myrz3e15ju/7.jpg?rlkey=uk2me9jhjzsvkhrgw1oav16pf&dl=1",
        },
        {
            "type": ElementTypeEnum.button,
            "src": paymentLink,
        },


    ];


    return (
        <div className="bg-white text-purple-800">

            <a href={paymentLink} target="_blank"
               className="py-3 px-6 fixed bottom-8 right-8 rounded-2xl font-bold bg-purple-600 text-white animate-bounce ease-in-out text-xl">
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
                                           colors={["bg-purple-500", "bg-purple-600", "bg-indigo-500", "bg-indigo-600"]}
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
                className="bg-purple-200 text-gray-700 w-full row-start-3 flex gap-[24px] flex-wrap items-center justify-center py-8">
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




