UPDATE `users`
SET `rating` = `rating` + 1
WHERE `chatId` = ?
  AND `telegramUserId` = ?
