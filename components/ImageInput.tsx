import * as ImagePicker from 'expo-image-picker'
import { Button } from 'native-base'
import { ALERT_TYPE, Toast } from 'react-native-alert-notification'

interface Props {
  onChangeImages: (image: string[]) => void
}

export const ImageInput = ({ onChangeImages }: Props) => {
  const handleImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (permissionResult.granted === false) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Permisos Requeridos',
        textBody: 'Necesitamos permisos para acceder a la galería de fotos.'
      })
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({ allowsMultipleSelection: true })

    if (!result.canceled) {
      onChangeImages(result.assets.map(image => image.uri))
    }
  }

  return (
    <Button colorScheme='blueGray' onPress={handleImagePicker}>Select Image</Button>
  )
}