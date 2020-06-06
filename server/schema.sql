-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'artists'
-- 
-- ---

DROP TABLE IF EXISTS `artists`;
		
CREATE TABLE `artists` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `artistName` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'artistMVs'
-- 
-- ---

DROP TABLE IF EXISTS `artistMVs`;
		
CREATE TABLE `artistMVs` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(100) NOT NULL,
  `vidID` VARCHAR(20) NOT NULL,
  `vidTHMN` VARCHAR(100) NOT NULL,
  `artistID` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `artistMVs` ADD FOREIGN KEY (artistID) REFERENCES `artists` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `artists` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `artistMVs` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `artists` (`id`,`artistName`) VALUES
-- ('','');
-- INSERT INTO `artistMVs` (`id`,`description`,`vidID`,`vidTHMN`,`artistID`) VALUES
-- ('','','','','');

-- INSERT INTO `artists` (`artistName`) VALUES
-- ('H.O.T');