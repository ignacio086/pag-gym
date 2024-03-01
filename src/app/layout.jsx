import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./componentes/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden w-screen bg-slate-300" style={inter.style}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}