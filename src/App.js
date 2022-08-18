// Libary
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Component
import Home from './pages/Home';
import Contact from './pages/Contact';
import HomeTemplate from './templates/HomeTemplate';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate exact path="/" Component={Home} />
        <HomeTemplate exact path="/contact" Component={Contact} />
      </Switch>
    </Router>
  );
}

export { history };
export default App;
