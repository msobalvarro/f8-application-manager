import { ProductsStyles as styles } from '@/styles'
import { ProductsResponse } from '@/interfaces'
import { Text, View } from 'react-native'
import { CarousellProduct } from '@/components/product/CarousellProduct'
import { Button } from 'native-base'

interface Props {
  product: ProductsResponse
}

export const ProductItem = ({ product }: Props) => (
  <View style={styles.productContainer} key={product._id}>
    <CarousellProduct images={product.images} />

    <Text style={styles.productTitle}>{product.name}</Text>
    <Text style={styles.description}>{product.description}</Text>

    <View style={styles.buttonContainer}>
      <Button colorScheme='coolGray'>Editar</Button>
      <Button colorScheme='danger'>Eliminar</Button>
    </View>
  </View>
)