import { format } from "date-fns";
import nb from "date-fns/locale/nb";

export function formaterDato(dato: string, dateFnsformat = 'Pp') {
  return format(new Date(dato), dateFnsformat, { locale: nb });
}
