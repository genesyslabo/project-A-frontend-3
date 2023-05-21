import { ethers } from 'ethers';
import { WalletService } from './walletService';

const getSigner = async () => {
    if (!window.ethereum) {
        throw new Error("User's web3 provider not found");
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    return signer;
};

const callFlare = async (signer) => {
    try {
        const signer = await getSigner();
        const contract = WalletService.getContract(signer);
        const result = await contract.flare();

        console.log('Flare result: ', result);

        return result;
    } catch (error) {
        console.error('Error calling flare method: ', error);
        throw error;
    }
};

export const ContractService = {
    callFlare,
};
