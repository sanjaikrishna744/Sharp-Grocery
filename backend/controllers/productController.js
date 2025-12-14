import Product from "../models/Product.js";

// FETCH ALL PRODUCTS
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// INSERT MULTIPLE PRODUCTS
export const addManyProducts = async (req, res) => {
  try {
    await Product.insertMany(req.body.products);
    res.json({ message: "Products inserted successfully!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
