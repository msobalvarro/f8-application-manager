import { ContainerViewLayout } from '@/components/ContainerView'
import { ProductSkeleton } from '@/components/product/productSkeleton'
import { ServiceItem } from '@/components/service/itemService'
import { TitleView } from '@/components/TitleView'
import { useAxios } from '@/hooks/useFetch'
import { ServicesPropierties } from '@/interfaces'
import { ProductsStyles as styles } from '@/styles'
import { useRouter } from 'expo-router'
import { Text, View } from 'react-native'

export default function ServiceView() {
  const router = useRouter()
  const { data, isLoading, refetch } = useAxios<ServicesPropierties[]>({ endpoint: '/services' })

  // const onNewProduct = () => router.navigate('/newProduct')

  return (
    <ContainerViewLayout scroll isLoading={isLoading} onRefresh={refetch}>
      <View style={{ paddingVertical: 20 }}>
        <TitleView
          title='Servicios F8'
          subtitle='Administra todos tus servicios, agrega nuevas historias de servicios realizados y elimina los que ya no necesites'
        // onClickAdd={onNewProduct} />
        />
      </View>

      <View style={styles.productContainerList}>
        {isLoading && (
          <ProductSkeleton />
        )}

        {!isLoading && data?.map(service => <ServiceItem service={service} key={service._id} />)}
        {(!isLoading && data?.length === 0) && (
          <Text style={{ color: 'rgba(255, 255, 255, 0.3)', fontSize: 24, alignSelf: 'center' }}>
            No hay Servicios
          </Text>
        )}
      </View>
    </ContainerViewLayout>
  )
}