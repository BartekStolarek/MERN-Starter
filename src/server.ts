import { app } from './app';

const PORT: number = 3002;

// Start server
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
