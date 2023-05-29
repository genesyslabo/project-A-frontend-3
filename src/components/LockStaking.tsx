import React, { useEffect, useState } from 'react';
import LockStakingEnter from './LockStakingEnter';
import LockStakingReEnter from './LockStakingReEnter';
import LockStakingLeave from './LockStakingLeave';
import { ContractService } from '../service/contractService';
import { useAccount, useSigner } from 'wagmi';

const LockStaking = () => {
  const { isConnected, address } = useAccount();
  const {data: signer} = useSigner();

  const [component, setComponent] = useState(<LockStakingEnter />);

  useEffect(() => {
    const fetchData = async () => {
      const amount = await ContractService.userLockStakingAmount(address, signer);
      if (amount > 0) {
        const times = await ContractService.userLockStakingTime(address, signer);
        if (times[2] > times[1]) {
          setComponent(<LockStakingReEnter />);
        } else {
          setComponent(<LockStakingLeave />);
        }
      } else {
        setComponent(<LockStakingEnter />);
      }
    };

    if (isConnected) {
      fetchData();
    }
    
  }, [isConnected]);

  return component;
};

export default LockStaking;
