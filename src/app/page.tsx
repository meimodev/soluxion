import Image from "next/image";
import FAQ from "@/app/faq";
import ButtonBuy from "@/app/buttonBuy";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Solusi Penjualan online',
    description: 'Ebook sakti untuk penjualan online berlipat ganda',
}
{/* eslint-disable @next/next/no-img-element */
}
export default function Home() {

    const imageLinks: string[] = [
        "https://www.dropbox.com/scl/fi/6ysbux8uvvsueg79wv9p7/1.jpg?rlkey=xcfs7fca3gowpa5zmflm12ba0&st=kx8wckog&dl=1",
        "https://www.dropbox.com/scl/fi/lnhpr6pc5o47uulz2slt2/2.jpg?rlkey=j42qwb0p2s70j7td6oe1e0op9&st=5zxql1b1&dl=1",
        "https://www.dropbox.com/scl/fi/jmdl7ykb9vef71fxn8v6f/3.jpg?rlkey=21p7arzkhai2z49bj6bza9qly&st=51l6qy61&dl=1",
        "https://www.dropbox.com/scl/fi/bas96na8s4d0k2hvwoptp/4.jpg?rlkey=2vjs0rikdodhe1gl06s0qk887&st=eocpbgta&dl=1",
        "https://www.dropbox.com/scl/fi/pdr5l2vbcvmj71k8dnsbl/5.jpg?rlkey=rjmz8ptiesllen98xs82xholx&st=yzjdc7ln&dl=1",
        "https://www.dropbox.com/scl/fi/c4reundc46ekuxtevps5d/6.jpg?rlkey=5rb4yjsy66gsox6y7ro7xkaxx&st=5wmu3xfw&dl=1",
        "https://www.dropbox.com/scl/fi/mkcvlx16auvgua1g79y1i/7.jpg?rlkey=k9r8wlb7jsrtcvc4g8c4d1ykz&st=jkjk6k05&dl=1",
        "https://www.dropbox.com/scl/fi/l6omyfv1odlcldfrno82m/books.gif?rlkey=gvbwwfjiq5xebzbd9p28thvcd&st=39z7e4qj&dl=1"
    ];

    const paymentLink = "https://www.mayar.id";

    return (
        <div className="bg-white text-neutral-700">

            <div
                className="max-w-2xl mx-auto   items-center justify-items-center min-h-screen ">
                <main className="flex flex-col row-start-2 items-center pb-8">
                    <img
                        src={imageLinks[0]}
                        alt="Image 1"
                    />
                    <img
                        src={imageLinks[1]}
                        alt="Image 2"
                    />
                    <img src={imageLinks[7]} alt="giff"/>
                    <img
                        src={imageLinks[2]}
                        alt="Image 3"
                    />
                    <img
                        src={imageLinks[3]}
                        alt="Image 4"
                    />

                    <img
                        src={imageLinks[4]}
                        alt="Image 5"
                    />

                    <ButtonBuy link={paymentLink}/>

                    <img
                        src={imageLinks[5]}
                        alt="Image 6"
                    />
                    <img
                        src={imageLinks[6]}
                        alt="Image 7"
                    />
                    <ButtonBuy link={paymentLink}/>

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




