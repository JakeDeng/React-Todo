import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    //add styling
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted' ,
            textDecoration: this.props.todo.completed ? 'line-through': 'none'
        };
    }

    render() {
        //destructuring 
        const { id, title } = this.props.todo;
        return (
            //inline styling
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" 
                        //call the function that pass down from App.js
                        onChange={this.props.markComplete.bind(this,id)} />  
                    {' '}
                    {title}
                    <button onClick={this.props.removeTodo.bind(this,id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
    brackground: '#ff0000',
    color: '#ff0000',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer', 
    float: 'right'
}

//PropTypes for type checking
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
}

export default TodoItem

