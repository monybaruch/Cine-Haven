import express from 'express';
const port = 4000;

const app = express();

app.get('/', (req, res) => {
  res.send('working...');
});

app.listen(port, () => console.log(`Server running on port ${port}`));
