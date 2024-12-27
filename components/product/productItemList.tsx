import { ProductsStyles as styles } from '@/styles'
import { ProductsResponse } from '@/interfaces'
import { Text, View } from 'react-native'
import { CarousellProduct } from '@/components/product/CarousellProduct'
import { Button } from 'native-base'
import { useRouter } from 'expo-router'

interface Props {
  product: ProductsResponse
}

export const ProductItem = ({ product }: Props) => {
  const navigation = useRouter()

  const handleEditProduct = () => {
    // Navigate to edit product screen
    navigation.navigate(`/product?id=${product._id}`)
  }

  return (
    <View style={styles.productContainer} key={product._id}>
      <CarousellProduct images={product.images} />

      <Text style={styles.productTitle}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>

      <View style={styles.buttonContainer}>
        <Button onPress={handleEditProduct} colorScheme='coolGray'>Editar</Button>
        <Button colorScheme='danger'>Eliminar</Button>
      </View>
    </View>
  )
}