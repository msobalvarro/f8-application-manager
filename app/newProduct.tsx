import { ContainerViewLayout } from '@/components/ContainerView'
import { useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { ImageInput } from '@/components/ImageInput'
import { uploadImageService } from '@/services/uploadImage'
import { Toast } from 'react-native-alert-notification'

export default function NewProduct() {
  const [images, setImages] = useState<string[] | null>(null)

  const handleImage = async () => {

    if (!images) {
      Toast.show({ title: 'Please select an image' })
    } else {
      // await uploadImageService(image)
    }
  }

  return (
    <ContainerViewLayout scroll>
      <ImageInput onChangeImages={setImages} />

      <View>
        {images?.map((image, i) =>
          <Image
            key={i}
            source={{ uri: image }}
            resizeMode='contain'
            style={{ height: 512, width: 512 }} />)}
      </View>
    </ContainerViewLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
})