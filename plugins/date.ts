import {
  differenceInCalendarDays as distance,
  format,
  formatDistanceToNowStrict,
  formatDuration,
} from 'date-fns';
// @ts-ignore
import { fr, enGB } from 'date-fns/locale/index';

const locales = { fr, enGB };

export default defineNuxtPlugin((nuxt) => {
  return {
    provide: {
      distance,
      format: (date: number | Date, pattern: string) =>
        format(date, pattern, {
          // @ts-ignore
          locale: locales[nuxt.$i18n.locale.value as keyof typeof locales],
        }),
      duration: (date: Duration) =>
        formatDuration(date, {
          // @ts-ignore
          locale: locales[nuxt.$i18n.locale.value as keyof typeof locales],
        }),
      distanceToNow: (date: number | Date) =>
        formatDistanceToNowStrict(date, {
          addSuffix: true,
          // @ts-ignore
          locale: locales[nuxt.$i18n.locale.value as keyof typeof locales],
        }),
    },
  };
});
