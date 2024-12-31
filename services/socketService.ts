import { io } from 'socket.io-client'
import { SERVER_HOST } from '../hooks/useFetch'
import { store } from '@/store'
import { getToken } from './authentication'

const token = (async () => await getToken())()

export const socket = io(SERVER_HOST, {
  reconnection: true,
  auth: { token }
})

socket.on('connect', () => {
  console.log(socket.id)
})
