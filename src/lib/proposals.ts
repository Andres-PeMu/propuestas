import type { ProposalData } from '@/types/proposal'
import { educacionPoliticaMvp } from '@/data/proposals/educacion-politica-mvp'

const proposals: Record<string, ProposalData> = {
  [educacionPoliticaMvp.meta.slug]: educacionPoliticaMvp,
}

export function getProposalBySlug(slug: string): ProposalData | undefined {
  return proposals[slug]
}

export function getAllSlugs(): string[] {
  return Object.keys(proposals)
}
