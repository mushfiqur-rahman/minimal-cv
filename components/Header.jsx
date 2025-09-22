import Link from "next/link";
import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import profileImage from "../public/mushfiqur.png";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between mb-4">
        <div>
          <div className="text-base font-medium mb-2">
            <h1 className="md:text-3xl text-xl font-bold">Mushfiqur Rahman</h1>
            <h2 className="font-mono text-sm">
              Web Developer | IT Support Engineer
            </h2>
          </div>
          <p>
            <a
              className="inline-flex gap-x-1.5 test-sm align-baseline leading-none hover:underline"
              href="https://www.google.com/maps/place/jashore"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Location: Jashore, Khulna, Bangladesh"
            >
              <FaMapMarkerAlt /> Jashore, Khulna, Bangladesh
            </a>
          </p>
          <div
            className="flex gap-x-2 pt-1 text-sm print:hidden"
            role="list"
            aria-label="Contact-links"
          >
            <Link
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input size-8 hover:scale-110 ease-in duration-300"
              href="mailto:mushfiq.kdu@gmail.com"
              rel="noreferrer"
              target="_blank"
              aria-label="Email"
            >
              <MdEmail />
            </Link>
            <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input size-8 hover:scale-110 ease-in duration-300">
              <Link
                href="tel:+880 1737-760068"
                rel="noreferrer"
                target="_blank"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </Link>
            </div>

            <Link
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input size-8 hover:scale-110 ease-in duration-300"
              href="https://www.linkedin.com/in/mushfiq1"
              rel="noreferrer"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input size-8 hover:scale-110 ease-in duration-300"
              href="https://github.com/mushfiqur-rahman"
              rel="noreferrer"
              target="_blank"
              aria-label="Github"
            >
              <FaGithub />
            </Link>
            <Link
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input size-8 hover:scale-110 ease-in duration-300"
              href="https://www.youtube.com/@MushfiqFeed"
              rel="noreferrer"
              target="_blank"
              aria-label="YouTube"
            >
              <BsYoutube />
            </Link>
          </div>
        </div>
        <div
          className="relative flex shrink-0 overflow-hidden rounded-xl size-28 border-2 border-gray-300"
          aria-hidden="true"
        >
          <Image
            src={profileImage}
            alt="Mushfiqur Rahman's Profile Picture"
            className="aspect-square h-full w-full dark:bg-lime-600 bg-amber-700"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
