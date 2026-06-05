import type { InventarioSection } from '../types'

export const inventarioDeviceSecurity: InventarioSection & {
  androidNote: string
  iosNote: string
  flowSteps: string[]
} = {
  id: 'dispositivos',
  title: 'Solo los celulares de la empresa',
  subtitle: 'Usted entrega el equipo; nosotros lo registramos para que nadie más pueda entrar',
  content:
    'Por seguridad, no cualquier celular puede usar la app: primero un administrador registra cada teléfono o tablet que la empresa entrega a sus empleados. Si alguien intenta entrar desde un celular personal no autorizado, el sistema no deja ver el inventario. Así se evita que cuentas se compartan en equipos ajenos y queda claro desde qué dispositivo se hizo cada movimiento.',
  items: [
    'La empresa define qué celulares están permitidos.',
    'Cada operario queda asociado a uno o más equipos autorizados.',
    'Celular no registrado: mensaje claro y no hay acceso a los datos.',
    'Cada movimiento queda con el nombre del usuario y del equipo usado.',
    'Desde el computador no se pide número de celular; el control estricto es en la app móvil.',
  ],
  androidNote:
    'En Android registramos un número único del aparato (como el que identifica el equipo en la red). Usted nos lo suministra o lo capturamos al dar de alta el celular en el panel.',
  iosNote:
    'En iPhone Apple no permite usar el mismo número que en Android, pero sí un código único del aparato autorizado por la marca. Funciona igual: solo los iPhone que usted registre podrán entrar.',
  flowSteps: [
    'La empresa entrega el celular o tablet al empleado.',
    'El administrador lo registra en el panel (nombre, Android o iPhone, código del equipo).',
    'Asocia ese equipo al operario que lo va a usar.',
    'El empleado instala la app e ingresa con su usuario.',
    'Si el celular no está en la lista, no puede ver ni modificar el inventario.',
  ],
}
