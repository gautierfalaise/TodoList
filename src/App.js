import Form from './Components/Form/Form';
import Todo from './Components/Todo/Todo';
import Finished from './Components/Finished/Finished';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>TodoList</h1>
      <Form />
      <Todo />
      <Finished />
    </div>
  );
}

export default App;
