import { ethers } from 'ethers';
import contractABI from '../contracts/contract.json'
import { MetaflareContractAddr, StakingContractAddr } from '../common/constants';

const getSigner = async () => {
    if (!window.ethereum) {
        throw new Error("Please connect to your wallet first.");
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    return signer;
};

const getMetaflareContract = (signer) => {
    return new ethers.Contract(MetaflareContractAddr, contractABI.MetaflareContractABI, signer);
}

const getStakingContract = (signer) => {
    return new ethers.Contract(StakingContractAddr, contractABI.StakingContractABI, signer);
}

const balanceOf = async () => {
    try {
        const signer = await getSigner();
        const metaflareContract = getMetaflareContract(signer);
        const address = await signer.getAddress();
        const balance = await metaflareContract.balanceOf(address);
        console.log('Balance: ', balance);
        return balance;
    } catch (error) {
        console.error('BalanceOf Error: ', error);
        throw error;
    }
};

export const ContractService = {
    balanceOf,
};
