import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import {
  Container,
  CardContainer,
  Header,
  Body,
  Footer
} from './styles';

export default function PokemonCard(props) {

  const [pokemonDetails, setPokemonDetails] = useState(undefined);

  useEffect(() => {
    fetch(props.details).then(response => {
      response.json().then(pokemon => {
        setPokemonDetails(pokemon);
      });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {pokemonDetails !== undefined &&
      <Link to={`/details/${pokemonDetails.name}`}>
          <Container>
            <CardContainer color={pokemonDetails.types[0].type.name}>
              <Header color={pokemonDetails.types[0].type.name}>
                <p>{`#${pokemonDetails.order}`}</p>
              </Header>
              <Body>
                <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name}/>
              </Body>
              <Footer color={pokemonDetails.types[0].type.name}>
                <p>{pokemonDetails.name}</p>
              </Footer>
            </CardContainer>
          </Container>
        </Link>
      }
    </>
  );
}
