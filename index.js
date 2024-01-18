const express = require('express');
const { readNode, createNode, updateNode, deleteNode } = require('./crud');
const app = express();
const PORT = 8080;
const cors = require('cors');

const productRouter = express.Router();
app.use(cors());

app.use(express.json());
app.get('/products', (req, res) => {
    const products = readNode();
    res.send(products);
})
app.post('/products', (req, res) => {
    const products = req.body;
    createNode(products);

    res.status(201).send('Successfully created')
})
app.put('/products/:id', (req, res) => {
    const id = req.params.id;
    const node = req.body;
    updateNode(id, node)

    res.send("successfully updated");
})
app.delete('/products/:id', (req, res) => {
    const id = req.params.id;

    deleteNode(id)

    res.send('deleted')
})

app.listen(PORT, () => {
    console.log("Application is running at http://localhost:" + PORT);
})
