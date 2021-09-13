/* import logo from './logo.svg'; */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';

import About from "./Pages/About";
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
      </Switch>
    </Router>
  );
}

export default App;
