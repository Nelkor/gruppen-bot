CREATE TABLE `users`
(
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `telegramUserId` int(10) UNSIGNED NOT NULL,
  `rating` int(10) UNSIGNED NOT NULL,

  PRIMARY KEY (`id`),
  UNIQUE (`telegramUserId`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4;
