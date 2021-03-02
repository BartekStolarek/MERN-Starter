import jwt from 'jsonwebtoken';

const validateToken = (req, res, next) => {
  const token = req.header('auth-token');

  if (!token) {
    return res.status(401).send({
      message: 'Access denied'
    });
  }

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send({
      message: 'Invalid Authentication Token'
    });
  }
};

export { validateToken };
