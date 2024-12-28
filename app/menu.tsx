import { ContainerViewLayout } from '@/components/ContainerView'
import { Link, } from 'expo-router'
import { View } from 'react-native'
export default function Menu() {

  return (
    <ContainerViewLayout scroll>
      <View style={{ paddingVertical: 30 }}>
        <Link href='/product'>Productos</Link>
        <Link href='/newProduct'>Nuevo Producto</Link>
        <Link href='/preference'>Preferencias</Link>
      </View>
    </ContainerViewLayout>
  )
}

