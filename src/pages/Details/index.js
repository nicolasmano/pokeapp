import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

import ArrowLeft from '../../assets/img/ArrowLeft.png'

import {
  Container,
  CardContainer,
  Header,
  Body,
  TypesContainer,
  Types,
  AboutContainer,
  StatsContainer
} from './styles';

export default function Details() {
  const { name } = useParams();

  const [pokemonDetails, setPokemonDetails] = useState(undefined);
  const [speciesDetails, setSpeciesDetails] = useState(undefined);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => {
      response.json().then(pokemon => {
        setPokemonDetails(pokemon);

        fetch(pokemon.species.url).then(response2 => {
          response2.json().then(species => {
            setSpeciesDetails(species.flavor_text_entries[0].flavor_text);
          });
        });
      });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {pokemonDetails !== undefined &&
        <Container>
            <CardContainer color={pokemonDetails.types[0].type.name}>
              <Header>
                <div className='infos'>
                  <Link to="/">
                    <img src={ArrowLeft} alt='ArrowLeft'/>
                  </Link>
                  <div>{`${pokemonDetails.name}`}</div>
                  <p>{`#${pokemonDetails.order}`}</p>
                </div>
                <div className='pokemonImage'>
                  <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name}/>
                </div>
              </Header>
              <Body>
                <TypesContainer>
                  {pokemonDetails.types.map(slot => (
                    <Types key={slot.type.name} color={slot.type.name}>
                      <p>{slot.type.name}</p>
                    </Types>
                  ))}
                </TypesContainer>
                <AboutContainer color={pokemonDetails.types[0].type.name}>
                  <p>About</p>
                  <div className="medidas">
                    <div>
                      <span>{pokemonDetails.weight} Kg</span>
                      <span>weigth</span>
                    </div>
                    <hr />
                    <div>
                      <span>{pokemonDetails.height / 10} M</span>
                      <span>height</span>
                    </div>
                    <hr />
                    <div>
                      <span>{pokemonDetails.moves.length} Moves</span>
                      <span>moves</span>
                    </div>
                  </div>
                  <div className="descricao">
                    {speciesDetails}
                  </div>
                </AboutContainer>
                <StatsContainer color={pokemonDetails.types[0].type.name}>
                  <p>Base Stats</p>
                  <div>
                    <div className="statsNames">
                      {pokemonDetails.stats.map(slot => (
                        <span key={slot.stat.name}>
                          {slot.stat.name}
                        </span>
                      ))}
                    </div>
                    <hr />
                    <div className="statsNumbers">
                      {pokemonDetails.stats.map(slot => (
                        <span key={slot.base_stat}>
                          {slot.base_stat}
                        </span>
                      ))}
                    </div>
                  </div>
                </StatsContainer>
              </Body>
            </CardContainer>
        </Container>
      }
    </>
  );
}
