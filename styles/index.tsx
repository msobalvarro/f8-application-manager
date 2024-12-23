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
    // gap: 10,
  },
  image: {
    width: WidthScreen * 0.81,
    height: 250,
    borderRadius: 10,
  },
})

export const ContainerLayoutStyles = StyleSheet.create({
  container: {
    backgroundColor: '#2c2c2c',
    flex: 1,
    boxSizing: 'border-box',
    width: WidthScreen,
    paddingBottom: HeightScreen * 0.05,
    paddingHorizontal: WidthScreen * 0.05,
  },
  containerScroll: {
    backgroundColor: '#2c2c2c',
    boxSizing: 'border-box',
    flex:1,
    width: WidthScreen,
    height: HeightScreen,
  },
  scroll: {
    paddingHorizontal: WidthScreen * 0.05,
  }
})

export const TittleViewStyles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerTitle: {
    gap: 10,
  },
  title: {
    fontSize: 24,
    color: '#FFF',
  },
  subtitle: {
    paddingRight: 10,
    fontSize: 16,
    color: '#FFF',
  },
  button: {},
})

export const ProductImageStyles =  StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButton: {
    position: 'absolute',
    borderRadius: 10,
    top: 10,
    left: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    zIndex: 1,
  },
  image: {
    height: 200,
    width: '100%',
    zIndex: 0,
  },
})
