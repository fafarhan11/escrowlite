# EscrowLite

## Project Overview

EscrowLite is a blockchain-based escrow application built using Stellar Soroban.

The project demonstrates a simple escrow lifecycle between a client and a freelancer using a Soroban smart contract and a React frontend.

Core workflow:

```text
Create -> Fund -> Release
```

## Features

- Create an escrow between a client and freelancer
- Store escrow details in a Soroban smart contract
- Fund an escrow
- Release an escrow
- Retrieve escrow details
- View the escrow workflow in a React frontend
- Deployed smart contract on Stellar Testnet

## Tech Stack

- Stellar
- Soroban
- Rust
- React
- TypeScript
- Vite
- Stellar JavaScript SDK
- Cargo Test
- Vitest
- React Testing Library
- GitHub Actions
- Stellar Testnet

## Escrow Workflow

```text
Create Escrow
     |
     v
Created
     |
     v
Fund Escrow
     |
     v
Funded
     |
     v
Release Escrow
     |
     v
Released
```

## Smart Contract

The Soroban smart contract is implemented in Rust at:

```text
contracts/escrow/src/lib.rs
```

Confirmed smart contract functions:

- `create_escrow`
- `fund_escrow`
- `release_escrow`
- `get_escrow`

## Deployed Contract

Confirmed Stellar Testnet contract ID:

```text
CCJPNFXBQWSI4G7PDMIFVLRRNAQEAX3YCQ5NMNURIJDCCFDMYY2QYRSY
```

## Contract Interaction / Transaction Hash

Confirmed successful Stellar Testnet transaction:

```text
abd04a850a256e2537955c700ea3b838943d81f4abe4e641920ab6f2903b091d
```

## Project Structure

```text
escrowlite/
├── .github/
│   └── workflows/
│       └── ci.yml
├── contracts/
│   └── escrow/
│       ├── Cargo.lock
│       ├── Cargo.toml
│       ├── src/
│       │   └── lib.rs
│       └── test_snapshots/
├── frontend/
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── src/
│   │   ├── components/
│   │   │   ├── EscrowCard.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── StatusBadge.tsx
│   │   ├── pages/
│   │   │   ├── CreateEscrow.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   └── Home.tsx
│   │   ├── services/
│   │   │   └── stellar.ts
│   │   ├── tests/
│   │   │   └── App.test.tsx
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── vitest.config.ts
└── README.md
```

## Architecture

EscrowLite has two main parts:

- **Soroban smart contract:** Stores escrow data and manages the escrow state transitions.
- **React frontend:** Provides the user interface for demonstrating the escrow workflow.

The smart contract is deployed on Stellar Testnet. The frontend is built with React, TypeScript, Vite, and the Stellar JavaScript SDK.

## Testing

### Smart Contract Tests

Smart contract tests are located in:

```text
contracts/escrow/src/lib.rs
```

Run contract tests:

```bash
cd contracts/escrow
cargo test
```

Confirmed result:

```text
3 passed, 0 failed
```

### Frontend Tests

Frontend tests are located in:

```text
frontend/src/tests/App.test.tsx
```

Run frontend tests:

```bash
cd frontend
npm test
```

Confirmed result:

```text
3 passed, 0 failed
```

## CI/CD

The project includes a GitHub Actions workflow at:

```text
.github/workflows/ci.yml
```

The workflow installs frontend dependencies, builds the frontend, sets up Rust, and runs the smart contract test suite.

## Running Locally

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Smart Contract Tests

```bash
cd contracts/escrow
cargo test
```

### Frontend Tests

```bash
cd frontend
npm test
```

## Demo

- Live demo: Not provided yet
- Demo video: Not provided yet

## Screenshots

Screenshots have not been added to the repository yet.

## Submission Checklist

- [ ] Public GitHub repository
- [x] README documentation
- [ ] 10+ meaningful commits
- [x] Contract deployment address
- [x] Stellar Testnet transaction hash
- [x] Mobile responsive UI
- [x] CI/CD workflow
- [x] 3+ passing contract tests
- [x] 3+ passing frontend tests
- [ ] Live demo link
- [ ] Demo video link

## Development Status

EscrowLite is a functional proof of concept demonstrating the escrow lifecycle:

```text
Create -> Fund -> Release
```

The current project includes the Soroban smart contract, React frontend, deployed Stellar Testnet contract ID, confirmed Testnet transaction hash, automated project workflow, and passing contract and frontend tests.
