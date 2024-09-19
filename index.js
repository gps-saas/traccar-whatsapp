const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/data', (req, res) => {
  const data = req.body;
  console.log('Received data:', data);

  res.json({
    message: 'Data received successfully',
    receivedData: data
  });
});

const port = 3000;
const host = '0.0.0.0';
app.listen(host, port, () => {
  console.log(`Server running on http://${host}:${port}`);
});
