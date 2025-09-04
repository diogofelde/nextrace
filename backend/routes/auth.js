const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user || !(await user.checkPassword(password))) {
    return res.status(401).json({ message: 'Credenciais inválidas' });
  }

  res.json({
    id: user._id,
    username: user.username,
    name: user.name,
    progress: user.progress
  });
});

// Registro
router.post('/register', async (req, res) => {
  const { username, password, name } = req.body;
  try {
    const newUser = new User({ username, password, name });
    await newUser.save();
    res.status(201).json({ message: 'Usuário registrado com sucesso' });
  } catch (err) {
    res.status(400).json({ message: 'Erro ao registrar usuário' });
  }
});

module.exports = router;