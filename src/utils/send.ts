import { ethers } from "ethers";

export async function sendAllBalance(signer: ethers.Wallet, to: string): Promise<ethers.providers.TransactionReceipt> {
  const provider = signer.provider;
  if (!provider) {
    throw new Error("Signer provider is missing.");
  }

  const senderAddress = await signer.getAddress();
  const balance = await provider.getBalance(senderAddress);
  
  if (balance.eq(0)) {
    throw new Error("No balance in the wallet.");
  }

  const txRequest = {
    to,
    value: ethers.BigNumber.from("0")
  };

  const gasEstimate = await provider.estimateGas({ ...txRequest, from: senderAddress });
  const gasPrice = await provider.getGasPrice();
  const gasCost = gasEstimate.mul(gasPrice);

  if (balance.lte(gasCost)) {
    throw new Error("Insufficient balance to cover gas costs.");
  }

  const amountToSend = balance.sub(gasCost);

  const txResponse = await signer.sendTransaction({
    to,
    value: amountToSend,
    gasPrice,
    gasLimit: gasEstimate, 
  });

  console.log(`Transaction sent. Tx hash: ${txResponse.hash}`);

  const receipt = await txResponse.wait();

  if (receipt.status === 0) {
    throw new Error("Transaction failed.");
  }

  console.log(`Transaction confirmed. Block number: ${receipt.blockNumber}`);
  return receipt;
}