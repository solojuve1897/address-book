import React, { Component, Fragment } from 'react';
import { TextField, IconButton, Icon, Grid, LinearProgress } from '@material-ui/core';
import EmployeeList from '../../components/EmployeeList/EmployeeList'
import _ from 'lodash'
import axios from '../../plugins/axios'

class AddressBook extends Component {
    state = {
        employees: [],
        loading: true,
        searchInput: '',
        sort: 'asc'
    }
    componentDidMount () {
        axios.get('/', {params: { results: 20, nat: 'us' }})
          .then(response => {
              this.setState({employees: response.data.results})
          })
          .catch(error => {})
          .finally(() => {
            this.setState({loading: false})
          })
    }
    onToggleSort = () => {
        this.setState({sort: this.state.sort === 'asc' ? 'desc' : 'asc'})
    }
    onSearchInputChange = (event) => {
        this.setState({searchInput: event.target.value})
    }
    searchInputCheck = (name) => {
        const text = this.state.searchInput
        return text === '' || (text !== '' && (name.title.includes(text) || 
                                               name.first.includes(text) ||
                                               name.last.includes(text)))
    }
    render() {
        const filteredEmployees = this.state.employees.length === 0 ? [] : this.state.employees.filter((employee) => {
            return this.searchInputCheck(employee.name)
        })
        const sortedEmployees = _.orderBy(filteredEmployees, ['name.first', 'name.last'], [this.state.sort, 'asc'])
        return (
            <Fragment>
                <Grid container alignItems="flex-end" justify="space-between">
                    <Grid item>
                        <TextField placeholder="Search employee..." 
                                   type="text"
                                   margin="normal"
                                   onChange={this.onSearchInputChange}/>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={this.onToggleSort}>
                            <Icon>sort_by_alpha</Icon>
                        </IconButton>
                    </Grid>
                </Grid>
                {this.state.loading ?
                    <LinearProgress color="secondary" /> :
                    <EmployeeList employees={sortedEmployees} />
                }
            </Fragment>
        );
    }
}
 
export default AddressBook;