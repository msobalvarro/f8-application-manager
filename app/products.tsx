import { CarousellProduct } from '@/components/CarousellProduct'
import { ContainerViewLayout } from '@/components/ContainerView'
import { TitleView } from '@/components/TitleView'
import { useAxios } from '@/hooks/useFetch'
import { ProductsResponse } from '@/interfaces'
import { ProductsStyles as styles } from '@/styles'
import { ScrollView } from 'native-base'
import { ActivityIndicator, KeyboardAvoidingView, Platform, Text, View } from 'react-native'

export default function ProductsTab() {
  const { data, isLoading } = useAxios<ProductsResponse[]>({ endpoint: '/products' })

  return (
    <ContainerViewLayout scroll>
      <TitleView title='Productos' onClickAdd={() => { }} />

      {isLoading && <ActivityIndicator />}

      <View style={styles.productContainerList}>
        {data?.map(product => (
          <View style={styles.productContainer} key={product._id}>
            <CarousellProduct images={product.images} />

            <Text style={styles.productTitle}>{product.name}</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>
        ))}

      </View>
    </ContainerViewLayout>
  )
}