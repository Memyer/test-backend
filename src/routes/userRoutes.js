const express = require('express');
const userController = require('../controllers/userController');
const authenticateToken = require('../middlewares/auth');

const router = express.Router();

router.get('/', authenticateToken, userController.getUser);
router.put('/', authenticateToken, userController.updateUser);
router.delete('/', authenticateToken, userController.deleteUser);

module.exports = router;
