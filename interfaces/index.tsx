export interface LoginResponse {
  error?: string
  token?: string
}

export interface StateRedux {
  isAuth: boolean
  token?: string | null
}
