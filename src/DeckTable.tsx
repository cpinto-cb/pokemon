import {Button, Table} from "@mantine/core";
import { useAppSelector} from "./hooks";
import { RootState } from "./store";
import deckSlice from "./deckSlice";
import {useDispatch} from "react-redux";
import {v4 as uuidv4} from "uuid";
import historySlice from "./historySlice";

const { setDeck } = deckSlice.actions
const { addHistory } = historySlice.actions

export const DeckTable = () => {
    const { pokemonDeck: { cards  } } = useAppSelector<RootState>((state) => state);
    const dispatch = useDispatch()


    const deleteCard = (e: any) => {
        const id = e.currentTarget.getAttribute('data-id');
        const newDeck = cards.filter((card) => id !== card.uuid);
        const [deletedCard] = cards.filter((card) => id === card.uuid);
        dispatch(setDeck(newDeck));
        dispatch(addHistory({
            uuid: uuidv4(),
            event: 'Deleted card',
            name: deletedCard.name,
            url: deletedCard.url,
            image: deletedCard.image,
            date: new Date().toLocaleString()
        }));

    }
    const rows = cards.map((card) => (
        <tr key={card.uuid}>
            <td><img alt={`${card.name}`} height={100} src={card.image} /></td>
            <td>{card.name}</td>
            <td><Button data-id={card.uuid} onClick={deleteCard}>Delete</Button></td>
        </tr>
    ));
    if (cards.length >0) {
        return (
            <Table>
                <thead>
                <tr>
                    <th>Card</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        );
    }
    return null;
}

export default DeckTable;
