import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { footerNav, footerServices, legalNav } from "@/lib/data/nav";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal/10 bg-cream">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-lg font-semibold tracking-tight text-charcoal">
              {siteConfig.name}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-charcoal-soft">
              A family-run Isle of Man business with 20+ years of experience building bespoke
              sheds, summer houses, garden rooms, decking, fencing and complete garden
              transformations.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Manx Quality Sheds on Facebook"
                className="flex size-10 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-colors hover:border-forest hover:text-forest"
              >
                <FacebookIcon className="size-4" aria-hidden="true" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Manx Quality Sheds on Instagram"
                className="flex size-10 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-colors hover:border-forest hover:text-forest"
              >
                <InstagramIcon className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-sm font-semibold text-charcoal">Navigation</p>
            <ul className="mt-4 space-y-2.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-charcoal-soft transition-colors hover:text-forest"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer services">
            <p className="text-sm font-semibold text-charcoal">Services</p>
            <ul className="mt-4 space-y-2.5">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-charcoal-soft transition-colors hover:text-forest"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold text-charcoal">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-charcoal-soft">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-start gap-2.5 transition-colors hover:text-forest"
                >
                  <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.emailHref}
                  className="flex items-start gap-2.5 transition-colors hover:text-forest"
                >
                  <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>{siteConfig.address.full}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-charcoal/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-charcoal-soft">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-xs text-charcoal-soft transition-colors hover:text-forest"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
