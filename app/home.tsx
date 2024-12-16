import { ThemedText } from '@/components/ThemedText'
import { Link } from 'expo-router'
import { Fragment } from 'react'
import { Text } from 'react-native'

export default function Index() {
  return (
    <Fragment>
      <ThemedText className='text-gray-100'>Home Screen</ThemedText>
      <Text className='text-white p-2'>Home toot Screen</Text>
      <ThemedText className='text-2xl'>Home Screen</ThemedText>
    </Fragment>
  )
}
