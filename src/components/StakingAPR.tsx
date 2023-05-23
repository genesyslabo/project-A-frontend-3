import React, { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';
import { ContractService } from '../service/contractService';

export const StakingAPR = () => {
    const [apr, setApr] = useState(0);

    useEffect(() => {
        const fetchAPR = async () => {
            const result = await ContractService.stakingAPR();
            setApr(result);
        };

        fetchAPR();
    }, []);

    return (
        <Text className="text-black text-base font-medium">
            {apr.toFixed(2)}%
        </Text>
    );
};
