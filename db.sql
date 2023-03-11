CREATE TABLE IF NOT EXISTS users
(
	id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	username varchar(50) NOT NULL UNIQUE,
	password varchar(255) NOT NULL,
	role int(1) NOT NULL DEFAULT 0,
	last_online timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	register_date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS permission
(
	id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS user_permission
(
	user_id int(4) NOT NULL,
	permission_id int(3) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES users(id),
	FOREIGN KEY (permission_id) REFERENCES permission(id)
);