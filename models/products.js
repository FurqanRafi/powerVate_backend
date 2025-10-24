import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    imageUrl: { type: String, required: false }, // Cloudinary image URL
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
