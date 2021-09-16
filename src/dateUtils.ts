import { format } from "date-fns";
import nb from "date-fns/locale/nb";

/**
 * Formatterer en dato.
 * @constructor
 * @param {string} dato - En dato representert som en string.
 * @param {string} dateFnsformat - Optional instruksjon til dateFns om hvordan datoen skal formatteres https://date-fns.org/v2.23.0/docs/format.
 */
export function formaterDato(dato: string, dateFnsformat = 'Pp') {
  return format(new Date(dato), dateFnsformat, { locale: nb });
}
