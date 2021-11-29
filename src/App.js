import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/global';
import Theme from './styles/theme';

function App() {
  return (
    <BrowserRouter>
      <Theme>
        <Routes />
        <GlobalStyle />
      </Theme>
    </BrowserRouter>
  );
}

export default App;
