import './App.css';
// React Bootstrap css link
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Offers from './components/Offers/Offers';
import Offer from './components/Offer/Offer';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddOffer from './components/Admin/AddOffer/AddOffer';
import Orders from './components/Admin/Orders/Orders';
import UpdateOrder from './components/Admin/UpdateOrder/UpdateOrder';
import Contact from './components/Contact/Contact';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route exact path="/home">
          <Home></Home>
          </Route>

          <Route exact path="/offers">
         <Offers></Offers>
          </Route>

          <PrivateRoute exact path="/offers/:id">
         <Offer></Offer>
          </PrivateRoute>
          <PrivateRoute exact path="/addOffer">
          <AddOffer></AddOffer>
          </PrivateRoute>
          <Route exact path="/about">
          <About></About>
          </Route>
          <PrivateRoute exact path="/myOrders">
          <Orders></Orders>
          </PrivateRoute>
          <Route exact path="/orders/updateOrder/:id">
          <UpdateOrder></UpdateOrder>
          </Route>
          <Route exact path="/contact">
          <Contact></Contact>
          </Route>
          <Route exact path="/login">
          <Login></Login>
          </Route>
          <Route exact path="/footer">
          <Footer></Footer>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
