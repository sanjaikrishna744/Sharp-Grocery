// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// // import { CartProvider } from "./context/CartContext.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     {/* <CartProvider> */}
//       <App />
//     {/* </CartProvider> */}
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CartProvider } from "./context/CartContext";
import { WalletProvider } from "./context/walletcontext";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WalletProvider>
      <CartProvider>
        <App />
        <Toaster position="right-bottom" reverseOrder={false}/>
      </CartProvider>
    </WalletProvider>
  </React.StrictMode>
);
