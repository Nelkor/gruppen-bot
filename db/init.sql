CREATE TABLE IF NOT EXISTS `users`
(
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `telegramUserId` int(10) UNSIGNED NOT NULL,
  `chatId` int(10) NOT NULL,
  `rating` int(10) UNSIGNED NOT NULL,

  PRIMARY KEY (`id`),
  UNIQUE (`telegramUserId`, `chatId`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4;
