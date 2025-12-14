import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import BannerSlider from "../components/BannerSlider";
import API from "../api";
// import { products } from "../data/products";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  // Fetch products from backend
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

  // Search handler
  const handleSearch = () => {
    if (!search.trim()) return setSearchResults([]);

    const matched = products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(matched);
  };

  return (
    <div className="">

      {/* ───────────────────── NAVBAR ───────────────────── */}
      {/* <header className="bg-green-600 text-white p-5 shadow-md">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-extrabold">SHARP Grocery Marketplace</h1>
          <p className="text-sm mt-1">Fast • Trusted • Blockchain Secured</p>
        </div>
      </header> */}

      {/* ───────────────────── SEARCH BAR ───────────────────── */}
      {/* <div className="max-w-6xl mx-auto px-6 mt-6">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search Vegetables, Fruits, Snacks..."
            className="flex-1 px-4 py-2 rounded-lg border"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
          >
            Search
          </button>
        </div>
      </div> */}

      {/* ───────────────────── BANNER SLIDER ───────────────────── */}
      <div className="max-w-6xl mx-auto px-6 mt-8">
        <BannerSlider />
      </div>

      {/* ───────────────────── TOP CATEGORIES ───────────────────── */}
      <section className="max-w-6xl mx-auto px-6 mt-10">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Top Categories</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { name: "Vegetables", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSH-j-YJf88B94jYV3qpKtFEvuccxE62YygA&s" },
            { name: "Fruits", img: "https://hips.hearstapps.com/hmg-prod/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-1747173002.pjpeg?crop=1.00xw:0.751xh;0,0.0839xh&resize=1200:*" },
            { name: "Snacks", img: "https://etimg.etb2bimg.com/photo/114425708.cms" },
            { name: "Groceries", img: "https://img500.exportersindia.com/product_images/bc-500/dir_178/5327018/grocery-products-1510312058-3444389.jpeg" },
          ].map((c, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition text-center cursor-pointer"
            >
              <img src={c.img} alt={c.name} className="w-20 mx-auto" onClick={()=> navigate("/products")} />
              <p className="mt-3 font-semibold">{c.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────────── SEARCH RESULTS ───────────────────── */}
      {searchResults.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 mt-10">
          <h2 className="text-2xl font-bold mb-4">Search Results</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {searchResults.map((item) => (
              <div
                key={item._id}
                className="bg-white p-4 shadow rounded-xl hover:shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h3 className="mt-3 font-bold text-lg">{item.name}</h3>
                <p className="text-gray-600 font-bold">{item.price} SHARP</p>

                <Link
                  to="/products"
                  className="block mt-3 bg-green-600 text-white text-center py-2 rounded-lg"
                >
                  View Product
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ───────────────────── FEATURED PRODUCTS ───────────────────── */}
      <section className="max-w-6xl mx-auto px-6 mt-10 mb-10">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Featured Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {products.slice(0, 6).map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-lg rounded-xl p-4 hover:shadow-xl transition cursor-pointer" onClick={() => navigate("/products")}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-44 object-cover rounded-lg"
              />

              <h3 className="font-semibold text-lg mt-3">{item.name}</h3>
              <p className="text-gray-600 font-bold">{item.price} SHARP</p>

              {/* <Link
                to="/products"
                className="mt-3 block bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700"
              >
                Buy Now
              </Link> */}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
