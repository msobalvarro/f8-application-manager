import { ContainerViewLayout } from '@/components/ContainerView'
import { IconCreateProductMenu, IconLogoutProductMenu, IconPreference, IconProductListMenu } from '@/components/Icons'
import { logoutService } from '@/services/authentication'
import { MenuStyles as styles } from '@/styles'
import { Link, useRouter, } from 'expo-router'
import { Alert, Text, TouchableOpacity, View } from 'react-native'

export default function Menu() {
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
    <ContainerViewLayout scroll>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => router.navigate('/products')}>
          <IconProductListMenu />
          <Text style={styles.text}>Productos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.navigate('/newProduct')}>
          <IconCreateProductMenu />
          <Text style={styles.text}>Nuevo Producto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.navigate('/preference')}>
          
          <IconPreference />
          <Text style={styles.text}>Preferencias</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={logout}>
          <IconLogoutProductMenu />
          <Text style={styles.text}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </ContainerViewLayout>
  )
}

