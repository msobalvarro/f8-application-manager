import { UiStyles } from '@/styles'
import { Modal, TextInput, View } from 'react-native'

export const NewPreference = () => {
  return (
    <Modal visible statusBarTranslucent shouldRasterizeIOS presentationStyle='overFullScreen'>
      <View>
        <TextInput style={UiStyles.InputStyle} placeholder='Nuevo Preferencia' />
      </View>
    </Modal>
  )
}
