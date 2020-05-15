import _ from 'lodash';
import React from 'react';
import TodosListItem from './TodoListItem';

export default class TodoList extends React.Component {
  render() {
    return (
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>รหัส</th>
            <th>ชื่อ-สกุล</th>
          </tr>
        </thead>

        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
  renderItems() {
    let props = this.props;
    return _.map(this.props.listOfUser, (user, index) => {
      return <TodosListItem key={index} {...user} />
    }

    );
  }
}
