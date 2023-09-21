create database books(
    id bigint NO NULL PRIMARY KEY,
    title VARCHAR(250) NO NULL,
    price NUMERIC NO NULL,
    about text NO NULL,
    image VARCHAR(250) NO NULL
);
