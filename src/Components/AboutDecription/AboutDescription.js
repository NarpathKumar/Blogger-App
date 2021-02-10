import React from 'react'
import classes from './AboutDescription.module.css'


const AboutDescription = (props) => {

    return(
        <div className={classes.MainContainer}>
            <div className={classes.MainText}>
                {props.mainText}
            </div>
            <div className={classes.DescriptionText}>
                {props.descriptionText}
            </div>
        </div>
    )
}

export default AboutDescription