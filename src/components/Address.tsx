import React, { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';
import { ContractService } from '../service/contractService';

export const Address = () => {
    const [address, setAddress] = useState("");

    useEffect(() => {
        const fetchAddress = async () => {
            const result = await ContractService.getAddress();
            
            setAddress(result);
        };

        fetchAddress();
    }, []);

    return (
        <Text as={"span"}>
            {address}
        </Text>
    );
};
