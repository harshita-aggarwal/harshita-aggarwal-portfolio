"use client";
import { MoonIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { SunIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { BsThreeDots } from "react-icons/bs";

const Navbar = () => {
  const {theme, toggleTheme} = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathName = usePathname();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/certification", label: "Certifications" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <nav className="navbar fixed w-full backdrop-blur-sm z-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl navbar-heading">
            Cloud Gallery&trade;
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const isActive = pathName === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={isActive ? "navbar-link-active" : "navbar-link"}
                >
                  {item.label}
                </Link>
              );
            })}
            <button onClick={toggleTheme} className="btn hover:bg-primary-hover hover:text-white transition-colors">{theme === "dark" ? <SunIcon className="w-5 h-5"/> : <MoonIcon className="w-5 h-5"/>}</button>
          </div>

          <button onClick={toggleMobileMenu} className="md:hidden btn hover:bg-primary-hover hover:text-white transition-colors">
            {isMobileMenuOpen ? (<XMarkIcon className="w-6 h-6" />) : (<BsThreeDots className="w-6 h-6"/>)}
          </button>
        </div>
        {
          isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="py-4 space-y-4">
                {
                  menuItems.map((item, index) => (
                    <div key={index} onClick={toggleMobileMenu}>
                      <Link href={item.href} className="block py-2 hover:text-primary transition-colors">{item.label}</Link>
                    </div>
                  ))
                }
                <div>
                  <button onClick={toggleTheme} className="flex items-center hover:text-primary transition-colors">{theme === "dark" ? <><SunIcon className="w-5 h-5 mr-2"/> Light Mode</> : <><MoonIcon className="w-5 h-5 mr-2"/> Dark Mode</>}</button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </nav>
  );
};

export default Navbar;
