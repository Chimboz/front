import { defineStore } from 'pinia'
import type User from '@/types/User'

export default defineStore('auth', () => {
  const user = ref<null | User>(null)
  const notifications = ref(0)
  async function login (_pseudo: string, _password: string) {
    // await useFetch('auth/login', { method: "post", body: { pseudo, password, device_name: 'browser' } })
    // user.value = (await useFetch("user")).data;
    // FIXME
    user.value = (await useFetch('/api/user')).data.value
  }

  async function logout () {
    await useFetch('logout')
    user.value = null
  }

  // FIXME
  login('', '')

  return { user, notifications, login, logout }
})
