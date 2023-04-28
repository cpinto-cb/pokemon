import { useAppSelector } from "./hooks";
import {Card, Group, Badge, SimpleGrid} from "@mantine/core";
import {useSelector} from "react-redux";

export const Deck = () => {
    const { pokemonDeck: { cards } } = useSelector((state) => state);
    return (
        <SimpleGrid cols={3} spacing="xs" mt={10}>
            {cards.map((card) => (
                     <Card key={card.url} shadow="sm" padding="sm" radius="lg" withBorder style={{width: "100%"}}>
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
