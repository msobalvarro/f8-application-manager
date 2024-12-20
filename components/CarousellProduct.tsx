import { CarousellStyle as styles } from '@/styles'
import { Dimensions, View } from 'react-native'
import { SERVER_HOST } from '@/hooks/useFetch'
import { Image } from 'native-base'
import { ScrollView } from 'react-native'

const { width: screenWidth } = Dimensions.get('window')

interface ItemsProps {
  imageSource: string
}

function RenderItemImage({ imageSource }: ItemsProps) {
  const uri = `${SERVER_HOST}/uploads/${imageSource}`

  return <Image alt={imageSource} source={{ uri }} style={styles.image} />
}

interface Props {
  images: string[]
}


export function CarousellProduct({ images }: Props) {
  console.log(images)

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
        {images.map((image, k) => <RenderItemImage imageSource={image} key={k} />)}
      </ScrollView>
    </View>
  )
}