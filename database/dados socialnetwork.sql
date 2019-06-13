-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 13-Jun-2019 às 19:22
-- Versão do servidor: 5.7.17
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `socialnetwork`
--

--
-- Extraindo dados da tabela `comment`
--

USE socialnetwork;

INSERT INTO `comment` (`comment_content`, `comment_date`, `user_id`, `post_id`) VALUES
('Hype', '2019-06-09 17:59:43', 2, 4),
('Yap, muito triste', '2019-06-09 17:59:47', 1, 2),
('Lindo', '2019-06-09 17:59:50', 1, 1),
('Porreiro', '2019-06-09 17:59:54', 3, 1),
('Amazing', '2019-06-09 17:48:39', 3, 3),
('Excelente jogabilidade', '2019-06-09 18:00:00', 3, 3),
('Concordo', '2019-06-09 18:00:03', 1, 3);

--
-- Extraindo dados da tabela `game`
--

INSERT INTO `game` (`game_id`, `game_name`, `game_photo`) VALUES
(1, 'World of Warcraft', 'https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-285x380.jpg'),
(2, 'Fifa 19', 'https://static-cdn.jtvnw.net/ttv-boxart/FIFA%2019-285x380.jpg'),
(3, 'Fortnite', 'https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-285x380.jpg');

--
-- Extraindo dados da tabela `post`
--

INSERT INTO `post` (`post_id`, `post_content`, `post_date`, `post_like`, `user_id`, `game_id`) VALUES
(1, 'Melhor jogo do mundo!', '2019-06-13 16:35:46', 27, 1, 1),
(2, 'As microtransações estão a matar o jogo!', '2019-06-06 21:24:34', 18, 2, 2),
(3, 'O novo item está brutal!', '2019-06-06 21:25:07', 14, 3, 3),
(4, 'Novo patch incoming', '2019-06-06 21:25:57', 12, 3, 1),
(8, 'asdasd', '2019-06-13 16:44:47', 1, NULL, 1);

--
-- Extraindo dados da tabela `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_email`, `user_password`, `user_photo`, `user_address`, `user_age`) VALUES
(1, 'Fabrício Rodrigues', 'fabriciomicael@hotmail.com', '123', 'https://crimsoncard.iu.edu/about/acceptable2.jpg', 'Rua Quinta dos Cedros', 23),
(2, 'Filipe Moreira', 'filipemoreira@hotmail.com', '123', '/public/photos/filipemoreira.jpg', 'Rua Gafanhoto Verde', 29),
(3, 'João Alberto', 'joaoalberto@hotmail.com', '123', '/public/photos/joaoalberto.jpg', 'Rua Água Morna', 45),
(4, 'qweqwe', 'qweqwe', 'qweqwe', 'qweqwe', 'qweqwe', 14),
(5, 'usernovo', 'usernovo@gmail.com', '456', NULL, NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
