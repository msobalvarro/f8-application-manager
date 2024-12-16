import logo from '@/assets/images/logo/logo.png'
import { useState, Fragment, useEffect } from 'react'
import { LoginStyles as styles, UiStyles } from '@/styles'
import { TextInput, View } from 'react-native'
import { Button, Image, useToast } from 'native-base'
import { ThemedText } from '@/components/ThemedText'
import { authenticationService, getInitState, getToken } from '@/services/authentication'
import { useRouter } from 'expo-router'
import { useStore } from '@/hooks/useStore'

export default function Login() {
  const store = useStore()
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, toggleLoading] = useState(false)
  const toast = useToast()

  const handleLogin = async () => {
    toggleLoading(true)

    try {
      await authenticationService(username, password)
      toast.show({ description: 'Session Inciada' })
    } catch (error) {
      console.log(error)
      toast.show({ description: String(error) })
    } finally {
      toggleLoading(false)
    }
  }

  useEffect(() => {
    console.log(store)
    
    if (store.isAuth) {
      router.push('/home')
      toast.show({ description: 'Sesión Iniciada' })
      toggleLoading(false)
    }
  }, [store])

  useEffect(() => {
    getInitState()
  }, [])

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
