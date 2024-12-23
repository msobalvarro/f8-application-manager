import { ContainerViewLayout } from '@/components/ContainerView'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { ProductImage } from '@/components/product/productImage'
import { Button, Input } from 'native-base'
import { UiStyles } from '@/styles'
import { TitleView } from '@/components/TitleView'
import { handleImagePickerService } from '@/services/imagePicker'
import { IconNewImage } from '@/components/Icons'

export default function NewProduct() {
  const [images, setImages] = useState<string[]>([])

  const handleImage = async () => {
    const newImages = await handleImagePickerService()
    setImages([...images, ...newImages])
  }

  return (
    <ContainerViewLayout scroll>
      <View style={styles.container}>
        <TitleView
          title='Nuevo Producto'
          subtitle='Agrega un nuevo producto a tu pagina web, agrega imagenes y una descripción'
          Icon={<IconNewImage />}
          onClickAdd={handleImage} />

        <View style={styles.imageContainer}>
          {images.map((image, i) =>
            <ProductImage
              onDelete={() => setImages(images.filter((_, index) => index !== i))}
              key={i}
              source={image} />)}
        </View>

        <View style={styles.inputContainer}>
          <Input style={UiStyles.InputStyle} placeholder='Nombre del Producto' />

          <Input multiline height={200} style={UiStyles.InputStyle} placeholder='Escriba una descripción del producto' />
        </View>

        <Button colorScheme='blueGray'>Agregar Producto</Button>
      </View>
    </ContainerViewLayout>
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