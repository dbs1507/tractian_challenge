import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="py-16 bg-zinc-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">CTA Section</h2>
        <Button className="mt-6">Call to Action</Button>
      </div>
    </section>
  );
}
