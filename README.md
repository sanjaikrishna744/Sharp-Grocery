# Sharp Grocery 🛒  
## Online Grocery Marketplace Using SHARP Tokens

---

## 📌 Problem Statement

Traditional online grocery platforms rely on centralized payment systems and do not support blockchain-based digital tokens for everyday purchases. As a result, users are unable to use custom tokens such as **SHARP** for grocery transactions, and vendors lack a transparent and decentralized payment mechanism. There is a need for a **user-friendly online grocery marketplace** that enables customers to purchase daily essentials using **SHARP tokens**, while ensuring **seamless transactions**, **vendor participation**, and an **efficient purchase workflow**.

---


## 📖 Overview

Sharp Grocery is a blockchain-enabled online grocery marketplace that allows users to purchase everyday grocery items using a custom ERC-20 token called **SHARP**.  
The platform integrates traditional e-commerce functionality with decentralized blockchain payments using MetaMask on the Ethereum Sepolia Test Network.

This project demonstrates a practical real-world application of Web3 technology in daily commerce.

---

## 🎯 Objectives

- Enable grocery purchases using SHARP tokens  
- Provide a simple and intuitive user interface  
- Ensure secure and transparent blockchain-based payments  
- Support vendor participation through direct wallet payments  
- Demonstrate an efficient and seamless purchase workflow  

---

##  Key Features

- Grocery product listing and browsing  
- Add-to-cart and checkout functionality  
- Payment using SHARP ERC-20 tokens  
- MetaMask wallet integration  
- On-chain transaction verification  
- Backend support for users and products  

---

## System Architecture

User
→ Web Frontend (React)
→ MetaMask Wallet
→ SHARP ERC-20 Smart Contract
→ Ethereum Sepolia Test Network
→ Backend Services (Node.js, Express, Database)



---

## 🛠 Technology Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Ethers.js

### Backend
- Node.js
- Express.js
- Database for user and product management

### Blockchain
- Solidity
- ERC-20 Token Standard
- Ethereum Sepolia Test Network
- MetaMask

---

## 🪙 SHARP Token Details

| Attribute | Description |
|---------|------------|
| Token Name | SHARP |
| Token Standard | ERC-20 |
| Network | Ethereum Sepolia Testnet |
| Purpose | Grocery purchase payments |

**Smart Contract Address:**  

0x26930711cFE54E340D685Ce1A331C627719E4FcC


---

##  Application Workflow

1. User accesses the Sharp Grocery platform  
2. User browses available grocery items  
3. Products are added to the cart  
4. User proceeds to checkout  
5. Payment is initiated using SHARP tokens  
6. MetaMask requests transaction approval  
7. Tokens are transferred to the vendor wallet  
8. Transaction is confirmed on the blockchain  
9. Order is successfully completed  

---

## 🦊 MetaMask Setup (For Evaluation)

1. Install the MetaMask browser extension  
2. Switch the network to Ethereum Sepolia Test Network  
3. Import the SHARP token using the contract address  
4. Obtain Sepolia ETH from a faucet for gas fees  
5. Complete a purchase using SHARP tokens  

---

##  Local Setup Instructions

### Clone the Repository
```bash
git clone https://github.com/sanjaikrishna744/Sharp-Grocery
cd Sharp-Grocery
```
Backend Setup
```bash
cd backend
npm install
npm start
```
Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The application will run at:

```bash
http://localhost:5173
```
---
## Evaluation Focus

1. User friendly interface
2. Seamless blockchain payment integration
3. Secure ERC-20 token transactions
4. Clear vendor payment flow
5. End to end functional demonstration

---



