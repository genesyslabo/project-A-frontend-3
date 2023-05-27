import React, { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';
import { ContractService } from '../../service/contractService';
import { BigNumber, ethers } from 'ethers';

export const TotalStakingAmount = () => {
    const [amount, setAmount] = useState("0");

    useEffect(() => {
        const fetchAmount = async () => {
            const result = await ContractService.totalAllocPoint();
            setAmount(ethers.utils.formatEther(BigNumber.from(result).toString()));
        };

        fetchAmount();
    }, []);

    return (
        <Text as="span">
            {+parseFloat(amount).toFixed(2)} Flare
        </Text>
    );
};
