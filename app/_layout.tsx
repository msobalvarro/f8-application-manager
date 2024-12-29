import '@/styles/global.css'
import 'react-native-reanimated'
import * as SplashScreen from 'expo-splash-screen'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider, View } from 'native-base'
import { useEffect } from 'react'
import { KeyboardAvoidingView, SafeAreaView, ScrollView, useColorScheme } from 'react-native'
import { LayoutStyles } from '@/styles'
import { AlertNotificationRoot } from 'react-native-alert-notification'
import { UiNavbar } from '@/components/ui/Navbar'
import { Colors } from '@/constants/Colors'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function Layout() {
  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

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
            <KeyboardAvoidingView behavior='padding'>
              <StatusBar backgroundColor={Colors.primary} />
              <SafeAreaView style={LayoutStyles.rootContainer}>
                <UiNavbar />
                <Slot />
              </SafeAreaView>
            </KeyboardAvoidingView>
          </View>
          <StatusBar style='auto' />
        </NativeBaseProvider >
      </AlertNotificationRoot>
    </ThemeProvider >
  )
}
