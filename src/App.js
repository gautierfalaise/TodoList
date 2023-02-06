import Form from './Components/Form/Form';
import Todo from './Components/Todo/Todo';
import Finished from './Components/Finished/Finished';
import './App.css';

// Ce composant est le composant principal de l'application TodoList.
// Il importe les composants Form, Todo et Finished.
// Le composant Form permet à l'utilisateur d'ajouter de nouveaux todos.
// Le composant Todo affiche la liste des todos.
// Le composant Finished affiche la liste des todos terminés.
// Le composant App retourne un div avec la classe "App" qui contient
// l'en-tête et les trois composants importés.

function App() {
  return (
    <div className="App">
      <h1>TodoList</h1>
      {/* Ce composant permet à l'utilisateur d'ajouter de nouveaux todos. */}
      <Form />
      {/* Ce composant affiche la liste des todos. */}
      <Todo />
      {/* Ce composant affiche la liste des todos terminés. */}
      <Finished />
    </div>
  );
}

// Ce composant est exporté pour être utilisé dans d'autres parties de l'application.
export default App;

