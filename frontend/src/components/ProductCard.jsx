// import { useCart } from "../context/CartContext";

// export default function ProductCard({ product }) {
//   const { addToCart } = useCart();

//   return (
//     <div className="border p-4 rounded-lg shadow">
//       <img src={product.image} className="w-full h-40 object-cover rounded" />

//       <h2 className="text-lg font-bold mt-2">{product.name}</h2>
//       <p className="text-gray-600">{product.description}</p>

//       <p className="font-bold mt-2">{product.price} SHARP</p>

//       <button
//         onClick={() => addToCart(product)}
//         className="bg-green-600 text-white px-4 py-2 mt-3 rounded-lg w-full"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }






import { useCart } from "../context/CartContext";
import { toast } from "react-hot-toast";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded-md"
      />

      <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600 mt-1">{product.description}</p>

      <div className="flex justify-between items-center mt-3">
        <span className="text-lg font-bold text-green-700">
          {product.price} SHARP
        </span>

        <button
          onClick={() => {
            addToCart(product);
            // toast.success(`${product.name} added to cart`);
          }}
          className="px-4 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
