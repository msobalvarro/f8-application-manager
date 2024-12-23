import { CarousellStyle as styles } from '@/styles'
import { Dimensions, View } from 'react-native'
import { SERVER_HOST } from '@/hooks/useFetch'
import { Image } from 'native-base'
import { ScrollView } from 'react-native'

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
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll} contentContainerStyle={{ gap: 10 }}>
        {images.map((image, k) => <RenderItemImage imageSource={image} key={k} />)}
      </ScrollView>
    </View>
  )
}