import React, { useState } from 'react';
import { Flex, Grid, Button, Input } from '@chakra-ui/react';
import { ContractService } from '../service/contractService';

const LockStakingReEnter = () => {
    const [amountInput, setAmountInput] = useState("");
    const [weekInput, setWeekInput] = useState("");

    return (
        <Flex
            border={"1px solid #96E6FF"}
            borderRadius={"8px"}
            p={"20px"}
            my={"20px"}
            className="flex-col gap-4"
        >
            <Grid className="grid-cols-2 gap-3">
                <Input
                    value={amountInput}
                    onChange={(e) => setAmountInput(e.target.value)}
                />
                <Button
                    onClick={() => ContractService.reEnterLockStaking(parseFloat(amountInput), 0)}
                    size="lg"
                    bg="darkgreen"
                    color={"white"}
                    borderColor="darkgreen"
                    fontSize={16}
                    bgImg={"linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)"}
                    _hover={{ bgImg: "linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)" }}
                    _active={{
                        bgImg: "linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)",
                        transform: "scale(0.98)",
                    }}
                >
                    Add Amount
                </Button>
                <Input
                    value={weekInput}
                    onChange={(e) => setWeekInput(e.target.value)}
                />
                <Button
                    onClick={() => ContractService.reEnterLockStaking(0, parseInt(weekInput))}
                    size="lg"
                    bg="darkgreen"
                    color={"white"}
                    borderColor="darkgreen"
                    fontSize={16}
                    bgImg={"linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)"}
                    _hover={{ bgImg: "linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)" }}
                    _active={{
                        bgImg: "linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)",
                        transform: "scale(0.98)",
                    }}
                >
                    Add Weeks
                </Button>
            </Grid>
        </Flex>
    );
}

export default LockStakingReEnter;
