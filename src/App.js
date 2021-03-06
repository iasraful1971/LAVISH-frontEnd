
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/HomePage/Home';

function App() {
  return (
  <BrowserRouter>
  <Navbar></Navbar>
  <Switch>
    
    <Route path="/" exact>
     <Home></Home>
    </Route>
   
  </Switch>
  <Footer></Footer>
  </BrowserRouter>
  );
}

export default App;
