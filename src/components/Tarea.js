import React from "react";
import "../styles/Tarea.scss";
import { AiOutlineClockCircle } from "react-icons/ai";

function Tarea(props) {
  const { id, texto, completada, completarTarea, eliminarTarea } = props;

  return (
    <div
      className={
        completada ? "tarea-contenedor completada" : "tarea-contenedor"
      }
    >
      <div className="tarea-texto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div
        className="tarea-contenedor-iconos"
        onClick={() => eliminarTarea(id)}
      >
        <AiOutlineClockCircle className="tarea-icono" />
      </div>
    </div>
  );
}

export default Tarea;
