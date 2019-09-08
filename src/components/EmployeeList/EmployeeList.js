import React, { Fragment } from 'react';
import EmployeeListItem from './EmployeeListItem/EmployeeListItem'

const EmployeeList = (props) => {
    const employeesOutput = props.employees.length === 0 ? <p>No results. Try again!</p> : 
    props.employees.map((employee) =>
        <EmployeeListItem key={employee.id.value} employee={employee} itemClicked={props.itemClicked} />
    )
    return (
        <Fragment>
            {employeesOutput}
        </Fragment>
    );
}

export default EmployeeList;