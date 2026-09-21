"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { primaryNav, servicesDropdown } from "@/lib/data/nav";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  function closeMenus() {
    setIsMobileOpen(false);
    setIsServicesOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className={cn(
          "transition-all duration-300",
          isScrolled
            ? "bg-background/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.02)]"
            : "bg-background/60 backdrop-blur-sm"
        )}
      >
        <Container className="flex items-center justify-between py-5 sm:py-6">
          <Link
            href="/"
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-sm"
          >
            <Image
              src="/branding/logo-horizontal-black.png"
              alt="Manx Quality Sheds"
              width={334}
              height={36}
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-2 text-sm font-medium text-charcoal-soft transition-colors hover:text-forest"
            >
              <Phone className="size-4" aria-hidden="true" />
              {siteConfig.phone}
            </a>
            <Button href="/contact" size="md">
              Get a Free Quote
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-full p-2 text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen((v) => !v)}
          >
            {isMobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </Container>
      </div>

      <div className="hidden bg-charcoal lg:block">
        <Container>
          <nav aria-label="Primary" className="flex items-center justify-between gap-1">
            {primaryNav.map((item) => {
              const isServices = item.href === "/services";
              const isActive =
                pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

              if (isServices) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1 rounded-full px-4 py-3 text-sm font-medium transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-light",
                        isActive ? "text-white" : "text-white/70"
                      )}
                      aria-expanded={isServicesOpen}
                    >
                      {item.label}
                      <ChevronDown className="size-3.5" aria-hidden="true" />
                    </Link>
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 top-full pt-2 w-64"
                        >
                          <ul className="rounded-2xl border border-charcoal/10 bg-white p-2 shadow-lg shadow-charcoal/20">
                            {servicesDropdown.map((service) => (
                              <li key={service.href}>
                                <Link
                                  href={service.href}
                                  onClick={() => setIsServicesOpen(false)}
                                  className="block rounded-xl px-4 py-2.5 text-sm text-charcoal-soft transition-colors hover:bg-cream hover:text-forest"
                                >
                                  {service.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-3 text-sm font-medium transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-light",
                    isActive ? "text-white" : "text-white/70"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </Container>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden border-t border-charcoal/10 bg-background"
          >
            <Container className="flex flex-col gap-1 py-6">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenus}
                  className="rounded-xl px-4 py-3 text-base font-medium text-charcoal transition-colors hover:bg-cream hover:text-forest"
                >
                  {item.label}
                </Link>
              ))}
              <div className="my-2 border-t border-charcoal/10" />
              <p className="px-4 py-1 text-xs uppercase tracking-[0.18em] text-charcoal-soft">
                Services
              </p>
              {servicesDropdown.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={closeMenus}
                  className="rounded-xl px-4 py-2.5 text-sm text-charcoal-soft transition-colors hover:bg-cream hover:text-forest"
                >
                  {service.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-2 px-4 text-sm font-medium text-charcoal"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
                <Button href="/contact" size="md" className="w-full">
                  Get a Free Quote
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
