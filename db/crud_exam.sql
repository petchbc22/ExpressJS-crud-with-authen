-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 04, 2021 at 08:26 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crud_exam`
--

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `movieId` int(11) NOT NULL,
  `movieName` varchar(255) DEFAULT NULL,
  `yearReleased` int(11) DEFAULT NULL,
  `pathIMG` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`movieId`, `movieName`, `yearReleased`, `pathIMG`, `createdAt`, `updatedAt`) VALUES
(3, 'Captain America The First Avenger', 2011, 'https://img.cinemablend.com/quill/4/b/5/9/2/c/4b592c0e1b44c71b0ec47208945099be6a5a095d.jpg', '2021-08-29 17:47:34', '2021-08-29 17:47:34'),
(4, 'Avengers: Infinity War', 2018, 'https://cf.shopee.co.th/file/c6ed6ee7c8f1a130b112de037365049e', '2021-08-29 17:48:29', '2021-08-29 17:48:29'),
(5, 'Avengers: End Game', 2019, 'https://cdni-hw.ch7.com/dm/sz-md/i/images/2021/01/29/6013dbb87e8341.61220044.jpg', '2021-08-29 17:50:16', '2021-08-29 17:50:16'),
(30, 'Captain America : Civil War', 2016, 'https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_.jpg', '2021-09-02 16:22:17', '2021-09-02 16:22:17');

-- --------------------------------------------------------

--
-- Table structure for table `movie_rates`
--

CREATE TABLE `movie_rates` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `rateId` int(11) NOT NULL,
  `movieId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `movie_rates`
--

INSERT INTO `movie_rates` (`createdAt`, `updatedAt`, `rateId`, `movieId`) VALUES
('2021-09-02 16:22:17', '2021-09-02 16:22:17', 1, 30),
('2021-09-02 16:22:17', '2021-09-02 16:22:17', 3, 30);

-- --------------------------------------------------------

--
-- Table structure for table `rates`
--

CREATE TABLE `rates` (
  `rateId` int(11) NOT NULL,
  `rate` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `rates`
--

INSERT INTO `rates` (`rateId`, `rate`, `createdAt`, `updatedAt`) VALUES
(1, 'R', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'PG', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'M', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'user', '2021-08-29 22:48:30', '2021-08-29 22:48:30'),
(2, 'teamleader', '2021-08-29 22:48:30', '2021-08-29 22:48:30'),
(3, 'admin', '2021-08-29 22:48:30', '2021-08-29 22:48:30');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(4, 'petch', 'petchdev22@gmail.com', '$2a$08$z9x/SIVozqzl4VeQIzJeeeqFuZDYq935sJSqlzaTw55/eiWyqmL.C', '2021-08-29 15:56:11', '2021-08-29 15:56:11'),
(5, 'tuck', 'jira-pha@gmail.com', '$2a$08$hyf.92qj7PbSNuFlLto3teFWK6Qo08PQ6OAFF/IA9KrqVma2097VS', '2021-08-29 16:00:10', '2021-08-29 16:00:10'),
(6, 'tuck2', 'tuck@gmail.com', '$2a$08$pa0l0F3iS/sabyqkPvTxYO8DnT95Pm1OPy.PQkPPTrK8joLL4K1Aq', '2021-08-29 18:17:49', '2021-08-29 18:17:49'),
(7, 'user', 'user@gmail.com', '$2a$08$fYexLES8RG/HodIfZ9RK3OUK.QFGRxhXB4PY7a76hbqzsR97VBRg6', '2021-08-30 16:54:42', '2021-08-30 16:54:42'),
(8, 'aaa', 'ttt@ttt.com', '$2a$08$.XLIVcNDX0E67TNddLLYtuo8zcFfoCfIfu5Vq6TASaAxZ2TfDrKWa', '2021-09-02 15:59:15', '2021-09-02 15:59:15');

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `roleId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`createdAt`, `updatedAt`, `roleId`, `userId`) VALUES
('2021-08-29 15:56:11', '2021-08-29 15:56:11', 1, 4),
('2021-08-29 18:17:49', '2021-08-29 18:17:49', 1, 6),
('2021-08-30 16:54:42', '2021-08-30 16:54:42', 1, 7),
('2021-09-02 15:59:15', '2021-09-02 15:59:15', 1, 8),
('2021-08-29 15:56:11', '2021-08-29 15:56:11', 2, 4),
('2021-08-29 16:00:10', '2021-08-29 16:00:10', 3, 5),
('2021-08-29 18:17:49', '2021-08-29 18:17:49', 3, 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`movieId`);

--
-- Indexes for table `movie_rates`
--
ALTER TABLE `movie_rates`
  ADD PRIMARY KEY (`rateId`,`movieId`),
  ADD KEY `movieId` (`movieId`);

--
-- Indexes for table `rates`
--
ALTER TABLE `rates`
  ADD PRIMARY KEY (`rateId`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`roleId`,`userId`),
  ADD KEY `userId` (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `movieId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `rates`
--
ALTER TABLE `rates`
  MODIFY `rateId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `movie_rates`
--
ALTER TABLE `movie_rates`
  ADD CONSTRAINT `movie_rates_ibfk_1` FOREIGN KEY (`rateId`) REFERENCES `rates` (`rateId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `movie_rates_ibfk_2` FOREIGN KEY (`movieId`) REFERENCES `movies` (`movieId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
