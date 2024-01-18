const fs = require('fs');

const readNode = () => {
    const data = fs.readFileSync('products.json', 'utf8');
    const products = JSON.parse(data);
    return products
}
const createNode = (node) => {
    const data = fs.readFileSync('products.json', 'utf8');
    const previousData = JSON.parse(data);
    previousData.push(node);
    fs.writeFileSync('products.json', JSON.stringify(previousData))
}
const updateNode = (id, node) => {
    const data = fs.readFileSync('products.json', 'utf8');
    let previousData = JSON.parse(data);
    const nodeUpdate = previousData.find(element => { element.id === id })
    previousData = previousData.filter(element => { element.id !== id });
    previousData.push({ ...nodeUpdate, ...node })
    fs.writeFileSync('products.json', JSON.stringify(previousData))
}
const deleteNode = (id) => {
    const data = fs.readFileSync('products.json', 'utf8');
    let previousData = JSON.parse(data);

    previousData = previousData.filter(element => element.id !== id);
    fs.writeFileSync('products.json', JSON.stringify(previousData))
}
module.exports = { readNode, createNode, updateNode, deleteNode }