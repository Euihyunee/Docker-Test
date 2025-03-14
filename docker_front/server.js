const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'html')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'login.html'));
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
