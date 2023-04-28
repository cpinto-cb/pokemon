import pokemonLogo from '/PokemonLogo.svg';

import './App.css'
import { Search } from "./Search";
import { Deck } from "./Deck";
import {Grid} from "@mantine/core";

function App() {

  return (
    <>
        <a href="https://pokeapi.co/docs/v2" target="_blank">
          <img src={pokemonLogo} width={500} alt="Pokemon logo" />
        </a>
        <Grid>
          <Grid.Col span={6}>
              <Search />
              <Deck />
          </Grid.Col>
        <Grid.Col span={6}>
            History
        </Grid.Col>
        </Grid>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
