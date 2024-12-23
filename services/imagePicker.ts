import * as ImagePicker from 'expo-image-picker'
import { ALERT_TYPE, Toast } from 'react-native-alert-notification'

export const handleImagePickerService = async (): Promise<string[]> => {
  const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

  if (permissionResult.granted === false) {
    Toast.show({
      type: ALERT_TYPE.DANGER,
      title: 'Permisos Requeridos',
      textBody: 'Necesitamos permisos para acceder a la galería de fotos.'
    })

    return []
  }

  const result = await ImagePicker.launchImageLibraryAsync({ allowsMultipleSelection: true })

  if (!result.canceled) {
    return result.assets.map(image => image.uri)
  } else {
    return []
  }
}