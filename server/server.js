const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;

app.use(express.json());

app.post('/workshop', (req, res) => {
    const newWorkshop = req.body;
    const workshops = JSON.parse(fs.readFileSync('./workshops.json'));
    workshop.push(newWorkshop);
    fs.writeFileSync('workshops.json', JSON.stringify(workshops, null, 2));
    res.send('Taller agregado corrctamente');


});

app.listen(port, () => {
    console.log(`Servidor escuchado en http://localhost${port}`);
});