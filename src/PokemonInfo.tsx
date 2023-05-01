import { useAppSelector} from "./hooks";
import { RootState } from "./store";
import {Text, Card, Group, Badge, Tooltip} from "@mantine/core";
import { useState, useEffect } from 'react';
import Fetcher from "./Fetcher";

export const PokemonInfo = () => {
    const { pokemonInfo: { pokemonInfoUrl  } } = useAppSelector<RootState>((state) => state);
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [abilities, setAbilities] = useState<string[]>([]);
    const [moves, setMoves] = useState<string[]>([]);
    const [height, setHeight] = useState<number>(0);
    const [weight, setWeight] = useState<number>(0);
    const [species, setSpecies] = useState<string>('');
    const [sprites, setSprites] = useState<{spriteName: string, spriteUrl: string}[]>([]);

    const setPokemonInfo = (response: any) => {
        const {
            data: {
                height, weight, abilities, moves, sprites, name: pokemonName,
                species
            }
        } = response;
        const { front_shiny } = sprites;
        setHeight(height)
        setWeight(weight);
        setImageUrl(front_shiny);
        setName(pokemonName);
        const filteredAbilities = abilities.map((a: any) => a.ability.name);
        setAbilities(filteredAbilities);
        const filteredMoves = moves.map((a: any) => a.move.name);
        setMoves(filteredMoves);
        setSpecies(species.name);
        const attrNames = Object.getOwnPropertyNames(sprites);
        const filteredSprites = attrNames.reduce((accumlator: { spriteName: string, spriteUrl: string }[], propertyName:string) => {
            if (typeof sprites[propertyName] === 'string' ){
                accumlator.push({ spriteName: propertyName, spriteUrl: sprites[propertyName] });
            }
            return accumlator;
        }, [])
        setSprites(filteredSprites);

    }

    useEffect(() => {
        if (pokemonInfoUrl) {
            Fetcher(pokemonInfoUrl,{}, setPokemonInfo, null);
        }

    }, [pokemonInfoUrl]);
    if (pokemonInfoUrl) {
        return (
            <div style={{ border: 8, margin: 5 }}>
                <Card key="info" shadow="sm" padding="lg" radius="md">
                        <Card.Section>
                            <Badge>{name}</Badge>
                            {imageUrl ? <Card.Section><img alt={`${name}`} height={100} src={imageUrl} /></Card.Section>: null}
                            <Text>Height: {height} Weight: {weight}</Text>
                            <Text>Species: {species}</Text>
                        </Card.Section>
                    <Card.Section key="abilities">
                        <Group position="apart">
                            <Text>Abilities: {abilities.join(', ')}</Text>
                        </Group>
                    </Card.Section>
                    <Card.Section key="moves">
                        <Group position="apart" mt="md" mb="xs">
                            <Text>Moves: {moves.join(', ')}</Text>
                        </Group>
                    </Card.Section>
                    <Card.Section key="sprites">
                        {sprites.map((s) => (
                            <Tooltip
                                label={`Sprite Name: ${s.spriteName}`}
                                withArrow
                                key={s.spriteName}
                            >
                                <img alt={`${s.spriteName}`} height={100} src={s.spriteUrl} />
                            </Tooltip>
                        ))}
                    </Card.Section>

                </Card>
            </div>
        );
    }
    return null;
}

export default PokemonInfo;
