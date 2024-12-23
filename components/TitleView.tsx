import { Text, TouchableOpacity, View } from 'react-native'
import { TittleViewStyles as styles } from '@/styles'
import { IconAddMenu } from './Icons'

interface Props {
  title: string
  subtitle?: string
  onClickAdd: () => void
  Icon?: React.ReactElement
}

export const TitleView = ({ title, onClickAdd, Icon, subtitle }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>

      <TouchableOpacity style={styles.button} onPress={onClickAdd}>
        {Icon || <IconAddMenu />}
      </TouchableOpacity>
    </View>
  )
}
