import { app } from './app';

const PORT: number = 3002;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
