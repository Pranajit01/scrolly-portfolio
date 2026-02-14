import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Scrollytelling Portfolio",
    description: "A cinematic scrolling experience.",
};

import SmoothScrolling from "@/components/SmoothScrolling";
import Cursor from "@/components/Cursor";
import RainbowBackground from "@/components/RainbowBackground";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} cursor-none`}>
                <Cursor />
                <RainbowBackground />
                <SmoothScrolling>{children}</SmoothScrolling>
            </body>
        </html>
    );
}
