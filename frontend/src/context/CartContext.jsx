// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// // useCart() hook to easily use cart anywhere
// export const useCart = () => useContext(CartContext);

// export function CartProvider({ children }) {
//   const [cart, setCart] = useState([]);

//   // Add item to cart
//   const addToCart = (product) => {
//     const exists = cart.find((item) => item._id === product._id);

//     if (exists) {
//       // Increase qty if item already exists
//       setCart(
//         cart.map((item) =>
//           item._id === product._id
//             ? { ...item, qty: item.qty + 1 }
//             : item
//         )
//       );
//     } else {
//       // Add new item
//       setCart([...cart, { ...product, qty: 1 }]);
//     }
//   };

//   // Remove item
//   const removeFromCart = (id) => {
//     setCart(cart.filter((item) => item._id !== id));
//   };

//   // Clear whole cart
//   const clearCart = () => setCart([]);

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         clearCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }



import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find((item) => item._id === product._id);

    if (exists) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
      toast.success(`${product.name} quantity updated`);
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      toast.success(`${product.name} added to cart`);
    }
  };





  // const removeFromCart = (id) => {
  //   setCart(cart.filter((item) => item._id !== id));
  // };

  const removeFromCart = (product) => {
    const exists = cart.find((item) => item._id === product._id);

    if (!exists) return;

    if (exists.qty > 1) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
      );
      toast.success(`${product.name} quantity decreased`);
    } else {
      setCart(cart.filter((item) => item._id !== product._id));
      toast.success(`${product.name} removed from cart`);
    }
  };



  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
