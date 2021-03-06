import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import AddressBook from './containers/AddressBook/AddressBook'
import AddressBookItem from './containers/AddressBookItem/AddressBookItem'
import Info from './containers/Info/Info'
import './App.css';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/employee" component={AddressBookItem} />
        <Route path="/info" component={Info} />
        <Route path="/" exact component={AddressBook} />
      </Switch>
    </Layout>
  );
}

export default App;
