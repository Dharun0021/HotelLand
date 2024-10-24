import React from "react";
import Link from "next/link";
import Image from "next/image"; // Ensure you have the Image component from Next.js for your logo

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Rooms", href: "#rooms" },
  { label: "Our Story", href: "#ourstory" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-transparent z-50" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="flex items-center space-x-2">
        {/* Logo and Hotel Name */}
        <Link href="#">
          <div className="flex items-center text-yellow-800 font-bold text-xl cursor-pointer">
            <Image src="/logo.png" alt="" width={40} height={40} />
            <span className="ml-2">Royal</span>
          </div>
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-yellow-800">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="hover:text-yellow-600
             transition duration-300">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
