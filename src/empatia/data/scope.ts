export const empatiaScope = {
  included: [
    'MVP Fase 1: app móvil Ionic + Angular (Android / iOS)',
    'Panel web administrativo Angular (gestión financiera core)',
    'API REST Node.js + Express + PostgreSQL',
    'Módulos: ingresos, egresos, pagos, recaudos, presupuesto básico',
    'Auditoría: usuarios, roles, logs e historial de cambios',
    'Dashboard con KPIs, gráficos, morosidad y exportación PDF/Excel',
    'Diseño institucional con identidad Empatía ESP',
    'Despliegue en nube recomendada (configuración económica inicial)',
    'Capacitación inicial y documentación de operación',
    'Estrategia de respaldo y retención de datos para alto volumen',
  ],
  excluded: [
    'Facturación electrónica DIAN (la ESP ya la emite con su software actual; fuera de alcance)',
    'Integración completa con sistemas legados sin documentación',
    'Pasarela de pago en producción (se deja integración preparada; activación en fase 2)',
    'Módulos de inventario avanzado, RRHH completo o BI corporativo',
    'Hardware servidor físico (se cotiza como escenario alternativo)',
    'Migración o importación masiva de datos históricos de sistemas anteriores (la ESP opera con datos desde el go-live acordado)',
  ],
}
