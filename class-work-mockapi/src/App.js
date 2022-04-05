import {BrowserRouter as Router,Switch ,Route,Link} from 'react-router-dom';
import Home from "./pages/Home";
import Login from './pages/Login';
import Product from './pages/Product';
import AddProduct from './pages/AddProduct';
import DeleteProduct from './pages/DeleteProduct';
import "./index.scss";

function App() {
  return (
    <Router>
       <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/products/:id" component={Product}/>
          <Route exact path="/add-product" component={AddProduct} />
          <Route exact path="/delete-product" component={DeleteProduct}/>
      </Switch>
    </Router>
  );
}

export default App;
