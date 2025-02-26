"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-customDark h-16 flex justify-between items-center px-6">
            {/* Sol Taraf (İsim) */}
            <div className="text-2xl md:text-4xl text-slate-100 font-medium whitespace-nowrap">
                Celil Akdemir
            </div>

            {/* Büyük Ekran Menüsü */}
            <div className="hidden md:flex w-full space-x-16 justify-center items-center text-xl">
                <a href="/home" className="hover:scale-110 transition-transform duration-300">Home</a>
                <a href="/about" className="hover:scale-110 transition-transform duration-300">About</a>
                <a href="/blog" className="hover:scale-110 transition-transform duration-300">Blog</a>
                <a href="/contact" className="hover:scale-110 transition-transform duration-300">Contact</a>
                <a href="/resume" className="hover:scale-110 transition-transform duration-300">Resume</a>
            </div>


            {/* Mobil Menü Butonu */}
            <button
                className="md:hidden text-white"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <X size={28}/> : <Menu size={28}/>}
            </button>

            {/* Mobil Menü */}
            {menuOpen && (
                <div
                    className={`fixed inset-0 bg-customDark opacity-100 flex flex-col items-center justify-center space-y-6 z-50 transition-opacity duration-200 ease-in transform ${
                        menuOpen ? 'opacity-100 scale-100 animate-fadeIn' : 'opacity-0 scale-95 '
                    }`}
                    style={{ animationDuration: menuOpen ? "100ms" : "1s" }}  // Özel süre ayarı

                >
                    <button
                        className="absolute top-6 right-6 text-white"
                        onClick={() => setMenuOpen(false)}
                    >
                        <X size={32}/>
                    </button>
                    <a href="/home" className="text-2xl text-white hover:text-gray-300">Home</a>
                    <a href="/about" className="text-2xl text-white hover:text-gray-300">About</a>
                    <a href="/blog" className="text-2xl text-white hover:text-gray-300">Blog</a>
                    <a href="/contact" className="text-2xl text-white hover:text-gray-300">Contact</a>
                    <a href="/resume" className="text-2xl text-white hover:text-gray-300">Resume</a>
                </div>

            )}
        </nav>
    );
}
