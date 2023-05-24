import "./globals.css";
import Footer from "./home/Footer.jsx";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Moving Cost Estimator",
  description: "An Open AI, NextJS, Tailwind project by Trevor Brown",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
      </head>

      <body className={inter.className}>
        {" "}
        {children}
        <Footer />
      </body>
    </html>
  );
}
