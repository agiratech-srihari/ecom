import './App.css';
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import CartList from './CartList';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {ProductProvider} from './ProductContext'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <ProductProvider>
            <Navbar key="1"></Navbar>
            <Route key="2" path="/" component={Header} exact={true}/>
            <Route key="3" path="/" component={Footer} exact={true}/>
            <Route key="4" path="/cart" component={CartList} exact={true}/>
          </ProductProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
