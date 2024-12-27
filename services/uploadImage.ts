import axios, { AxiosError } from 'axios'
import { FileUploadedResponse } from '@/interfaces'
import { serverAddress } from './axiosInstance'
import { ImagePickerAsset } from 'expo-image-picker'

export const uploadImageService = async (image: ImagePickerAsset): Promise<string> => {
  const formData = new FormData()
  formData.append('file', image as any)

  try {
    let { data } = await axios.post<FileUploadedResponse>(
      `${serverAddress}/api/files`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data; charset=utf-8;',
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

const mimeTypes: { [key: string]: string } = {
  'jpg': 'image/jpeg',
  'jpeg': 'image/jpeg',
  'png': 'image/png',
  'gif': 'image/gif',
  'webp': 'image/webp',
  'bmp': 'image/bmp',
  'svg': 'image/svg+xml',
  'tiff': 'image/tiff',
  'ico': 'image/vnd.microsoft.icon',
}

export const getMimeType = (extension: string): string => {
  const ext = extension.toLowerCase().replace('.', '')
  return mimeTypes[ext] || 'application/octet-stream'
}
