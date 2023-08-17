import React, { useState } from 'react';

function Formulario(props) {

    const [nombre, setNombre] = useState("");
    const [nombremascota, setNombremascota] = useState("");
    const [opcion, setOpcion] = useState("");
    const [edad, setEdad] = useState(0);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (!nombre || !nombremascota || !opcion || edad < 1 || edad > 100) {
            if (!nombre) {
                setErrorMessage("Por favor, ingrese un nombre.");
            } else if (nombre.length < 3) {
                setErrorMessage("El nombre debe tener al menos 3 caracteres.");
            } else if (nombre.startsWith(" ")) {
                setErrorMessage("El nombre no debe comenzar con espacios en blanco.");
            } else if (!nombremascota) {
                setErrorMessage("Por favor, ingrese el nombre de la mascota.");
            } else if (nombremascota.length < 6) {
                setErrorMessage("El nombre de la mascota debe tener al menos 6 caracteres.");
            } else if (!opcion) {
                setErrorMessage("Por favor, seleccione el tipo de mascota.");
            } else {
                setErrorMessage("La edad debe estar entre 1 y 100.");
            }
            setError(true);
            return;
        } else {
            setError(false);
            // envio para que coloque en el alerte si esta bien y si esta bien lo carga
            props.onUpdateDisciplina(opcion, Number(edad), nombre, nombremascota);
            alert(`Dueño: ${nombre}, Nombre de mascota: ${nombremascota}, Tipo de mascota: ${opcion}, Edad: ${edad}`);
            
            // Restablecer el formulario
            setNombre("");
            setNombremascota("");
            setOpcion("");
            setEdad(0);
        }
    }

    return (
        <form className="form form-custom-width" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input 
                    type="text" 
                    className="form-control"
                    id="nombre"
                    value={nombre} 
                    onChange={e => setNombre(e.target.value)} 
                    placeholder="Ingrese el nombre"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="nombremascota" className="form-label">Nombre de mascota</label>
                <input 
                    type="text" 
                    className="form-control"
                    id="nombremascota"
                    value={nombremascota} 
                    onChange={e => setNombremascota(e.target.value)} 
                    placeholder="Ingrese el nombre de mascota"
                />
            </div>            
            <div className="mb-3">
                <label htmlFor="tipoMascota" className="form-label">Tipo de mascota</label>
                <select 
                    className="form-control"
                    id="tipoMascota"
                    value={opcion} 
                    onChange={e => setOpcion(e.target.value)}
                >
                    <option value="" disabled>
                        Selecciona el tipo de mascota
                    </option>
                    <option value="perro">Perro</option>
                    <option value="gato">Gato</option>
                    <option value="ave">Ave</option>
                    <option value="otro">Otro</option>
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="edad" className="form-label">Edad</label>
                <input
                    type="number"
                    className="form-control"
                    id="edad"
                    value={edad}
                    onChange={e => setEdad(e.target.value)}
                    placeholder="Ingrese la edad"
                />
            </div>
            
            <div className="mb-3">
                <input 
                    type="submit" 
                    value="Guardar"
                    className="btn btn-primary"
                />
            </div>
            
            {error && <p className="text-danger">{errorMessage}</p>}
        </form>
    );
}

export default Formulario;
