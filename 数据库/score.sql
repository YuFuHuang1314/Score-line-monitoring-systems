/*
 Navicat Premium Data Transfer

 Source Server         : school
 Source Server Type    : MySQL
 Source Server Version : 50637
 Source Host           : localhost:3306
 Source Schema         : score

 Target Server Type    : MySQL
 Target Server Version : 50637
 File Encoding         : 65001

 Date: 28/12/2020 12:28:22
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for score
-- ----------------------------
DROP TABLE IF EXISTS `score`;
CREATE TABLE `score`  (
  `sid` int(10) NOT NULL,
  `year` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '年份',
  `college` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '学院',
  `grade` int(10) NULL DEFAULT NULL COMMENT '分数',
  `number` int(10) NULL DEFAULT NULL COMMENT '人数',
  PRIMARY KEY (`sid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of score
-- ----------------------------
INSERT INTO `score` VALUES (1, '2016', '艺传', 510, 395);
INSERT INTO `score` VALUES (2, '2016', '机械', 523, 366);
INSERT INTO `score` VALUES (3, '2016', '数计', 526, 390);
INSERT INTO `score` VALUES (4, '2016', '经管', 535, 377);
INSERT INTO `score` VALUES (5, '2016', '电气', 524, 360);
INSERT INTO `score` VALUES (6, '2016', '外院', 530, 112);
INSERT INTO `score` VALUES (7, '2017', '艺传', 491, 432);
INSERT INTO `score` VALUES (8, '2017', '机械', 491, 355);
INSERT INTO `score` VALUES (9, '2017', '数计', 492, 402);
INSERT INTO `score` VALUES (10, '2017', '经管', 499, 398);
INSERT INTO `score` VALUES (11, '2017', '电气', 492, 396);
INSERT INTO `score` VALUES (12, '2017', '外院', 496, 120);
INSERT INTO `score` VALUES (13, '2018', '艺传', 521, 414);
INSERT INTO `score` VALUES (14, '2018', '机械', 522, 374);
INSERT INTO `score` VALUES (15, '2018', '数计', 524, 414);
INSERT INTO `score` VALUES (16, '2018', '经管', 529, 417);
INSERT INTO `score` VALUES (17, '2018', '电气', 524, 401);
INSERT INTO `score` VALUES (18, '2018', '外院', 527, 144);
INSERT INTO `score` VALUES (19, '2019', '艺传', 513, 413);
INSERT INTO `score` VALUES (20, '2019', '机械', 513, 363);
INSERT INTO `score` VALUES (21, '2019', '数计', 516, 391);
INSERT INTO `score` VALUES (22, '2019', '经管', 523, 422);
INSERT INTO `score` VALUES (23, '2019', '电气', 515, 402);
INSERT INTO `score` VALUES (24, '2019', '外院', 518, 122);
INSERT INTO `score` VALUES (25, '2020', '艺传', 510, 415);
INSERT INTO `score` VALUES (26, '2020', '机械', 520, 372);
INSERT INTO `score` VALUES (27, '2020', '数计', 529, 404);
INSERT INTO `score` VALUES (28, '2020', '经管', 520, 431);
INSERT INTO `score` VALUES (29, '2020', '电气', 528, 406);
INSERT INTO `score` VALUES (30, '2020', '外院', 517, 131);

SET FOREIGN_KEY_CHECKS = 1;
