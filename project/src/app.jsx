import React from 'react';
import CARDS from './mocks/mock-data.jsx';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Main from './pages/main';
import Room from './pages/room.jsx';
import Favorites from './pages/favorites.jsx';
import SignIn from './pages/sign-in';

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
        <Route
          render={() => (
            <>
              <h1>
                404.
                <br />
                <small>Page not found</small>
              </h1>
              <Link to="/">Go to main page</Link>
            </>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
