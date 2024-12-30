import { ContainerViewLayout } from '@/components/ContainerView'
import { ItemPreference } from '@/components/preferences/itemPreference'
import { LoadingSekeleton } from '@/components/preferences/loadingSkeleton'
import { NewPreference } from '@/components/preferences/newPreference'
import { TitleView } from '@/components/TitleView'
import { useAxios } from '@/hooks/useFetch'
import { PreferenceResponse } from '@/interfaces'
import { PreferenceStyles as styles } from '@/styles'
import { Skeleton, View, VStack } from 'native-base'
import { useState } from 'react'

export default function Preference() {
  const { data, isLoading, refetch } = useAxios<PreferenceResponse[]>({ endpoint: '/preferences' })
  const [showModal, toggleModal] = useState(false)

  return (
    <ContainerViewLayout scroll onRefresh={refetch} isLoading={isLoading}>
      <View style={{ paddingVertical: 30, gap: 20 }}>
        <TitleView
          onClickAdd={() => toggleModal(true)}
          title='Preferencias'
          subtitle='Establece tus variables para el sitio de f8' />
        
        {isLoading && <LoadingSekeleton />}

        <View style={styles.containerList}>
          {!isLoading && data?.map((data, i) => (
            <ItemPreference refetch={refetch} preference={data} key={i} />
          ))}
        </View>

        {showModal && <NewPreference />}
      </View>
    </ContainerViewLayout>
  )
}