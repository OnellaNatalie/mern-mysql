import jwt from 'jsonwebtoken';
import { pool } from '../services/db.mjs';

export const registerUser = async (username, email, password, role_id) => {
  // Implement user registration logic and insert the user into the database
  // Make sure to hash the password before storing it in the database
};

export const loginUser = async (email, password) => {
  // Implement user login logic
  // Validate the user's credentials and return a JWT upon successful login
};

export const registerAdmin = async (username, email, password) => {
  // Implement admin registration logic and insert the admin into the database
  // Make sure to hash the password before storing it in the database
};

export const loginAdmin = async (email, password) => {
  // Implement admin login logic
  // Validate the admin's credentials and return a JWT upon successful login
};

export const generateAuthToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Adjust expiration as needed
};
