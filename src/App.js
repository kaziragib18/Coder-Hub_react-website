import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Course from './Components/Course/Course';
import AboutUs from './Components/AboutUs/AboutUs';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home';

function App() {


  return (
    <div className="App">

      <Router>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/course">
            <Course></Course>
          </Route>

          <Route exact path="/about">
            <AboutUs></AboutUs>
          </Route>

          <Route exact path="/contact">
            <Contact></Contact>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;