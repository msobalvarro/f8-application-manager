import { ProductsResponse } from '@/interfaces'
import { axiosInstance } from './axiosInstance'
import { uploadImageService } from './uploadImage'

interface Props {
  name: string
  description: string
  imagesList: string[]
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
