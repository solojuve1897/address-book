import React, { Component, Fragment } from 'react';
import { Grid, IconButton, Icon, Paper, Avatar,
         Typography, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = {
  bigAvatar: {
    width: 125,
    height: 125,
    margin: '0 auto',
    marginBottom: 10
  },
  root: {
    padding: 20,
    maxWidth: 600,
    margin: '0 auto'
  }
};

class AdressBookItem extends Component {
  state = {
    employee: null
  }
  componentDidMount () {
    if (this.props.location.params && this.props.location.params.employee) {
      this.setState({employee: JSON.parse(this.props.location.params.employee)})
    }
  }
  render () {
    const { classes } = this.props;
    const employee = this.state.employee
    console.log(employee)
    return (
    <Fragment>
      <IconButton edge="start" onClick={() => this.props.history.replace('/')}>
          <Icon>arrow_back</Icon>
      </IconButton>
        {this.state.employee ?
          <Paper className={classes.root}>
              <Grid container>
                <Grid item className="text-center" xs={12}>
                  <Avatar className={classes.bigAvatar} src={employee.picture.large} />
                  <Typography gutterBottom noWrap variant="h6" className="capitalize">
                    {employee.name.title}. {employee.name.first} {employee.name.last}
                  </Typography>
                </Grid>
                <Grid item zeroMinWidth xs={12}>
                  <List dense>
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
                            <Icon fontSize="small">smartphone</Icon>
                        </ListItemIcon>
                        <ListItemText disableTypography>
                            <Typography noWrap>
                                {employee.cell}
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
                    <ListItem disableGutters>
                        <ListItemIcon>
                            <Icon fontSize="small">home</Icon>
                        </ListItemIcon>
                        <ListItemText disableTypography>
                            <Typography>
                              <span className="capitalize">
                                {employee.location.city}, {employee.location.state}, {employee.location.postcode}
                              </span>
                            </Typography>
                        </ListItemText>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
          </Paper> : ''
        }
    </Fragment>
    );
  }
}
 
export default withStyles(styles)(AdressBookItem);