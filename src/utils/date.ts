import { formatDistanceToNowStrict } from "date-fns";
import { fr, enGB } from "date-fns/locale";

const locales = { fr, enGB };

export function formatDate(date: number) {
  return formatDistanceToNowStrict(new Date(date), {
    locale: locales[navigator.language.split("-")[0] as keyof typeof locales],
    addSuffix: true,
  });
}
