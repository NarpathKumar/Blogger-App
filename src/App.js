import logo from './logo.svg';
import classes from './App.module.css';
import Header from './Components/Header/Header'
import Contact from './Containers/Contact/Contact'
import About from './Containers/About/About'
import Template from './Containers/Templates/Template'
import CreateApp from './Components/CreateApp/create'
import SelectTemplates from './Components/InbuiltTemplate/Inbuilt'
import CustomTemplates from './Components/CustomsDesign/Custom';

import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <div className={classes.Body}>
      <BrowserRouter>
        <Route path="/" component={Header}/>
        <Route exact path="/" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/template" component={Template}/>
        <Route exact path="/createApp" component={CreateApp}/>
        <Route exact path="/selectTemplate" component={SelectTemplates}/>
        <Route exact path="/designTemplate" component={CustomTemplates}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
