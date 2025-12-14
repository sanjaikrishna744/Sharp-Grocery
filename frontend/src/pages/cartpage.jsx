import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("userEmail") !== null;

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-4 text-green-700">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-center">Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  className="h-20 w-20 rounded-md object-cover"
                />
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p>Qty: {item.qty}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-green-700 font-bold">
                  {item.price * item.qty} SHARP
                </p>

                <button
                  onClick={() => removeFromCart(item)}
                  className="text-red-600 mt-1 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-xl font-bold mt-4">
            Total: {total} SHARP
          </div>

          <div className="mt-6 flex gap-4">
            <button
              onClick={clearCart}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Clear Cart
            </button>

            <button
              disabled={!isLoggedIn}
              onClick={() => navigate("/checkout", { state: { total } })}
              className={`px-4 py-2 rounded 
    ${isLoggedIn ? "bg-green-600 hover:bg-green-700 text-white" : "bg-gray-400 cursor-not-allowed"}
  `}
            >
              {isLoggedIn ? "Checkout" : "Login to Checkout"}
            </button>

          </div>
        </>
      )}
    </div>
  );
}
