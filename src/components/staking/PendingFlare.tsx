import React, { useEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { ContractService } from '../../service/contractService';
import { flareUsdRate } from '../../common/constants';

export const PendingFlare: React.FC<{pid: number}> = (props) => {
    const [amount, setAmount] = useState(0);

    const fetchAmount = async () => {
        const result = await ContractService.pendingFlare(props.pid);
        setAmount(result);
    };

    useEffect(() => {
        setInterval(() => {
            fetchAmount()
        }, 5000)
        fetchAmount();
    }, []);

    return (
        <Flex className="flex-col">
            <Box className="text-black text-xl font-bold">
                {amount}
            </Box>
            <Box className="text-xs font-medium whitespace-nowrap">
                ~ {amount * flareUsdRate} USD
            </Box>
        </Flex>
    );
};
