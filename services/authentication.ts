import AsyncStorage from '@react-native-async-storage/async-storage'
import { LoginResponse } from '@/interfaces'
import { store, setAuthentication, removeAuthentication } from '@/store'
import { getGenericPassword, setGenericPassword } from 'react-native-keychain'

export const authenticationService = async (username: string, password: string): Promise<LoginResponse> => {
  const response = await fetch('http://192.168.1.3:3000/api/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  })

  const data: LoginResponse = await response.json()
  if (data?.error) throw new Error(data.error)

  if (data?.token) {
    await AsyncStorage.setItem('token', data?.token)
  }

  store.dispatch(setAuthentication(data?.token))
  return data
}

export const logoutService = async () => {
  await AsyncStorage.removeItem('token')
  store.dispatch(removeAuthentication())
}

export const getInitState = async () => {
  const token = await AsyncStorage.getItem('token')

  if (token) {
    store.dispatch(setAuthentication(token))
  }
}

export const getToken = async (): Promise<string | null> => await AsyncStorage.getItem('token')
