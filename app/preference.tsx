import { ContainerViewLayout } from '@/components/ContainerView'
import { TitleView } from '@/components/TitleView'
import { View } from 'native-base'
import { useState } from 'react'

export default function Preference() {
  const [loading, setLoading] = useState(false)

  const update = async () => {

  }

  return (
    <ContainerViewLayout scroll>
      <View style={{ paddingVertical: 30 }}>
        <TitleView
          hiddenButton
          title='Preferencias'
          subtitle='Establece tus preferencias para el sistema' />
      </View>
    </ContainerViewLayout>
  )
}