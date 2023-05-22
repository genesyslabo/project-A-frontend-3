import { ethers } from 'ethers';
import contractABI from '../contracts/contract.json'
import { MetaflareContractAddr, StakingContractAddr, MinStakingAmount, MinLockStakingAmount} from '../common/constants';

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
        const balanceNumber = ethers.utils.formatUnits(balance, 18);
        console.log('Balance: ', balanceNumber);
        return parseFloat(balanceNumber);
    } catch (error) {
        console.error('BalanceOf Error: ', error);
        throw error;
    }
};

const approve = async (amount) => {
    try {
        const balanceNumber = await balanceOf();
        if (balanceNumber < amount) {
            throw new Error('Insufficient balance');
        }
        const signer = await getSigner();
        const metaflareContract = getMetaflareContract(signer);
        const spender = StakingContractAddr;
        const tx = await metaflareContract.approve(spender, ethers.utils.parseUnits(amount.toString(), 'wei'));
        console.log('Approve: ', tx);
        await tx.wait();
        console.log('Approve Completed.');
    } catch (error) {
        console.error('Approve Error: ', error);
        throw error;
    }
};

const allowance = async () => {
    try {
        const signer = await getSigner();
        const metaflareContract = getMetaflareContract(signer);
        const address = await signer.getAddress();
        const spender = StakingContractAddr;
        const allowance = await metaflareContract.allowance(address, spender);
        const allowanceNumber = ethers.utils.formatUnits(allowance, 18);
        console.log('Allowance: ', allowanceNumber);
        return parseFloat(allowanceNumber);
    } catch (error) {
        console.error('Allowance Error: ', error);
        throw error;
    }
};

const enterStaking = async (amount) => {
    try {
        if (amount <= MinStakingAmount) {
            throw new Error('Insufficient amount');
        }
        const allowanceNumber = await allowance();
        if (allowanceNumber < amount) {
            throw new Error('Insufficient allowance');
        }
        const signer = await getSigner();
        const stakingContract = getStakingContract(signer);
        const tx = await stakingContract.enterStaking(ethers.utils.parseUnits(amount.toString(), 'wei'));
        console.log('EnterStaking: ', tx);
        await tx.wait();
        console.log('EnterStaking Completed.');
    } catch (error) {
        console.error('EnterStaking Error: ', error);
        throw error;
    }
};

const enterLockStaking = async (amount, weeks) => {
    try {
        if (amount <= MinLockStakingAmount) {
            throw new Error('Insufficient amount');
        }
        const allowanceNumber = await allowance();
        if (allowanceNumber < amount) {
            throw new Error('Insufficient allowance');
        }
        const signer = await getSigner();
        const stakingContract = getStakingContract(signer);
        const tx = await stakingContract.enterLockStaking(ethers.utils.parseUnits(amount.toString(), 'wei'), weeks);
        console.log('EnterLockStaking: ', tx);
        await tx.wait();
        console.log('EnterLockStaking Completed.');
    } catch (error) {
        console.error('EnterLockStaking Error: ', error);
        throw error;
    }
};

const reEnterLockStaking = async (amount, weeks) => {
    try {
        if (amount <= MinLockStakingAmount) {
            throw new Error('Insufficient amount');
        }
        const allowanceNumber = await allowance();
        if (allowanceNumber < amount) {
            throw new Error('Insufficient allowance');
        }
        const signer = await getSigner();
        const stakingContract = getStakingContract(signer);
        const tx = await stakingContract.reEnterLockStaking(ethers.utils.parseUnits(amount.toString(), 'wei'), weeks);
        console.log('ReEnterLockStaking: ', tx);
        await tx.wait();
        console.log('ReEnterLockStaking Completed.');
    } catch (error) {
        console.error('ReEnterLockStaking Error: ', error);
        throw error;
    }
};

export const ContractService = {
    balanceOf, approve, allowance, enterStaking, enterLockStaking, reEnterLockStaking
};
