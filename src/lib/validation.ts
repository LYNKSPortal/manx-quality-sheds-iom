import { z } from "zod";

export const serviceOptions = [
  "Bespoke Sheds",
  "Summer Houses",
  "Garden Rooms",
  "Decking",
  "Fencing",
  "Full Garden Transformation",
  "Not sure yet",
] as const;

export const timeframeOptions = [
  "As soon as possible",
  "Within 3 months",
  "3-6 months",
  "6-12 months",
  "Just researching",
] as const;

export const budgetOptions = [
  "Under £2,500",
  "£2,500 - £5,000",
  "£5,000 - £10,000",
  "£10,000 - £20,000",
  "£20,000+",
  "Prefer not to say",
] as const;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(120),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(6, "Please enter a valid phone number.")
    .max(30),
  service: z.enum(serviceOptions, {
    message: "Please select a service.",
  }),
  dimensions: z.string().trim().max(200).optional().or(z.literal("")),
  location: z.string().trim().min(2, "Please let us know your location.").max(200),
  timeframe: z.enum(timeframeOptions, {
    message: "Please select a timeframe.",
  }),
  budget: z.enum(budgetOptions).optional(),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more about your project.")
    .max(2000),
  // Honeypot field - should always be empty. Bots often fill every field.
  company: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
