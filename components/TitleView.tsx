import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconAddMenu } from './Icons'

interface Props {
  title: string
  onClickAdd: () => void
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    color: '#FFF',
  }
})


export const TitleView = ({ title, onClickAdd }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity onPress={onClickAdd}>
        <IconAddMenu />
      </TouchableOpacity>
    </View>
  )
}
