import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Scrollytelling Portfolio",
    description: "A cinematic scrolling experience.",
};

import SmoothScrolling from "@/components/SmoothScrolling";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <SmoothScrolling>{children}</SmoothScrolling>
            </body>
        </html>
    );
}
