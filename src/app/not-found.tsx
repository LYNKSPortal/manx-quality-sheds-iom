import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-background">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest">
          404 &mdash; Page Not Found
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-charcoal sm:text-5xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-charcoal-soft">
          The page you&apos;re looking for may have moved or no longer exists. Head back home,
          or get in touch if you were looking for something specific.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/" size="lg">
            Back to Home
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
          <Button href="/contact" size="lg" variant="secondary">
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
