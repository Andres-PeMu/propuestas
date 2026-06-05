# Propuestas

Un solo proyecto React con **dos propuestas independientes**. Cada una tiene sus propios archivos; editar una no afecta la otra.

## URLs

| Propuesta | Ruta |
|-----------|------|
| Inicio (lista) | http://localhost:5173/ |
| Plataforma Educativa | http://localhost:5173/p/plataforma-educativa-ciudadana |
| Empatía ESP | http://localhost:5173/p/empatia-esp-gestion-financiera |
| Rutas Bus (Yitur) | http://localhost:5173/p/agencia-viajes-bus-reservas |
| Inventario Empresarial MVP | http://localhost:5173/p/sistema-inventario-empresarial-mvp |

## Dónde está cada cosa

### Plataforma Educativa (original)

```
src/
├── components/proposal/   ProposalHero, ProposalNav
├── components/ui/         AnimatedSection, SectionHeader
├── pages/ProposalPage.tsx
├── data/proposals/educacion-politica-mvp.ts
├── lib/proposals.ts
└── types/proposal.ts
```

### Empatía ESP (nueva)

```
src/empatia/
├── data/          Un archivo por sección (meta, pricing, etc.)
├── components/    UI solo de Empatía
├── pages/EmpatiaProposalPage.tsx
├── types.ts
└── styles/empatia-theme.css
```

### Rutas Bus

```
src/rutas-bus/
├── data/
├── components/
├── pages/RutasBusProposalPage.tsx
└── styles/rutas-bus-theme.css
```

### Inventario Empresarial MVP

```
src/inventario-empresarial/
├── data/          meta, hero, alcance, firebase, costos, etc.
├── components/    UI solo de esta propuesta
├── pages/InventarioProposalPage.tsx
├── types.ts
└── styles/inventario-theme.css
```

## Desarrollo

```bash
cd /Users/mac/Documents/propuestas
npm run dev
```

> Si tenías otra carpeta duplicada (`propuestas /propuestas`), usa solo **`propuestas`** (sin espacio) para evitar confusiones.
