import { Accordion } from "@/components/ui/Accordion";

export function FAQ() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">FAQ</h2>
        <Accordion items={[]} />
      </div>
    </section>
  );
}
