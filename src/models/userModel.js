const pool = require('../config/db');

const createUser = async (user) => {
  const { fullName, email, password, age, gender, weight, height } = user;
  const [result] = await pool.query(
    'INSERT INTO users (fullName, email, password, age, gender, weight, height) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [fullName, email, password, age, gender, weight, height]
  );
  return result;
};

const getUserByEmail = async (email) => {
  const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
};

const getUserById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
  return rows[0];
};

const updateUser = async (id, user) => {
  const { fullName, age, gender, weight, height } = user;
  const [result] = await pool.query(
    'UPDATE users SET fullName = ?, age = ?, gender = ?, weight = ?, height = ? WHERE id = ?',
    [fullName, age, gender, weight, height, id]
  );
  return result;
};

const deleteUser = async (id) => {
  const [result] = await pool.query('DELETE FROM users WHERE id = ?', [id]);
  return result;
};

module.exports = {
  createUser,
  getUserByEmail,
  getUserById,
  updateUser,
  deleteUser
};
