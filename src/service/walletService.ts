import { ethers } from 'ethers'
import contractABI from '../contracts/contract.json'
import { goerliContractAddr, mainnetContractAddr } from '../common/constants';
import { isDev } from '../common/utils/tools';

const getContract = (signer) => {

    const address = isDev() ? goerliContractAddr : mainnetContractAddr;

    if (signer) {
        return new ethers.Contract(address, contractABI, signer);
    }

    if (isDev()) {
        const provider = new ethers.providers.JsonRpcProvider("https://data-seed-prebsc-1-s1.binance.org:8545");

        return new ethers.Contract(address, contractABI, provider);
    } else {
        const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/90409d94458f4a3d862d259e21232663");
        // const provider = new ethers.providers.Web3Provider(window.ethereum);
    
        return new ethers.Contract(address, contractABI, provider);
    }
}

export const WalletService = { getContract }
