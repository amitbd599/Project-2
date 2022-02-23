import "./default.css";
import "./App.css";
import "./Responsive.css"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Blog_Main from "./Components/Pages/Blog/Blog_Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/blog">
            <Blog_Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
