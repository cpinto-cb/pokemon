import pokemonLogo from '/PokemonLogo.svg';

import './App.css'
import { Search } from "./Search";
import { Deck } from "./Deck";
import {Container, Grid} from "@mantine/core";

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
          </Grid.Col>
        <Grid.Col span={6}>
            History
        </Grid.Col>
        </Grid>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
