-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'artMusVidVault'
-- 
-- ---

DROP TABLE IF EXISTS `artMusVidVault`;
		
CREATE TABLE `artMusVidVault` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `artName` VARCHAR(20) NOT NULL,
  `artVideos` VARCHAR(10000) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---


-- ---
-- Table Properties
-- ---

-- ALTER TABLE `artMusVidVault` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `artMusVidVault` (`id`,`artName`,`artVideos`) VALUES
-- ('','','');