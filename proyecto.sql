create schema arbol;
use arbol;
CREATE TABLE usuarios (
username INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(500) NOT NULL,
contrasena varchar(100) NOT NULL,
perfil VARCHAR(500) NOT NULL,
fecha DATE NOT NULL,
DNI TINYINT not null,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP ON UPDATE CURRENT_TIMESTAMP ,




length INT UNSIGNED NOT NULL
);


create table productos (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre_del_producto VARCHAR(500) NOT NULL,
descrip_producto VARCHAR(1000) NOT NULL,
claves VARCHAR(500) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP ON UPDATE CURRENT_TIMESTAMP ,
length INT UNSIGNED NOT NULL
);

create table comentarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_usuario INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
texto_comentario text default,
FOREIGN KEY id_usuario REFERENCES usuario(id),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP ON UPDATE CURRENT_TIMESTAMP ,
length INT UNSIGNED NOT NULL
);


insert into usuarios(username,email,contrasena,perfil,fecha)
values('eros123','eros@hotmail.com,123','eritos','03/04/1323');

insert into usuarios(username,email,contrasena,perfil,fecha)
values('jero123','jero@hotmail.com','123','jerom','12/04/1393');

insert into usuarios(username,email,contrasena,perfil,fecha)
values('nico123','nico@hotmail.com','123','nick','07/11/1993');

insert into usuarios(username,email,contrasena,perfil,fecha)
values('mati123','mati@hotmail.com','123','matim','108/12/2009');

insert into usuarios(username,email,contrasena,perfil,fecha)
values('carlo321','carlos@hotmail.com','123','carlitos','11/09/2002');


insert into productos(nombre_del_producto,descrip_producto,claves)
values('Mustang','El Ford Mustang es un automóvil deportivo icónico de la marca estadounidense Ford. Es conocido por su estilo musculoso y su potencia, con una carrocería de dos puertas y capacidad para cuatro pasajeros. Fue lanzado en 1964 y desde entonces ha pasado por varias generaciones, cada una con características distintivas y mejoras en rendimiento y tecnología. El Mustang es especialmente popular entre los entusiastas de los autos deportivos y las carreras.','123','jerom','12/04/1393');

insert into productos(nombre_del_producto,descrip_producto,claves)
values('Lamborghini','El Lamborghini es una marca de automóviles de lujo y alta gama conocida por sus vehículos deportivos exóticos y de alto rendimiento. Los Lamborghini son famosos por su diseño audaz y agresivo, su rendimiento de clase mundial y su exclusividad.');

insert into productos(nombre_del_producto,descrip_producto,claves)
values('Cammaro','El Camaro es un automóvil deportivo fabricado por la marca estadounidense Chevrolet, propiedad de General Motors. Es un coupé de dos puertas con capacidad para cuatro pasajeros, y se caracteriza por su diseño musculoso y su potente motor. Fue lanzado en 1966 y ha pasado por varias generaciones, cada una con mejoras en rendimiento y tecnología. El Camaro es conocido por su capacidad de aceleración y velocidad, lo que lo convierte en un automóvil popular entre los entusiastas de los autos deportivos y las carreras.');

insert into productos(nombre_del_producto,descrip_producto,claves)
values('Corvete','El Corvette es un automóvil deportivo de la marca estadounidense Chevrolet, propiedad de General Motors. Es un coupé o convertible de dos puertas con capacidad para dos pasajeros, y se caracteriza por su diseño deportivo y su alto rendimiento. Fue lanzado en 1953 y ha pasado por varias generaciones, cada una con mejoras en rendimiento y tecnología. El Corvette es conocido por su potente motor y su agilidad en la carretera, lo que lo convierte en un automóvil popular entre los entusiastas de los autos deportivos y las carreras. También es un símbolo de la ingeniería y la tecnología automotriz estadounidense.x');

insert into productos(nombre_del_producto,descrip_producto,claves)
values('Ferrari','Ferrari es una marca italiana de automóviles deportivos y de lujo, conocida por su diseño elegante, alto rendimiento y prestaciones excepcionales. Fundada en 1947 por Enzo Ferrari, la empresa ha construido una reputación legendaria en el mundo del automovilismo y se ha convertido en un icono de lujo y exclusividad.');

insert into productos(nombre_del_producto,descrip_producto,claves)
values('Pagani','Pagani es un fabricante italiano de automóviles de lujo y súper deportivos con sede en Modena, Italia. Fundada por Horacio Pagani en 1992, la marca se ha ganado una reputación mundial por su enfoque meticuloso en la artesanía, la innovación y la exclusividad en la fabricación de vehículos de alto rendimiento.');

insert into productos(nombre_del_producto,descrip_producto,claves)
values('Mclaren 765','El McLaren 765 es un automóvil deportivo de lujo fabricado por McLaren Automotive, un fabricante británico de automóviles con sede en Surrey, Inglaterra. Es parte de la serie de automóviles Super Series de McLaren y se basa en el chasis monocasco de fibra de carbono, que es una característica distintiva de los vehículos de McLaren.');

insert into productos(nombre_del_producto,descrip_producto,claves)
values('Bugatti','Bugatti es una prestigiosa marca de automóviles de lujo y alto rendimiento con sede en Francia. Fundada en 1909 por Ettore Bugatti, la marca es conocida por producir algunos de los automóviles más rápidos, exquisitos y exclusivos del mundo.',);

insert into productos(nombre_del_producto,descrip_producto,claves)
values('Bentley','El Bentley es un automóvil de lujo de alta gama, conocido por su elegante diseño, su potente motor y su cómoda experiencia de conducción. Es un vehículo emblemático que ha sido asociado con la realeza, los empresarios y los ricos y famosos. Con sus detalles finamente trabajados y materiales de alta calidad, el Bentley es un símbolo de distinción y refinamiento en el mundo del automovilismo.');

insert into productos(nombre_del_producto,descrip_producto,claves)
values('Maserati','El Maserati es un automóvil deportivo de lujo italiano, reconocido por su estilo sofisticado, su potencia y su rendimiento excepcional. Con su emblemático tridente en la parrilla delantera, los modelos de Maserati se han ganado una reputación por su diseño elegante y su desempeño deportivo. Cada detalle del automóvil, desde el sonido del motor hasta la suavidad de su manejo, se enfoca en brindar una experiencia de conducción emocionante y lujosa. ');

insert into comentarios(id,id_usuario,texto_comentario,claves)
values('Mati','Jero','Hola muy bueno el auto');

insert into comentarios(id,id_usuario,texto_comentario,claves)
values('Jorge','Pablo','Que buen auto');

insert into comentarios(id,id_usuario,texto_comentario,claves)
values('Pedro','Juan','Muy bueno me encanto.');

insert into comentarios(id,id_usuario,texto_comentario,claves)
values('Carlos','Oscar','Muy bueno me encanto.');

    
	


