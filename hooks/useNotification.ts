import * as Notifications from 'expo-notifications'
import * as Device from 'expo-device'
import { useEffect, useRef } from 'react'
import { Platform } from 'react-native'
import { MessagesResponse } from '@/interfaces'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
})

export const useNotifications = () => {
  const notificationListener = useRef<Notifications.EventSubscription>()
  const responseListener = useRef<Notifications.EventSubscription>()

  useEffect(() => {
    registerForPushNotificationsAsync()

    // Listener para recibir notificaciones en primer plano
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log('Notificación recibida:', notification)
    })

    // Listener para manejar interacciones con notificaciones
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log('Interacción con la notificación:', response)
    })

    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(notificationListener.current)
      }
      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current)
      }
    }
  }, [])

  async function newMessageNotification(message: MessagesResponse) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: `📬 Nuevo mensaje de ${message.fullName}`,
        body: message.message,
        data: {
          data: 'goes here',
          test: {
            test1: 'more data'
          }
        },
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: 2,
      },
    })
  }

  return { newMessageNotification }
}

export async function registerForPushNotificationsAsync() {
  let token
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync()
    let finalStatus = existingStatus

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync()
      finalStatus = status
    }

    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!')
      return
    }

    token = (await Notifications.getExpoPushTokenAsync()).data
    console.log('Expo Push Token:', token)
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    })
  }

  return token
}
