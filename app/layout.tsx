import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { LiaFacebookMessenger } from "react-icons/lia";
import { GoHomeFill } from "react-icons/go";
import { RiCompass3Line } from "react-icons/ri";
import { IoMdHeartEmpty } from "react-icons/io";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Instagram",
    description: "InstaGradus on Next.js by Gradus",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className}`}>
                <header className="py-3 border-b-2 ">
                    <div className="w-[95%] max-w-[1240px] flex justify-between items-center mx-auto my-0">
                        <img src="/Logo.png" alt="Logo" />
                        <button className="px-20 py-2 flex items-center gap-1 bg-[#FAFAFA] border border-[#DBDBDB] text-[#9C9C9C]">
                            <CiSearch color="#9C9C9C" />
                            Search
                        </button>

                        <nav className="flex gap-3">
                            <button>
                                <GoHomeFill size={30} />
                            </button>
                            <button>
                                <LiaFacebookMessenger size={30} />
                            </button>
                            <button>
                                <RiCompass3Line size={30} />
                            </button>
                            <button>
                                <IoMdHeartEmpty size={30} />
                            </button>
                            <button>
                                <div className="w-[27px] h-[27px] rounded-full bg-[#c4c4c4]"></div>
                            </button>
                        </nav>
                    </div>
                </header>
                {children}
            </body>
        </html>
    );
}
