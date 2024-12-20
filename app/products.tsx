import { CarousellProduct } from '@/components/CarousellProduct'
import { ContainerViewLayout } from '@/components/ContainerView'
import { TitleView } from '@/components/TitleView'
import { useAxios } from '@/hooks/useFetch'
import { ProductsResponse } from '@/interfaces'
import { ProductsStyles as styles } from '@/styles'
import { ScrollView } from 'native-base'
import { Text, View } from 'react-native'

export default function ProductsTab() {
  const { data } = useAxios<ProductsResponse[]>({ endpoint: '/products' })

  return (
    <ScrollView>
      <ContainerViewLayout>
        {/* <Text style={styles.title}>Products</Text> */}

        <TitleView title='Productos' onClickAdd={() => { }} />

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
    </ScrollView>
  )
}