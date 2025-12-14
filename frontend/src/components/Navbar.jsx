// import { Link } from "react-router-dom";

// export default function Navbar(){
//   return (
//     <nav className="bg-green-600 text-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/" className="font-bold text-lg">SHARP Grocery</Link>
//         <div className="space-x-4">
//           <Link to="/products">Products</Link>
//           <Link to="/cart">Cart</Link>
//           <Link to="/login">Login</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }




// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (

//     <nav className="bg-green-600 text-white p-4 shadow">
//       <div className="flex justify-between items-center container mx-auto">



//         <Link to="/" className="text-xl font-bold">
//           SHARP Grocery
//         </Link>

//         <div className="space-x-5">
//           <Link to="/" className="hover:text-gray-200">Home</Link>
//           <Link to="/products" className="hover:text-gray-200">Products</Link>
//           <Link to="/login" className="hover:text-gray-200">Login</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }



// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// export default function Navbar() {
//   // const { cartCount } = useCart();

//   return (
//     <nav className="bg-green-600 text-white p-4 shadow">
//       <div className="container mx-auto flex justify-between items-center">

//         <Link to="/" className="text-xl font-bold">
//           SHARP Grocery
//         </Link>

//         <div className="space-x-5 flex items-center">
//           <Link to="/" className="hover:text-gray-200">Home</Link>
//           <Link to="/products" className="hover:text-gray-200">Products</Link>
//           <Link to="/login" className="hover:text-gray-200">Login</Link>
//           <Link to="/wallet" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">wallet</Link>

//           <Link to="/cart" className="hover:text-gray-200 text-lg font-semibold">
//             Cart 
//           </Link>
//         </div>

//       </div>
//     </nav>
//   );
// }








import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWallet } from "../context/walletcontext";

export default function Navbar() {
  const { cartCount } = useCart();
  const { balance } = useWallet();





  return (
    <nav className="bg-green-600 text-white p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          SHARP Grocery
        </Link>

        {/* Menu Items */}
        <div className="space-x-6 flex items-center">

          <Link to="/" className="hover:text-gray-200">Home</Link>

          <Link to="/products" className="hover:text-gray-200">Products</Link>

          <Link to="/login" className="hover:text-gray-200">Login</Link>

          {/* {localStorage.getItem("token") ? (
            <button
            onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Login
            </Link>
          )} */}


          {/* Wallet Button with Balance */}
          {/* <Link
            to="/wallet"
            className="px-4 py-2 bg-white text-green-700 rounded-lg font-semibold hover:bg-gray-100"
          >
            Wallet: {balance} SHARP
          </Link> */}

          {/* Cart Button with Count */}
          <Link
            to="/cart"
            className="px-4 py-2 bg-white text-green-700 rounded-lg font-semibold hover:bg-gray-100"
          >
            Cart
            {/* <span className="absolute -top-3 -right-4 bg-white text-green-700 font-bold px-2 py-0.5 rounded-full text-sm">
              {cartCount}
            </span> */}
          </Link>

        </div>

      </div>
    </nav>
  );
}


