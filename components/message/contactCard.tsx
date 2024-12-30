import { callPhone, sendEmail, sendWhatsApp } from '@/services/contactServices'
import { ContactButtonsStyles as styles } from '@/styles'
import { Text, TouchableOpacity, View } from 'react-native'
import { IconCallPhone, IconMail, IconWhatsapp } from '../Icons'

interface Props {
  email: string
  phoneNumber: string
  whatsapp: string
}

export const ContactButtons = ({ email, phoneNumber, whatsapp }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => sendWhatsApp(whatsapp)}>
        <IconWhatsapp />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => callPhone(phoneNumber)}>
        <IconCallPhone />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => sendEmail(email)}>
        <IconMail />
      </TouchableOpacity>
    </View>
  )
}

