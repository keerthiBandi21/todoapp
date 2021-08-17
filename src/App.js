
import './App.css';
import InputField from './components/InputFields';
import TodosList from './components/TodosList';
import { connect } from 'react-redux';
import { deleteAll, persistTodos } from './redux/actions/addTodo';
import { useEffect } from 'react';

const App = ({ deleteAll, persistTodos }) => {
  useEffect(() => {
    persistTodos();
  },[persistTodos])
  return (
    <div className="todosdiv">
      <h1 className="todoh1">Todo List</h1>
      <InputField />
      <TodosList />
      <div>
        <button className ="deleteallbutton" onClick={()=>deleteAll()}>
          {" "}
          Delete All
        </button>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  deleteAll: () => dispatch(deleteAll()),
  persistTodos: () => dispatch(persistTodos())
});

export default connect(
  null,
  mapDispatchToProps
  )(App);