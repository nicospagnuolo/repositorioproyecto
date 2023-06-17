-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jun 17, 2023 at 01:49 AM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `proyecto1`
--

-- --------------------------------------------------------

--
-- Table structure for table `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_producto` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `nombre_usuario` varchar(500) NOT NULL,
  `texto_comentario` varchar(500) NOT NULL,
  `claves` varchar(500) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comentarios`
--

INSERT INTO `comentarios` (`id`, `id_producto`, `id_usuario`, `nombre_usuario`, `texto_comentario`, `claves`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 2, 4, 'Pepo', 'Hola muy bueno el auto', '10', '2023-06-17 01:46:34', '2023-06-17 01:46:34', '2023-06-17 01:46:34'),
(2, 4, 1, 'Martin', 'Que buen auto!', '12', '2023-06-17 01:46:34', '2023-06-17 01:46:34', '2023-06-17 01:46:34'),
(3, 6, 2, 'Ramon', 'Muy bueno me re gusto.', '14', '2023-06-17 01:46:34', '2023-06-17 01:46:34', '2023-06-17 01:46:34'),
(4, 8, 3, 'Olivia', 'Muy bueno me encanto.', '16', '2023-06-17 01:46:34', '2023-06-17 01:46:34', '2023-06-17 01:46:34'),
(5, 1, 5, 'Florencia', 'Hola muy bueno el auto, tremenda potencia', '10', '2023-06-17 01:46:34', '2023-06-17 01:46:34', '2023-06-17 01:46:34'),
(6, 3, 1, 'Martin', 'Que buen auto, mus comodo para familias!', '12', '2023-06-17 01:46:34', '2023-06-17 01:46:34', '2023-06-17 01:46:34'),
(7, 5, 2, 'Ramon', 'Muy bueno me re gusto su andar.', '14', '2023-06-17 01:46:34', '2023-06-17 01:46:34', '2023-06-17 01:46:34'),
(8, 7, 3, 'Olivia', 'Muy bueno me encantoel diseño.', '16', '2023-06-17 01:46:34', '2023-06-17 01:46:34', '2023-06-17 01:46:34'),
(9, 2, 6, 'jcaldelas', 'Tiene mucha variedad de colores, me re gusto!', NULL, '2023-06-17 01:48:56', '2023-06-17 01:48:56', '2023-06-17 01:48:56');

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `imagen` varchar(5000) NOT NULL,
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `nombre_del_producto` varchar(500) NOT NULL,
  `descrip_producto` varchar(1000) NOT NULL,
  `claves` varchar(500) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`imagen`, `id`, `user_id`, `nombre_del_producto`, `descrip_producto`, `claves`, `created_at`, `updated_at`, `deleted_at`) VALUES
('https://www.elcarrocolombiano.com/wp-content/uploads/2022/05/20220511-FORD-MUSTANG-SHELBY-HERTZ-PORTADA.jpg', 1, 1, 'Mustang', 'El Ford Mustang es un automóvil deportivo icónico de la marca estadounidense Ford. Es conocido por su estilo musculoso y su potencia, con una carrocería de dos puertas y capacidad para cuatro pasajeros. Fue lanzado en 1964 y desde entonces ha pasado por varias generaciones, cada una con características distintivas y mejoras en rendimiento y tecnología. El Mustang es especialmente popular entre los entusiastas de los autos deportivos y las carreras.', '0', '2023-06-17 01:46:34', '2023-06-17 01:46:34', '2023-06-17 01:46:34'),
('https://soymotor.com/sites/default/files/styles/amp_1200x675_16_9/public/2023-04/lamborghini-revuelto-shanghai-1-soymotor_0.jpg?itok=5ogFApr_', 2, 2, 'Lamborghini', 'El Lamborghini es una marca de automóviles de lujo y alta gama conocida por sus vehículos deportivos exóticos y de alto rendimiento. Los Lamborghini son famosos por su diseño audaz y agresivo, su rendimiento de clase mundial y su exclusividad.', '1', '2023-06-17 01:46:34', '2023-06-17 01:46:34', '2023-06-17 01:46:34'),
('https://fotos.perfil.com/2016/10/01/trim/1280/720/2017-chevrolet-camaro-50-anniversario.jpg', 3, 3, 'Cammaro', 'El Camaro es un automóvil deportivo fabricado por la marca estadounidense Chevrolet, propiedad de General Motors. Es un coupé de dos puertas con capacidad para cuatro pasajeros, y se caracteriza por su diseño musculoso y su potente motor. Fue lanzado en 1966 y ha pasado por varias generaciones, cada una con mejoras en rendimiento y tecnología. El Camaro es conocido por su capacidad de aceleración y velocidad, lo que lo convierte en un automóvil popular entre los entusiastas de los autos deportivos y las carreras.', '2', '2023-06-17 01:46:34', '2023-06-17 01:46:34', '2023-06-17 01:46:34'),
('https://media.gm.com/dld/content/dam/Media/images/US/Vehicles/Chevrolet/Cars/Corvette_Z06/2023/Product/Vehicle/2023-Chevrolet-Corvette-Z06-002.jpg', 4, 4, 'Corvete', 'El Corvette es un automóvil deportivo de la marca estadounidense Chevrolet, propiedad de General Motors. Es un coupé o convertible de dos puertas con capacidad para dos pasajeros, y se caracteriza por su diseño deportivo y su alto rendimiento. Fue lanzado en 1953 y ha pasado por varias generaciones, cada una con mejoras en rendimiento y tecnología. El Corvette es conocido por su potente motor y su agilidad en la carretera, lo que lo convierte en un automóvil popular entre los entusiastas de los autos deportivos y las carreras. También es un símbolo de la ingeniería y la tecnología automotriz estadounidense.', '3', '2023-06-17 01:46:34', '2023-06-17 01:46:34', '2023-06-17 01:46:34'),
('https://elcomercio.pe/resizer/J1TWWWF0s4mXS8LUPB54xJub6C0=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/KLTEF74UKNF3HOTGME5IZB3NFU.jpg', 5, 5, 'Ferrari', 'Ferrari es una marca italiana de automóviles deportivos y de lujo, conocida por su diseño elegante, alto rendimiento y prestaciones excepcionales. Fundada en 1947 por Enzo Ferrari, la empresa ha construido una reputación legendaria en el mundo del automovilismo y se ha convertido en un icono de lujo y exclusividad.', '4', '2023-06-17 01:46:34', '2023-06-17 01:46:34', '2023-06-17 01:46:34'),
('https://hips.hearstapps.com/hmg-prod/images/pagani-zonda-riviera-1575113508.jpg', 6, 1, 'Pagani', 'Pagani es un fabricante italiano de automóviles de lujo y súper deportivos con sede en Modena, Italia. Fundada por Horacio Pagani en 1992, la marca se ha ganado una reputación mundial por su enfoque meticuloso en la artesanía, la innovación y la exclusividad en la fabricación de vehículos de alto rendimiento.', '5', '2023-06-17 01:46:34', '2023-06-17 01:46:34', '2023-06-17 01:46:34'),
('https://mclaren.scene7.com/is/image/mclaren/765lt-3-1200x1200-1:crop-4x3?wid=1920&hei=1440', 7, 2, 'Mclaren 765', 'El McLaren 765 es un automóvil deportivo de lujo fabricado por McLaren Automotive, un fabricante británico de automóviles con sede en Surrey, Inglaterra. Es parte de la serie de automóviles Super Series de McLaren y se basa en el chasis monocasco de fibra de carbono, que es una característica distintiva de los vehículos de McLaren.', '6', '2023-06-17 01:46:34', '2023-06-17 01:46:34', '2023-06-17 01:46:34'),
('https://cloudfront-us-east-1.images.arcpublishing.com/infobae/T7IHXQKKQZDGDIFBLGA6D34FV4.jpg', 8, 3, 'Bugatti', 'Bugatti es una prestigiosa marca de automóviles de lujo y alto rendimiento con sede en Francia. Fundada en 1909 por Ettore Bugatti, la marca es conocida por producir algunos de los automóviles más rápidos, exquisitos y exclusivos del mundo.', '7', '2023-06-17 01:46:34', '2023-06-17 01:46:34', '2023-06-17 01:46:34'),
('https://acnews.blob.core.windows.net/imgnews/medium/NAZ_8a70c08d06084cc889c207bf4bc97ba8.webp', 9, 4, 'Bentley', 'El Bentley es un automóvil de lujo de alta gama, conocido por su elegante diseño, su potente motor y su cómoda experiencia de conducción. Es un vehículo emblemático que ha sido asociado con la realeza, los empresarios y los ricos y famosos. Con sus detalles finamente trabajados y materiales de alta calidad, el Bentley es un símbolo de distinción y refinamiento en el mundo del automovilismo.', '8', '2023-06-17 01:46:34', '2023-06-17 01:46:34', '2023-06-17 01:46:34'),
('https://cdn.motor1.com/images/mgl/rKnOn6/s1/maserati-granturismo-modena-front-3-4.webp', 10, 5, 'Masserati', 'El Maserati es un automóvil deportivo de lujo italiano, reconocido por su estilo sofisticado, su potencia y su rendimiento excepcional. Con su emblemático tridente en la parrilla delantera, los modelos de Maserati se han ganado una reputación por su diseño elegante y su desempeño deportivo. Cada detalle del automóvil, desde el sonido del motor hasta la suavidad de su manejo, se enfoca en brindar una experiencia de conducción emocionante y lujosa.', '9', '2023-06-17 01:46:34', '2023-06-17 01:46:34', '2023-06-17 01:46:34');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios1`
--

CREATE TABLE `usuarios1` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(500) NOT NULL,
  `email` varchar(500) NOT NULL,
  `password` varchar(100) NOT NULL,
  `foto_perfil` varchar(5000) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `DNI` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuarios1`
--

INSERT INTO `usuarios1` (`id`, `username`, `email`, `password`, `foto_perfil`, `fecha_nacimiento`, `DNI`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'eros123', 'eros@hotmail.com', 'eritos', 'https://i.pinimg.com/474x/65/5b/e1/655be1631837ac4f6a1e75ecd81326c0.jpg', '2004-03-04', 44990330, '2023-06-17 01:46:34', '2023-06-17 01:46:34', '2023-06-17 01:46:34'),
(2, 'jero123', 'jero@hotmail.com', 'jerom', 'https://i.pinimg.com/474x/7b/04/7b/7b047b23f49c9a61038f6ef613b4bc72.jpg', '2010-12-10', 44661731, '2023-06-17 01:46:34', '2023-06-17 01:46:34', '2023-06-17 01:46:34'),
(3, 'nico123', 'nico@hotmail.com', 'nick', 'https://i.pinimg.com/474x/a4/0a/db/a40adbb4e98486e06a57bc75c4b06600.jpg', '2021-10-17', 18412454, '2023-06-17 01:46:34', '2023-06-17 01:46:34', '2023-06-17 01:46:34'),
(4, 'mati123', 'mati@hotmail.com', 'matim', 'https://i.pinimg.com/474x/5c/1d/c3/5c1dc3bd2a800dd820b30ca451211331.jpg', '2005-10-11', 17287070, '2023-06-17 01:46:34', '2023-06-17 01:46:34', '2023-06-17 01:46:34'),
(5, 'carlo321', 'carlos@hotmail.com', 'carlitos', 'https://i.pinimg.com/474x/37/2c/7b/372c7bbe0c1e167b970dc6777a3e77ee.jpg', '2015-09-01', 37273894, '2023-06-17 01:46:34', '2023-06-17 01:46:34', '2023-06-17 01:46:34'),
(6, 'jcaldelas', 'caldelasjeronimo@gmail.com', '$2a$12$Nxz7Sn1igPwKXACog.9Sw.FCN/kQaqCc.34dIHF.8igCT/kTzB2.S', 'https://pps.whatsapp.net/v/t61.24694-24/264148278_385612200022476_7237007300201146576_n.jpg?ccb=11-4&oh=01_AdT99jkl8zU-WL5U2oTply8qZTeCLHvPiNgf_xDaBXlr5g&oe=649A2D84', '2023-06-02', 44661731, '2023-06-17 01:48:02', '2023-06-17 01:48:02', '2023-06-17 01:48:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios1`
--
ALTER TABLE `usuarios1`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `usuarios1`
--
ALTER TABLE `usuarios1`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
