import React from "react";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Inter } from "next/font/google";
import type { Metadata } from "next/types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Opyt",
  description: "Opyt",
};

const Header = () => {
  return (
    <header className="bg-white text-white px-4 shadow-sm">
      <nav className="flex flex-col md:flex-row md:items-center md:justify-between m-4">
        <div className="flex justify-center md:justify-start mb-4 md:mb-0">
          <Image src="/images/logo/opyt_internet.png" alt="Logo" width={200} height={60} />
        </div>
        <ul className="flex flex-row justify-center gap-2">
          <li>
            <a href="#" className="bg-[#FFA500] text-white font-bold py-2 px-4 rounded">
              Assine agora
            </a>
          </li>
          <li>
            <a href="#" className="bg-[#2CD46B] hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Chama no zap
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="flex flex-col md:flex-row md:items-center md:justify-around m-4">
        <ul className="flex flex-row justify-center gap-2 items-center">
          <li className="flex items-center">
            <div className="flex justify-center md:justify-start ">
              <Image src="/images/logo/opyt_internet.png" alt="Logo" width={140} height={50} />
            </div>
            <span className="px-1 text-xs sm:text-sm mb-0 align-middle">
              @ João Flávio.
            </span>
          </li>
        </ul>
        <ul className="flex flex-row justify-center gap-2">
          <li>
            <a href="#" className="px-1 rounded">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </li>
          <li>
            <a href="#" className="px-1 rounded">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="#" className="px-1 rounded">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className={`${inter.className} flex flex-col min-h-screen`}>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default RootLayout;
