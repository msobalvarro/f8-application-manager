import { ContainerViewLayout } from '@/components/ContainerView'
import {
  IconCreateProductMenu,
  IconLogoutProductMenu,
  IconMessageMenu,
  IconPreference,
  IconProductListMenu,
  IconServiceListMenu
} from '@/components/Icons'
import { TitleView } from '@/components/TitleView'
import { logoutService } from '@/services/authentication'
import { MenuStyles as styles } from '@/styles'
import { useRouter, } from 'expo-router'
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
            router.navigate('/')
          }
        },
      ],
      { cancelable: true }
    )
  }

  return (
    <ContainerViewLayout scroll>
      <View style={styles.container}>
        <TitleView
          hiddenButton
          title='F8 Menú Manager'
          subtitle='Administra tu sitio web con opciones parametrizadas'
        />

        <TouchableOpacity style={styles.button} onPress={() => router.navigate('/message')}>
          <IconMessageMenu />
          <Text style={styles.text}>Mensajes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.navigate('/services')}>
          <IconServiceListMenu />
          <Text style={styles.text}>Servicios F8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.navigate('/products')}>
          <IconProductListMenu />
          <Text style={styles.text}>Productos F8</Text>
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

