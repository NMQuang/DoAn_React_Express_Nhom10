const path = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.use('/', express.static(`${__dirname}/public`));

app.use('/admin', express.static(`${__dirname}/admin`));

// express will serve up index.html if it doesn't recognize the route
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'admin', 'login.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
