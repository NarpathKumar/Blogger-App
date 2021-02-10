import React from 'react'
import classes from './Footer.module.css'

import SocialHandles from '../FooterSocialHandles/SocialHandles'
import FooterDescription from '../FooterDescription/FooterDescription'

const Footer = () => {

    return(
        <div className={classes.MainContainer}>
            <FooterDescription />
            <SocialHandles />
        </div>
    )
}

export default Footer