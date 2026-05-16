export function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <p className="text-6xl font-bold text-slate-200">404</p>
      <h1 className="mt-4 text-xl font-semibold text-slate-800">
        Propuesta no encontrada
      </h1>
      <p className="mt-2 max-w-md text-slate-500">
        Verifica que el enlace compartido sea correcto. Cada propuesta tiene una
        ruta privada única.
      </p>
    </div>
  )
}
