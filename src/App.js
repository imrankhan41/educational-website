import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import FooterOne from './components/FooterOne/FooterOne';
import FooterTwo from './components/FooterTwo/FooterTwo';
import Contact from './components/Contact/Contact';


function App() {
  return (
    // component,router,route,switch creation
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <FooterOne></FooterOne>
      <FooterTwo></FooterTwo>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
