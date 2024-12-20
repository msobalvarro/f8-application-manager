import { HeightScreen, WidthScreen } from '@/styles'
import { ScrollView } from 'native-base'
import { StyleSheet, View } from 'react-native'

interface Props {
  children: React.ReactNode
  scroll?: boolean
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
  },
  containerScroll: {
    backgroundColor: '#2c2c2c',
    flex: 1,
    boxSizing: 'border-box',
    height: HeightScreen,
    width: WidthScreen,
    paddingVertical: HeightScreen * 0.05,
  },
  scroll: {
    paddingHorizontal: WidthScreen * 0.05,
    flexGrow: 1
  }
})

export const ContainerViewLayout = ({ children, scroll }: Props) => {
  if (scroll) {
    return (
      <View style={styles.containerScroll}>
        <ScrollView contentContainerStyle={styles.scroll}>
          {children}
        </ScrollView>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}
