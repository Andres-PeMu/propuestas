# Propuestas comerciales

Visor de propuestas comerciales con rutas privadas por cliente. Cada propuesta solo es accesible si conoces su URL.

## Desarrollo

```bash
cd propuestas
npm install
npm run dev
```

Abre: `http://localhost:5173/p/plataforma-educativa-ciudadana`

## Agregar una nueva propuesta

1. Crea `src/data/proposals/mi-propuesta.ts` exportando un objeto `ProposalData`.
2. Regístrala en `src/lib/proposals.ts`.
3. Comparte solo: `https://tu-dominio.vercel.app/p/tu-slug`

No hay listado público de propuestas: la raíz `/` redirige a 404.

## Despliegue en Vercel

1. Conecta el repositorio o sube la carpeta `propuestas`.
2. **Root Directory:** `propuestas` (si el repo incluye la carpeta padre).
3. Build: `npm run build`
4. Output: `dist`
5. El archivo `vercel.json` ya incluye rewrites para SPA.

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/p/:slug` | Propuesta por slug |
| `/404` | No encontrada |
| `/` | Redirige a 404 (sin índice público) |
