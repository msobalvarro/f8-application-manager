import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { IconDeleteImage } from '../Icons'

interface Props {
  source: string
  onDelete: () => void
}

export const ProductImage = ({ onDelete, source }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <IconDeleteImage />
      </TouchableOpacity>

      <Image
        source={{ uri: source }}
        resizeMode='cover'
        style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButton: {
    position: 'absolute',
    borderRadius: 10,
    top: 10,
    left: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    zIndex: 1,
  },
  image: {
    height: 200,
    width: '100%',
    zIndex: 0,
  },
})
