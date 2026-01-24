'use client';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../assets/kevd.design-logo.png"

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="sm:flex place-content-between bg-white/50 mt-16 py-2">
            <div className="content-center max-w-3xs m-auto sm:ml-4">
                <Link href="/">
                    <Image
                        src={logo}
                        alt="kevd.design logo"
                        preload
                    />
                </Link>
            </div>
            <nav className="flex gap-8 place-content-center mt-4 px-4">
                <Link href="/about" className={`content-center text-xl hover:font-bold hover:text-indigo-700 ${pathname === "/about" ? "font-bold text-indigo-700" : "font-light"}`}>About</Link>
                <a href="#contact" className="content-center text-xl font-light hover:font-bold hover:text-indigo-700">Contact</a>
            </nav>
        </header>
    )
}