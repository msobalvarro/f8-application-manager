import '@/styles/global.css'
import 'react-native-reanimated'
import * as SplashScreen from 'expo-splash-screen'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider, View } from 'native-base'
import { useEffect } from 'react'
import { KeyboardAvoidingView, ScrollView, useColorScheme } from 'react-native'
import { LayoutStyles } from '@/styles'

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
      <NativeBaseProvider >
        <KeyboardAvoidingView behavior='padding'>
          <ScrollView
            automaticallyAdjustContentInsets={true}
            contentContainerStyle={LayoutStyles.scrollContainer}
            keyboardShouldPersistTaps='always'
            keyboardDismissMode='interactive'>
            <View style={LayoutStyles.container}>
              <Slot />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        <StatusBar style='auto' />
      </NativeBaseProvider >
    </ThemeProvider >
  )
}
