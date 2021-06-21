import logo from './logo.svg';
import { BroserRrouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route exact path="/" component={step1} />
      <Route exact path="/step2" component={step2} />
      <Route exact path="/step3" component={step3} />
      <Route exact path="/result" component={result} />
    </Router>
  );
}

export default App;
