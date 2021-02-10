import React from 'react'
import classes from './About.module.css'

import { ABOUT_DATA } from '../../Utilities/Constants'

import AboutDescription from '../../Components/AboutDecription/AboutDescription'

const About = () => {

    return(
        <div className={classes.MainContainer}>
            <div className={classes.LeftSection}>
                {
                    ABOUT_DATA.map((data) => <AboutDescription {...data} />)
                }
            </div>
            <div className={classes.RightSection}>
                dscsd
            </div>
        </div>
    )
}


export default About