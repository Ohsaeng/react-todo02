import React, { Component } from 'react';
import { render } from 'react-dom';
import TodosList from './TodoList';
import TodoListForm from './TodoListForm';
import './style.css';

const listOfUser = [];

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listOfUser,
            refObject: {}
        };
    }

    createItem(data) {
        this.state.listOfUser.push(data);
        this.setState({ listOfUser: this.state.listOfUser });
    }
    render() {
        let data = this.state.listOfUser;
        return ( <
            div >
            <
            div class = "container-fluid" >
            <
            div class = "row" >
            <
            TodoListForm createItem = { this.createItem.bind(this) }
            listOfUser = { data }
            /> <
            TodosList listOfUser = { data }
            /> <
            /div> <
            /div> <
            /div>
        );
    }
}

render( < App / > , document.getElementById('root'));