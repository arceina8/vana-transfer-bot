# Vana Transfer Bot

## Overview

This project provides a simple, modular TypeScript script to transfer the entire native coin balance from a source wallet (e.g., a genesis account) to a target exchange wallet. It calculates the required gas cost and sends the maximum possible amount to the target address, ensuring that the transaction won't get stuck due to insufficient gas.

**Important:** This code is for demonstration purposes. Use it on test networks before using it in a production environment. Always double-check configurations and do not share private keys publicly.

## Features

- Written in TypeScript.
- Uses Ethers.js for blockchain interactions.
- Dynamically calculates gas costs and sends all available balance (minus gas fees) to the target wallet.
- Easy configuration using environment variables.
- Clean and modular code structure.

## Prerequisites

- Node.js (Recommended: v14+)
- npm or yarn or bun as a package manager
- A private key with funds (on the network you are testing on).
- RPC endpoint URL (Infura, Alchemy, or a local node).

## Setup

1. Clone the repository to your local machine.

2. Install dependencies:

   ```bash
   bun install
   ```

3. Create a `.env` file in the project root directory and set the required environment variables:

   - RPC_URL: The RPC endpoint for the blockchain (e.g., Infura).
   - PRIVATE_KEY: The private key of the wallet from which to send funds.
   - EXCHANGE_WALLET_ADDRESS: The target address to which the funds should be sent.

   Example:

   ```bash
   RPC_URL=VANA_RPC_URL
   PRIVATE_KEY=0xYOUR_PRIVATE_KEY
   EXCHANGE_WALLET_ADDRESS=0xEXCHANGE_WALLET
   ```

   Make sure you never commit your `.env` file to version control.

## Usage

   ```bash
    bun run bot
   ```

This will execute the script, connect to the blockchain via the provided RPC endpoint, calculate the gas cost, and send all the remaining balance to the configured exchange wallet.

## Notes

- This code sends the entire balance (minus gas fees) from the wallet. If you need to send a fixed amount, modify the logic in the `sendAllBalance` function.
- Always test on a testnet (e.g., Goerli, Sepolia) before using on mainnet.
- Adjust `tsconfig.json` and other configurations as needed.
- Logging and error handling are included, but can be expanded for production use.

## Troubleshooting

- If you encounter an error stating that `RPC_URL` is not defined, ensure the `.env` file is present and correctly populated.
- If you get "insufficient funds" errors, ensure that the `PRIVATE_KEY` wallet has a sufficient balance on the target network.
- For "Transaction reverted" or gas estimation issues, consider adding more buffer to the gas calculation.

## License

This code is provided for demonstration purposes and comes without warranty. You are free to modify and use it in your own projects as needed.
