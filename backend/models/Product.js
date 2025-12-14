import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  image: String
});

export default mongoose.model("products", productSchema);
