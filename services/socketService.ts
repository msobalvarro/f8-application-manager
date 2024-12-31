import * as TaskManager from 'expo-task-manager'
import * as BackgroundFetch from 'expo-background-fetch'
import { io } from 'socket.io-client'
import { SERVER_HOST } from '../hooks/useFetch'
import { getToken } from './authentication'

const SOCKET_TASK = 'background-socket-task'

const token = (async () => await getToken())()

export const socket = io(SERVER_HOST, {
  reconnection: true,
  auth: { token }
})

socket.on('connect', () => {
  console.log(socket.id)
})


TaskManager.defineTask(SOCKET_TASK, async () => {
  try {
    if (!socket.connected) {
      socket.connect()
    }

    return BackgroundFetch.BackgroundFetchResult.NewData
  } catch (error) {
    return BackgroundFetch.BackgroundFetchResult.Failed
  }
})

export async function registerSocketTask() {
  await BackgroundFetch.registerTaskAsync(SOCKET_TASK, {
    minimumInterval: 15, // Intervalo mínimo en segundos
    stopOnTerminate: false,
    startOnBoot: true,
  })
}