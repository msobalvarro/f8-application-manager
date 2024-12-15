import logo from '@/assets/images/logo/logo.png'
import { useState, Fragment } from 'react'
import { LoginStyles as styles, UiStyles } from '@/styles'
import { KeyboardAvoidingView, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { Button, Image, Input, ScrollView, useToast } from 'native-base'
import { ThemedText } from '@/components/ThemedText'
import { authenticationService, getToken } from '@/services/authentication'
import { useRoute } from '@react-navigation/native'
import { useNavigation, useRouter } from 'expo-router'

export default function Login() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, toggleLoading] = useState(false)
  const toast = useToast()

  const handleLogin = async () => {
    try {
      await authenticationService(username, password)

      console.log(await getToken())
      router.dismissTo('/login')

      toast.show({ description: 'Session Inciada' })
    } catch (error) {
      console.log(error)
      toast.show({ description: String(error) })
    }
  }

  return (
    <Fragment>
      <Image source={logo} alt='logo' style={styles.imageLogo} />

      <ThemedText style={{ fontSize: 24 }}>Inicia Sesión</ThemedText>

      <View style={styles.InputsContainer}>
        <TextInput
          placeholder='Usuario'
          style={[UiStyles.InputStyle, { width: '100%' }]}
          value={username}
          keyboardType='default'
          onChangeText={setUsername} />

        <TextInput
          placeholder='Contraseña'
          style={[UiStyles.InputStyle, { width: '100%' }]}
          value={password}
          secureTextEntry
          onChangeText={setPassword} />

      </View>

      <Button isLoading={loading} onPress={handleLogin}>Iniciar Sesión</Button>
    </Fragment>
  )
}
