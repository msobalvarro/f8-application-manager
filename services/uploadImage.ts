import { axiosInstance } from './axiosInstance'

export const uploadImageService = async (image: string) => {
  if (!image) return

  let formData = new FormData()
  formData.append('file', { uri: image } as any)

  try {
    let { data } = await axiosInstance.post('/files', { data: formData })
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}