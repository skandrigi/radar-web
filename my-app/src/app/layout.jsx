import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Radar Events",
  description: "Your Campus, Your Events. Based in College Station.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <Providers>
        <body className={inter.className}>
          {children}
        </body>
      </Providers>
    </html>
  );
}
