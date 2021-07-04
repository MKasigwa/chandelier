// import logo from './logo.svg';
// import './App.css';
import { HashRouter as Router,Route } from "react-router-dom";
import Scan1 from "./Scan1";
import Scan2 from "./Scan2";
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Scan1/>
        </Route>
        <Route path="/:number">
            <Scan2/>
        </Route>
      </Router>
    </div>
  );
}
export default App;
