const connection = require('../config/db');

// Obtener todos los productos
exports.getProducts = (req, res) => {
  const query = 'SELECT * FROM products';
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

// Obtener un producto por ID
exports.getProductById = (req, res) => {
  const id = req.params.id;
  const query = 'SELECT * FROM products WHERE id = ?';
  connection.query(query, [id], (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
};

// Crear un nuevo producto
exports.createProduct = (req, res) => {
  const { nombre, descripcion, precio } = req.body;
  const query = 'INSERT INTO products (nombre, descripcion, precio) VALUES (?, ?, ?)';
  connection.query(query, [nombre, descripcion, precio], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Producto creado exitosamente' });
  });
};

// Actualizar un producto por ID
exports.updateProduct = (req, res) => {
  const id = req.params.id;
  const { nombre, descripcion, precio } = req.body;
  const query = 'UPDATE products SET nombre = ?, descripcion = ?, precio = ? WHERE id = ?';
  connection.query(query, [nombre, descripcion, precio, id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Producto actualizado exitosamente' });
  });
};

// Eliminar un producto por ID
exports.deleteProduct = (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM products WHERE id = ?';
  connection.query(query, [id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Producto eliminado exitosamente' });
  });
};

