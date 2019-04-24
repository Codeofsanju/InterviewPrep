const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use(express.static('public'));

app.listen(PORT, () => console.log(`app is running on ${PORT}`));
