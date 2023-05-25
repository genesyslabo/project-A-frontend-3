import React, { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';
import { ContractService } from '../service/contractService';

export const LockStakingTime = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const fetchTime = async () => {
            const result = await ContractService.userLockStakingTime();
            const rest = result[2] - result[1];
            if (rest > 0) {
                setTime(rest);
            }
        };

        fetchTime();
    }, []);

    return (
        <Text className="text-black font-bold text-xl">
            {(time / 86400).toFixed(1)} Days
        </Text>
    );
};

export const LockStakingDuration = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const fetchTime = async () => {
            const result = await ContractService.userLockStakingTime();
            const rest = result[2] - result[0];
            console.log("duration: ", rest)
            if (rest > 0) {
                setTime(rest);
            }
        };

        fetchTime();
    }, []);

    return (
        <Text className="text-black font-bold text-xl">
            {Math.round(time / 604800)} Weeks
        </Text>
    );
};

