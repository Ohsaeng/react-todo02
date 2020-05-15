import _ from 'lodash';
import React from 'react';

export default class TodoListForm extends React.Component {
  constructor(props) {
    super(props);
  }
  checkUniqueID(value) {
    let list = this.props.listOfUser;
    for (let obj of list) {
      if (obj.userid === value) {
        return false;
      }
    }
    return true;
  }

  handleSubmit(event) {
    event.preventDefault();

    const userid = this.refs.userid;
    const fullname = this.refs.fullname;

    if (userid.value === '' || fullname.value === '') {
      alert('กรุณากรอกค่าให้ครบทุกฟิลด์!');
      return;
    }

    if (!this.checkUniqueID(userid.value)) {
      alert("รหัสไม่สามารถซ้ำกันได้!");
      return false;
    }

    let item = {
      userid: userid.value,
      fullname: fullname.value
    };
    this.props.createItem(item);

    this.refs.userid.value = '';
    this.refs.fullname.value = '';
  }
  render() {
    return (
      <form class="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>

        <div class="form-group">
          <label class="control-label col-sm-2">รหัส:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="userid" ref="userid" />
          </div>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-2">ชื่อสกุล:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="fullname" ref="fullname" />
          </div>
        </div>

        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default">Submit</button>
          </div>
        </div>
      </form>
    );
  }
}
