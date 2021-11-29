import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;

  padding: 100px 200px;

  background-color: ${props => props.theme.colors.background};
`;

export const PageContainer = styled.div`
  height: 100%;
  width: 100%;


  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  height: 20%;
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 0 0 20px 0;

  div {
    padding: 16px 12px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    img {
      height: 40px;
      width: 40px;
    }

    h1 {
      padding: 0 16px;
      flex-grow: 3;
    }
  }

  input {
    width: 100%;
    height: 36px;

    border-radius: 8px;
    box-shadow: none;
    background: #fff;
    border: 1px solid ${props => props.theme.colors.lightGray};
    padding: 4px 12px;
  }
`;

export const Body = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px 0 20px 0;

  overflow-y: auto;
  scrollbar-width: thin;
`;

export const PokemonList = styled.div`
  height: 100%;
  width: 100%;

  flex-shrink: 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap ;

  padding: 0 0 40px 0;
`;

export const Footer = styled.div`
  height: 70px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap ;

  padding: 20px 10px 0 10px;

  button {
    height: 50px;
    width: 100%;

    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    color: ${props => props.theme.colors.white};
    background-color: #20B2AA;
    border: none;
    border-radius: 8px;
    transition: all .3s;

    font-weight: bold;
    font-size: 18px;

    &:hover {
      cursor: pointer;
      filter: brightness(1.10);
    }
  }
`;
