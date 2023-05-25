import React, { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';
import { ContractService } from '../service/contractService';

export const LockStakingFutureAPR = ({ amount, week }) => {
    const [apr, setApr] = useState(0);

    useEffect(() => {
        const fetchAPR = async () => {
            const result = await ContractService.lockStakingAPR(amount, week);
            setApr(result);
        };

        fetchAPR();
    }, [amount, week]);

    return (
        <Text className="text-black text-base font-medium">
            {(apr * 100).toFixed(2)}%
        </Text>
    );
};

export const LockStakingCurrentAPR = () => {
    const [apr, setApr] = useState(0);

    useEffect(() => {
        const fetchAPR = async () => {
            const times = await ContractService.userLockStakingTime();
            const amount = await ContractService.userLockStakingAmount();
            const week = Math.round((times[2] - times[0]) / 604800);
            if (amount != 0 && week != 0) {
                const result = await ContractService.lockStakingAPR(amount, week);
                setApr(result);
            }
        };

        fetchAPR();
    }, []);

    return (
        <Text className="text-black text-base font-medium">
            {(apr * 100).toFixed(2)}%
        </Text>
    );
};

