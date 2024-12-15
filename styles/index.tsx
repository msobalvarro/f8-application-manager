import { Colors } from '@/constants/Colors'
import { Dimensions, StyleSheet } from 'react-native'

export const NotFoundStyles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.dark.background,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
})

export const UiStyles = StyleSheet.create({
  InputStyle: {
    backgroundColor: Colors.light.background + '10',
    borderRadius: 5,
    padding: 10,
    minWidth: 150,
    color: Colors.dark.icon,
    fontSize: 18,
    borderWidth: 1,
  },
})

export const LayoutStyles = StyleSheet.create({
  scrollContainer: {
    height: Dimensions.get('window').height
  },
  container: {
    backgroundColor: Colors.dark.background,
    gap: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
})

export const LoginStyles = StyleSheet.create({
  scrollContainer: {
    height: Dimensions.get('window').height
  },
  container: {
    backgroundColor: Colors.dark.background,
    gap: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  InputsContainer: {
    width: '70%',
    gap: 10,
  },

  imageLogo: {
    width: 128,
    height: 128,
    resizeMode: 'contain',
  }
})

