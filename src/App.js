import { BrowserRouter as BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home';
import Navbar from './components/pages/Navbar'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
