const express = require('express');
const app = express();
const port = 3000;

// Простая маршрутная обработка
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
