import React, { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';
import { ContractService } from '../service/contractService';

export const LockStakingTime = () => {
    const [times, setTimes] = useState([0, 0, 0]);

    useEffect(() => {
        const fetchTime = async () => {
            const result = await ContractService.userLockStakingTime();
            setTimes(result);
        };

        fetchTime();
    }, []);

    return (
        <Text className="text-black font-bold text-xl">
            {((times[2] - times[1]) / 86400).toFixed(1)} Days
        </Text>
    );
};
