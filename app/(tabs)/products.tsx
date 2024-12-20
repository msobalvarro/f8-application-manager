import { ThemedText } from '@/components/ThemedText'
import { useAxios, useFetch } from '@/hooks/useFetch'
import { ProductsPropierties, ProductsResponse } from '@/interfaces'
import { Fragment } from 'react'
import { ScrollView, Text, View } from 'react-native'

export default function ProductsTab() {
  const { data } = useAxios<ProductsResponse[]>({ endpoint: '/products' })

  return (
    <Fragment>
      <Text>Products</Text>

      {data?.map(product => (
        <View key={product._id}>
          <ThemedText>{product.name}</ThemedText>
          <ThemedText>{product.description}</ThemedText>
        </View>
      ))}
    </Fragment>
  )
}