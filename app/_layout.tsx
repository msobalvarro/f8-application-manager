import '@/styles/global.css'
import 'react-native-reanimated'
import * as SplashScreen from 'expo-splash-screen'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Slot, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider, View } from 'native-base'
import { useEffect } from 'react'
import { KeyboardAvoidingView, SafeAreaView, useColorScheme } from 'react-native'
import { LayoutStyles } from '@/styles'
import { ALERT_TYPE, AlertNotificationRoot, Toast } from 'react-native-alert-notification'
import { UiNavbar } from '@/components/ui/Navbar'
import { Colors } from '@/constants/Colors'
import { socket } from '@/services/socketService'
import { useStore } from '@/hooks/useStore'
import { MessagesResponse } from '@/interfaces'
import { useNotifications } from '@/hooks/useNotification'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function Layout() {
  const notification = useNotifications()
  const router = useRouter()
  const store = useStore()
  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  useEffect(() => {
    if (store.isAuth) {
      socket.on('newMessage', (data: MessagesResponse) => {
        notification(data)
      })

      socket.on('disconnect', (data) => {
        Toast.show({
          title: 'Socket desconnected',
          type: ALERT_TYPE.DANGER,
          onPress: () => {
            router.navigate('/message')
          }
        })
      })
    }
  }, [store])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AlertNotificationRoot>
        <NativeBaseProvider >
          <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={Colors.primary} />
            <SafeAreaView style={LayoutStyles.rootContainer}>
              <UiNavbar />
              <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>
                <Slot />
              </KeyboardAvoidingView>
            </SafeAreaView>
          </View>
          <StatusBar style='auto' />
        </NativeBaseProvider >
      </AlertNotificationRoot>
    </ThemeProvider >
  )
}
