import { ContainerViewLayout } from '@/components/ContainerView'
import { ProductItem } from '@/components/product/productItemList'
import { TitleView } from '@/components/TitleView'
import { useAxios } from '@/hooks/useFetch'
import { ProductsResponse } from '@/interfaces'
import { ProductsStyles as styles } from '@/styles'
import { useRouter } from 'expo-router'
import { View } from 'react-native'

export default function ProductsTab() {
  const router = useRouter()
  const { data, isLoading, refetch } = useAxios<ProductsResponse[]>({ endpoint: '/products' })

  const onNewProduct = () => router.navigate('/newProduct')

  return (
    <ContainerViewLayout scroll isLoading={isLoading} onRefresh={refetch}>
      <TitleView title='Productos' onClickAdd={onNewProduct} />

      <View style={styles.productContainerList}>
        {data?.map(product => <ProductItem product={product} key={product._id} />)}
      </View>
    </ContainerViewLayout>
  )
}