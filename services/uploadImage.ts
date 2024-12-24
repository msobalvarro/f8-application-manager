import axios, { AxiosError } from 'axios'
import { FileUploadedResponse } from '@/interfaces'
import { serverAddress } from './axiosInstance'

export const uploadImageService = async (uri: string): Promise<string> => {
  if (!uri) throw new Error(`Image not found`)

  let formData = new FormData()
  const name = uri.split('/').pop()
  const type = `image/${name?.split('.').pop()}`
  formData.append('file', { uri, name, type } as any)

  try {
    let { data } = await axios.post<FileUploadedResponse>(
      `${serverAddress}/api/files`,
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