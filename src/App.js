import logo from './logo.svg';
import classes from './App.module.css';
import Header from './Components/Header/Header'
import Contact from './Containers/Contact/Contact'
import About from './Containers/About/About'
import Template from './Containers/Templates/Template'
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <div className={classes.Body}>
      <BrowserRouter>
        <Route path="/" component={Header}/>
        <Route exact path="/" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/template" component={Template}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
