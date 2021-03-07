import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Navbar from './Components/Navbar';
import Login from './pages/Login';
import PrivateRoute from './Components/PrivateRoute';
import ControlPanel from './pages/ControlPanel';
import { getProducts, getProjects, getServices } from './action/authActions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getProjects());
    dispatch(getServices());
  }, [dispatch]);

  const auth = useSelector((state) => state.auth.isAuth);
  return (
    <Router>
      {!auth ? <Navbar /> : <></>}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/login' component={Login} />
        <Route path='/control-panel'>
          <PrivateRoute component={ControlPanel} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
