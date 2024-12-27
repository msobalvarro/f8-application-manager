import { StyleSheet, View } from 'react-native'
import { ProductImage } from './productImage'
import { SERVER_HOST } from '@/hooks/useFetch'

interface Props {
  images: string[]
  onDelete: (image: string) => void
}

export const ImageEditGalery = ({ images, onDelete }: Props) => {
  return (
    <View style={styles.imageContainer}>
      {images.map((image, i) =>
        <ProductImage
          onDelete={() => onDelete(image)}
          key={i}
          source={`${SERVER_HOST}/uploads/${image}`} />)}
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    gap: 20,
  },
  imageContainer: {
    gap: 20,
  },
  inputContainer: {
    gap: 20,
  }
})