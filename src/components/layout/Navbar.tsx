import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, LogIn, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Docs", href: "/docs" },
];

const loginButtonClass = "bg-[#B3C5FF] text-[#0E1322] hover:bg-[#B3C5FF]/80 transition-colors";

function useScroll() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrolled;
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScroll();
  const location = useLocation();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-white/10 bg-[#0a0c14]/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-white"
        >
          <img src="/Logo.svg" alt="DevFlow logo" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active = location.pathname === item.href;

            return (
              <Link
                key={item.label}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  active
                    ? "text-[#B3C5FF]"
                    : "text-[#B3C5FF]/70 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            asChild
            variant="accent"
            className={loginButtonClass}
          >
            <Link to="/login">
              <LogIn className="mr-2 size-4" />
              Log in
            </Link>
          </Button>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10 hover:text-white md:hidden"
          aria-expanded={menuOpen}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
        </Button>
      </div>

      <div
        className={cn(
          "border-t border-white/10 bg-[#0a0c14]/95 px-4 pb-4 pt-3 backdrop-blur-md md:hidden",
          menuOpen ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col gap-1" aria-label="Mobile primary">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-4 flex flex-col gap-2">
          <Button
            asChild
            variant="ghost"
            className="justify-start text-white hover:bg-white/10 hover:text-white"
          >
            <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
              <LayoutDashboard className="mr-2 size-4" />
              Dashboard
            </Link>
          </Button>
          <Button
            asChild
            variant="default"
            className={`justify-start ${loginButtonClass}`}
          >
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              <LogIn className="mr-2 size-4" />
              Log in
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export { Navbar };
