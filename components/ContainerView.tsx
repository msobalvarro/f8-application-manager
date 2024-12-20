import { HeightScreen, WidthScreen } from '@/styles'
import { StyleSheet, View } from 'react-native'

interface Props {
  children: React.ReactNode
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c2c2c',
    flex: 1,
    boxSizing: 'border-box',
    height: HeightScreen,
    width: WidthScreen,
    paddingVertical: HeightScreen * 0.05,
    paddingHorizontal: WidthScreen * 0.05,
    // he: HeightScreen * 0.1,
  },
})

export const ContainerViewLayout = ({ children }: Props) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}
