"use client";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "À Propos", href: "#apropos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "top-3" : "top-0"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "max-w-5xl rounded-2xl bg-white/95 dark:bg-slate-900/95 px-5 py-2.5 shadow-lg backdrop-blur-md"
            : "max-w-7xl px-6 py-4 bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#accueil" className="flex items-center">
          <img
            src="/logo-light.png"
            alt="OKAPI TECH"
            className={`transition-all duration-500 dark:hidden ${scrolled ? "h-8" : "h-10"}`}
          />
          <img
            src="/logo-dark.png"
            alt="OKAPI TECH"
            className={`transition-all duration-500 hidden dark:block ${scrolled ? "h-8" : "h-10"}`}
          />
        </a>

        <div className={`hidden md:flex items-center transition-all duration-500 ${scrolled ? "gap-6" : "gap-8"}`}>
          {/* Desktop Nav */}
          <nav className={`flex items-center transition-all duration-500 ${scrolled ? "gap-6" : "gap-8"}`}>
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`font-medium text-gray-600 dark:text-slate-300 hover:text-[#1a4f6e] dark:hover:text-sky-400 transition-all duration-500 ${
                  scrolled ? "text-xs" : "text-sm"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Basculer le thème"
              className={`rounded-lg border border-[#dfe7f0] dark:border-slate-600 text-gray-500 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all duration-300 flex items-center justify-center ${
                scrolled ? "w-7 h-7" : "w-8 h-8"
              }`}
            >
              {theme === "dark" ? (
                <svg className={scrolled ? "w-3.5 h-3.5" : "w-4 h-4"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className={scrolled ? "w-3.5 h-3.5" : "w-4 h-4"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <a
              href="#contact"
              className={`rounded-lg border border-[#dfe7f0] dark:border-slate-600 font-semibold text-[#1a4f6e] dark:text-sky-400 transition-all duration-500 hover:bg-gray-50 dark:hover:bg-slate-800 ${
                scrolled ? "px-4 py-1.5 text-xs" : "px-5 py-2 text-sm"
              }`}
            >
              Contact
            </a>
            <a
              href="#services"
              className={`rounded-lg font-semibold text-white transition-all duration-500 hover:opacity-90 ${
                scrolled ? "px-4 py-1.5 text-xs" : "px-5 py-2 text-sm"
              }`}
              style={{ backgroundColor: "#fe6e00" }}
            >
              Commencer
            </a>
          </div>
        </div>

        {/* Hamburger + toggle (mobile) */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Basculer le thème"
            className="p-2 rounded-lg text-gray-500 dark:text-slate-300"
          >
            {theme === "dark" ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          <button
            className="p-2 rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-0.5 bg-gray-700 dark:bg-slate-300 mb-1.5 transition-all" />
            <div className="w-5 h-0.5 bg-gray-700 dark:bg-slate-300 mb-1.5 transition-all" />
            <div className="w-5 h-0.5 bg-gray-700 dark:bg-slate-300 transition-all" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-700 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-700 dark:text-slate-300 hover:text-[#1a4f6e] dark:hover:text-sky-400"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-lg text-sm font-semibold text-white text-center"
            style={{ backgroundColor: "#fe6e00" }}
          >
            Nous contacter
          </a>
        </div>
      )}
    </header>
  );
}
