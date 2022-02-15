import './default.css'
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          
          <Route exact path="/">
            <Home />
          </Route>
         
        </Switch>
    
    </Router>
    </div>
  );
}

export default App;
