function Card({ nombre, nombremascota, mascota, edad }) {
  return (
      <div className="card mb-3" style={{ width: '18rem' }}> {/* Tarjeta de Bootstrap */}
          <div className="card-header">Información de la Mascota</div> {/* Encabezado */}
          <div className="card-body">
              <h5 className="card-title">Dueño: {nombre}</h5> {/* Título de la tarjeta */}
              <p className="card-text">Nombre de la mascota: {nombremascota}</p>
              <p className="card-text">Tipo: {mascota}</p>
              <p className="card-text">Edad: {edad} </p>
          </div>
      </div>
  );
}

export default Card;

