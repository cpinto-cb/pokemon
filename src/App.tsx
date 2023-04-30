import pokemonLogo from '/PokemonLogo.svg';

import './App.css'
import { Search } from "./Search";
import { Deck } from "./Deck";
import { Grid } from "@mantine/core";
import { DeckTable } from "./DeckTable";
import { HistoryTable } from "./HistoryTable";

function App() {

  return (
    <div style={{ width: "100%" }}>
        <a href="https://pokeapi.co/docs/v2" target="_blank">
          <img className="logo" src={pokemonLogo} alt="Pokemon logo" />
        </a>
        <Grid grow>
          <Grid.Col span={4}>
              <Search />
              <Deck />
              <DeckTable />
          </Grid.Col>
            <Grid.Col span={4}>
                Pokemon Info
            </Grid.Col>
        <Grid.Col span={4}>
            <HistoryTable />
        </Grid.Col>
        </Grid>
    </div>
  )
}

export default App
