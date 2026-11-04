import { Button, ArrowRight } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="container-page grid min-h-[70vh] place-items-center py-24">
      <div className="max-w-md text-center">
        <p className="font-mono text-sm text-[var(--accent)]">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          No records matched
        </h1>
        <p className="mt-3 leading-relaxed muted">
          That page is not in the pipeline. The watermark has not moved, so nothing is
          lost. Head back to the homepage.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/" variant="primary">
            Back to portfolio <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
