import {
  setDefaultOptions,
  differenceInCalendarDays as distance,
  format,
  formatDistanceToNowStrict,
} from "date-fns";
import { fr, enGB } from "date-fns/locale";

const locales = { fr, enGB };

setDefaultOptions({
  locale: locales[navigator.language.split("-")[0] as keyof typeof locales],
});

export function distanceToNow(date: number) {
  return formatDistanceToNowStrict(date, { addSuffix: true });
}

export { distance, format };
