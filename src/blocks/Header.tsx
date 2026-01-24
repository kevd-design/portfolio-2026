"use client";
import Link from "next/link";
import ThemeImage from "../components/ThemeImage";
import { usePathname } from "next/navigation";
import lightLogo from "../assets/kevd.design-logo-light.png";
import darkLogo from "../assets/kevd.design-logo-dark.png";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sm:flex place-content-between bg-white/50 dark:bg-gray-900/50 pt-16">
      <div className="content-center m-auto max-w-32 sm:ml-4">
        <Link href="/">
          <ThemeImage srcLight={lightLogo} srcDark={darkLogo} alt="kevd.design logo" />
        </Link>
      </div>
      <nav className="flex gap-8 place-content-center px-4">
        <Link
          href="/about"
          className={`content-center text-xl hover:font-bold hover:text-indigo-700 dark:hover:text-indigo-400 ${pathname === "/about" ? "font-bold text-indigo-700" : "font-light"}`}
        >
          About
        </Link>
        <a
          href="#contact"
          className="content-center text-xl font-light hover:font-bold hover:text-indigo-700 dark:hover:text-indigo-400"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
