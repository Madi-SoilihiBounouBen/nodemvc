create table User(
id INT primary key auto_increment not null,
email VARCHAR (150) not null,
passwordUser VARCHAR (150) not null,
unique (email)
);