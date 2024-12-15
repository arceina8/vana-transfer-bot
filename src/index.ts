import { getProvider, getSigner } from "./utils/provider";
import { sendAllBalance } from "./utils/send";
import { config } from "./config";

async function main() {
  try {
    const provider = getProvider();
    const signer = getSigner(provider);

    const receipt = await sendAllBalance(signer, config.exchangeWalletAddress);
    console.log(`Transfer successful. Tx hash: ${receipt.transactionHash}`);
  } catch (error: any) {
    console.error(`Transfer failed: ${error.message}`);
    process.exit(1);
  }
}

main();