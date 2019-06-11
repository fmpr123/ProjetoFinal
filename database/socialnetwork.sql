-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 10, 2019 at 05:30 PM
-- Server version: 5.7.17
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

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `comment_id` int(11) NOT NULL,
  `comment_content` varchar(200) NOT NULL,
  `comment_date` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`comment_id`, `comment_content`, `comment_date`, `user_id`, `post_id`) VALUES
(1, 'Hype', '2019-06-09 17:59:43', 2, 4),
(2, 'Yap, muito triste', '2019-06-09 17:59:47', 1, 2),
(3, 'Lindo', '2019-06-09 17:59:50', 1, 1),
(4, 'Porreiro', '2019-06-09 17:59:54', 3, 1),
(5, 'Amazing', '2019-06-09 17:48:39', 3, 3),
(6, 'Excelente jogabilidade', '2019-06-09 18:00:00', 3, 3),
(7, 'Concordo', '2019-06-09 18:00:03', 1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `game`
--

CREATE TABLE `game` (
  `game_id` int(11) NOT NULL,
  `game_name` varchar(50) NOT NULL,
  `game_photo` varchar(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `game`
--

INSERT INTO `game` (`game_id`, `game_name`, `game_photo`) VALUES
(1, 'World of Warcraft', 'https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-285x380.jpg'),
(2, 'Fifa 19', 'https://static-cdn.jtvnw.net/ttv-boxart/FIFA%2019-285x380.jpg'),
(3, 'Fortnite', 'https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-285x380.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `post_id` int(11) NOT NULL,
  `post_content` varchar(200) NOT NULL,
  `post_date` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `post_like` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `game_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`post_id`, `post_content`, `post_date`, `post_like`, `user_id`, `game_id`) VALUES
(1, 'Melhor jogo do mundo!', '2019-06-06 21:24:34', 20, 1, 1),
(2, 'As microtransações estão a matar o jogo!', '2019-06-06 21:24:34', 18, 2, 2),
(3, 'O novo item está brutal!', '2019-06-06 21:25:07', 14, 3, 3),
(4, 'Novo patch incoming', '2019-06-06 21:25:57', 12, 3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `user_password` varchar(20) NOT NULL,
  `user_photo` varchar(50) DEFAULT NULL,
  `user_address` varchar(50) DEFAULT NULL,
  `user_age` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_email`, `user_password`, `user_photo`, `user_address`, `user_age`) VALUES
(1, 'Fabrício Rodrigues', 'fabriciomicael@hotmail.com', '123', '/public/photos/fabriciorodrigues.jpg', 'Rua Quinta dos Cedros', 23),
(2, 'Filipe Moreira', 'filipemoreira@hotmail.com', '123', '/public/photos/filipemoreira.jpg', 'Rua Gafanhoto Verde', 29),
(3, 'João Alberto', 'joaoalberto@hotmail.com', '123', '/public/photos/joaoalberto.jpg', 'Rua Água Morna', 45),
(4, 'qweqwe', 'qweqwe', 'qweqwe', 'qweqwe', 'qweqwe', 14),
(5, 'usernovo', 'usernovo@gmail.com', '456', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `post_id` (`post_id`);

--
-- Indexes for table `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`game_id`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `game_id` (`game_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `game`
--
ALTER TABLE `game`
  MODIFY `game_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
