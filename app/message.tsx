import { ContainerViewLayout } from '@/components/ContainerView'
import { MessageCard } from '@/components/message/itemMessage'
import { TitleView } from '@/components/TitleView'
import { useAxios } from '@/hooks/useFetch'
import { MessagesResponse } from '@/interfaces'
import { MessageStyles as styles, UiStyles } from '@/styles'
import { useState } from 'react'
import { TextInput, View } from 'react-native'

export default function MessageView() {
  const { data, isLoading, refetch } = useAxios<MessagesResponse[]>({ endpoint: '/message' })
  const [filter, setFiter] = useState('')

  const dataFilter = data?.filter((message) =>
    `${message.fullName} ${message.email} ${message.phoneNumber}`
      .toLowerCase()
      .includes(filter.toLowerCase())
  )

  return (
    <ContainerViewLayout scroll isLoading={isLoading} onRefresh={refetch}>
      <View style={styles.container}>
        <TitleView
          hiddenButton
          title='Mensajes'
          subtitle='Recibe y administras a tus consultas y solicitudes' />

        <TextInput
          placeholder='Filtrar por Nombre, correo, número telefónico'
          style={[UiStyles.InputStyle, { width: '100%' }]}
          value={filter}
          keyboardType='default'
          onChangeText={setFiter} />

        <View style={{ gap: 20 }}>
          {dataFilter?.map((data, i) => (<MessageCard refetch={refetch} message={data} key={i} />))}
        </View>
      </View>
    </ContainerViewLayout>
  )
}