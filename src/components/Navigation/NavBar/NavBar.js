import React from 'react';
import { AppBar, Toolbar, Typography, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      paddingLeft: 10,
    }
});

const NavBar = () => {
    const classes = useStyles();
    return (
        <header>
            <AppBar position="fixed">
                <Toolbar>
                    <Icon fontSize="large">account_box</Icon>
                    <Typography className={classes.root} variant="h6" color="inherit">Address book</Typography>
                </Toolbar>
            </AppBar>
        </header>
    )
}
 
export default NavBar;