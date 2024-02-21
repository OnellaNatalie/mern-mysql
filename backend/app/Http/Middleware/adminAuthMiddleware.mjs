import jwt from 'jsonwebtoken';

export const adminAuthMiddleware = (req, res, next) => {
  const token = req.header('x-auth-token'); // Assuming you're sending the token in the 'x-auth-token' header

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role_id !== 1) {
      return res.status(403).json({ msg: 'Not authorized as an admin' });
    }

    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
