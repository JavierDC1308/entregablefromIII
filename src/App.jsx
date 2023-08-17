import React, { useState } from 'react';
import Formulario from "./components/Formulario";
import Card from "./components/Card";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    const [mascotas, setMascotas] = useState([]);

    function handleUpdateMascota(tipoMascota, edad, nombreDueno, nombremascota) {
        const nuevaMascota = { nombreDueno, nombremascota, tipoMascota, edad };
        setMascotas(prevMascotas => [...prevMascotas, nuevaMascota]);
    }

    return (
        <div className="container">
            <h1>Registro de Mascotas</h1>
            <Formulario onUpdateDisciplina={handleUpdateMascota} />
            
            <div className="lista-mascotas">
                <h2>Listado de Mascotas</h2>
                {mascotas.map((mascota, index) => (
                    <Card 
                        key={index}
                        nombre={mascota.nombreDueno}
                        nombremascota={mascota.nombremascota}
                        mascota={mascota.tipoMascota}
                        edad={mascota.edad}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;


