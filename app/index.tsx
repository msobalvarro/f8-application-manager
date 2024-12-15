import { ThemedText } from '@/components/ThemedText'
import { Link } from 'expo-router'
import { Fragment } from 'react'

export default function Index() {
  return (
    <Fragment>
      <ThemedText>Home Screen</ThemedText>

      <Link asChild href='/login'>
        <ThemedText>Inicio de Session</ThemedText>
      </Link>
    </Fragment>
  )
}
