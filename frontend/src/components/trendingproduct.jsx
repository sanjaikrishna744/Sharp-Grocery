import { Link } from "react-router-dom";

export default function TrendingProducts({ products }) {
  return (
    <section className="mt-14 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">🔥 Trending Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item._id}
            className="bg-white p-5 shadow rounded-xl hover:shadow-lg transition"
          >
            <img
              src={item.image}
              className="w-full h-40 object-cover rounded-lg"
              alt=""
            />

            <h3 className="text-lg mt-3 font-semibold">{item.name}</h3>
            <p className="text-gray-600">{item.description}</p>

            <div className="flex justify-between items-center mt-3">
              <span className="font-bold text-green-700">
                {item.price} SHARP
              </span>

              <Link
                to="/products"
                className="bg-green-600 text-white px-3 py-1 rounded-lg"
              >
                Buy
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
