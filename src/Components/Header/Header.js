import React from 'react'
import classes from './Header.module.css'

class Header extends React.Component{
    render(){
        return(
            <header className={classes.Header}>
                <div className={classes.LeftHeader}>
                    <p className={classes.Logo}>BlogSpot</p>
                    <nav className={classes.MenuItems}>
                        <a>About</a>
                        <a>Contact</a>
                        <a>Templates</a>
                    </nav>
                </div>
                <button className={classes.CreateButton}>Create App</button>
            </header>
        );
    }
}

export default Header