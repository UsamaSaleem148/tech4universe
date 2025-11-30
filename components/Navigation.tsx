"use client";

import { useTheme } from "@/components/ThemeProvider";
import { Moon, Sun, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Industries", href: "#industries" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsScrolled(scrollY > 50);

      const sections = [
        "home",
        "about",
        "services",
        "portfolio",
        "industries",
        "contact",
      ];
      const scrollPosition = scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const elementPosition = element.offsetTop - 100;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
      setActiveSection(targetId);
      setIsMenuOpen(false);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 py-2 sm:py-1 flex items-center justify-between min-h-[60px]",
        !isScrolled && "bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-white/10 dark:border-white/5",
        isScrolled &&
          "backdrop-blur-xl border-b border-white/20 bg-white/95 dark:bg-black/95 shadow-lg"
      )}
    >
      <div className="flex items-center">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Image
            src="/assets/logo.png"
            alt="Tech4 Universe"
            width={90}
            height={90}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain brightness-0 saturate-100"
            style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(95%) saturate(7500%) hue-rotate(0deg) brightness(95%) contrast(118%)' }}
            priority
          />
        </a>
      </div>

      <div className="hidden md:flex items-center gap-6">
        {navItems.map((item) => {
          const sectionId = item.href.replace("#", "");
          return (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                "relative px-3 py-1 text-sm font-medium transition-colors duration-300 cursor-pointer",
                activeSection === sectionId
                  ? "text-orange-600 dark:text-orange-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400"
              )}
            >
              {item.name}
            </a>
          );
        })}
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={cn(
            "p-2 rounded-full transition-colors",
            isScrolled
              ? "border border-white/20 hover:bg-white/20 dark:hover:bg-black/30"
              : "hover:bg-white/10 dark:hover:bg-black/20",
            "text-gray-700 dark:text-gray-200"
          )}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4 text-yellow-400" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </button>

        <button
          className={cn(
            "p-2 rounded-full transition-colors md:hidden",
            isScrolled
              ? "border border-white/20 hover:bg-white/20 dark:hover:bg-black/30"
              : "hover:bg-white/10 dark:hover:bg-black/20",
            "text-gray-700 dark:text-gray-200"
          )}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/98 dark:bg-black/98 backdrop-blur-xl border-b border-white/20 shadow-lg md:hidden flex flex-col py-4 px-4">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "w-full text-center py-3 text-sm font-medium transition-colors duration-300 hover:bg-white/20 dark:hover:bg-black/30 rounded-lg",
                  activeSection === sectionId
                    ? "text-orange-600 dark:text-orange-400 bg-white/10 dark:bg-black/20"
                    : "text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400"
                )}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
