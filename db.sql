CREATE TABLE IF NOT EXISTS usuarios
(
	id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nombre varchar(50) NOT NULL UNIQUE,
	contrasena varchar(255) NOT NULL,
	tipo int(1) NOT NULL DEFAULT 0,
	ultima_conexion timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	fecha_registro timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);