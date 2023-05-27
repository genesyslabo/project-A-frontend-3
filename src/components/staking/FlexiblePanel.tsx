import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, AvatarBadge, Box, Flex, Grid, HStack, Image, Text, VStack } from "@chakra-ui/react"
import { StakingAmount } from "../StakingAmount";
import { StakingAPR } from "../StakingAPR";
import StakingButtons from "./StakingButtons";
import { TotalStakingAmount } from "./TotalStakingAmount";

const FlexiblePanel = () => {
    return (<>
        <AccordionItem>
            <AccordionButton className="!bg-white rounded-2xl">
                <Flex className="w-full flex-row items-center justify-between gap-2">
                    <HStack>
                        <Avatar bg={"#20B4CA"} name=" ">
                            <AvatarBadge
                                boxSize="1.25em"
                                bg="transparent"
                                borderColor="transparent"
                            >
                                <Image src="/assets/images/icon-cyclic.png" />
                            </AvatarBadge>
                        </Avatar>

                        <VStack className="text-left" alignItems={"start"}>
                            <Text className="text-black text-xs">
                                Flexible FLARE
                            </Text>
                            <Text className="text-[#6E8A99] text-[10px] !mt-0">
                                Fleible staking on the side.
                            </Text>
                        </VStack>
                    </HStack>
                    <VStack className="!hidden md:!flex !items-start">
                        <Text className="text-[#6E8A99] text-[11px] font-medium whitespace-nowrap">
                            FLARE staked
                        </Text>
                        <Text className="text-[#6E8A99] text-[14px] font-medium !mt-0">
                            0
                        </Text>
                        <Text className="text-[#6E8A99] text-[14px] font-medium !mt-0">
                            0 USD
                        </Text>
                    </VStack>
                    <VStack>
                        <Text className="text-[#6E8A99] text-[11px] font-medium whitespace-nowrap">
                            Flexible APY
                        </Text>
                        <Text className="text-black text-[14px] font-medium !mt-0">
                            <StakingAPR />
                        </Text>
                    </VStack>
                    <VStack className="!hidden md:!flex">
                        <Text className="text-[#6E8A99] text-[11px] font-medium whitespace-nowrap">
                            Total staked
                        </Text>
                        <Text className="text-black text-[14px] font-medium !mt-0">
                            <StakingAmount />
                        </Text>
                    </VStack>
                </Flex>
                <AccordionIcon color={"darkgreen"} fontSize={32} />
            </AccordionButton>

            <AccordionPanel
                pb={4}
                className="bg-[#ECFDFF] text-[#507589] rounded-b-2xl mt-2 flex flex-col md:flex-row md:gap-4"
            >
                <Grid className="grid-cols-2 gap-2 mt-4 md:!hidden">
                    <Box className="text-base font-medium">
                        Flexible APY
                    </Box>
                    <Box className="text-right text-black text-base font-medium">
                        0.63%
                    </Box>
                    <Box className="text-base font-medium">
                        Locked APR
                    </Box>
                    <Box className="text-right text-black text-base font-medium">
                        Up to 20.63%
                    </Box>
                </Grid>
                <VStack
                    border={"1px solid #96E6FF"}
                    borderRadius={"8px"}
                    p={"20px"}
                    my={"20px"}
                    gap={2}
                    align={"left"}
                    className="md:basis-4/12"
                >
                    <Text
                        className="mb-2 font-medium text-sm"
                        color={"#FE9D1C"}
                    >
                        RECENT FLARE PROFIT
                    </Text>
                    <Flex className="flex-row items-center gap-8">
                        <Flex className="flex-col">
                            <Box className="text-black text-xl font-bold">
                                0
                            </Box>
                            <Box className="text-xs font-medium whitespace-nowrap">
                                ~ 0USD
                            </Box>
                        </Flex>
                        <Box className="grow text-right text-black underline text-sm font-medium">
                            0.1% unstaking fee if withdraw within 72h
                        </Box>
                    </Flex>
                </VStack>


                <VStack
                    border={"1px solid #96E6FF"}
                    borderRadius={"8px"}
                    p={"20px"}
                    my={"20px"}
                    gap={2}
                    align={"left"}
                    className="md:basis-4/12"
                >
                    <StakingButtons />
                </VStack>
                
                <Grid className="grid-cols-2 gap-4 md:gap-2 md:py-8 text-black text-[14px] md:order-first">
                    <Box>Total staked</Box>
                    <Box className="text-right font-medium">
                        <TotalStakingAmount />
                    </Box>
                    {/* <Box>Total locked</Box>
                    <Box className="text-right font-medium">
                        189,65,524 FLARE
                    </Box> */}
                    <Box className="whitespace-nowrap">Average lock duration</Box>
                    <Box className="text-right font-medium">
                        40 weeks
                    </Box>
                    {/* <Box>Performance Fee</Box>
                    <Box className="text-right font-medium">0-2%</Box> */}
                </Grid>
            </AccordionPanel>
        </AccordionItem>
    </>)
}

export default FlexiblePanel