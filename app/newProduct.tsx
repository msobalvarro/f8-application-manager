import { ContainerViewLayout } from '@/components/ContainerView'
import { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { ProductImage } from '@/components/product/productImage'
import { Button, Checkbox } from 'native-base'
import { UiStyles } from '@/styles'
import { TitleView } from '@/components/TitleView'
import { handleImagePickerService } from '@/services/imagePicker'
import { IconNewImage } from '@/components/Icons'
import { createProductService } from '@/services/createProduct'
import { ALERT_TYPE, Toast } from 'react-native-alert-notification'
import { useRouter } from 'expo-router'
import { ImagePickerAsset } from 'expo-image-picker'
import { AddImagesButton } from '@/components/product/addImagesButton'

export default function NewProduct() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [images, setImages] = useState<ImagePickerAsset[]>([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [pinned, setPinned] = useState(false)

  const handleImage = async () => {
    const newImages = await handleImagePickerService()
    setImages([...images, ...newImages])
  }

  const submit = async () => {
    setLoading(true)
    try {
      await createProductService({
        imagesList: images,
        description,
        name,
        pinned
      })

      Toast.show({
        title: 'Producto Agregado',
        type: ALERT_TYPE.SUCCESS,
        textBody: 'El producto se ha agregado correctamente, haz click para ver',
        onPress: () => console.log('click'),
      })

      router.navigate('/products')
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
          hiddenButton />

        <Checkbox isDisabled={loading} isChecked={pinned} onChange={() => setPinned(!pinned)} value='pinned'>
          <Text style={{ color: '#CCC', fontSize: 16 }}>Fijar en la pagina web F8 principal</Text>
        </Checkbox>

        <View style={styles.imageContainer}>
          {images.map((image, i) =>
            <ProductImage
              onDelete={() => setImages(images.filter((_, index) => index !== i))}
              key={i}
              source={image.uri} />)}
        </View>

        <AddImagesButton onClick={handleImage} />

        <View style={styles.inputContainer}>
          <TextInput
            placeholderTextColor='#CCC'
            onChangeText={setName}
            style={UiStyles.InputStyle}
            placeholder='Nombre del Producto' />

          <TextInput
            placeholderTextColor='#CCC'
            onChangeText={setDescription}
            multiline
            numberOfLines={10}
            style={[UiStyles.InputStyle, { height: 200 }]}
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