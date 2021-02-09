import React from 'react'
import classes from './About.module.css'

class About extends React.Component{
    render(){
        return(
            <div className={classes.AboutMainDiv}>
                <p>
                    Hello <span className={classes.BloggerText}>Bloggers</span>, Welcome to <b>BlogSport</b>.<br></br> 
                    Here is your dream come true moment, where 
                    you can create your own website and blog as 
                    per your convinience
                </p>               
            </div>
        );
    }
}

export default About