// import { useState, useEffect } from "react";

// export default function WalletPage() {
//   const [balance, setBalance] = useState(0);
//   const [amount, setAmount] = useState("");

//   // Load wallet from LocalStorage
//   useEffect(() => {
//     const savedBalance = localStorage.getItem("walletBalance");
//     if (savedBalance) {
//       setBalance(Number(savedBalance));
//     }
//   }, []);

//   // Save to LocalStorage whenever balance changes
//   useEffect(() => {
//     localStorage.setItem("walletBalance", balance);
//   }, [balance]);

//   // Add money
//   const addMoney = () => {
//     if (!amount || isNaN(amount) || amount <= 0) return alert("Enter valid amount");
//     setBalance(balance + Number(amount));
//     setAmount("");
//   };

//   // Dummy checkout – reduces balance
//   const deductMoney = (value) => {
//     if (balance < value) return alert("Not enough balance!");
//     setBalance(balance - value);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
//       <div className="bg-white shadow-lg p-8 rounded-2xl w-full max-w-md">

//         <h1 className="text-3xl font-bold text-center text-green-600 mb-4">
//           My Wallet
//         </h1>

//         {/* Current Balance */}
//         <div className="text-center">
//           <p className="text-lg font-semibold">Wallet Balance</p>
//           <h2 className="text-4xl font-bold text-green-700 mt-2">
//             {balance} SHARP
//           </h2>
//         </div>

//         {/* Add Money Section */}
//         <div className="mt-8">
//           <p className="font-semibold mb-1">Add Money</p>

//           <input
//             type="number"
//             placeholder="Enter amount"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             className="w-full border p-3 rounded-lg"
//           />

//           <button
//             onClick={addMoney}
//             className="w-full bg-green-600 text-white py-3 rounded-lg mt-3 hover:bg-green-700"
//           >
//             Add to Wallet
//           </button>
//         </div>

//         {/* Dummy Deduct Button (You can connect with cart later) */}
//         <button
//           onClick={() => deductMoney(50)}
//           className="w-full bg-red-500 text-white py-3 rounded-lg mt-5 hover:bg-red-600"
//         >
//           Deduct 50 SHARP (Test)
//         </button>

//       </div>
//     </div>
//   );
// }







import React, { useState } from "react";
import { useWallet } from "../context/walletcontext";

export default function WalletPage() {
  const { balance, transactions, addMoney } = useWallet();
  const [amount, setAmount] = useState("");
  const [popup, setPopup] = useState(false);

  const handleAddMoney = () => {
    if (!amount || Number(amount) <= 0) return;

    addMoney(Number(amount));
    setPopup(true);
    setAmount("");

    setTimeout(() => setPopup(false), 2000);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 shadow rounded-lg">
      <h1 className="text-2xl font-bold text-green-600 mb-4">Wallet Balance</h1>

      <div className="bg-green-100 p-4 rounded-lg mb-6">
        {/* <p className="text-lg">Wallet Balance:</p> */}
        <h2 className="text-3xl font-bold text-green-700">{balance}</h2>
      </div>

      {/* Add Money Section */}
      <div className="flex gap-3 mb-6">
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 flex-1 rounded"
        />
        <button
          onClick={handleAddMoney}
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
        >
          Add
        </button>
      </div>

      {/* Popup */}
      {popup && (
        <div className="bg-green-600 text-white p-3 text-center rounded mb-4">
          Money Added Successfully! 🎉
        </div>
      )}

      {/* Transaction History */}
      <h3 className="text-xl font-bold mb-3">Transaction History</h3>
      <ul className="space-y-3">
        {transactions.length === 0 && <p>No transactions available.</p>}

        {transactions.map((t, i) => (
          <li
            key={i}
            className="p-3 border rounded flex justify-between items-center"
          >
            <span className="font-semibold">
              {t.type === "CREDIT" ? "🟢 Credit" : "🔴 Debit"}
            </span>
            <span>{t.amount} SHARP</span>
            <span className="text-gray-500 text-sm">{t.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
