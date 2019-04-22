const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('HELLO FROM EXPRESS');
});

app.use(express.static('public'));

app.listen(PORT, () => console.log(`app is running on ${PORT}`));
