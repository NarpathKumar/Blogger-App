import React from 'react'
import classes from './Header.module.css'
import {Link} from 'react-router-dom'

class Header extends React.Component{
    render(){
        return(
            <header className={classes.MainContainer}>
                <div className={classes.LeftHeader}>
                    <p className={classes.Logo}>BlogSpot</p>
                    <nav className={classes.MenuItems}>
                        <Link to='/'>About</Link>
                        <Link to='/contact'>Contact</Link>
                        <Link to='/template'>Templates</Link>
                    </nav>
                </div>
                <Link to="/createApp"><button className={classes.CreateButton}>Create App</button></Link>
            </header>
        );
    }
}

export default Header