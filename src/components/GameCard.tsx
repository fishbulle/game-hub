import { Game } from '../hooks/useGames'
import { Card, CardBody, Image, Heading, Text, HStack } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImgUrl from '../services/image-url'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {

    return (
        <Card width='350px' borderRadius={10} overflow='hidden'>
            <Image src={getCroppedImgUrl(game.background_image)} />
            <CardBody>
                <Heading fontSize='1xl'>{game.name}</Heading>
                <HStack justifyContent='space-between'>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard