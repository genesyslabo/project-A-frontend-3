import { MinusIcon, SmallAddIcon } from "@chakra-ui/icons"
import { Box, HStack, IconButton, Spacer, Text, VStack } from "@chakra-ui/react"
import { StakingAmount } from "../StakingAmount"
import { useEffect, useState } from "react";
import { ContractService } from "../../service/contractService";
import { flareUsdRate } from "../../common/constants";
import StakingModal from "./FlexibleModal";
import UnstakeModal from "./UnstakeModal";


const FlexibleLockBox = () => {
    const [amount, setAmount] = useState(0);
    const [isFlexibleOpen, setFlexibleOpen] = useState(false);
    const [isUnstakeOpen, setUnstakeOpen] = useState(false);

    useEffect(() => {
        const fetchAmount = async () => {
            const result = await ContractService.userStakingAmount();
            setAmount(result);
        };

        fetchAmount();
    }, []);


    return (<>
        <StakingModal openModal={isFlexibleOpen} />
        <UnstakeModal openModal={isUnstakeOpen} />

        <Text className="mb-2 text-black font-medium text-sm">
            <Box as="span" color={"#FE9D1C"}>
                STAKE
            </Box>
            FLARE
        </Text>
        <HStack className="items-stretch justify-between">
            <VStack className="justify-start items-start">
                <Text className="text-black font-bold text-xl">
                    {amount} FLARE
                </Text>
                <Text className="w-full font-medium text-xs text-left">
                    ~{amount * flareUsdRate} USD
                </Text>
            </VStack>

            <Spacer />

            <HStack className="grow justify-end">
                <IconButton
                    variant='outline'
                    borderColor={"#20B4CA"}
                    color={"#20B4CA"}
                    aria-label='Call Sage'
                    fontSize='12px'
                    icon={<MinusIcon />}
                    onClick={() => setUnstakeOpen(true)}
                    />

                <IconButton
                    variant='outline'
                    borderColor={"#20B4CA"}
                    color={"#20B4CA"}
                    aria-label='Call Sage'
                    fontSize='20px'
                    icon={<SmallAddIcon />}
                    onClick={() => setFlexibleOpen(true)}
                    />
            </HStack>
        </HStack>
    </>)
}

export default FlexibleLockBox