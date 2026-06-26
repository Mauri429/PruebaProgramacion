Create database parcial_node;

Create table productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    categoria VARCHAR(100) NOT NULL UNIQUE,
    precio VARCHAR(255) NOT NULL,
    stock VARCHAR(255) NOT NULL,
);

