import React from 'react'
import classes from './Template.module.css'

class Template extends React.Component{
    render(){
        return(
            <div className={classes.MainDiv}>
                <div className={classes.SelectionDiv}>
                    <div className={classes.SubSelectDiv}>
                        <p>If you want to select system created designs for your websites you can click here</p>
                        <button>Create App using system Designs</button>
                    </div>
                    <div className={classes.SubSelectDiv}>

                    </div>
                </div>
            </div>
        );
    }
}

export default Template