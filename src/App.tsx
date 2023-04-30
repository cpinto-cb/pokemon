import pokemonLogo from '/PokemonLogo.svg';

import './App.css'
import { Search } from "./Search";
import { Deck } from "./Deck";
import { Grid } from "@mantine/core";
import { DeckTable } from "./DeckTable";

function App() {

  return (
    <div style={{ width: "100%" }}>
        <a href="https://pokeapi.co/docs/v2" target="_blank">
          <img className="logo" src={pokemonLogo} alt="Pokemon logo" />
        </a>
        <Grid grow>
          <Grid.Col span={6}>
              <Search />
              <Deck />
              <DeckTable />
          </Grid.Col>
        <Grid.Col span={6}>
            History
        </Grid.Col>
        </Grid>
    </div>
  )
}

export default App
