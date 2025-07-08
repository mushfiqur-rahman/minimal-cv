import React from "react";
import Link from "next/link";

const Footer = () => {
  const current = new Date();
  const date = `${current.getFullYear()}`;
  return (
    <footer className="mt-4 mx-auto justify-center sm:flex-row">
      <p className="text-center text-[12px]">
        &copy; Copyright 2022 - {date}. All right reserved by{" "}
        <Link href="https://mushfiq.xyz">MUSHFIQ</Link>
      </p>
    </footer>
  );
};

export default Footer;
