import {Geist, Geist_Mono} from "next/font/google";
import "../../app/globals.css";

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
        <body
            className={`${geistSans.className} ${geistMono.variable} antialiased scroll-smooth`}
        >
        {children}
        </body>
        </html>
    );
}
