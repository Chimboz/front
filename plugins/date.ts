/* eslint-disable import/no-duplicates */
import {
  differenceInCalendarDays as distance,
  format,
  formatDistanceToNowStrict,
  setDefaultOptions
} from 'date-fns'
import { fr, enGB } from 'date-fns/locale'

const locales = { fr, enGB }

setDefaultOptions({
  locale: locales.fr
})

function distanceToNow (date: number) {
  return formatDistanceToNowStrict(date, { addSuffix: true })
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$i18n.onBeforeLanguageSwitch = (_oldLocale: string, newLocale: string) => {
    setDefaultOptions({
      locale: locales[newLocale as keyof typeof locales]
    })
  }
  return {
    provide: {
      distance, format, distanceToNow
    }
  }
})
