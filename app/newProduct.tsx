import { ContainerViewLayout } from '@/components/ContainerView'
import { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { ProductImage } from '@/components/product/productImage'
import { Button } from 'native-base'
import { UiStyles } from '@/styles'
import { TitleView } from '@/components/TitleView'
import { handleImagePickerService } from '@/services/imagePicker'
import { IconNewImage } from '@/components/Icons'
import { createProductService } from '@/services/createProduct'
import { ALERT_TYPE, Toast } from 'react-native-alert-notification'

export default function NewProduct() {
  const [loading, setLoading] = useState(false)
  const [images, setImages] = useState<string[]>([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleImage = async () => {
    const newImages = await handleImagePickerService()
    setImages([...images, ...newImages])
  }

  const submit = async () => {
    setLoading(true)
    try {
      console.log({
        imagesList: images,
        description,
        name,
      })

      const product = await createProductService({
        imagesList: images,
        description,
        name,
      })

      Toast.show({
        title: 'Producto Agregado',
        type: ALERT_TYPE.SUCCESS,
        textBody: 'El producto se ha agregado correctamente, haz click para ver',
        onPress: () => console.log('click'),
      })

      console.log(product)
    } catch (error) {
      Toast.show({
        title: String(error),
        type: ALERT_TYPE.DANGER,
      })
    } finally {
      setLoading(false)
    }
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
          <TextInput
            onChangeText={setName}
            style={UiStyles.InputStyle}
            placeholder='Nombre del Producto' />

          <TextInput
            onChangeText={setDescription}
            multiline
            numberOfLines={4}
            style={UiStyles.InputStyle}
            placeholder='Escriba una descripción del producto' />
        </View>

        <Button isLoading={loading} onPress={submit} colorScheme='blueGray'>Agregar Producto</Button>
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