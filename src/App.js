import {BrowserRouter, Route} from 'react-router-dom'

import classes from './App.module.css';

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import Contact from './Containers/Contact/Contact'
import About from './Containers/About/About'
import Template from './Containers/Templates/Template'
import CreateApp from './Components/CreateApp/create'
import SelectTemplates from './Components/InbuiltTemplate/Inbuilt'
import CustomTemplates from './Components/CustomsDesign/Custom';

function App() {
  return (
    <BrowserRouter>
      <div className={classes.Body}>
        <Route path="/" component={Header}/>
        <div className={classes.MainContainer}>
          <Route exact path="/" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/template" component={Template}/>
          <Route exact path="/createApp" component={CreateApp}/>
          <Route exact path="/selectTemplate" component={SelectTemplates}/>
          <Route exact path="/designTemplate" component={CustomTemplates}/>
        </div>
        <Route path="/" component={Footer}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
