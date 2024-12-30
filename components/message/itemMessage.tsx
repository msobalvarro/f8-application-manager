
import { MessagesResponse } from '@/interfaces'
import { MessageItemStyles as styles } from '@/styles'
import { Button } from 'native-base'
import { View, Text, ScrollView } from 'react-native'
import { ContactButtons } from './contactCard'
import { useState } from 'react'
import { handledArchiveMessage, handleDeleteMessage } from '@/services/messageServices'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

interface Props {
  message: MessagesResponse
  refetch: () => void
}

export const MessageCard = ({ message, refetch }: Props) => {
  const [loading, setLoading] = useState(false)

  const handleDelete = async () => {
    await handleDeleteMessage(message._id, setLoading)
    refetch()
  }

  const handledArchive = async () => {
    await handledArchiveMessage(message._id, setLoading)
    refetch()
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>Message from {message.fullName}</Text>
        <Text style={styles.time}>{dayjs(message.createdAt).fromNow()}</Text>
        <Text style={styles.subHeader}>{message.company}</Text>

        <View style={styles.detailContainer}>
          <Text style={styles.detailTitle}>Email:</Text>
          <Text style={styles.detailText}>{message.email}</Text>
        </View>

        <View style={styles.detailContainer}>
          <Text style={styles.detailTitle}>Phone:</Text>
          <Text style={styles.detailText}>{message.phoneNumber}</Text>
        </View>

        <View style={styles.messageContainer}>
          <Text style={styles.messageTitle}>Message:</Text>
          <Text style={styles.messageText}>{message.message}</Text>
        </View>

        <ContactButtons
          email={message.email}
          whatsapp={message.phoneNumber}
          phoneNumber={message.phoneNumber} />

        <View style={styles.containerButtons}>
          {!message?.archived && <Button
            isLoading={loading}
            onPress={handledArchive}
            style={{ flex: 1 }}
            colorScheme='warning'>Archivar</Button>}

          {message?.archived && (
            <Button
              isLoading={loading}
              onPress={handledArchive}
              style={{ flex: 1 }}
              colorScheme='success'>Recuperar</Button>
          )}

          <Button
            isLoading={loading}
            style={{ flex: 1 }}
            onPress={handleDelete}
            colorScheme='rose'>
            Eliminar
          </Button>
        </View>
      </View>
    </ScrollView>
  )
}
