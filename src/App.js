import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js/Header';
import ProductDetail from './components/Products/ProductDetail';
import ProductsListing from './components/Products/ProductsListing';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={ProductsListing} />
          <Route path='/product/:id' exact component={ProductDetail} />
          <Route>404 NOT FOUND!</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
