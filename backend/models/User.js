import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
  // walletBalance: { type: Number, default: 0 }  // ✔ wallet stored here
});

export default mongoose.model("users", userSchema);
