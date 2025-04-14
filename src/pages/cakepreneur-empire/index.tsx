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
            "src": "https://www.dropbox.com/scl/fi/eoob5u8yt3h25b31ab3ny/1.jpg?rlkey=28euhticwwps0es84xcv399jk&dl=1",
        },
        {
            "type": ElementTypeEnum.image,
            "src": "https://www.dropbox.com/scl/fi/15f3spmu3a92b1jb82axw/2.jpg?rlkey=l6qy7oi6vxngedqtxprh6bexj&dl=1",
        },
        {
            "type": ElementTypeEnum.image,
            "src": "https://www.dropbox.com/scl/fi/7az20nk4p8sshlk6rtl6s/3.jpg?rlkey=lb8d9e8wak3p3so48dw8t9b90&dl=1",
        },
        {
            "type": ElementTypeEnum.image,
            "src": "https://www.dropbox.com/scl/fi/jmpy3ywjjusn8mcbdo19i/4.jpg?rlkey=n88jo4mafrhzgfy2xobm2aj9y&dl=1",
        },
        {
            "type": ElementTypeEnum.image,
            "src": "https://www.dropbox.com/scl/fi/0vdza5v9djsu57pahdtl9/5.jpg?rlkey=tzcur12jfgiqd7oj1khspctrf&dl=1",
        },
        {
            "type": ElementTypeEnum.image,
            "src": "https://www.dropbox.com/scl/fi/avanpuk3kg1mlx5wat6fx/6.jpg?rlkey=jotiuz2qrv3zifglj7t6zeiwh&dl=1",
        },

        {
            "type": ElementTypeEnum.button,
            "src": paymentLink,
        },
        {
            "type": ElementTypeEnum.image,
            "src": "https://www.dropbox.com/scl/fi/79ha8wyyu93gfvju46e24/cake-2.gif?rlkey=u4zo8hn45n1pps62ya2o7sdr9&dl=1",
        },
        {
            "type": ElementTypeEnum.image,
            "src": "https://www.dropbox.com/scl/fi/9vczfvy72cu00shwdxyec/7.jpg?rlkey=nnnz7djf9wcbb0zewrx4ka25r&dl=1",
        },
        {
            "type": ElementTypeEnum.image,
            "src": "https://www.dropbox.com/scl/fi/c2ykqyf6zuiczteoizlx6/8.jpg?rlkey=pd6hdxrdxqr33aytt90fnbyv7&dl=1",
        },
        {
            "type": ElementTypeEnum.button,
            "src": paymentLink,
        },



    ];


    return (
        <div className="bg-white text-pink-700">

            <a href={paymentLink} target="_blank" className="py-3 px-6 fixed bottom-8 right-8 rounded-2xl font-bold bg-pink-600 text-rose-200 animate-bounce ease-in-out text-xl">
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
                            return <ButtonBuy colors={["bg-pink-500","bg-pink-600","bg-rose-500","bg-rose-600" ]} key={index} link={paymentLink}/>
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




