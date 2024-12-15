import { LoginResponse } from '@/interfaces'
import { getGenericPassword, setGenericPassword } from 'react-native-keychain'

export const authenticationService = async (username: string, password: string): Promise<LoginResponse> => {
  const response = await fetch('http://192.168.1.3:3000/api/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  })

  const data: LoginResponse = await response.json()
  if (data?.error) throw new Error(data.error)

  if (data?.token) {
    await setGenericPassword('token', data?.token)
  }

  return data
}

export const getToken = async (): Promise<string | null> => {
  const token = await getGenericPassword('token')
  return (token && token.password) || null
}
