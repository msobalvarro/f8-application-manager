import { Image, StyleSheet, View } from 'react-native'
import logo from '@/assets/images/logo/F8_Horizontal_Logo.png'
import { Colors } from '@/constants/Colors'


export const UiNavbar = () => {
  return (
    <View style={styles.container}>
      <Image resizeMode='contain' style={styles.logo} source={logo} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    alignItems: 'center',
  },

  logo: {
    width: 256,
    height: 40,
  },
})
