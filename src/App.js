import React, { Component } from 'react';
import Hoc from './HOC';
import List from './List';

const UserData = [
  {
    id: 1,
    name: 'Shamli',
  },
  {
    id: 2,
    name: 'Naveen',
  },
  {
    id: 1,
    name: 'Yuvaraj',
  },
];

const ShopData = [
  {
    id: 1,
    name: 'T-Shirt',
  },
  {
    id: 2,
    name: 'Saree',
  },
  {
    id: 1,
    name: 'Jeans',
  },
];

const Users = Hoc(List, UserData);

const Shop = Hoc(List, ShopData);

class App extends Component {
  render() {
    return (
      <div>
        <Users />
        <Shop />
      </div>
    );
  }
}

export default App;
