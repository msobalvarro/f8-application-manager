import { Colors } from '@/constants/Colors'
import { PreferenceResponse, PreferencesPropierties } from '@/interfaces'
import { UiStyles } from '@/styles'
import { Button } from 'native-base'
import { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

interface Props {
  preference: PreferenceResponse
  // onChange: (value: any) => void
}

export const ItemPreference = ({ preference }: Props) => {
  const [dataForm, setData] = useState<PreferenceResponse>(preference)

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.textLabel}>Key</Text>
        <TextInput
          onChangeText={key => setData({ ...dataForm, key })}
          style={UiStyles.InputStyle}
          value={dataForm.key} />
      </View>

      <View style={[styles.subContainer, { flex: 1 }]}>
        <Text style={styles.textLabel}>Value</Text>
        <TextInput
          style={UiStyles.InputStyle}
          onChangeText={value => setData({ ...dataForm, value })}
          value={dataForm.value} />
      </View>

      {dataForm !== preference && (
        <Button colorScheme='blueGray'>Actualizar</Button>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    padding: 20,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  subContainer: {
    paddingVertical: 10,
  },
  textLabel: {
    color: '#FFF',
    paddingLeft: 5,
  }
})
