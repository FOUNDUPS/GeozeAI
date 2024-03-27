require('dotenv').config();
const fs = require('fs');
const web3 = require('@solana/web3.js');
const BN = require('bn.js');

// Create a new connection to the Solana devnet
const connection = new web3.Connection(web3.clusterApiUrl('devnet'), 'confirmed');

// Load the mint authority's keypair from id.json
const mintAuthorityKeypair = web3.Keypair.fromSecretKey(
  new Uint8Array(JSON.parse(fs.readFileSync(process.env.ID_JSON_PATH, 'utf8')))
);

// Use the RECIPIENT_PUBLIC_KEY environment variable
const recipientPublicKey = new web3.PublicKey(process.env.RECIPIENT_PUBLIC_KEY);

// The golden ratio, multiplied by 10^12 for total supply calculation
const totalSupply = new BN(1.61803398875 * Math.pow(10, 12));

async function mintGZETokens() {
  // Logic to mint tokens will go here
  // This includes creating a transaction that sends tokens to recipientPublicKey
  // and signs the transaction with mintAuthorityKeypair
}

console.log(`The total supply of GZE tokens to be minted is: ${totalSupply.toString()}`);
