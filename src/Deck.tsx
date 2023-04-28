import {useAppSelector} from "./hooks";
import {Card, Group, Badge, SimpleGrid} from "@mantine/core";

export const Deck = () => {
    const { pokemonDeck: { cards } } = useAppSelector((state) => state);
    return (
        <SimpleGrid cols={3}>
            {cards.map((card) => (
                     <Card shadow="sm" padding="sm" radius="lg" withBorder style={{width: 100}}>
                         <Card.Section>
                            <img alt={`${card.name}`} height={100} src={card.image} />
                         </Card.Section>
                         <Card.Section>
                             <Group position="apart" mt="md" mb="xs">
                                 <Badge >{card.name}</Badge>
                             </Group>
                         </Card.Section>
                     </Card>
                )
            )}

        </SimpleGrid>
    )
};

export default Deck;
