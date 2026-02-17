import { Link } from "@/i18n/routing";

export default function LocaleNotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4">
      <h1 className="text-2xl font-bold text-slate-800">404</h1>
      <p className="max-w-md text-center text-slate-500">Página não encontrada.</p>
      <Link
        href="/who-we-serve/plant-manager"
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        Ir para a página inicial
      </Link>
    </div>
  );
}
