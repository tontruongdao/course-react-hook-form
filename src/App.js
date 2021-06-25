import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Results from './Results'

function App() {
  return (
    <>
      <Header />
      <Router>
        <Route exact path="/" component={Step1} />
        <Route exact path="/step2" component={Step2} />
        <Route exact path="/step3" component={Step3} />
        <Route exact path="/results" component={Results} />
      </Router>
    </>
  );
}

export default App;


// https://www.youtube.com/watch?v=U-iz8b4RExA