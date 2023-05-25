import React, { useEffect, useState } from 'react';
import LockStakingEnter from './LockStakingEnter';
import LockStakingReEnter from './LockStakingReEnter';
import LockStakingLeave from './LockStakingLeave';
import { ContractService } from '../service/contractService';

const LockStaking = () => {
  const [component, setComponent] = useState(<LockStakingEnter />);

  useEffect(() => {
    const fetchData = async () => {
      const amount = await ContractService.userLockStakingAmount();
      if (amount > 0) {
        const times = await ContractService.userLockStakingTime();
        if (times[2] > times[1]) {
          setComponent(<LockStakingReEnter />);
        } else {
          setComponent(<LockStakingLeave />);
        }
      } else {
        setComponent(<LockStakingEnter />);
      }
    };

    fetchData();
  }, []);

  return component;
};

export default LockStaking;
