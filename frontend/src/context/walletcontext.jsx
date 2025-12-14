// import { createContext, useContext, useState } from "react";

// const WalletContext = createContext();

// export const WalletProvider = ({ children }) => {
//   const [balance, setBalance] = useState(500); // default ₹500 wallet balance

//   return (
//     <WalletContext.Provider value={{ balance, setBalance }}>
//       {children}
//     </WalletContext.Provider>
//   );
// };

// export const useWallet = () => useContext(WalletContext);





import { createContext, useContext, useState, useEffect } from "react";

const WalletContext = createContext();

export const useWallet = () => useContext(WalletContext);

export function WalletProvider({ children }) {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  // Load wallet from localStorage on app start
  useEffect(() => {
    const savedBalance = localStorage.getItem("wallet_balance");
    const savedHistory = localStorage.getItem("wallet_history");

    if (savedBalance) setBalance(JSON.parse(savedBalance));
    if (savedHistory) setTransactions(JSON.parse(savedHistory));
  }, []);

  // Save wallet whenever it changes
  useEffect(() => {
    localStorage.setItem("wallet_balance", JSON.stringify(balance));
    localStorage.setItem("wallet_history", JSON.stringify(transactions));
  }, [balance, transactions]);

  // Add money
  const addMoney = (amount) => {
    const newBalance = balance + amount;

    setBalance(newBalance);
    setTransactions([
      { type: "CREDIT", amount, date: new Date().toLocaleString() },
      ...transactions,
    ]);
  };

  // Deduct money
  const deductMoney = (amount) => {
    if (amount > balance) return false; // insufficient balance

    const newBalance = balance - amount;

    setBalance(newBalance);
    setTransactions([
      { type: "DEBIT", amount, date: new Date().toLocaleString() },
      ...transactions,
    ]);

    return true;
  };

  return (
    <WalletContext.Provider
      value={{
        balance,
        transactions,
        addMoney,
        deductMoney,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}
