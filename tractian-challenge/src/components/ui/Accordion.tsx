export type AccordionItem = {
  id: string;
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  if (items.length === 0) return null;
  return (
    <div className="divide-y border rounded-lg overflow-hidden">
      {items.map((item) => (
        <details key={item.id} className="group">
          <summary className="cursor-pointer list-none px-4 py-3 font-medium hover:bg-zinc-50">
            {item.title}
          </summary>
          <div className="px-4 py-3 text-zinc-600 border-t">
            {item.content}
          </div>
        </details>
      ))}
    </div>
  );
}
