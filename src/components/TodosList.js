
import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const TodosList = ( { todos }) => {
    return (
        <div className="todos-list">
            <h1>List</h1>
            {
                todos.map((todo,i) => (
                    <Todo key = {i} todo ={todo} idx ={i} />
                ))
            }
        </div>
    )
}

const mapStateToProps = ({ todos}) => ({
    todos
})
export default connect(mapStateToProps)(TodosList);