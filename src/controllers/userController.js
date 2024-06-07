const userModel = require('../models/userModel');

const getUser = async (req, res) => {
  try {
    const user = await userModel.getUserById(req.user.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = req.body;
    await userModel.updateUser(req.user.id, user);
    res.json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    await userModel.deleteUser(req.user.id);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getUser, updateUser, deleteUser };
