import React from 'react';
import CARDS from './mocks/mock-data.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/main';
import Room from './pages/room.jsx';
import Favorites from './pages/favorites.jsx';
import SignIn from './pages/sign-in';
import FourOhFour from './pages/404.jsx';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main cards={CARDS} />;
        </Route>
        <Route path="/login" exact component={SignIn} />
        <Route path="/favorites" exact component={Favorites} />
        <Route path="/offer/:id" exact component={Room} />
        <Route component={ FourOhFour }/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
