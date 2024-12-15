import * as dotenv from "dotenv";
dotenv.config();

interface AppConfig {
  rpcUrl: string;
  privateKey: string;
  exchangeWalletAddress: string;
}

export const config: AppConfig = {
  rpcUrl: process.env.RPC_URL || "",
  privateKey: process.env.PRIVATE_KEY || "",
  exchangeWalletAddress: process.env.EXCHANGE_WALLET_ADDRESS || "",
};
