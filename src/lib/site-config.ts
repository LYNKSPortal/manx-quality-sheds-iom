// Central business information for Manx Quality Sheds.
// Update this file to change contact details, address, or social links
// site-wide without touching individual components.

export const siteConfig = {
  name: "Manx Quality Sheds",
  shortName: "Manx Quality Sheds",
  tagline: "Bespoke Outdoor Spaces. Built on the Isle of Man.",
  description:
    "Family-run Isle of Man business with 20+ years of experience building bespoke sheds, summer houses, garden rooms, decking, fencing and complete garden transformations.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.manxqualitysheds.com",
  phone: "07624 424127",
  phoneHref: "tel:+447624424127",
  email: "manxqualitysheds@gmail.com",
  emailHref: "mailto:manxqualitysheds@gmail.com",
  social: {
    facebook: "https://www.facebook.com/manxqualitysheds",
    facebookHandle: "manxqualitysheds",
    facebookFollowers: "3.2K+",
    instagram: "https://www.instagram.com/manxqualitysheds",
  },
  address: {
    line1: "5 Rosemount",
    line2: "Douglas",
    region: "Isle of Man",
    postcode: "IM1 3HQ",
    country: "Isle of Man",
    full: "5 Rosemount, Douglas, Isle of Man, IM1 3HQ",
  },
  founded: "20+ years of experience",
  serviceArea: "The Isle of Man",
} as const;

export type SiteConfig = typeof siteConfig;
