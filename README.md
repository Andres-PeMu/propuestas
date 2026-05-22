# Propuestas

Un solo proyecto React con **dos propuestas independientes**. Cada una tiene sus propios archivos; editar una no afecta la otra.

## URLs

| Propuesta | Ruta |
|-----------|------|
| Inicio (lista) | http://localhost:5173/ |
| Plataforma Educativa | http://localhost:5173/p/plataforma-educativa-ciudadana |
| Empatía ESP | http://localhost:5173/p/empatia-esp-gestion-financiera |

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

## Desarrollo

```bash
cd /Users/mac/Documents/propuestas
npm run dev
```

> Si tenías otra carpeta duplicada (`propuestas /propuestas`), usa solo **`propuestas`** (sin espacio) para evitar confusiones.
