/* eslint-disable import/no-duplicates */
import {
  differenceInCalendarDays as distance,
  format,
  formatDistanceToNowStrict
} from 'date-fns'
import { fr, enGB } from 'date-fns/locale'

const locales = { fr, enGB }

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      distance,
      format: (date: number | Date, pattern: string) =>
        format(date, pattern, {
          locale: locales[nuxtApp.$i18n.locale.value as keyof typeof locales]
        }),
      distanceToNow: (date: number | Date) =>
        formatDistanceToNowStrict(date, {
          addSuffix: true,
          locale: locales[nuxtApp.$i18n.locale.value as keyof typeof locales]
        })
    }
  }
})
