import { FileUploadedResponse } from '@/interfaces'
import { axiosInstance } from './axiosInstance'
import { AxiosError } from 'axios'

export const uploadImageService = async (image: string): Promise<string> => {
  if (!image) throw new Error(`Image not found`)

  let formData = new FormData()
  const fileName = image.split('/').pop(); // Extraer el nombre del archivo
  const fileType = `image/${fileName?.split('.').pop()}`; // Determinar el tipo MIME

  formData.append('file', {
    uri: image,
    name: fileName || 'upload.jpg',
    type: fileType,
  } as any)

  try {
    let { data } = await axiosInstance.post<FileUploadedResponse>(
      '/files',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },

      }
    )
    return data.file
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.error)
    } else {
      throw new Error(String(error))
    }
  }
}