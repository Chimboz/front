import {
  differenceInCalendarDays as distance,
  format as formatFns,
  formatDistanceToNowStrict,
} from "date-fns";
import { fr, enGB } from "date-fns/locale";

const locales = { fr, enGB };
const locale =
  locales[navigator.language.split("-")[0] as keyof typeof locales];

export function distanceToNow(date: number) {
  return formatDistanceToNowStrict(date, {
    locale,
    addSuffix: true,
  });
}

export { distance };

export function format(date: number, pattern: string) {
  return formatFns(date, pattern, { locale });
}
