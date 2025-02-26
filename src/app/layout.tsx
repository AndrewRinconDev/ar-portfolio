import type { Metadata } from "next";
import { Actor, Inter, Marcellus, Orbitron} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import I18nProvider from "@/localization/provider/I18nProvider";

// const inter = Actor({ subsets: ["latin"], weight: "400"});
const inter = Marcellus({ subsets: ["latin"], weight: "400"});
// const inter = Orbitron({ subsets: ["latin"], weight: "400"});
// const inter = Inter({ subsets: ["latin"], weight: "400"});

export const metadata: Metadata = {
  title: "Andrés Rincón | Full Stack Developer",
  description: "Andrés Rincón is a Full Stack Developer based in Colombia. He specializes in building web applications using modern technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <I18nProvider>
          <Navbar />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
