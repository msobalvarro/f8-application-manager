import { ProductsStyles as styles } from '@/styles'
import { ProductsResponse } from '@/interfaces'
import { Text, View } from 'react-native'
import { CarousellProduct } from '@/components/product/CarousellProduct'
import { Badge, Button } from 'native-base'
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

      <View style={styles.containerTitle}>
        <Text style={styles.productTitle}>
          {product.name}
        </Text>

        {product.archived && <Badge colorScheme='danger' rounded='full'>Archivado</Badge>}
      </View>
      <Text style={styles.description}>{product.description}</Text>

      <Button onPress={handleEditProduct} colorScheme='emerald'>Editar</Button>
    </View>
  )
}