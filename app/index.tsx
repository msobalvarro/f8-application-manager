import logo from '@/assets/images/logo/logo.png'
import { useState, useEffect } from 'react'
import { LoginStyles as styles, UiStyles } from '@/styles'
import { Text, TextInput, View } from 'react-native'
import { Button, Image } from 'native-base'
import { ThemedText } from '@/components/ThemedText'
import { authenticationService, getInitState } from '@/services/authentication'
import { useRouter } from 'expo-router'
import { useStore } from '@/hooks/useStore'
import { ContainerViewLayout } from '@/components/ContainerView'
import { ALERT_TYPE, Toast } from 'react-native-alert-notification'

export default function Login() {
  const store = useStore()
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, toggleLoading] = useState(false)

  const handleLogin = async () => {
    toggleLoading(true)

    try {
      await authenticationService(username, password)
    } catch (error) {
      Toast.show({
        title: 'Error Authentication',
        type: ALERT_TYPE.DANGER,
        textBody: String(error),
      })
    } finally {
      toggleLoading(false)
    }
  }

  useEffect(() => {
    if (store.isAuth) {
      router.push('/menu')
      toggleLoading(false)
    }
  }, [store])

  useEffect(() => {
    getInitState()
  }, [])

  return (
    <ContainerViewLayout scroll>
      <View style={styles.container}>
        <Image source={logo} alt='logo' style={styles.imageLogo} />

        <Text style={styles.title}>
          Inicia Sesión en F8
        </Text>

        <View style={styles.InputsContainer}>
          <TextInput
            placeholderTextColor='#CCC'
            placeholder='Usuario'
            style={[UiStyles.InputStyle, { width: '100%' }]}
            value={username}
            keyboardType='default'
            onChangeText={setUsername} />

          <TextInput
            placeholderTextColor='#CCC'
            placeholder='Contraseña'
            style={[UiStyles.InputStyle, { width: '100%' }]}
            value={password}
            secureTextEntry
            onChangeText={setPassword} />

        </View>

        <Button isLoading={loading} onPress={handleLogin}>Iniciar Sesión</Button>
      </View>
    </ContainerViewLayout>
  )
}
