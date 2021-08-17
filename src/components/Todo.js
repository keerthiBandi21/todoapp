import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, editTodo } from '../redux/actions/addTodo';

const Todo = ({ todo, idx, deleteTodo, editTodo , selected, text }) => {
    return (
        <div className="todoList">

            <div onClick={()=> editTodo(idx)}>
                {
                    
                    selected === idx ? 
                    text 
                    :
                    todo
                }    
            </div>
            <div className="deletetodo" style={{cursor: "pointer"}}
            onClick={() => deleteTodo(idx)}>x</div>
        </div>)
}

const mapDispatchToProps = dispatch => ({
    deleteTodo: key => dispatch(deleteTodo(key)),
    editTodo: key => dispatch(editTodo(key))
});

const mapStateToProps = ({ text, selected}) => ({
    text,
    selected
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps)
    (Todo);