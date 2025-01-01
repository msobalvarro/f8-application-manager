import { Colors } from '@/constants/colors'
import IconFontAwsome from '@expo/vector-icons/FontAwesome'
import IconIonic from '@expo/vector-icons/Ionicons'

export const IconAddMenu = () => <IconFontAwsome name='plus-circle' size={32} color={Colors.primary} />
export const IconDeleteImage = () => <IconFontAwsome name='remove' size={32} color='#FFF' />
export const IconNewImage = () => <IconFontAwsome name='photo' size={32} color={Colors.primary} />
export const IconBack = () => <IconFontAwsome name='chevron-left' size={20} color={Colors.backgroundLayout} />
export const IconMenu = () => <IconIonic name='menu' size={32} color={Colors.backgroundLayout} />
export const IconProductListMenu = () => <IconIonic name='list' size={32} color={Colors.light.background} />
export const IconPreference = () => <IconIonic name='settings' size={32} color={Colors.light.background} />
export const IconCreateProductMenu = () => <IconIonic name='create' size={32} color={Colors.light.background} />
export const IconLogoutProductMenu = () => <IconIonic name='lock-closed' size={32} color={Colors.light.background} />
export const IconMessageMenu = () => <IconIonic name='chatbubble-ellipses' size={32} color={Colors.light.background} />
export const IconWhatsapp = () => <IconFontAwsome name='whatsapp' size={24} color={Colors.light.background} />
export const IconCallPhone = () => <IconFontAwsome name='phone' size={24} color={Colors.light.background} />
export const IconMail = () => <IconIonic name='mail-unread-outline' size={24} color={Colors.light.background} />

