"use client";

import type React from "react";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { appUrl, githubUrl } from "@/constants";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Features", href: "#features-section" },
    { name: "FAQ", href: "#faq-section" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.offsetTop - headerOffset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50! w-full py-4 px-6 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-xl bg-black/20 shadow-md border-white/10"
            : "backdrop-blur-none bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="text-foreground text-xl font-semibold">
                Orca-q
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-[#888888] hover:text-foreground px-4 py-2 rounded-full font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href={appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block"
            >
              <Button className="bg-white/95 text-black hover:bg-white px-6 py-2 rounded-full font-medium shadow-sm border border-white/20">
                Open in Browser
              </Button>
            </Link>

            <a href={githubUrl}>
              <img
                src="https://img.shields.io/github/stars/cin12211/HeraQ?style=social"
                alt="stars - HeraQ"
              />
            </a>

            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-7 w-7" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="bottom"
                className="bg-background border-t border-border text-foreground"
              >
                <SheetHeader>
                  <SheetTitle className="text-left text-xl font-semibold text-foreground">
                    Navigation
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleScroll(e, item.href)}
                      className="text-[#888888] hover:text-foreground justify-start text-lg py-2"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href={appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-4"
                  >
                    <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-2 rounded-full font-medium shadow-sm">
                      Open in Browser
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
