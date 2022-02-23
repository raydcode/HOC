import React, { Component } from 'react';
import TableRow from './TableRow';

class ShopList extends Component {
  constructor(props) {
    super(props);
  }

  tabRow() {
    if (this.props.data instanceof Array) {
      return this.props.data.map((object, i) => {
        return <TableRow obj={object} key={i} />;
      });
    }
  }
  render() {
    return (
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <td>SI.NO</td>
              <td>Name</td>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}
export default ShopList;
