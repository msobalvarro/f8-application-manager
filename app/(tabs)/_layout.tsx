import { Tabs } from 'expo-router';

export default function LayoutTabs() {
  return (
    <Tabs>
      <Tabs.Screen name='products' />
      <Tabs.Screen name='preference' />
    </Tabs>
  )
}