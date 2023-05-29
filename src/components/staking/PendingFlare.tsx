import React, { useEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { ContractService } from '../../service/contractService';
import { flareUsdRate } from '../../common/constants';
import { useAccount, useSigner } from 'wagmi';

export const PendingFlare: React.FC<{pid: number}> = (props) => {
    const [amount, setAmount] = useState(0);
    const { isConnected, address } = useAccount();
    const {data: signer} = useSigner();

    const fetchAmount = async () => {
        const result = await ContractService.pendingFlare(props.pid, address, signer);
        setAmount(result);
    };

    useEffect(() => {
        if (isConnected) {
            setInterval(() => {
                fetchAmount()
            }, 5000)
            fetchAmount();
        }
    }, [isConnected]);

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
