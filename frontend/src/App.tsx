import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import Main from './pages/Main';

import GlobalStyle from './styles/global';

ReactGA.initialize('UA-171406858-1', {
  // debug: true
});

const App: React.FC = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })

  return (
    <>
      <Main />
      <GlobalStyle />
    </>
  );
}

export default App;
