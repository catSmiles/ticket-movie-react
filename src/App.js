// Libary
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Component
import Home from './pages/Home';
import Contact from './pages/Contact';
import News from './pages/News';
import HomeTemplate from './templates/HomeTemplate';
import UserTemplate from './templates/UserTemplate';
import Login from './pages/Login';
import Register from './pages/Register';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate exact path="/" Component={Home} />
        <HomeTemplate exact path="/contact" Component={Contact} />
        <HomeTemplate exact path="/news" Component={News} />
        {/* User Template */}
        <UserTemplate exact path="/login" Component={Login} />
        <UserTemplate exact path="/register" Component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
