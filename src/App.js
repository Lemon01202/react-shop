import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Carousel_ from './components/Carousel/Carousel';
import Header from './components/Header.js/Header';
import ProductDetail from './components/Products/ProductDetail';
import ProductsListing from './components/index';
import Footer from './components/Footer/Footer';

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
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
