import styled from 'styled-components';

import PokeballTransparente from '../../assets/img/PokeballTransparente.png'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 100px 200px;

  background-color: ${props => props.theme.colors.background};
`;

export const CardContainer = styled.div`
  height: 900px;
  width: 600px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 5px solid ${props => props.theme.colors[props.color]};
  background-color: ${props => props.theme.colors[props.color]};
  border-radius: 16px;
`;

export const Header = styled.div`
  height: 300px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;

  background-image: url(${PokeballTransparente});
  background-repeat: no-repeat;
  background-position: right 20px bottom 50%;
  background-size: 290px;

  color: ${props => props.theme.colors.white};

  div.infos {
    height: 50px;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    img {
      height: 30px;
      width: 30px;
    }

    div {
      height: 50px;
      width: 80%;

      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      font-size: 45px;
      padding: 0 20px;
    }

    p {
      height: 50px;
      width: 10%;
      font-size: 24px;
    }
  }

  div.pokemonImage {
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      height: 350px;
      width: 350px;
      margin: 0 0 -130px 0;
      z-index: 999;
    }

  }

`;

export const Body = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.colors.white};
  border-radius: 20px;
`;

export const TypesContainer = styled.div`
  height: 30px;
  width: 100%;
  margin: 80px 0 0 0;

  padding: 0 0 20px 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Types = styled.div`
  width: 50px;
  padding: 5px 40px;
  margin: 0 5px 0 5px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-weight: bold;
  border-radius: 20px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors[props.color]};
`;

export const AboutContainer = styled.div`
  height: 90%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.colors.white};

  p {
    color: ${props => props.theme.colors[props.color]};
    font-weight: bold;
    font-size: 25px;
  }

  div.medidas {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    padding: 5px 0;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    hr {
      height: 100%;
      border: 1px solid ${props => props.theme.colors.ligthGray};
    }
  }

  div.descricao {
    width: 100%;

    padding: 10px 30px;
  }
`;


export const StatsContainer = styled.div`
  height: 90%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 0 20px 0;

  hr {
    height: 100%;
    border: 1px solid ${props => props.theme.colors.ligthGray};
  }

  p {
    color: ${props => props.theme.colors[props.color]};
    font-weight: bold;
    font-size: 25px;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    div.statsNames {
      width: 180px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      padding: 0 20px 0 0 ;

      color: ${props => props.theme.colors[props.color]};

    }

    div.statsNumbers {
      width: 420px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      padding: 0 20px;
    }
  }
`;

