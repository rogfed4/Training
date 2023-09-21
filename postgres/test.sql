create table car (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	make VARCHAR(50) NOT NULL,
	model VARCHAR(50) NOT NULL,
	price VARCHAR(50) NOT NULL 
);

create table person (
	id BIGSERIAL NOT NULL PRIMArY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	gender VARCHAR(50) NOT NULL,
	date_of_birth DATE NOT NULL,
	email VARCHAR(50),
    car_id BIGINT REFERENCES car(id),
    UNIQUE(car_id)
);


insert into person (first_name, last_name, gender, date_of_birth, email) values ('Rubi', 'McGinty', 'Female', '2023-08-02', null);
insert into person (first_name, last_name, gender, date_of_birth, email) values ('Boyce', 'Goare', 'Male', '2022-12-21', 'bgoare1@ibm.com');
insert into person (first_name, last_name, gender, date_of_birth, email) values ('Reidar', 'Noad', 'Male', '2023-06-21', 'rnoad2@indiegogo.com');

insert into car (make, model, price) values ('Cadillac', 'CTS-V', '$228344.99');
insert into car (make, model, price) values ('Oldsmobile', 'LSS', '$704286.11');
