import "../styles/components/App.scss";
import "../styles/components/ListaDeTareas.scss";
import ListaDeTareas from "./ListaDeTareas";

function App() {
  return (
    <>
      <div className="aplicacion-tareas"></div>

      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </>
  );
}

export default App;
