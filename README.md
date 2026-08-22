# EscrowLite

EscrowLite is a simple blockchain-based escrow application built using **Stellar Soroban**.

It demonstrates how a client and freelancer can use a smart contract to manage an escrow payment through three main stages:

**Create → Fund → Release**

## Features

- Create an escrow between a client and freelancer
- Store escrow details on a Soroban smart contract
- Fund an escrow
- Release an escrow
- View escrow status
- Simple React-based frontend
- Deployed on Stellar Testnet

## Tech Stack

- **Blockchain:** Stellar
- **Smart Contract:** Soroban
- **Smart Contract Language:** Rust
- **Frontend:** React + TypeScript
- **Build Tool:** Vite
- **SDK:** Stellar JavaScript SDK
- **Network:** Stellar Testnet

## Smart Contract

The Soroban smart contract provides four main functions:

- `create_escrow` – Creates a new escrow
- `fund_escrow` – Marks an escrow as funded
- `release_escrow` – Releases the escrow
- `get_escrow` – Retrieves escrow information

## Escrow Workflow

```text
Create Escrow
      ↓
    Created
      ↓
     Fund
      ↓
    Funded
      ↓
    Release
      ↓
   Released



## Deployed Contract

**Stellar Testnet Contract ID:**

```text
CCJPNFXBQWSI4G7PDMIFVLRRNAQEAX3YCQ5NMNURIJDCCFDMYY2QYRSY
```


## Project Structure

```text
escrowlite/
│
├── contracts/
│   └── escrow/
│       └── src/
│           └── lib.rs
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.tsx
│   │   └── index.css
│   │
│   └── package.json
│
└── README.md
```

