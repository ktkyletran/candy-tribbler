import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
