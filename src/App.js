import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage.js';
import {Route,Switch,} from "react-router-dom";


function App() {
  return (
    <Switch>
      <Route path="/" component={LandingPage}></Route>
    </Switch>
  );
}

export default App;
