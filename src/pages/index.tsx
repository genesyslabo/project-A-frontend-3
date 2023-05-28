import { Accordion, Avatar, Box, Flex, Grid, HStack, Spacer, Text } from "@chakra-ui/react"
import { FramePage } from "../components/FramePage"
import React, { useState } from "react"
import FlexiblePanel from "../components/staking/FlexiblePanel"
import LockFlexiblePanel from "../components/staking/LockFlexiblePanel"
import FlareToLock from "../components/staking/LockStakingModal"
import { TotalStakingAmount } from "../components/staking/TotalStakingAmount"


const DepositsPanel = () => {
    const [isFlareToLockOpen, setFlareToLockOpen] = useState(false);

    return (
        <>
            <FlareToLock openModal={isFlareToLockOpen} onClose={() => setFlareToLockOpen(false)} />

            <Accordion defaultIndex={[0]} allowMultiple className="w-full">
                <FlexiblePanel />
                <LockFlexiblePanel />
            </Accordion>
        </>
    );
}

const Index = () => {

    return (<>
        <FramePage menu="staking">
            <Flex className="flex flex-col justify-center items-center pt-4">
                <Box className="w-full flex flex-col md:flex-row gap-2 justify-between bg-white rounded-2xl p-4">
                    <Box className="flex flex-row gap-2 items-center">
                        <Box>
                            <Avatar bg={"#20B4CA"} name=" " size={"lg"} />
                        </Box>
                        <Box className="flex flex-col gap-0">
                            <Text className="text-black font-bold text-base">Flare Staking</Text>
                            <Text className="text-[#6E8A99] text-xs">Collateralize assets to borrow liquidity.</Text>
                            <Text className="text-[#6E8A99] text-xs underline">Learn More</Text>
                        </Box>
                    </Box>
                    <Grid className="grid-cols-2 gap-2 md:gap-x-20">
                        <Box className="text-black text-xl font-medium">
                            <TotalStakingAmount />
                        </Box>
                        <Box className="text-black text-xl font-medium">911</Box>
                        <Box className="text-[#6E8A99] text-xs">Total staked</Box>
                        <Box className="text-[#6E8A99] text-xs">Total reward</Box>
                    </Grid>
                </Box>

                <HStack className="w-full mt-4 mb-2">
                    <Box className="text-[24px] font-bold" color={"darkgreen"}>Vesting</Box>
                    <Spacer />
                    {/* <Tabs variant='soft-rounded' colorScheme='green'>
                        <TabList borderRadius={"var(--chakra-radii-full)"} bg={"white"}>
                            <CustomSwitchTab text="Live" />
                            <CustomSwitchTab text="Finished" />
                        </TabList>
                    </Tabs> */}
                </HStack>

                <DepositsPanel />
            </Flex>
        </FramePage>
    </>)
}

export default Index