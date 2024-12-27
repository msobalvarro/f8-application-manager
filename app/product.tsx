import { ContainerViewLayout } from '@/components/ContainerView'
import { ImageEditGalery } from '@/components/product/imageEditGalery'
import { TitleView } from '@/components/TitleView'
import { useAxios } from '@/hooks/useFetch'
import { ProductsResponse } from '@/interfaces'
import { UpdateProductService } from '@/services/updateProduct'
import { ProductsStyles as styles, UiStyles } from '@/styles'
import { useLocalSearchParams } from 'expo-router'
import { Button } from 'native-base'
import { useEffect, useState } from 'react'
import { TextInput, View } from 'react-native'
import { Toast, ALERT_TYPE } from 'react-native-alert-notification'

export default function Product() {
  const [loading, setLoading] = useState(false)
  const { id } = useLocalSearchParams<{ id: string }>()
  const [product, setProduct] = useState<ProductsResponse | null>(null)
  const { data, isLoading, refetch } = useAxios<ProductsResponse>({ endpoint: `/products?id=${id}` })

  useEffect(() => {
    console.log(data)
    setProduct(data)
  }, [data])

  const deleteImage = (image: string) => {
    if (product?.images) {
      const updatedImages = product.images.filter(i => i !== image);
      setProduct({
        ...product,
        images: updatedImages
      })
    }
  }

  const updateProduct = async () => {
    setLoading(true)

    try {
      if (product) {
        await UpdateProductService(product)

        Toast.show({
          title: 'Producto Actualizado',
          type: ALERT_TYPE.SUCCESS,
          textBody: 'El producto se ha actualizado correctamente',
        })

        refetch()
      }
    } catch (error) {
      Toast.show({
        title: 'Error',
        type: ALERT_TYPE.WARNING,
        textBody: String(error)
      })
    } finally {
      setLoading(false)
    }
  }

  const updateArchived = async () => {
    setLoading(true)

    try {
      if (product) {
        await UpdateProductService({
          ...product,
          archived: !product.archived
        })

        Toast.show({
          title: 'Producto Actualizado',
          type: ALERT_TYPE.SUCCESS,
          textBody: `El producto ${product.archived ? 'se ha activado' : 'se ha archivado'} correctamente`,
        })

        refetch()
      }
    } catch (error) {
      Toast.show({
        title: 'Error',
        type: ALERT_TYPE.WARNING,
        textBody: String(error)
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <ContainerViewLayout scroll isLoading={isLoading} onRefresh={refetch}>
      <View style={{ paddingVertical: 30 }}>
        <TitleView
          hiddenButton
          title='Edita tu Producto'
          subtitle='Edita la informacion de tu producto, agrega nuevas imagenes, dale de baja' />
      </View>

      {product && (
        <View style={styles.productContainerList}>
          <ImageEditGalery images={product.images} onDelete={deleteImage} />

          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={v => setProduct({
                ...product,
                name: v
              })}
              value={product.name}
              style={[UiStyles.InputStyle, { fontSize: 24 }]}
              placeholder='Nombre del Producto' />

            <TextInput
              onChangeText={v => setProduct({
                ...product,
                description: v
              })}
              value={product.description}
              multiline
              numberOfLines={4}
              style={UiStyles.InputStyle}
              placeholder='Escriba una descripción del producto' />
          </View>

          <View style={styles.buttonContainer}>
            {product !== data && (
              <Button
                style={{ flex: 1 }}
                disabled={product === data}
                isLoading={loading || isLoading}
                onPress={updateProduct}
                colorScheme='green'>Guardar</Button>
            )}

            {!product.archived
              ? <Button
                onPress={updateArchived}
                style={{ flex: 1 }}
                isLoading={loading || isLoading}
                colorScheme='warning'>Archivar</Button>
              : <Button
                onPress={updateArchived}
                style={{ flex: 1 }}
                isLoading={loading || isLoading}
                colorScheme='secondary'>Activar</Button>
            }
          </View>
        </View>
      )}
    </ContainerViewLayout>
  )
}