create schema proyecto1;
use proyecto1;
CREATE TABLE usuarios1 (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(500) NOT NULL,
email VARCHAR(500) NOT NULL,
password varchar(100) NOT NULL,
foto_perfil VARCHAR(500) NOT NULL,
fecha_nacimiento DATE NOT NULL,
DNI integer NOT null,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


create table productos (
imagen VARCHAR(500) NOT NULL,
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT REFERENCES usuarios1(id) ON DELETE CASCADE,
id_usuario INT,
nombre_del_producto VARCHAR(500) NOT NULL,
descrip_producto VARCHAR(1000) NOT NULL,
claves VARCHAR(500),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

create table comentarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_producto INT NOT NULL,
id_usuario INT NOT NULL,
nombre_usuario VARCHAR(500) NOT NULL,
texto_comentario VARCHAR(500) NOT NULL,
claves VARCHAR(500) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


insert into usuarios1(username,email,password,foto_perfil,fecha_nacimiento, DNI)
values('eros123','eros@hotmail.com','eritos','fotoeros','2004/03/04','44990330');

insert into usuarios1(username,email,password,foto_perfil,fecha_nacimiento, DNI)
values('jero123','jero@hotmail.com','jerom', 'fotojero','2010/12/10', '44661731');

insert into usuarios1(username,email,password,foto_perfil,fecha_nacimiento, DNI)
values('nico123','nico@hotmail.com','nick','fotonico','2021/10/17','18412454');

insert into usuarios1(username,email,password,foto_perfil,fecha_nacimiento, DNI)
values('mati123','mati@hotmail.com','matim','fotmati','2005/10/11','17287070');

insert into usuarios1(username,email,password,foto_perfil,fecha_nacimiento, DNI)
values('carlo321','carlos@hotmail.com','carlitos','fotcarlos','2015/09/01','37273894');


insert into productos(imagen,id_usuario,nombre_del_producto,descrip_producto,claves)
values('/images/products/img-mustang.webp','6','Mustang','El Ford Mustang es un automóvil deportivo icónico de la marca estadounidense Ford. Es conocido por su estilo musculoso y su potencia, con una carrocería de dos puertas y capacidad para cuatro pasajeros. Fue lanzado en 1964 y desde entonces ha pasado por varias generaciones, cada una con características distintivas y mejoras en rendimiento y tecnología. El Mustang es especialmente popular entre los entusiastas de los autos deportivos y las carreras.', '0');

insert into productos(imagen,id_usuario,nombre_del_producto,descrip_producto,claves)
values('/images/products/img-lamborghini.jpeg','6','Lamborghini','El Lamborghini es una marca de automóviles de lujo y alta gama conocida por sus vehículos deportivos exóticos y de alto rendimiento. Los Lamborghini son famosos por su diseño audaz y agresivo, su rendimiento de clase mundial y su exclusividad.','1');

insert into productos(imagen,id_usuario,nombre_del_producto,descrip_producto,claves)
values('/images/products/img-cammaro.webp','6','Cammaro','El Camaro es un automóvil deportivo fabricado por la marca estadounidense Chevrolet, propiedad de General Motors. Es un coupé de dos puertas con capacidad para cuatro pasajeros, y se caracteriza por su diseño musculoso y su potente motor. Fue lanzado en 1966 y ha pasado por varias generaciones, cada una con mejoras en rendimiento y tecnología. El Camaro es conocido por su capacidad de aceleración y velocidad, lo que lo convierte en un automóvil popular entre los entusiastas de los autos deportivos y las carreras.','2');

insert into productos(imagen,id_usuario,nombre_del_producto,descrip_producto,claves)
values('/images/products/img-corvete.avif','6','Corvete','El Corvette es un automóvil deportivo de la marca estadounidense Chevrolet, propiedad de General Motors. Es un coupé o convertible de dos puertas con capacidad para dos pasajeros, y se caracteriza por su diseño deportivo y su alto rendimiento. Fue lanzado en 1953 y ha pasado por varias generaciones, cada una con mejoras en rendimiento y tecnología. El Corvette es conocido por su potente motor y su agilidad en la carretera, lo que lo convierte en un automóvil popular entre los entusiastas de los autos deportivos y las carreras. También es un símbolo de la ingeniería y la tecnología automotriz estadounidense.','3');

insert into productos(imagen,id_usuario,nombre_del_producto,descrip_producto,claves)
values('/images/products/img-ferrari.jpeg','6','Ferrari','Ferrari es una marca italiana de automóviles deportivos y de lujo, conocida por su diseño elegante, alto rendimiento y prestaciones excepcionales. Fundada en 1947 por Enzo Ferrari, la empresa ha construido una reputación legendaria en el mundo del automovilismo y se ha convertido en un icono de lujo y exclusividad.','4');

insert into productos(imagen,id_usuario,nombre_del_producto,descrip_producto,claves)
values('/images/products/img-pagani.jpeg','2','Pagani','Pagani es un fabricante italiano de automóviles de lujo y súper deportivos con sede en Modena, Italia. Fundada por Horacio Pagani en 1992, la marca se ha ganado una reputación mundial por su enfoque meticuloso en la artesanía, la innovación y la exclusividad en la fabricación de vehículos de alto rendimiento.','5');

insert into productos(imagen,id_usuario,nombre_del_producto,descrip_producto,claves)
values('/images/products/img-mclaren.jpeg','4','Mclaren 765','El McLaren 765 es un automóvil deportivo de lujo fabricado por McLaren Automotive, un fabricante británico de automóviles con sede en Surrey, Inglaterra. Es parte de la serie de automóviles Super Series de McLaren y se basa en el chasis monocasco de fibra de carbono, que es una característica distintiva de los vehículos de McLaren.','6');

insert into productos(imagen,id_usuario,nombre_del_producto,descrip_producto,claves)
values('/images/products/img-bugatti.jpeg','6','Bugatti','Bugatti es una prestigiosa marca de automóviles de lujo y alto rendimiento con sede en Francia. Fundada en 1909 por Ettore Bugatti, la marca es conocida por producir algunos de los automóviles más rápidos, exquisitos y exclusivos del mundo.','7');

insert into productos(imagen,id_usuario,nombre_del_producto,descrip_producto,claves)
values('/images/products/img-bentley.jpeg','8','Bentley','El Bentley es un automóvil de lujo de alta gama, conocido por su elegante diseño, su potente motor y su cómoda experiencia de conducción. Es un vehículo emblemático que ha sido asociado con la realeza, los empresarios y los ricos y famosos. Con sus detalles finamente trabajados y materiales de alta calidad, el Bentley es un símbolo de distinción y refinamiento en el mundo del automovilismo.','8');

insert into productos(imagen,id_usuario,nombre_del_producto,descrip_producto,claves)
values('/images/products/img-masserati.jpeg','10','Masserati','El Maserati es un automóvil deportivo de lujo italiano, reconocido por su estilo sofisticado, su potencia y su rendimiento excepcional. Con su emblemático tridente en la parrilla delantera, los modelos de Maserati se han ganado una reputación por su diseño elegante y su desempeño deportivo. Cada detalle del automóvil, desde el sonido del motor hasta la suavidad de su manejo, se enfoca en brindar una experiencia de conducción emocionante y lujosa.','9');

insert into comentarios(id_producto,id_usuario,nombre_usuario,texto_comentario,claves)
values('2','5','pepo','Hola muy bueno el auto', '10');

insert into comentarios(id_producto,id_usuario,nombre_usuario,texto_comentario,claves)
values('4','6','lala','Que buen auto','12');

insert into comentarios(id_producto,id_usuario,nombre_usuario,texto_comentario,claves)
values('6','7','ramon','Muy bueno me re gusto.','14');

insert into comentarios(id_producto,id_usuario,nombre_usuario,texto_comentario,claves)
values('8','8','lidia','Muy bueno me encanto.','16');