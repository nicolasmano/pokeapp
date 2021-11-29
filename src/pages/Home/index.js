import React, { useEffect, useState } from 'react';

import PokemonCard from '../../components/PokemonCard';

import Pokeball from '../../assets/img/Pokeball.png'

import {
  Container,
  PageContainer,
  Header,
  Body,
  PokemonList,
  Footer
} from './styles';

export default function Home() {

  const [pokemonList, setPokemonList] = useState(undefined);
  const [nextRequest, setNextRequest] = useState(undefined);
  const [pokemonSearch, setPokemonSearch] = useState(undefined);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=14&offset=0').then(response => {
      response.json().then(pokemons => {
        setPokemonList(pokemons.results);
        setNextRequest(pokemons.next);
      });
    });
  }, []);

  function carregarMais() {
    if (pokemonList.length < 700 && nextRequest !== undefined) {
      fetch(nextRequest).then(response => {
        response.json().then(pokemons => {
          setPokemonList(pokemonList.concat(pokemons.results));
          setNextRequest(pokemons.next);
        });
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (pokemonSearch !== '' && pokemonSearch !== undefined) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`).then(response => {
        response.json().then(pokemon => {
          setPokemonList([pokemon]);
          setNextRequest(undefined);
        });
      });
    } else if (pokemonList.length === 1) {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=14&offset=0').then(response => {
        response.json().then(pokemons => {
          setPokemonList(pokemons.results);
          setNextRequest(pokemons.next);
        });
      });
    }
  }

  return (
    <>
      <Container>
        <PageContainer >
          <Header>
            <div>
              <img src={Pokeball} alt="Pokeball" />
              <h1>Pokédex</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <input value={pokemonSearch} onChange={e => setPokemonSearch(e.target.value)} placeholder='Procurar' type="text" />
            </form>
          </Header>
          <Body>
            <PokemonList>
              {pokemonList !== undefined &&
                pokemonList.map(pokemon => (
                  <PokemonCard key={pokemon.name} details={pokemon.url} />
              ))}
            </PokemonList>
          </Body>
          <Footer>
            <button onClick={carregarMais}>
              CARREGAR MAIS
            </button>
          </Footer>

        </PageContainer>
      </Container>
    </>
  );
}
