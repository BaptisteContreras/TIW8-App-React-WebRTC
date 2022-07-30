import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from '@material-ui/core';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Header from './components/Header/Header';
import DataChat from './components/DataChat';
import createAppStore from './redux/create';
import peerClient from './peer/peerClient';

const store = createAppStore(peerClient);
peerClient.setStore(store);
const App = () => {
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <Header />
          <Container style={{ 'margin-top': '20px' }} disableGutters>
            <Switch>
              <Route exact path="/" render={() => (<DataChat />)} />
            </Switch>
          </Container>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
