import Image from "next/image";
import logo from "../assets/kevd.design-logo.png" 
import Link from "next/link";

export default function Header() {
    return (
        <header className="mt-16 sm:flex place-content-between">
                <div className="content-center max-w-3xs m-auto sm:ml-4">
                <Link href="/">
                    <Image 
                    src= {logo}
                    alt="kevd.design logo"
                    preload
                    />
                </Link>
                </div>
                <nav className="flex gap-8 place-content-center m-4">
                <Link href="/about" className="content-center text-xl font-light hover:font-bold hover:text-indigo-700">About</Link>
                <a href="#contact" className="content-center text-xl font-light hover:font-bold hover:text-indigo-700">Contact</a>
                </nav>
        </header>
    )
}