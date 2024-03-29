import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import contractABI from "./MyTokenABI.json";

const contractAddress = '0x0e4D7aaC09Bf099e15d580b000d2e2491E0ef67A'
const account1 = '0x7d4eFD00683c57cC0e415A4ED634e934E420288A'
const account2 = '0x9Fcda6f771784a3d1a3A087Bc291085d2C2d531E'
const account3 = '0x041546aF406E896D374e909d90367bFBCc35F0cb'

function App() {
    const provider = new ethers.BrowserProvider((window as any).ethereum);
    const contract = new ethers.Contract(contractAddress, contractABI, provider);

    const [walletAddress, setWalletAddress] = useState<string | null>("");
    const [balance , setBalance] = useState<string | null>("0");
    const [name, setName] = useState<string | null>("");
    const [symbol, setSymbol] = useState<string | null>("");

    const connectWallet = async () => {
        const accounts = await provider.send('eth_requestAccounts', []);

        setWalletAddress(accounts[0]);
    }

    const checkWalletIsConnect = async () => {
        const {ethereum} = window as any;

        if (!ethereum) {
            console.log("Make sure you have metamask!");
            return;
        } else {
            console.log("We have the ethereum object", ethereum);
        }

        const accounts = await ethereum.request({method: 'eth_accounts'});
        if (accounts.length !== 0) {
            const account = accounts[0];
            console.log("Found an authorized account:", account);
            setWalletAddress(account)
        } else {
            console.log("No authorized account found");
        }
    }

    useEffect(() => {
        checkWalletIsConnect();
        getBalance();
    }, [walletAddress])

    const getBalance = async () => {
        if (walletAddress) {
            const balance = await provider.getBalance(walletAddress);
            setBalance(ethers.formatEther(balance));
            console.log(balance.toString());
        }
    }

    const getName = async () => {
        if (walletAddress) {
            const name = await contract.name();
            setName(name);
        }
    }

    const getSymbol = async () => {
        if (walletAddress) {
            const symbol = await contract.symbol();
            setSymbol(symbol);
        }
    }

    //th1: 1 -> 2 th2: 1 -> 3 -> 2

    const transfer = async () => {
        const signer = await provider.getSigner();

        const tx = await signer.sendTransaction({
            to: account2,
            value: ethers.parseEther('0.000001')
        })

        await provider.getBalance(signer.getAddress()).then(console.log);
    }

    const spenderTransfer = async () => {
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        const tx = await contract.approve(account3, ethers.parseEther('0.001'))
    }

    const transferERC20 = async () => {
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        // const tx = await contract.transfer(account1, ethers.parseEther('0.0000001')); // account1 transfer to account2 directly
        const tx = await contract.transferFrom(account1, account2, ethers.parseEther('0.000001')) // account3 transfer to account2 by approvement of account1
    }
    
    const mintMyToken = async () => {
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        const tx = await contract.mint(account1, ethers.parseEther('1'));
    }

    return (
        <div>
            <h1>This page is created to connect to metamask</h1>
            <button onClick={connectWallet}>Connect</button>
            <button onClick={getBalance}>Get Balance</button>
            <button onClick={getName}>Get name</button>
            <button onClick={getSymbol}>Get symbol</button>
            <button onClick={transfer}>Transfer</button>
            <button onClick={transferERC20}>Transfer ERC20</button>
            <button onClick={mintMyToken}>Mint</button>
            <button onClick={spenderTransfer}>Approve</button>
            <p>{balance}</p>
            <div>Name of the contract: {name}</div>
            <div>Symbol of the contract: {symbol}</div>
        </div>
    );
}

export default App;
