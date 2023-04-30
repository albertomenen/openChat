import './App.css';
import StripePayment from '../src/components/StripePayment'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';




function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/payment" component={StripePayment} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

