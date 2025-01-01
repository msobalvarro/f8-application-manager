import { ContainerViewLayout } from '@/components/ContainerView'
import { MessageCard } from '@/components/message/itemMessage'
import { MessageSkeleton } from '@/components/message/messageSkeleton'
import { TitleView } from '@/components/TitleView'
import { useAxios } from '@/hooks/useFetch'
import { MessagesResponse } from '@/interfaces'
import { MessageStyles as styles, UiStyles } from '@/styles'
import { Checkbox } from 'native-base'
import { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

export default function MessageView() {
  const [showArchive, toggleArchive] = useState(false)
  const [filter, setFiter] = useState('')
  const { data, isLoading, refetch } = useAxios<MessagesResponse[]>({
    endpoint: `/message?archived=${showArchive}`
  })

  const dataFilter = data?.filter((message) =>
    `${message.fullName} ${message.email} ${message.phoneNumber}`
      .toLowerCase()
      .includes(filter.toLowerCase())
  )

  const onChangeArchived = () => {
    toggleArchive(!showArchive)
    refetch()
  }

  return (
    <ContainerViewLayout scroll isLoading={isLoading} onRefresh={refetch}>
      <View style={styles.container}>
        <TitleView
          hiddenButton
          title='Mensajes'
          subtitle='Recibe y administras a tus consultas y solicitudes' />

        <Checkbox isDisabled={isLoading} isChecked={showArchive} onChange={onChangeArchived} value='archived'>
          <Text style={{ color: '#CCC', fontSize: 16 }}>Mostrar solo mensajes archivados</Text>
        </Checkbox>

        <TextInput
          placeholderTextColor='#CCC'
          placeholder='Filtrar por nombre, correo, telefónico'
          style={[UiStyles.InputStyle, { width: '100%', fontSize: 20 }]}
          value={filter}
          keyboardType='default'
          onChangeText={setFiter} />

        <View style={{ gap: 20 }}>

          {isLoading && <MessageSkeleton />}

          {!isLoading && dataFilter?.map((message, i) => (<MessageCard refetch={refetch} message={message} key={i} />))}

          {!isLoading && dataFilter?.length == 0 && (
            <Text style={{ color: 'rgba(255, 255, 255, 0.3)', fontSize: 24, alignSelf: 'center' }}>
              No hay Mensajes
            </Text>
          )}
        </View>
      </View>
    </ContainerViewLayout>
  )
}