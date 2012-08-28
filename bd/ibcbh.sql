-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 27, 2012 at 10:30 PM
-- Server version: 5.5.9
-- PHP Version: 5.3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `ibcbh`
--

-- --------------------------------------------------------

--
-- Table structure for table `cell`
--

CREATE TABLE `cell` (
  `cell_id` int(11) NOT NULL AUTO_INCREMENT,
  `start_date` date NOT NULL,
  `end_date` date DEFAULT NULL,
  PRIMARY KEY (`cell_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=938 ;

-- --------------------------------------------------------

--
-- Table structure for table `cell_church`
--

CREATE TABLE `cell_church` (
  `church_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`church_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `cell_detailed`
--

CREATE TABLE `cell_detailed` (
  `cell_id` int(11) NOT NULL,
  `week_day_id` int(11) NOT NULL,
  `gender_id` int(11) NOT NULL,
  `age_group_id` int(11) NOT NULL,
  `hour_start` time NOT NULL,
  KEY `fk_cell_detailed_cell1` (`cell_id`),
  KEY `fk_cell_detailed_core_week_days1` (`week_day_id`),
  KEY `fk_cell_detailed_core_cell_gender1` (`gender_id`),
  KEY `fk_cell_detailed_core_age_group1` (`age_group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cell_host`
--

CREATE TABLE `cell_host` (
  `cell_id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(45) NOT NULL,
  `number` varchar(10) DEFAULT NULL,
  `apartament` varchar(20) NOT NULL,
  `district` varchar(45) NOT NULL,
  `city` int(11) NOT NULL,
  `zip_code` varchar(10) NOT NULL,
  PRIMARY KEY (`cell_id`),
  KEY `fk_cell_host_arbitrary_core_city1` (`city`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=938 ;

-- --------------------------------------------------------

--
-- Table structure for table `cell_leadership`
--

CREATE TABLE `cell_leadership` (
  `leadership_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `leader_id` int(11) NOT NULL,
  PRIMARY KEY (`leadership_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `cell_meeting`
--

CREATE TABLE `cell_meeting` (
  `meeting_id` int(11) NOT NULL AUTO_INCREMENT,
  `cell_id` int(11) NOT NULL,
  `host_id` int(11) DEFAULT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`meeting_id`),
  KEY `fk_cell_meeting_cell1` (`cell_id`),
  KEY `fk_cell_meeting_core_user1` (`host_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `cell_meeting_presense`
--

CREATE TABLE `cell_meeting_presense` (
  `meeting_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`),
  KEY `fk_cell_meeting_presense_cell_meeting1` (`meeting_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cell_network`
--

CREATE TABLE `cell_network` (
  `network_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `church_id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`network_id`,`user_id`),
  KEY `fk_cell_network_core_user1` (`user_id`),
  KEY `fk_cell_network_cell_church1` (`church_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `cell_role`
--

CREATE TABLE `cell_role` (
  `role_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

-- --------------------------------------------------------

--
-- Table structure for table `cell_user`
--

CREATE TABLE `cell_user` (
  `cell_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `date_start` date NOT NULL,
  PRIMARY KEY (`user_id`),
  KEY `fk_cell_participants_cell_role1` (`role_id`),
  KEY `cell_id` (`cell_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `core_age_group`
--

CREATE TABLE `core_age_group` (
  `age_group_id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`age_group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `core_cell_gender`
--

CREATE TABLE `core_cell_gender` (
  `gender_id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`gender_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `core_city`
--

CREATE TABLE `core_city` (
  `city_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `state_id` int(11) NOT NULL,
  PRIMARY KEY (`city_id`),
  KEY `fk_core_city_core_state1` (`state_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `core_gender`
--

CREATE TABLE `core_gender` (
  `gender_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`gender_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

-- --------------------------------------------------------

--
-- Table structure for table `core_state`
--

CREATE TABLE `core_state` (
  `state_id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `uf` varchar(2) NOT NULL,
  PRIMARY KEY (`state_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `core_user`
--

CREATE TABLE `core_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(30) CHARACTER SET utf8 NOT NULL,
  `email` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  `password` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  `register_date` date NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `login` (`login`),
  KEY `email` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6275 ;

-- --------------------------------------------------------

--
-- Table structure for table `core_user_address`
--

CREATE TABLE `core_user_address` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(45) DEFAULT NULL,
  `number` varchar(45) DEFAULT NULL,
  `apartament` varchar(15) DEFAULT NULL,
  `district` varchar(45) DEFAULT NULL,
  `city_id` int(11) NOT NULL,
  `zip_code` varchar(20) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6288 ;

-- --------------------------------------------------------

--
-- Table structure for table `core_user_detailed`
--

CREATE TABLE `core_user_detailed` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8 NOT NULL,
  `surname` varchar(60) CHARACTER SET utf8 NOT NULL,
  `gender` tinyint(1) NOT NULL,
  `nickname` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `birthday` date NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6288 ;

-- --------------------------------------------------------

--
-- Table structure for table `core_user_information`
--

CREATE TABLE `core_user_information` (
  `user_id` int(11) NOT NULL,
  `type` tinyint(1) NOT NULL COMMENT '1-member 2-participant',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `core_week_days`
--

CREATE TABLE `core_week_days` (
  `week_day_id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`week_day_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cell_detailed`
--
ALTER TABLE `cell_detailed`
  ADD CONSTRAINT `fk_cell_detailed_core_week_days1` FOREIGN KEY (`week_day_id`) REFERENCES `core_week_days` (`week_day_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `cell_meeting_presense`
--
ALTER TABLE `cell_meeting_presense`
  ADD CONSTRAINT `fk_cell_meeting_presense_cell_meeting1` FOREIGN KEY (`meeting_id`) REFERENCES `cell_meeting` (`meeting_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `cell_network`
--
ALTER TABLE `cell_network`
  ADD CONSTRAINT `fk_cell_network_cell_church1` FOREIGN KEY (`church_id`) REFERENCES `cell_church` (`church_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `core_city`
--
ALTER TABLE `core_city`
  ADD CONSTRAINT `fk_core_city_core_state1` FOREIGN KEY (`state_id`) REFERENCES `core_state` (`state_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
