import { services } from "./services";

export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/projects" },
  { label: "Financing", href: "/financing" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export const servicesDropdown: NavLink[] = services.map((service) => ({
  label: service.title,
  href: `/services/${service.slug}`,
}));

export const footerNav: NavLink[] = primaryNav;

export const footerServices: NavLink[] = servicesDropdown;

export const legalNav: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookies" },
];
