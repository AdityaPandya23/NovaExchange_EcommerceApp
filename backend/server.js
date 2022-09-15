import express from 'express';
import data from './data.js';

const app = express();
/* to access variable inside we use back tick literal rather
than using single quotes */
app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});

/* we can use nodemon so that the changes reflected 
on the server gets done automatically and we dont
have to run the server again and again. */
