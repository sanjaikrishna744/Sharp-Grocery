import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ethers } from "ethers";
import { useCart } from "../context/CartContext";

// ✅ SHARP TOKEN (Sepolia)
const CONTRACT_ADDRESS = "0x26930711cFE54E340D685Ce1A331C627719E4FcC";

// ✅ SHOP / MERCHANT
const SHOP_ADDRESS = "0xA0D62698952475d26Fd748a73E6bFF4AE3839ec5";

// ✅ ERC20 ABI
const ERC20_ABI = [
  "function transfer(address to, uint256 amount) returns (bool)",
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)"
];

export default function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { clearCart } = useCart();

  const total = location.state?.total || 0;
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    if (loading) return;

    try {
      setLoading(true);

      if (!window.ethereum) {
        toast.error("MetaMask not installed");
        return;
      }

      // ✅ NETWORK CHECK (SEPOLIA)
     const chainId = await window.ethereum.request({
  method: "eth_chainId"
});

if (chainId !== "0xaa36a7") {
  await window.ethereum.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: "0xaa36a7" }]
  });
}

      // ✅ CONNECT WALLET
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const userAddress = await signer.getAddress();

      // ✅ CONTRACT
      const token = new ethers.Contract(
        CONTRACT_ADDRESS,
        ERC20_ABI,
        signer
      );

      const decimals = await token.decimals();
      const amount = ethers.parseUnits(total.toString(), decimals);

      // ✅ REAL BALANCE CHECK
      const balance = await token.balanceOf(userAddress);

      if (balance < amount) {
        toast.error("Insufficient SHARP balance");
        return;
      }

      // 🔥 ERC20 TRANSFER (THIS IS THE KEY)
      const tx = await token.transfer(SHOP_ADDRESS, amount);
      toast.loading("Processing payment...");

      await tx.wait();

      toast.dismiss();
      toast.success("Payment successful 🎉");

      clearCart();
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.dismiss();
      toast.error("Transaction failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-green-600">
        Checkout
      </h1>

      <div className="bg-white p-5 rounded-lg shadow">
        <div className="flex justify-between text-xl font-semibold">
          <span>Total</span>
          <span>{total} SHARP</span>
        </div>
      </div>

      <button
        onClick={handlePayment}
        disabled={loading}
        className={`mt-6 w-full py-3 rounded-lg text-white text-xl font-semibold ${
          loading ? "bg-gray-400" : "bg-green-600"
        }`}
      >
        {loading ? "Processing..." : "Pay with SHARP"}
      </button>
    </div>
  );
}
