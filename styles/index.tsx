import { Colors } from '@/constants/Colors'
import { Dimensions, StyleSheet } from 'react-native'

export const { height: HeightScreen, width: WidthScreen } = Dimensions.get('window')

export const NotFoundStyles = StyleSheet.create({
  container: {
    height: HeightScreen,
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
    height: HeightScreen
  },
  rootContainer: {
    height: HeightScreen,
    width: WidthScreen,
  },
})

export const LoginStyles = StyleSheet.create({
  scrollContainer: {
    height: HeightScreen
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

export const ProductsStyles = StyleSheet.create({
  title: {
    paddingVertical: 50,
    fontSize: 34,
    color: '#FFF',
  },

  productContainerList: {
    gap: 50
  },

  productContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#000',
    gap: 10,
    padding: 20,
  },

  productTitle: {
    fontSize: 20,
    color: '#FFF',
  },

  description: {
    color: '#FFF',
  },

  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-end',
  },
})

export const CarousellStyle = StyleSheet.create({
  container: {
    width: WidthScreen,
    height: 250,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  scroll: {
    flexDirection: 'row',
    overflowX: 'hidden',
  },
  image: {
    width: WidthScreen * 0.85,
    height: 250,
    marginRight: 10,
    borderRadius: 10,
  },
})
