import { useEffect, useState } from "react";
import API from "../api";
import ProductCard from "../components/ProductCard";
// import { products as localProducts } from "../data/products";
import toast from "react-hot-toast";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await API.get("/products/fetch");
        setProducts(res.data);
      } catch (err) {
        console.error("Error loading products:", err);
      }
    };
    loadProducts();
  }, []);

  // Filter logic
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-10 px-6">

      <h1 className="text-3xl font-bold text-center mb-6 text-green-700">
        Grocery Products
      </h1>

      {/* 🔥 CATEGORY BUTTONS */}
      <div className="flex gap-4 justify-center mb-8 flex-wrap">
        {["All", "Vegetables", "Fruits", "Snacks", "Groceries","Dairy", "Beverages"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === cat
                ? "bg-green-600 text-white"
                : "bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCT LIST */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductCard key={item._id} product={item} />
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-3">
            No products found in this category.
          </p>
        )}
      </div>
    </div>
  );
}
