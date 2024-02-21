import { getAllUsers , getUserById } from '../../../../services/userService.mjs';

export const Index = async (req, res) => {
  try {
    const allUsers = await getAllUsers();
    res.json(allUsers);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
export const UserGetById = async (req, res) => {
    const userId = req.params.id; // Assuming you're passing the user ID as a route parameter
    try {
      const user = await getUserById(userId);
      res.json(user);
    } catch (error) {
      console.error(`Error fetching user with ID ${userId}:`, error);
      if (error.message === 'User not found') {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  };