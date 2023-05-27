import React, { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';
import { ContractService } from '../service/contractService';

export const LockStakingAmount = () => {
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        const fetchAmount = async () => {
            const result = await ContractService.userLockStakingAmount();
            setAmount(result);
        };

        fetchAmount();
    }, []);

    return (
        <Text as="span">
            {amount} Flare
        </Text>
    );
};
