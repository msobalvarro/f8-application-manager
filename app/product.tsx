import { ContainerViewLayout } from '@/components/ContainerView'
import { IconTrash } from '@/components/Icons'
import { ImageEditGalery } from '@/components/product/imageEditGalery'
import { ProductSkeleton } from '@/components/product/productSkeleton'
import { TitleView } from '@/components/TitleView'
import { useAxios } from '@/hooks/useFetch'
import { ProductsResponse } from '@/interfaces'
import { DeleteProductService } from '@/services/deleteProduct'
import { UpdateProductService } from '@/services/updateProduct'
import { ProductsStyles as styles, UiStyles } from '@/styles'
import { router, useLocalSearchParams } from 'expo-router'
import { Button, Checkbox } from 'native-base'
import { useEffect, useState } from 'react'
import { Alert, Text, TextInput, View } from 'react-native'
import { Toast, ALERT_TYPE } from 'react-native-alert-notification'

export default function Product() {
  const [product, setProduct] = useState<ProductsResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const { id } = useLocalSearchParams<{ id: string }>()
  const { data, isLoading, refetch } = useAxios<ProductsResponse>({ endpoint: `/products?id=${id}` })

  useEffect(() => {
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

  const deleteProduct = () => {
    Alert.alert('Eliminar Producto', '¿Estas seguro de eliminar este producto?', [
      {
        text: 'Cancelar',
        style: 'cancel',
        onPress: () => { },
      },
      {
        text: 'Confirmar',
        onPress: async () => {
          setLoading(true)

          try {
            if (product) {
              await DeleteProductService(product)

              Toast.show({
                title: 'Producto Actualizado',
                type: ALERT_TYPE.SUCCESS,
                textBody: `El producto ${product.archived ? 'se ha activado' : 'se ha archivado'} correctamente`,
              })

              router.back()
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
        },
      },
    ])


  }

  return (
    <ContainerViewLayout scroll isLoading={isLoading} onRefresh={refetch}>
      <View style={{ paddingVertical: 30 }}>
        <TitleView
          onClickAdd={deleteProduct}
          Icon={<IconTrash />}
          title='Edita tu Producto'
          subtitle='Edita la informacion de tu producto, agrega nuevas imagenes, dale de baja' />
      </View>

      {isLoading && (
        <ProductSkeleton />
      )}

      {(!isLoading && product) && (
        <View style={styles.productContainerList}>
          <Checkbox
            isDisabled={loading}
            isChecked={product.pinned}
            onChange={() => setProduct({
              ...product,
              pinned: !product.pinned
            })}
            value='pinned'>
            <Text style={{ color: '#CCC', fontSize: 16 }}>
              Fijar en la pagina web F8 principal
            </Text>
          </Checkbox>

          <ImageEditGalery images={product.images} onDelete={deleteImage} />

          <View style={styles.inputContainer}>
            <TextInput
              placeholderTextColor='#CCC'
              onChangeText={v => setProduct({
                ...product,
                name: v
              })}
              value={product.name}
              style={[UiStyles.InputStyle, { fontSize: 24 }]}
              placeholder='Nombre del Producto' />

            <TextInput
              placeholderTextColor='#CCC'
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