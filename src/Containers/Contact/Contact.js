import React from 'react';
import classes from './Contact.module.css';

class Contact extends React.Component{
    render(){
        return(
            <div className={classes.MainDiv}>
                <div className={classes.ContactDiv}>
                    <h1>Contact us</h1>
                    <p>Email us with any questions or Inquiries. We would be happy to answer you question. BlogSpot will help you sooner</p>
                </div>
                <div className={classes.FormDiv}> 
                    <form className={classes.Form}>
                        <input className={classes.InputText} type="text" name="username" placeholder="Your Name" required/>
                        <input className={classes.InputText} type="email" name="username" placeholder="Your Email" required/>
                        <input className={classes.InputText} type="text" name="username" placeholder="Subject" required/>
                        <textarea className={classes.Message} placeholder="Enter Your Message" required>

                        </textarea>
                        <input className={classes.FormButton} type="submit" name="submit" value="Send Email" /> 
                    </form>
                </div>
            </div>
        );
    }
};

export default Contact