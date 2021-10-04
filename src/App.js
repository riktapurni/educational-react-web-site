
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import MenuBar from './components/MenuBar/MenuBar';
import Contact from './components/Contact/Contact';
import Service from './components/Service/Service';
import Details from './components/Details/Details';
import Mentors from './components/Mentors/Mentors';

function App() {
  return (
    <Router>
      <MenuBar></MenuBar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/services">
          <Services></Services>
        </Route>
        <Route path="/services/:id">
          <Details></Details>
        </Route>
        <Route path="/mentors">
          <Mentors></Mentors>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
