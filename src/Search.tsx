import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import {Autocomplete, Button, Grid} from '@mantine/core';
import Fetcher from "./Fetcher";
import deckSlice from './deckSlice'
import { AxiosResponse } from 'axios';

const { addToDeck } = deckSlice.actions

export const Search = () => {
    const dispatch = useDispatch()
    const [names, setNames]  = useState([]);
    const [cards, setCards] = useState<{name: string, url: string}[]>([]);
    const [count, setCount] = useState(0);
    const [value, setValue] = useState('');
    const [found, setFound] = useState(false);
    // const [currentCard, setCurrentCard] = useState<{name: string | undefined, url: string | undefined}>({url: '', name: ''});

    const addCard = () => {
        const find = cards.find((card) => card.name === value) || { name: '', url: '' };
        const saveCardToDeck = (response: AxiosResponse) => {
            const { url } = find;
            const { data : { name, sprites: { front_default: image } }} = response;
            dispatch(addToDeck({url, name, image}));
        }
        if (find !== undefined) {
            Fetcher(find.url, {}, saveCardToDeck, null);
        }
    }
    const change = (inputValue:string ) => {
        setValue(inputValue);
        const find = cards.find((card) => card.name === inputValue);
        setFound(find !== undefined);
    }
    const saveCards = (response: any) => {
        const { data: { results } } = response;
        setCards(results);
        const pokemonNames = results.map((p: { name: string, url: string }) => (p.name));
        setNames(pokemonNames);
        setCount(results.length);
    }
    useEffect(() => {
        Fetcher('https://pokeapi.co/api/v2/pokemon',{limit: 2000}, saveCards, null);
    }, [])

    if (names.length > 0) {
        return (
                <Grid grow gutter={3}>
                    <Grid.Col span={8}>

                    <Autocomplete
                        placeholder={`Pick one of the ${count} pokemon available`}
                        onChange={change}
                        data={names}
                    />
                    </Grid.Col>

                    <Grid.Col span={4} bottom>
                        <Button style={{height: '100%'}} onClick={addCard} disabled={!found}>Add Card</Button>
                    </Grid.Col>
                </Grid>
        );
    }
    return <div>Loading pokemon list</div>
}
