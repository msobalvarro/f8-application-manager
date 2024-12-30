import { Center, Skeleton, VStack } from 'native-base'

export const MessageSkeleton = () => {
  return <Center w='100%'>
    <Skeleton.Text px='6' />
  </Center>
}