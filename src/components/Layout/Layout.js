import React, { Fragment } from 'react';
import NavBar from '../Navigation/NavBar/NavBar'
import classes from './Layout.module.css'

const layout = (props) => (
    <Fragment>
        <NavBar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Fragment>
)
 
export default layout;