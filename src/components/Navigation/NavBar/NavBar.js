import React from 'react';
import { withRouter } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Icon, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      paddingLeft: 10,
    },
    info: {
      color: '#fff'
    },
    icon: {
      cursor: 'pointer'
    }
});

const NavBar = (props) => {
    const classes = useStyles();
    return (
        <header>
            <AppBar position="fixed">
                <Toolbar>
                    <Icon className={classes.icon} onClick={() => props.history.replace('/')} fontSize="large">account_box</Icon>
                    <Typography className={classes.root} variant="h6" color="inherit">Address book</Typography>
                    <div style={{marginLeft:'auto'}}>
                        <IconButton onClick={() => props.history.replace('/info')}>
                            <Icon className={classes.info} fontSize="large">info</Icon>
                        </IconButton>   
                    </div>
                </Toolbar>
            </AppBar>
        </header>
    )
}
 
export default withRouter(NavBar);