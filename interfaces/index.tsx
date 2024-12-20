export interface LoginResponse {
  error?: string
  token?: string
}

export interface StateRedux {
  isAuth: boolean
  token?: string | null
}

export interface PropsAxiosIntance {
  endpoint: string
  data?: object,
  params?: object
  autoFetch?: boolean
}

export interface ProductsPropierties {
  name: string
  description: string
  unitPrice: number
  images: [string]
}

export interface ProductsResponse extends ProductsPropierties {
  _id: string
}
