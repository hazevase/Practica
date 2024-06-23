const { User }  = require('../models/user');
const router = require("express").Router();


router.get("/", async (req, res) => {
    try {
      // Предположим, что вы получаете информацию о пользователе по его ID, например из JWT токена
      const {email} = req.body; // Предположим, что вы используете аутентификацию с токеном
  
      // Находим пользователя в базе данных по его ID
      const user = await User.findById(email);
  
      if (!user) {
        return res.status(404).json({ message: 'Пользователь не найден' });
      }
  
      // Возвращаем роль пользователя
      res.json({ role: user.role });
    } catch (error) {
      console.error('Ошибка при получении роли пользователя:', error);
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  });
  
  module.exports = router;
  