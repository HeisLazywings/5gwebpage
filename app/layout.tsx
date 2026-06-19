import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "400",
    "500",
    "600",
    "700",
    "800"
  ],
  variable: "--font-poppins",
});


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: [
    "400",
    "500",
    "600",
    "700"
  ],
  variable: "--font-montserrat",
});


export const metadata: Metadata = {
  title: "5G Silver Square | Ultimate Hangout Spot in Zaria",
  description:
    "Restaurant, bakery, gym, games, VIP lounge and entertainment center in Zaria, Nigeria.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body
        className={`
        ${poppins.variable}
        ${montserrat.variable}
        antialiased
        `}
      >

        {children}

      </body>

    </html>
  );
}