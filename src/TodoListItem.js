import React from 'react';

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  onSelected(user) {
    document.getElementById('userid').value = user.userid;
    document.getElementById('fullname').value = user.fullname;
  }
  render() {
    const { userid, fullname } = this.props;
    return (
      <tr onClick={() => this.onSelected(this.props)}>
        <td>{userid}</td>
        <td>{fullname}</td>
      </tr>
    );
  }
}
