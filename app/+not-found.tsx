import { Link, Stack } from 'expo-router'
import { View } from 'react-native'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { NotFoundStyles, NotFoundStyles as styles } from '@/styles'

export default function NotFoundScreen() {
  return (
    <View style={NotFoundStyles.container}>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView>
        <ThemedText type='title'>This screen doesn't exist.</ThemedText>
        <Link href='/' style={styles.link}>
          <ThemedText type='link'>Go to home screen!</ThemedText>
        </Link>
      </ThemedView>
    </View>
  )
}