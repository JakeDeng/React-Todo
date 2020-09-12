import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

    render() {
        return this.props.todos.map((todo)=>(
           <TodoItem key={todo.id} 
                     todo={todo} 
                     removeTodo={this.props.removeTodo}
                     markComplete={this.props.markComplete} />
        ));
    }
}

//PropTypes for type checking
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,

}

export default Todos;