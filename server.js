
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
app.get('/api', (req, res) => res.send('Bopz backend working!'));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
