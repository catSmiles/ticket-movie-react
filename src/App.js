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
import Detail from './pages/Detail';
import CheckOutTemplate from './templates/CheckOutTemplate';
import CheckOut from './pages/CheckOut';
// import Loading from './components/Loading';
import AdminTemplate from './templates/AdminTemplate';
import Dashboard from './pages/Admin/Dashboard';
import Films from './pages/Admin/Films';
import Add from './pages/Admin/Films/Add';
import Edit from './pages/Admin/Films/Edit';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      {/* <Loading /> */}
      <Switch>
        <HomeTemplate exact path="/" Component={Home} />
        <HomeTemplate exact path="/contact" Component={Contact} />
        <HomeTemplate exact path="/news" Component={News} />
        <HomeTemplate exact path="/detail/:id" Component={Detail} />

        {/* CheckOut Template */}
        <CheckOutTemplate exact path="/checkout/:id" Component={CheckOut} />

        {/* User Template */}
        <UserTemplate exact path="/login" Component={Login} />
        <UserTemplate exact path="/register" Component={Register} />

        {/* Admin Template */}
        <AdminTemplate exact path="/admin" Component={Dashboard} />
        <AdminTemplate exact path="/admin/films" Component={Films} />
        <AdminTemplate exact path="/admin/films/add" Component={Add} />
        <AdminTemplate exact path="/admin/films/edit/:id" Component={Edit} />
      </Switch>
    </Router>
  );
}

export { history };
export default App;
