import { HeightScreen, WidthScreen } from '@/styles'
import { ScrollView } from 'native-base'
import { RefreshControl, StyleSheet, View } from 'react-native'

interface Props {
  children: React.ReactNode
  scroll?: boolean
  isLoading?: boolean
  onRefresh?: () => void
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c2c2c',
    flex: 1,
    boxSizing: 'border-box',
    // height: HeightScreen,
    width: WidthScreen,
    paddingBottom: HeightScreen * 0.05,
    paddingHorizontal: WidthScreen * 0.05,
  },
  containerScroll: {
    backgroundColor: '#2c2c2c',
    // flex: 1,
    boxSizing: 'border-box',
    height: HeightScreen,
    width: WidthScreen,
    paddingBottom: HeightScreen * 0.05,
  },
  scroll: {
    paddingHorizontal: WidthScreen * 0.05,
    flexGrow: 1
  }
})

export const ContainerViewLayout = ({ children, scroll, isLoading, onRefresh }: Props) => {
  if (scroll) {
    return (
      <View style={styles.containerScroll}>
        <ScrollView
          refreshControl={(onRefresh) &&
            <RefreshControl
              refreshing={Boolean(isLoading)}
              onRefresh={onRefresh} />
          } contentContainerStyle={styles.scroll}>
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
