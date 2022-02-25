import "./default.css";
import "./App.css";
import "./Responsive.css"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Blog_Main from "./Components/Pages/Blog/Blog_Main";
import Blog_Single_Page from "./Components/Pages/Blog/Blog_Single_Page";
import ScrollToTop from "./Components/Universal_Components/ScrollToTop";
import Service from "./Components/Pages/Service/Service";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
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
          <Route exact path="/single-blog">
            <Blog_Single_Page />
          </Route>
          <Route exact path="/services">
            <Service />
          </Route>
        </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
