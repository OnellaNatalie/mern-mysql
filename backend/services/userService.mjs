// services/userService.mjs
import { pool } from '../services/db.mjs';

export const getAllUsers = async () => {
  try {
    const [allUsers] = await pool.query('SELECT * FROM users');
    return allUsers;
  } catch (error) {
    throw error;
  }
};
export const getUserById = async (userId) => {
    try {
      const [user] = await pool.query('SELECT * FROM users WHERE id = ?', [userId]);
      if (user.length === 0) {
        throw new Error('User not found');
      }
      return user[0];
    } catch (error) {
      throw error;
    }
  };