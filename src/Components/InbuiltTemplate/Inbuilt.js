import classes from './Inbuilt.module.css'
import React from 'react';

class InbuiltTemplates extends React.Component{

    state={
        active: true,
        src: ""
    }

    ImageOnClick = (e)=>{
        this.setState({active: true, src: e.target.src})
    }

    CancleClick = ()=>{
        this.setState({active: false, src:""})
    }

    render(){
        return(
            <div className={classes.MainDiv}>
                <div onClick={this.CancleClick} className={`${classes.Overlay} ${this.state.active?classes.ImageActive:null}`}>
                    <div className={classes.ImageWrapperDiv}>
                        <img src={this.state.src} alt=""/>
                    </div>
                </div>
                <p className={classes.Greeting}>Hi there, You are one step closer to make your website , please select one of below templates to proceed further </p>
                <div className={classes.TemplatesDiv}>
                    {/* this will be in seperate component  */}
                    <div className={classes.TemplateIndividual}>
                        <p>Soft Pink with Glossy Finish</p>
                        <div className={classes.ImageDiv}>
                            <img onClick={(e)=> this.ImageOnClick(e)} className={classes.image} src="https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg?w=600&quality=85" alt=""/>
                            <img onClick={(e)=> this.ImageOnClick(e)} className={classes.image} src="https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg" alt=""/>
                            <img onClick={(e)=> this.ImageOnClick(e)} className={classes.image} src="https://images.indianexpress.com/2018/07/wp-harrypotter-01.jpg" alt=""/>
                            <img onClick={(e)=> this.ImageOnClick(e)} className={classes.image} src="https://images.indianexpress.com/2018/07/wp-harrypotter-01.jpg" alt=""/>
                        </div>
                    </div>
                    {/* until here */}
                </div>
            </div>
        );
    }
}

export default InbuiltTemplates