import React from 'react'
import classes from './SocialHandles.module.css'

import { FACEBOOK, TWITTER, INSTAGRAM, GMAIL } from '../../Utilities/Icons'

const SocialHandles = () => {

    return(
        <div className={classes.MainContainer}>
            <a className={classes.SocialHandleIconContainers} href={''}>
                {INSTAGRAM}
            </a>
            <a className={classes.SocialHandleIconContainers} href={''}>
                {FACEBOOK}
            </a>
            <a className={classes.SocialHandleIconContainers} href={''}>
                {TWITTER}
            </a>
            <a className={classes.SocialHandleIconContainers} href={''}>
                {GMAIL}
            </a>
        </div>
    )
}

export default SocialHandles