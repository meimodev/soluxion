import {Geist, Geist_Mono} from "next/font/google";
import "../../app/globals.css";
import {Meta} from "next/dist/lib/metadata/generate/meta";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
});


export default function Layout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <Meta name="viewport" content="width=device-width, initial-scale=1"/>
        <body
            className={`${geistSans.className} ${geistMono.variable} antialiased scroll-smooth`}
        >
        {children}
        </body>
        </html>
    );
}

