import React, { useState } from "react";
import Header from "./components/Header.js";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import SearchForm from "./components/SearchForm";
import { Container, Row } from "reactstrap";
export default function App() {
  const [searchQuery,setSearchQuery] = useState("");
  const grabQueryToSearch = query => {
    setSearchQuery(query);
  };
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
        <SearchForm grabQueryToSearch={grabQueryToSearch} />
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route path="/characters">

          <CharacterList query={searchQuery} setQuery={setSearchQuery}/>

          </Route>
          <Container >
        <Row style={{display:"flex",justifyContent:"center"}}>
          <Route path="/locations" >
            <LocationsList query={searchQuery}/>
            </Route>
          </Row>
        </Container>
        </Switch>
      </div>
    </Router>
    </main>
  );
}
