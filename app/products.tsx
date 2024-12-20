import { CarousellProduct } from '@/components/CarousellProduct'
import { useAxios } from '@/hooks/useFetch'
import { ProductsResponse } from '@/interfaces'
import { ProductsStyles as styles } from '@/styles'
import { Fragment } from 'react'
import { Text, View } from 'react-native'

export default function ProductsTab() {
  const { data } = useAxios<ProductsResponse[]>({ endpoint: '/products' })

  return (
    <Fragment>
      <Text style={styles.title}>Products</Text>
      <View style={styles.productContainerList}>
        {data?.map(product => (
          <View style={styles.productContainer} key={product._id}>
            <CarousellProduct images={product.images} />

            <Text style={styles.productTitle}>{product.name}</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>
        ))}

      </View>
    </Fragment>
  )
}