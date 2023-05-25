import React, { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';
import { ContractService } from '../service/contractService';

export const StakingAmount = () => {
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        const fetchAmount = async () => {
            const result = await ContractService.userStakingInfo();
            setAmount(result);
        };

        fetchAmount();
    }, []);

    return (
        <Text className="text-black text-[14px] font-medium !mt-0">
            {amount} Flare
        </Text>
    );
};
