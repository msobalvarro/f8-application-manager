import { ThemedText } from '@/components/ThemedText'
import { logoutService } from '@/services/authentication'
import { useRouter } from 'expo-router'
import { Button } from 'native-base'
import { Fragment } from 'react'
import { Alert, Text } from 'react-native'

export default function Index() {
  const router = useRouter()

  const logout = async () => {
    Alert.alert(
      'Cerrar Sesión',
      '¿Estás seguro de querer cerrar sesión?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Confirmar', onPress: async () => {
            await logoutService()
            router.replace('/')
          }
        },
      ],
      { cancelable: true }
    )
  }


  return (
    <Fragment>
      <ThemedText className='text-gray-100'>Home Screen</ThemedText>
      <Text className='text-xl bg-red-100 p-4'>Home toot Screen</Text>
      <ThemedText className='text-2xl'>Home Screen</ThemedText>

      <Button onPress={logout}>Cerrar Sesión</Button>
    </Fragment>
  )
}
