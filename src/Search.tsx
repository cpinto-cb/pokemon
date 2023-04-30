import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import {Autocomplete, Button, Grid} from '@mantine/core';
import Fetcher from "./Fetcher";
import deckSlice from './deckSlice'
import { AxiosResponse } from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from '@mantine/form';
import {PokemonCard} from "./Card";
import historySlice from "./historySlice";

const { addToDeck } = deckSlice.actions
const { addHistory } = historySlice.actions

export const Search = (bytes: BufferSource) => {
    const dispatch = useDispatch();
    const form = useForm({
        initialValues: {
            pokemomName: ''
        }
    });
    const [names, setNames]  = useState([]);
    const [cards, setCards] = useState<{name: string, url: string}[]>([]);
    const [count, setCount] = useState(0);
    const [value, setValue] = useState('');
    const [found, setFound] = useState(false);
    // const [currentCard, setCurrentCard] = useState<{name: string | undefined, url: string | undefined}>({url: '', name: ''});

    const addCard = (event) => {
        const find = cards.find((card) => card.name === value) || { name: '', url: '' };
        const saveCardToDeck = (response: AxiosResponse) => {
            const { url } = find;
            const { data : { name, sprites: { front_default: image } }} = response;
            dispatch(addToDeck({ uuid: uuidv4(), url, name, image}));
            setValue('');
            dispatch(addHistory({ event: 'Added Card', uuid: uuidv4(), url, name, image }));
        }
        if (find.name !== undefined) {
            Fetcher(find.url, {}, saveCardToDeck, null);
        }
        event.preventDefault();
    }
    const change = (inputValue:string ) => {
        setValue(inputValue);
        const find = cards.find((card) => card.name === inputValue) as PokemonCard | undefined;
        setFound(find !== undefined);

        if (find !== undefined){
            dispatch(addHistory({ event: 'Found card', uuid: uuidv4(), url: find.url, name: find.name, image: ''}));
        }
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
            <form onSubmit={addCard}>
                <Grid grow gutter={3}>
                    <Grid.Col span={8}>

                    <Autocomplete
                        placeholder={`Type to find one of the ${count} available Pokemon`}
                        data={names}
                        value={value}
                        onChange={change}
                    />
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <Button style={{height: '100%'}} onClick={addCard} disabled={!found}>Add Card</Button>
                    </Grid.Col>
                </Grid>
            </form>
        );
    }
    return <div>Loading pokemon list</div>
}
