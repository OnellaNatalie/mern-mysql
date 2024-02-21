import {
    registerUser,
    loginUser,
    registerAdmin,
    loginAdmin,
    generateAuthToken,
  } from '../../../../services/authService.mjs';
  
  export const UserRegister = async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      await registerUser(username, email, password, 2); // Assuming a default role_id for registered users
      const token = generateAuthToken({ username, email, role_id: 2 });
      res.json({ token });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  export const UserLogin = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await loginUser(email, password);
      const token = generateAuthToken(user);
      res.json({ token });
    } catch (error) {
      console.error('Error logging in as user:', error);
      res.status(401).json({ error: 'Invalid credentials' });
    }
  };
  
  export const AdminRegister = async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      await registerAdmin(username, email, password);
      const token = generateAuthToken({ username, email, role_id: 1 }); // Assuming role_id 1 for admins
      res.json({ token });
    } catch (error) {
      console.error('Error registering admin:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  export const AdminLogin = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const admin = await loginAdmin(email, password);
      const token = generateAuthToken(admin);
      res.json({ token });
    } catch (error) {
      console.error('Error logging in as admin:', error);
      res.status(401).json({ error: 'Invalid credentials' });
    }
  };
  