import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    darkGray: '#212121',
    mediumGray: '#666666',
    lightGray: '#E0E0E0',
    white: '#FFFFFF',
    background: '#F7F7F7',
    fairy: '#E69EAC',
    ice: '#9AD6DF',
    grass: '#74CB48',
    steel: '#B7B9D0',
    rock: '#B69E31',
    dark: '#75574C',
    psychic: '#FB5584',
    water: '#6493EB',
    ghost: '#70559B',
    ground: '#DEC16B',
    dragon: '#7037FF',
    electric: '#F9CF30',
    fire: '#F57D31',
    bug: '#A7B723',
    poison: '#A43E9E',
    flying: '#A891EC',
    fighting: '#C12239',
    normal: '#AAA67F',
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;


