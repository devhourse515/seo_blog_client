import { Plus_Jakarta_Sans } from "next/font/google";
import '@/styles/styles.scss';
import GlobalProvider from "./GlobalProvider";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "ByteWave - Digital Agency & IT Service React NextJS Template",
  description: "Generated by Avitex",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={plusJakarta.className}>
          <GlobalProvider>
            {children}
            <div id="nav-full" />
            <div id="nav-sidebar" />
            <div id="cart-sidebar" />
            <div id="overlay" />
            <div id="modal" />
          </GlobalProvider>
        </body>
      </html>
  );
}
