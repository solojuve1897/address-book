import React from 'react';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import EmployeeList from './EmployeeList'

Enzyme.configure({adapter: new Adapter()})

describe('<EmployeeList /> is passed an empty list', () => {
    it('should render a text informing there is no result', () => {
        const wrapper = Enzyme.shallow(<EmployeeList employees={[]} />)
        expect(wrapper.text()).toEqual('No results. Try again!')
    })
})