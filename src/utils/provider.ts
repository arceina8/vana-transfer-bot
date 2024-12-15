import { ethers } from "ethers";
import { config } from "../config";

export function getProvider(): ethers.providers.Provider {
  if (!config.rpcUrl) {
    throw new Error("RPC_URL is not defined in .env");
  }
  return new ethers.providers.JsonRpcProvider(config.rpcUrl);
}

export function getSigner(provider: ethers.providers.Provider): ethers.Wallet {
  if (!config.privateKey) {
    throw new Error("PRIVATE_KEY is not defined in .env");
  }
  return new ethers.Wallet(config.privateKey, provider);
}
