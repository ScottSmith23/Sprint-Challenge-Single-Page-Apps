import React from "react";
import Header from "./components/Header.js";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
export default function App() {
  return (
    <main>
      <Header />
      <Router>
      <div>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
            <li>
              <Link to="/locations">Locations</Link>
            </li>   
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route path="/characters" component={CharacterList}/>
          <Route path="/locations" component={LocationsList} />
        </Switch>
      </div>
    </Router>
    </main>
  );
}
