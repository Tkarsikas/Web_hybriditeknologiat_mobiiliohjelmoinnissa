import { Text } from 'react-native'

interface FormattedTimeProps {
    time: number
}

export default function FormattedTime({time}: FormattedTimeProps) {
  const hours = String(Math.floor(time / 3600))
  const minutes = String(Math.floor(time / 60) % 60)
  const seconds = String(time % 60)
  
    return (

      <Text>{hours.padStart(2, '0')}.{minutes.padStart(2, '0')}.{seconds.padStart(2, '0')}</Text>

  )
}