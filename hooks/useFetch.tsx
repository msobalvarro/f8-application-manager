const urlBackend = 'http://192.168.1.3:3000/api'

export const useFetch = () => {
  const fetchHttp = (endpoint: string) => fetch(`${urlBackend}/${endpoint}`)

  return { fetchHttp }
}