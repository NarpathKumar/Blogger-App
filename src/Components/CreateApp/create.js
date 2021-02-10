import classes from './create.module.css';
import {Link} from 'react-router-dom'

const CreateApp = ()=>{
    return(
        <div className={classes.MainDiv}>
            <div className={classes.SelectionDiv}>
                <div className={classes.SubSelectDiv}>
                    <p>1) You can crete your website be using inbuilt Templates by clicking down here </p>
                    <Link to='/selectTemplate'><button className={classes.CreateWebBut}>Create Website</button></Link>
                </div>
                <div className={classes.SubSelectDiv}>
                <p>2) Design your website by using Customs individual designs</p>
                    <Link to='/designTemplate'><button className={classes.CreateWebBut}>Design Website</button></Link>
                </div>
            </div>
        </div>
    );
}

export default CreateApp