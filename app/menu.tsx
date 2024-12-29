import { ContainerViewLayout } from '@/components/ContainerView'
import { IconCreateProductMenu, IconPreference, IconProductListMenu } from '@/components/Icons'
import { MenuStyles as styles } from '@/styles'
import { Link, useRouter, } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'
export default function Menu() {
  const router = useRouter()

  return (
    <ContainerViewLayout scroll>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => router.navigate('/product')}>
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
      </View>
    </ContainerViewLayout>
  )
}

