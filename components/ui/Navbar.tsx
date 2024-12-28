import logo from '@/assets/images/logo/F8_Horizontal_Logo.png'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Colors } from '@/constants/Colors'
import { usePathname, useRouter } from 'expo-router'
import { IconBack, IconMenu } from '../Icons'


export const UiNavbar = () => {
  const router = useRouter()
  const pathName = usePathname()

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        {(router.canGoBack() && pathName !== '/products') && (
          <TouchableOpacity onPress={() => router.back()}>
            <IconBack />
          </TouchableOpacity>
        )}

        <Image resizeMode='contain' style={styles.logo} source={logo} />
      </View>

      {pathName !== '/menu' && (
        <TouchableOpacity onPress={() => router.navigate('/menu')}>
          <IconMenu />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },

  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    justifyContent: 'space-between',
  },

  logo: {
    width: 180,
    height: 40,
  },
})
