import { ethers } from "ethers";

// You can also use an ENS name for the contract address
const fournisseurAddress = "fournisseur.tokens.ethers.eth";

// The ERC-20 Contract ABI, which is a common contract interface
// for tokens (this is the Human-Readable ABI format)
const fournisseurAbi = [
  // Some details about the token
  "function name() view returns (string)",
  "function symbol() view returns (string)",

  // Get the account balance
  "function balanceOf(address) view returns (uint)",

  // Send some of your tokens to someone else
  "function transfer(address to, uint amount)",

  // An event triggered whenever anyone transfers to someone else
  "event Transfer(address indexed from, address indexed to, uint amount)"
];

// The Contract object
const fournisseurContract = new ethers.Contract(fournisseurAddress, fournisseurAbi, provider);