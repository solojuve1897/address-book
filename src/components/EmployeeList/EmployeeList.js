import React, { Fragment } from 'react';
import { Grid, Paper, Typography, Icon, Avatar, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      padding: 20,
      margin: 5,
      '&:hover': {
        background: 'aliceblue',
      },
      cursor: 'pointer',
    },
    bigAvatar: {
      width: 100,
      height: 100,
    },
});

const EmployeeList = (props) => {
    const classes = useStyles();
    const employeesOutput = props.employees.length === 0 ? <p>No results. Try again!</p> : props.employees.map((employee) => {
        return (
            <Paper className={classes.root} key={employee.id.value} onClick={() => props.itemClicked(employee)}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <Avatar className={classes.bigAvatar} src={employee.picture.large} />
                    </Grid>
                    <Grid item zeroMinWidth>
                        <List dense>
                            <ListItem disableGutters>
                                <ListItemText disableTypography>
                                    <Typography noWrap variant="h6">
                                        <span className="capitalize">{employee.name.title}. {employee.name.first} {employee.name.last}</span>
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemIcon>
                                    <Icon fontSize="small">email</Icon>
                                </ListItemIcon>
                                <ListItemText disableTypography>
                                    <Typography noWrap>
                                        {employee.email}
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemIcon>
                                    <Icon fontSize="small">phone</Icon>
                                </ListItemIcon>
                                <ListItemText disableTypography>
                                    <Typography noWrap>
                                        {employee.phone}
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Paper>
        )
    })
    return (
        <Fragment>
            {employeesOutput}
        </Fragment>
    );
}

export default EmployeeList;