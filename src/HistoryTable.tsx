import { Table} from "@mantine/core";
import { useAppSelector} from "./hooks";
import { RootState } from "./store";
import pokemonInfoSlice from "./pokemonInfoSlice";
import {useDispatch} from "react-redux";
const { setPokemonInfoUrl } = pokemonInfoSlice.actions


export const HistoryTable = () => {
    const { historyTable: { history  } } = useAppSelector<RootState>((state) => state);
    const dispatch = useDispatch();


    const clickedRow = (e: any) => {
        debugger;
        // @ts-ignore
        const url = e.currentTarget.getAttribute('data-url');
        dispatch(setPokemonInfoUrl(url))

    }
    const rows = history.map((info) => (
        <tr key={info.uuid} onClick={clickedRow} data-url={info.url} style={{ cursor: 'pointer' }}>
            <td>{info.event}</td>
            <td>{info.image ? <img alt={`${info.name}`} height={100} src={info.image} />: ''}</td>
            <td>{info.name}</td>
            <td>{info.date}</td>
        </tr>
    ));
    if (history.length >0) {
        return (
            <Table>
                <thead>
                <tr>
                    <th>Action</th>
                    <th>Card</th>
                    <th>Name</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        );
    }
    return null;
}

export default HistoryTable;
