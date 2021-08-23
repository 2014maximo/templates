-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-08-2021 a las 21:25:48
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `restaurante`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `idcliente` varchar(20) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `telefono` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`idcliente`, `nombre`, `direccion`, `telefono`) VALUES
('10254614', 'PATRICIA HERNANDEZ', 'calle 13 # 25 - 37', '369-58-65'),
('102800', 'RAQUEL RAYA GARCIA', 'Calle 100 # 11B-27 Bogotá', '625-41-13'),
('10366598', 'SARA MONCADA', 'tv 27 sur # 36 - 27', '608-12-54'),
('10369857', 'ROCIO PEREA', 'cra 80 # 35 - 27', '527-85-41'),
('10900', 'ESTHER PASCUAL ALOY', 'Carrera 21 # 17 -63', '658-44-44'),
('1128419499', 'DEISSY MONTOYA OSPINA', 'CARRERA 65 A NO 73 - 273 en: BELLO-ANTIOQUIA', '3166297885'),
('1128443701', 'LUISA FERNANDA CUARTAS MESA', 'Transv 49DSUR #62C-62 EL LIMONAR en: MEDELLIN-ANTI', '3008838275'),
('1128452619', 'ERIKA ISABEL TORRES PAREJA', 'CARRERA 40 NO 51 - 103 INT 301 en: MONTERIA-CORDOB', '3005603418'),
('1128468156', 'YEIMY TATIANA LOPERA MONSALVE', 'Calle 26 #43-51 MADERA en: TIERRALTA-CORDOBA', '3197351257'),
('113600', 'JOSEP ANGUERA VILAFRANCA', 'Calle 19 # 80A-40. Barrio Belén La Nubia', '648-22-11'),
('120300', 'JOAN ANDREU CRUZ', 'Carrera 20 B # 29-18. Barrio Pie de la Popa.', '690-52-22'),
('17500', 'QUERALT VISO GILABERT', 'Avenida 19 No. 98-03, sexto piso, Edificio Torre 1', '625-21-54'),
('31528644', 'DOLLIS MABEL BEJARANO RIOS', 'Calle 45 #120C-32 SAN JAVIER en: MEDELLIN-ANTIOQUI', '3147422877'),
('32294737', 'LUZ ESNEDA QUINTO ARIAS', 'Cra 86A #79-49 ROBLEDO en: MEDELLIN-ANTIOQUIA', '3112977493'),
('32297584', 'CLARA MEDINA', 'diag 32a # 36b - 25', '256-98-74'),
('32299133', 'JULIANA OSORIO ALZATE', 'CARRERA 44A NO 100-28 en: MEDELLIN-ANTIOQUIA', '-311372415'),
('32658971', 'MARIA ISABEL BARALDÉS COMAS', 'cra 23 # 25 - 32', '276-47-85'),
('34300', 'MARC BASTARDES SOTO', 'Calle 9 # 9 – 62, Leticia, Barrio Centro', '647-82-11'),
('35892237', 'NARLIN GONZALEZ TORRES', 'Cra 83 # 37B SUR SAN ANOTNIO DE PRADO en: MEDELLIN', '3117114080'),
('405893', 'BERNARDO HOYOS', 'cra 12 # 23sur -30', '597-85-63'),
('42654821', 'MILENA SERNA', 'cr 65 # 32 - 27 ', '365-89-57'),
('43166832', 'DINEY SIOMARA CARDENAS PEREZ', 'CALLE 96 N 34 -27 en: MEDELLIN-ANTIOQUIA', '3147247971'),
('43579833', 'RUBY FRANCELINE VELASQUEZ GOEZ', 'Calle 56 SUR #39-95 MARIA AUXILIADORA en: MEDELLIN', '3147734440'),
('43697425', 'SARA COLLAZOS', 'calle 65 # 36 - 69', '333-25-87'),
('46106769', 'GERARD LÓPEZ DE PABLO GARCIA UCEDA', 'Transversal 9 a No. 29 - 29 Barrio Maldonado', '936-87-52'),
('48862921', 'ELIOT ARNAU MORENO', 'Calle 53 # 25A-35', '936-54-27'),
('51619074', 'JORDI RAYA GAVILAN', 'Carrera 20 B # 29-18. Barrio Pie de la Popa.', '938-77-35'),
('54375226', 'LUÍS ZAMBUDIO FIGULS', 'Calle 7 # 19-35', '938-20-00'),
('57131379', 'LAURA BIDAULT CULLERÉS', 'Calle 4 norte # 10B-66 Barrio Modelo', '936-51-25'),
('59887531', 'JORDI RAYA GAVILAN', 'carrera 8 #15ª-19, Locales comerciales Santo Domin', '937-78-56'),
('62643683', 'DOUNYA ZAFRA FIGULS', 'Calle 28 # 2-27 Barrio Centro', '938-30-03'),
('65399836', 'JULIO ALEU ICART', 'Calle 25 # 6-08', '936-52-04'),
('68155988', 'ANDREU BADIA TORNÉ', 'Calle 10 # 8-07', '0936-01-24'),
('70912141', 'RAMON MORALES GESE', 'Carrera 12 No. 19-00 Local 18 Centro Comercial Alt', '934-50-06'),
('71000', 'JOAN BAEZ TEJADO', 'Avenida Calle 26 No 59-51 Edificio Argos - Torre 3', '0645-12-12'),
('7125489', 'JOSE LOAIZA', 'calle 28 # 29 -02 ', '378-65-98'),
('72639874', 'BERTHA PEREZ', 'cra 27 # 56 - 98 ', '265-87-41'),
('73668293', 'DAVID-JESE BLANCO FONTANET', 'Calle 5 # 4-48 Barrio Centro', '937-88-55'),
('76424445', 'ARAN ALVAREZ FERNÁNDEZ', 'Calle 16 # 3-28', '936-51-21'),
('87800', 'JOAN AYALA FERRERAS', 'Calle 53 No 10-60/46, Piso 2.', '649-21-21'),
('91400', 'LAURA VALLÉS GIRVENT', 'Carrera 42 # 54-77 Barrio El Recreo', '654-89-99'),
('?113000', 'ESTEFANIA AROCAS PASADAS', 'Calle 10 # 5-51', '546-21-21');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE `compras` (
  `idcompra` int(6) NOT NULL,
  `idproveedor` varchar(20) NOT NULL,
  `fecha` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `compras`
--

INSERT INTO `compras` (`idcompra`, `idproveedor`, `fecha`) VALUES
(1, '6588', '2021-08-16 18:45:59'),
(2, '6595', '2021-08-16 18:45:59');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_menu`
--

CREATE TABLE `detalle_menu` (
  `idmenu` int(3) NOT NULL,
  `cantidad` decimal(7,3) NOT NULL,
  `id_insumo` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_ventas`
--

CREATE TABLE `detalle_ventas` (
  `idventa` int(6) NOT NULL,
  `idmenu` int(3) NOT NULL,
  `cantidad` int(2) NOT NULL,
  `precio` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `detalle_ventas`
--

INSERT INTO `detalle_ventas` (`idventa`, `idmenu`, `cantidad`, `precio`) VALUES
(1, 2345, 3, 23400),
(1, 2346, 2, 32800),
(1, 2347, 5, 43800),
(1, 2348, 1, 24500);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detallle_compras`
--

CREATE TABLE `detallle_compras` (
  `idinsumo` int(4) NOT NULL,
  `idcompra` int(6) NOT NULL,
  `cantidad` decimal(7,3) NOT NULL,
  `precio` decimal(7,3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `detallle_compras`
--

INSERT INTO `detallle_compras` (`idinsumo`, `idcompra`, `cantidad`, `precio`) VALUES
(104, 1, '50.000', '2000.000'),
(107, 1, '20.000', '1500.000'),
(118, 1, '100.000', '500.000'),
(131, 1, '30.000', '2500.000');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `insumos`
--

CREATE TABLE `insumos` (
  `idinsumo` int(4) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `precio` decimal(7,3) NOT NULL,
  `unidad_medida` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `insumos`
--

INSERT INTO `insumos` (`idinsumo`, `nombre`, `precio`, `unidad_medida`) VALUES
(104, 'arroz diana', '1500.000', 'gramo'),
(105, 'frijoles', '2000.000', 'gramo'),
(106, 'aceite diana', '10.000', 'mililitros'),
(107, 'lentejas', '1800.000', 'gramo'),
(108, 'platano maduro', '300.000', 'unidad'),
(109, 'papa', '400.000', 'unidad'),
(110, 'sal', '1500.000', 'gramo'),
(111, 'azucar', '2600.000', 'gramo'),
(112, 'atun', '2.000', 'gramos'),
(113, 'fideos', '900.000', 'gramo'),
(114, 'maiz ', '300.000', 'unidad'),
(115, 'limones', '200.000', 'unidad'),
(116, 'papa amarilla', '230.000', 'unidad'),
(117, 'tomate', '400.000', 'unidad'),
(118, 'cebolla ', '480.000', 'unidad'),
(119, 'cebolla larga', '290.000', 'unidad'),
(120, 'pimenton', '3000.000', 'gramo'),
(121, 'platano verde', '450.000', 'unidad'),
(122, 'carne res', '9000.000', 'gramo'),
(123, 'carne cerdo', '9999.999', 'gramo'),
(124, 'latas de atun', '6000.000', 'gramo'),
(125, 'pollos', '9999.999', 'gramo'),
(126, 'vino', '10.000', 'mililitros'),
(127, 'bombombum', '4.000', 'gramos'),
(128, 'gaseosas', '3.500', 'mililitros'),
(129, 'arroz', '500.000', 'unidad'),
(130, 'guineo', '160.000', 'unidad'),
(131, 'leche', '2100.000', 'gramo'),
(132, 'champiñones', '7000.000', 'gramo'),
(133, 'salsas', '2.000', 'mililitros'),
(134, 'frijol blanco', '2300.000', 'gramo'),
(135, 'arepas', '180.000', 'unidad'),
(136, 'cilantro', '100.000', 'unidad'),
(137, 'banano', '3900.000', 'gramo'),
(138, 'tomate', '5500.000', 'gramo'),
(139, 'zanahoria', '1200.000', 'gramo'),
(140, 'arepas', '5900.000', 'gramo'),
(141, 'chicharron', '750.000', 'unidad'),
(142, 'espinaca', '3000.000', 'gramo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `menu`
--

CREATE TABLE `menu` (
  `id_menu` int(3) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `precio` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `menu`
--

INSERT INTO `menu` (`id_menu`, `nombre`, `precio`) VALUES
(2345, 'bandeja paisa', 23400),
(2346, 'sancocho de bagre', 32800),
(2347, 'pescado con papitas', 43800),
(2348, 'lentejas', 24500),
(2349, 'arroz con leche', 31200),
(2350, 'mazamorra', 13000),
(2351, 'sopa de guineo', 27400),
(2352, 'sopa de platano', 23400),
(2353, 'espaguetis', 34000),
(2354, 'churrazco', 44500),
(2355, 'sopa campesina', 33800),
(2356, 'higado ', 23450),
(2357, 'punta de anca', 43000),
(2358, 'salmon', 28900),
(2359, 'plancha', 33800),
(2360, 'deditos de pescado', 26000),
(2361, 'pollo guisado ', 48000),
(2362, 'papas guisadas', 11500),
(2363, 'albondigas', 15000),
(2364, 'alitas picantes ', 20000),
(2365, 'carne asada con papas', 13000),
(2366, 'muchacho', 22000),
(2367, 'arepas con queso', 6000),
(2368, 'arepas de chocolo', 4500),
(2369, 'tilapia con papas', 16000),
(2370, 'cocteles', 10000),
(2371, 'jugos naturales', 8000),
(2372, 'vinos', 18000),
(2373, 'malteadas', 13500),
(2374, 'cafe, te o chocolate', 5000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedor`
--

CREATE TABLE `proveedor` (
  `idproveedor` varchar(20) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `telefono` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `proveedor`
--

INSERT INTO `proveedor` (`idproveedor`, `nombre`, `direccion`, `telefono`) VALUES
('10516932', 'Osiris Denares Danies Pana', 'cr 22 # 17-31', '5113190'),
('10537683', 'Dalia María Avila Reyes', 'cr 8 #20-59', '6640266'),
('10547808', 'Victor Gonzalez Humanez', 'cr 7a # 32-63 Piso 2', '5132929'),
('34531725', 'Gustavo Alberto Gómez Areiza', 'cll 5 # 3-74 ', '4352386'),
('34532270', 'Pablo Edgar Pinto Pinto', 'cr 56a # 51-81', '8852052'),
('42870562', 'Dancy de Jesus Palacio Frias', 'cr 10a # 20-40 Edificio el Clarin', '6114607'),
('6588', 'GRUPO AL SAS ', 'CRA34-66', '2342156774'),
('6589', 'IPRODESA', 'CRA34-67', '321445436'),
('6590', 'COMERCIALIZADORA FRESMAR', 'CRA34-68', '2353413254'),
('6591', 'ALMACEN MAYOR HUEVO', 'CRA34-69', '1241242141'),
('6592', 'CHORIZOS EL AHUMADO', 'CRA34-70', '21424134'),
('6593', 'COLANTA', 'CRA34-71', '21434124'),
('6594', 'ZENU', 'CRA34-72', '234532654'),
('6595', 'CARNES FRIAS VERNA', 'CRA34-73', '4123124242'),
('6596', 'MAIZITO DISTRIBUCUINES', 'CRA34-74', '3214214321'),
('6597', 'DISSANTAMARIA', 'CRA34-75', '3234635423'),
('6598', 'Adventure Works', '123-555-0123', '756432'),
('6599', 'A Datum Corporation', '123-555-0124', '12345'),
('6600', 'Alpine Ski House', '123-555-0125', '8765432'),
('6601', 'Blue Yonder Airlines', '123-555-0126', '21542312'),
('6602', 'City Power & Light', '123-555-0127', '876543'),
('6603', 'Coho Vineyard', '123-555-0128', '765432'),
('6604', 'Coho Winery', '123-555-0129', '87654321'),
('6605', 'Coho Vineyard & Winery', '123-555-0130', '7654321'),
('6606', 'Abella Herrera William Efrain ', 'cll 10 # 9-78 Centro', '5927139'),
('6607', 'Victor Gonzalez Humanez', 'cr 7a # 32-63 Piso 2', '5132929'),
('6608', 'Pablo Edgar Pinto Pinto', 'cr 56a # 51-81', '8852052'),
('6609', 'Osiris Denares Danies Pana', 'cr 22 # 17-31', '5113190'),
('6610', 'Albey Calderon', 'cll 59 # 27-35 Barrio Galán', '3694114'),
('6611', 'Dancy de Jesus Palacio Frias', 'cr 10a # 20-40 Edificio el Clarin', '6114607'),
('6612', 'Dalia María Avila Reyes', 'cr 8 #20-59', '6640266'),
('6613', 'Leonardo Francisco Zarama Rosero', 'cll 20 # 22-27', '7424618'),
('6614', 'Aldemar Cadavid Echeverri ', 'cr 8a # 7-88', '8848825'),
('6615', 'Gustavo Alberto Gómez Areiza', 'cll 5 # 3-74 ', '4352386'),
('6616', 'Angel Eduardo Perez Fajardo', 'cr 5  # 9-08', '4645453'),
('75076432', 'Leonardo Francisco Zarama Rosero', 'cll 20 # 22-27', '7424618'),
('76305729', 'Aldemar Cadavid Echeverri ', 'cr 8a # 7-88', '8848825'),
('76307332', '?Abella Herrera William Efrain ', 'cll 10 # 9-78 Centro', '5927139'),
('76323459', 'Albey Calderon', 'cll 59 # 27-35 Barrio Galán', '3694114');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `idventa` int(6) NOT NULL,
  `idcliente` varchar(20) NOT NULL,
  `fecha` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`idventa`, `idcliente`, `fecha`) VALUES
(1, '102800', '2021-08-21 00:00:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`idcliente`);

--
-- Indices de la tabla `compras`
--
ALTER TABLE `compras`
  ADD PRIMARY KEY (`idcompra`),
  ADD KEY `idproveedor` (`idproveedor`);

--
-- Indices de la tabla `detalle_menu`
--
ALTER TABLE `detalle_menu`
  ADD KEY `idmenu` (`idmenu`) USING BTREE,
  ADD KEY `id_insumo` (`id_insumo`);

--
-- Indices de la tabla `detalle_ventas`
--
ALTER TABLE `detalle_ventas`
  ADD KEY `idventa` (`idventa`),
  ADD KEY `idmenu` (`idmenu`);

--
-- Indices de la tabla `detallle_compras`
--
ALTER TABLE `detallle_compras`
  ADD KEY `idcompra` (`idcompra`),
  ADD KEY `idinsumo` (`idinsumo`) USING BTREE;

--
-- Indices de la tabla `insumos`
--
ALTER TABLE `insumos`
  ADD PRIMARY KEY (`idinsumo`),
  ADD KEY `unidad_medida` (`unidad_medida`);

--
-- Indices de la tabla `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id_menu`);

--
-- Indices de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  ADD PRIMARY KEY (`idproveedor`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`idventa`),
  ADD KEY `idcliente` (`idcliente`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `compras`
--
ALTER TABLE `compras`
  MODIFY `idcompra` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `insumos`
--
ALTER TABLE `insumos`
  MODIFY `idinsumo` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=143;

--
-- AUTO_INCREMENT de la tabla `menu`
--
ALTER TABLE `menu`
  MODIFY `id_menu` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2375;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `idventa` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `compras`
--
ALTER TABLE `compras`
  ADD CONSTRAINT `compras_ibfk_1` FOREIGN KEY (`idproveedor`) REFERENCES `proveedor` (`idproveedor`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `detalle_menu`
--
ALTER TABLE `detalle_menu`
  ADD CONSTRAINT `detalle_menu_ibfk_1` FOREIGN KEY (`id_insumo`) REFERENCES `insumos` (`idinsumo`) ON UPDATE CASCADE,
  ADD CONSTRAINT `detalle_menu_ibfk_2` FOREIGN KEY (`idmenu`) REFERENCES `menu` (`id_menu`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `detalle_ventas`
--
ALTER TABLE `detalle_ventas`
  ADD CONSTRAINT `detalle_ventas_ibfk_1` FOREIGN KEY (`idmenu`) REFERENCES `menu` (`id_menu`) ON UPDATE CASCADE,
  ADD CONSTRAINT `detalle_ventas_ibfk_2` FOREIGN KEY (`idventa`) REFERENCES `ventas` (`idventa`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `detallle_compras`
--
ALTER TABLE `detallle_compras`
  ADD CONSTRAINT `detallle_compras_ibfk_1` FOREIGN KEY (`idcompra`) REFERENCES `compras` (`idcompra`) ON UPDATE CASCADE,
  ADD CONSTRAINT `detallle_compras_ibfk_2` FOREIGN KEY (`idinsumo`) REFERENCES `insumos` (`idinsumo`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD CONSTRAINT `ventas_ibfk_1` FOREIGN KEY (`idcliente`) REFERENCES `cliente` (`idcliente`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
