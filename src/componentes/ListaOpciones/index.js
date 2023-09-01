import "./ListaOpciones.css"
const ListaOpciones = (props) => {

    const manejarCambio = (e) => {
        console.log("Cambio", e.target.value)
        props.ActualizarEquipo(e.target.value)
    }
    return <div className ="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            { props.equipos.map((equipo, index) =>
             <option key={index}>{equipo}</option>
            )}
        </select>
    </div>
}

export default ListaOpciones