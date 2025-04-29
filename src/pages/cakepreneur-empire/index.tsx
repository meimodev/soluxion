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

    const paymentLink = "https://soluxion2025.myr.id/pl/cakepreneur-empire";

    const elements: ElementTypeInterface[] = [
        {
            "type": ElementTypeEnum.image,
            "src": "https://ik.imagekit.io/geb6bfhmhx/cake-lp/1.jpg?updatedAt=1745906724306",
        },
        {
            "type": ElementTypeEnum.image,
            "src": "https://ik.imagekit.io/geb6bfhmhx/cake-lp/2.jpg?updatedAt=1745906724433",
        },
        {
            "type": ElementTypeEnum.image,
            "src": "https://ik.imagekit.io/geb6bfhmhx/cake-lp/3.jpg?updatedAt=1745906724386",
        },
        {
            "type": ElementTypeEnum.image,
            "src": "https://ik.imagekit.io/geb6bfhmhx/cake-lp/4.jpg?updatedAt=1745906724273",
        },
        {
            "type": ElementTypeEnum.image,
            "src": "https://ik.imagekit.io/geb6bfhmhx/cake-lp/5.jpg?updatedAt=1745906724392",
        },
        {
            "type": ElementTypeEnum.image,
            "src": "https://ik.imagekit.io/geb6bfhmhx/cake-lp/6.jpg?updatedAt=1745906724293",
        },
        {
            "type": ElementTypeEnum.button,
            "src": paymentLink,
        },
        {
            "type": ElementTypeEnum.image,
            "src": "https://ik.imagekit.io/geb6bfhmhx/cake-lp/cake-2.gif?updatedAt=1745906971355",
        },
        {
            "type": ElementTypeEnum.image,
            "src": "https://ik.imagekit.io/geb6bfhmhx/cake-lp/7.jpg?updatedAt=1745906724417",
        },
        {
            "type": ElementTypeEnum.image,
            "src": "https://ik.imagekit.io/geb6bfhmhx/cake-lp/8.jpg?updatedAt=1745906724244",
        },
        {
            "type": ElementTypeEnum.button,
            "src": paymentLink,
        },


    ];


    return (
        <div className="bg-white text-pink-700">

            <a href={paymentLink} target="_blank"
               className="py-3 px-6 fixed bottom-8 right-8 rounded-2xl font-bold bg-pink-600 text-rose-200 animate-bounce ease-in-out text-xl">
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
                            return <div key={index} className="w-full px-4 pt-4">
                                <ButtonBuy className="w-full"
                                           colors={["bg-pink-500", "bg-pink-600", "bg-rose-500", "bg-rose-600"]}
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
                className="bg-pink-200 text-gray-700 w-full row-start-3 flex gap-[24px] flex-wrap items-center justify-center py-8">
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




