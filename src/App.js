// import logo from './logo.svg';
// import './App.css';
import { HashRouter as Router,Route } from "react-router-dom";
 import Scan1 from "./Scan1";
 import Scan2 from "./Scan2";
// import Footer from "./Footer";
// import Header from "./Header";
function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      {/* <div style={{margin:'20',padding:'20',backgroundColor:'red',top: "40",height: '100vh',bottom: "60vh",position: "center",}}> */}
      <Router>
        <Route exact path="/">
          <Scan1/>
        </Route>
        <Route path="/:number">
            <Scan2/>
        </Route>
      </Router>
      {/* </div>
      <Footer/> */}
    </div>
  );
}
export default App;
