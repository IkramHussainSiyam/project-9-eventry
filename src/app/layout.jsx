import ToastContainer from "@/components/ToastContainer";
import Navbar from "@/components/ui/Navbar";
import dbConnect from "@/services/mongo";
import { Inter } from "next/font/google";
import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Eventry | Project 9 | LWS",
  description: "This is project 9 from lws reactive accelerator course.",
};

export default async function RootLayout({ children }) {
  await dbConnect();

  return (
    <html lang="en">
      <body className={fontSans.variable}>
        <Navbar />
        <main>{children}</main>

        <ToastContainer />
      </body>
    </html>
  );
}
