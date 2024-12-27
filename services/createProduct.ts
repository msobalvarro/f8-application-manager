import { ProductsResponse } from '@/interfaces'
import { axiosInstance } from './axiosInstance'
import { uploadImageService } from './uploadImage'
import { ImagePickerAsset } from 'expo-image-picker'

interface Props {
  name: string
  description: string
  imagesList: ImagePickerAsset[]
}

export const createProductService = async ({ imagesList, description, name }: Props): Promise<ProductsResponse> => {
  try {
    const images: string[] = []

    for (const image of imagesList) {
      const response = await uploadImageService(image)
      images.push(response)
    }

    const data = { images, description, name }
    const newProduct = await axiosInstance.post<ProductsResponse>('/products', data)

    return newProduct.data
  } catch (error) {
    throw new Error(String(error))
  }
}
