import type { EmpatiaPaymentPhase } from '../types'

/** Inversión MVP — $50.000.000 COP; operación anual según usuarios */
export const empatiaPricing = {
  totalAmount: 50_000_000,
  note: 'Inversión única de desarrollo (MVP): **$50.000.000 COP**. La operación en nube y el soporte se cotizan en base **anual** según cantidad de usuarios. La **app móvil** se incluye y se factura desde la **Fase 1** del esquema de pagos.',
  costBenefitNote:
    'El valor cubre el alcance definido en esta propuesta. Ajustes por integraciones adicionales o cambios de alcance se formalizan por acta. Infraestructura y mantenimiento son costos anuales aparte, según tramo de usuarios.',
  userScaleNote:
    'Para Empatía ESP se estima inicialmente entre 3.000 y 8.000 usuarios finales en la app (suscriptores del servicio público) y 10–25 usuarios internos en el panel. Si el padrón supera esos tramos, el costo anual de nube y soporte se recotiza sin afectar el núcleo ya construido.',
  financialTerms: [
    'Los valores presentados contemplan retenciones, impuestos y descuentos aplicables según normativa vigente.',
    'Costos de **operación anual** (nube) y **soporte anual** dependen de la cantidad de usuarios finales e internos.',
    'El desarrollo de la **app móvil** (Ionic + Android/iOS) se ejecuta y se paga desde la **primera fase** del cronograma de pagos.',
    'Nuevos módulos y pasarelas en producción se cotizan en fases posteriores. No incluye facturación electrónica DIAN.',
    'El sistema es modular; la inversión de desarrollo no incluye años 2+ de infraestructura salvo contrato explícito.',
  ],
  paymentPhases: [
    {
      name: 'Fase 1 — Anticipo e app móvil',
      percentage: 40,
      amount: 20_000_000,
      trigger:
        'Al firmar: inicio del proyecto, diseño UX/UI y desarrollo de la app móvil Ionic + Angular (Android e iOS). Primera entrega visible en staging móvil.',
    },
    {
      name: 'Fase 2 — API y panel financiero',
      percentage: 35,
      amount: 17_500_000,
      trigger:
        'Hito en staging: API REST, módulos financieros, auditoría, dashboard web administrativo integrado con la app.',
    },
    {
      name: 'Fase 3 — Entrega MVP y go-live',
      percentage: 25,
      amount: 12_500_000,
      trigger:
        'App en tiendas (prueba o producción), panel en producción, capacitación, acta de recibido y puesta en marcha.',
    },
  ] satisfies EmpatiaPaymentPhase[],
  maintenance: {
    annualAmount: 11_400_000,
    description:
      'Plan de soporte y mantenimiento **anual** opcional (~$11.400.000 COP/año para hasta ~8.000 usuarios finales): corrección de bugs, parches de seguridad, monitoreo y hasta 120 h/año de ajustes menores. Tramo superior de usuarios: desde ~$14.500.000 COP/año. No incluye nuevos módulos.',
  },
}
