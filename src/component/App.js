import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../container/Header';
import ProductListing from '../container/ProductListing';
import ProductDetail from '../container/ProductDetail';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={ProductListing} />
        <Route path="/product/:pdtId" exact component={ProductDetail} />
      </Switch>
    </Router>
  );
}

export default App;
