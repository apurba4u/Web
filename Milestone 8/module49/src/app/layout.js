import dns from 'node:dns'
dns.setServers(['8.8.8.8','8.8.4.4'])


import {  Montserrat, Poppins } from "next/font/google";
import "./globals.css";


// entire file e poppins font use
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400','500','700','600']
})


// other file e use korar korar jonno export kore dibo
export const montserrat = Montserrat({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400','500','700','600']
})

export const metadata = {
  title: "Module 46",
  description: "A simple Next.js app to demonstrate the use of Tailwind CSS and Google Fonts.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={` h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col ${poppins.className}`}>
        <main className="w-11/12 mx-auto">{children}</main>
      </body>
    </html>
  );
}
