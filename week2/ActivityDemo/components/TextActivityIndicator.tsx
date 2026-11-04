import { View, Text, ActivityIndicator } from 'react-native'


enum ActivityIndicatorSize {
    Large = 'large',
    Small = 'small'
}

interface TextActivityIndicatorProps {
    message: string,
    size?: ActivityIndicatorSize,
    color?: string
}


export default function TextActivityIndicator({message, size = ActivityIndicatorSize.Large, color='#ff0000'}: TextActivityIndicatorProps) {
  return (
    <View>
        <ActivityIndicator 
            size={size}
            color={color}
        />
      <Text>{message}</Text>
    </View>
  )
}

