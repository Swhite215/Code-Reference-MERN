import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Lifecycle from "./components/Lifecycle/Lifecycle";
import State from "./components/State/State";
import Data from "./components/Data/Data";
import Events from "./components/Events/Events";
import Hooks from "./components/Hooks/Hooks";
import Apis from "./components/Apis/Api";
import MaterialUI from "./components/MaterialUI/MaterialUI";

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <h1>TechArt Learns React</h1>
      </header>
      <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="lifecycle">The Component Lifecycle</Link></li>
            <li><Link to="state">Managing State</Link></li>
            <li><Link to="data">Data Flow + Props</Link></li>
            <li><Link to="events">Handling Events</Link></li>
            <li><Link to="hooks">Functional Components + Hooks</Link></li>
            <li><Link to="apis">Connecting to External APIs</Link></li>
            <li><Link to="materialui">Material UI</Link></li>
          </ul>
        </nav>
      <hr/>
      <div>
            <Switch>
              <Route exact path="/"><Home></Home></Route>
              <Route path="/lifecycle"><Lifecycle></Lifecycle></Route>
              <Route path="/state"><State></State></Route>
              <Route path="/data" component={Data}></Route>
              <Route path="/events" component={Events}></Route>
              <Route path="/hooks" component={Hooks}></Route>
              <Route path="/apis" component={Apis}></Route>
              <Route path="/materialui" component={MaterialUI}></Route>
            </Switch>
          </div>
      </Router>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>
}

export default App;
