import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'


export enum ActivityIndicatorSize {
    Large = 'large',
    Small = 'small'
}

interface TextActivityIndicatorProps {
    message: string,
    size?: 'large' | 'small',
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

