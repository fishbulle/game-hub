import { Badge } from '@chakra-ui/react'

interface Props {
    score: number
}

const CriticScore = ({ score }: Props) => {
    let color = score > 75 ? 'green' : score > 60 ? 'yellow' : ''
  return (
    <Badge colorScheme={color} font-size='14px' paddingX={2} border-radius='4px'>{score}</Badge>
  )
}

export default CriticScore