import { ContainerViewLayout } from '@/components/ContainerView'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { ImageInput } from '@/components/ImageInput'
import { Toast } from 'react-native-alert-notification'
import { ProductImage } from '@/components/product/productImage'

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
      <ImageInput onChangeImages={(data) => setImages([...(images || []), ...data])} />

      <View style={styles.container}>
        {images?.map((image, i) =>
          <ProductImage
            onDelete={() => setImages(images.filter((_, index) => index !== i))}
            key={i}
            source={image} />)}
      </View>
    </ContainerViewLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
})