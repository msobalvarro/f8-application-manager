import { ContainerViewLayout } from '@/components/ContainerView'
import { MessageCard } from '@/components/message/itemMessage'
import { TitleView } from '@/components/TitleView'
import { useAxios } from '@/hooks/useFetch'
import { MessagesResponse } from '@/interfaces'
import { MessageStyles as styles } from '@/styles'
import { View } from 'react-native'

export default function MessageView() {
  const { data, isLoading, refetch } = useAxios<MessagesResponse[]>({ endpoint: '/message' })


  return (
    <ContainerViewLayout scroll isLoading={isLoading} onRefresh={refetch}>
      <View style={styles.container}>
        <TitleView
          hiddenButton
          title='Mensajes'
          subtitle='Recibe y administras a tus consultas y solicitudes' />

        <View style={{ gap: 20 }}>
          {data?.map((data, i) => (<MessageCard refetch={refetch} message={data} key={i} />))}
        </View>
      </View>
    </ContainerViewLayout>
  )
}