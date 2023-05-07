import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, AvatarBadge, Box, Button, Flex, Grid, HStack, Image, Spacer, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text, VStack, useDisclosure, useToast } from "@chakra-ui/react"
import { FramePage } from "../components/FramePage"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { PropsWithChildren } from "react"
import Link from "next/link"

const CustomSwitchTab: React.FC<{ text: string }> = (props) => {
    return (<>
        <Tab
            className={"text-[#02715F] bg-white px-4 text-center"}
            _active={{
                bg: 'darkgreen',
                transform: 'scale(0.95)',
                borderBottom: 0,
                color: 'white'
            }}
            _selected={{ 
                color: 'white',
                bg: 'darkgreen'
            }}
            _hover={{
                color: '#9BDCFF'
            }}>
                { props.text }
        </Tab>
    </>)
}

const CustomTab: React.FC<{ text: string }> = (props) => {
    return (
        <Tab
            className={"text-[#6E8A99]"}
            paddingInlineStart={0}
            _active={{
                bg: 'transparent',
                transform: 'scale(0.95)',
                borderBottom: 0,
                borderColor: 'transparent',
                color: 'darkgreen'
            }}
            _selected={{ 
                color: 'darkgreen',
            }}
            _hover={{
                bg: 'transparent',
            }}
        >
            { props.text }
        </Tab>
    )
}

const DepositsPanel = () => {
    return (<>
        <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
                <AccordionButton className="bg-white rounded-t-2xl">
                    <Flex className="w-full flex-col gap-2">
                        <Flex className="flex-row items-center py-2">
                            <Image src="/assets/images/icon-currency.png" className="w-8" />
                            <Text className="text-black ml-2">USDC-ETHLP</Text>
                        </Flex>
                        <Flex className="flex-row gap-8 text-[#6E8A99]">
                            <Text className="w-20 text-left">Earnd</Text>
                            <Text>APR</Text>
                            <Spacer />
                        </Flex>
                        <Flex className="flex-row gap-8 text-black">
                            <Text className="w-20 text-left">0</Text>
                            <Text>34.63%</Text>
                            <Spacer />
                        </Flex>
                    </Flex>
                    <AccordionIcon color={"darkgreen"} fontSize={32} />
                </AccordionButton>
                
                <AccordionPanel pb={4} className="bg-[#D2EEFF] text-[#507589] rounded-b-2xl">
                    <Box border={"1px solid rgba(0,166,139,1)"} borderRadius={"20px"} p={"20px"} my={"20px"}>
                        <Text className="mb-2">START FARMING</Text>
                        <ConnectButton />
                    </Box>
                    <Grid className="grid-cols-2 gap-4">
                        <Box>APR</Box>
                        <Box className="text-right text-black">34.63%</Box>
                        <Box>multiplier</Box>
                        <Box className="text-right text-black">140x</Box>
                        <Box>Staked Liquidity</Box>
                        <Box className="text-right text-black">$1,499,257</Box>
                    </Grid>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    Section 2 title
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    </>)
}

const PositionPanel = () => {
    return (<>
        <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
                <AccordionButton className="bg-white rounded-t-2xl">
                    <Grid className="w-full grid-cols-4 items-center">
                        <Avatar bg={"#02715F"} name=" ">
                            <AvatarBadge boxSize='1.25em' bg='transparent' borderColor="transparent">
                                <Image src="/assets/images/icon-cyclic.png" />
                            </AvatarBadge>
                        </Avatar>
                        <Text className="text-left text-black">Stake FLARE</Text>
                        <Flex className="text-left flex-col text-black">
                            <Text className="">Flexible APY</Text>
                            <Text>0.96%</Text>
                        </Flex>
                        <Flex className="text-left flex-col text-black">
                            <Text className="">Locked APR</Text>
                            <Text>Up to</Text>
                            <Text>20.96%</Text>
                        </Flex>
                    </Grid>
                    <AccordionIcon color={"darkgreen"} fontSize={32} />
                </AccordionButton>
                
                <AccordionPanel pb={4} className="bg-[#D2EEFF] text-[#507589] rounded-b-2xl">
                    <Grid className="grid-cols-2 gap-2 my-4">
                        <Box color={"lightfont"}>Flexible APY</Box>
                        <Box className="text-right">0.96%</Box>
                        <Box color={"lightfont"}>Locked APY</Box>
                        <Box className="text-right">Up to 20.96%</Box>
                    </Grid>
                    <VStack border={"1px solid rgba(0,166,139,1)"} borderRadius={"20px"} p={"20px"} my={"20px"} gap={2} align={"left"}>
                        <Text className="mb-2" color={"darkgreen"}>RECENT FLARE PROFIT</Text>
                        <Flex className="flex-row items-center">
                            <Box><span className="text-black text-[28px]">0</span> ~ 0USD</Box>
                            <Box className="grow text-right">0.1% unstaking fee if withdraw within 72h</Box>
                        </Flex>
                    </VStack>
                    <VStack border={"1px solid rgba(0,166,139,1)"} borderRadius={"20px"} p={"20px"} my={"20px"} gap={2} align={"left"}>
                        <Text className="mb-2 text-black"><Box as="span" color={"darkgreen"}>STAKE</Box> FLARE</Text>
                        <Grid className="grid-cols-2 gap-4">
                            <Button 
                                size='lg'
                                bg='darkgreen'
                                color={"white"}
                                borderColor='darkgreen'
                                _hover={{ bg: '#00A68B' }}
                                _active={{
                                  bg: '#00A68B',
                                  transform: 'scale(0.98)',
                                }}>Flexible</Button>
                            <Button 
                                size='lg'
                                bg='darkgreen'
                                color={"white"}
                                borderColor='darkgreen'
                                _hover={{ bg: '#00A68B' }}
                                _active={{
                                  bg: '#00A68B',
                                  transform: 'scale(0.98)',
                                }}>Locked</Button>
                        </Grid>
                        <Link href={""}>
                            <Text className="underline">What's the difference?</Text>
                        </Link>
                    </VStack>
                    <Grid className="grid-cols-2 gap-4 text-black font-bold text-[28px]">
                        <Box>Total staked</Box>
                        <Box className="text-right">241,951,557 CAKE</Box>
                        <Box>Total locked</Box>
                        <Box className="text-right">189,65,524 CAKE</Box>
                        <Box>Average lock duration</Box>
                        <Box className="text-right">41 weeks</Box>
                        <Box>Performance Fee</Box>
                        <Box className="text-right">0-2%</Box>
                    </Grid>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    </>)
}

const Index = () => {
   
    return (<>
        <FramePage menu="home">
            <Flex className="flex flex-col justify-center items-center pt-24 md:pt-0">
                <HStack className="w-full my-4">
                    <Box className="text-[56px]" color={"darkgreen"} fontFamily={"PingFangSC-Semibold"}>Vesting</Box>
                    <Spacer />
                    <Tabs variant='soft-rounded' colorScheme='green'>
                        <TabList borderRadius={"var(--chakra-radii-full)"} bg={"white"}>
                            <CustomSwitchTab text="Live" />
                            <CustomSwitchTab text="Finished" />
                        </TabList>
                    </Tabs>
                </HStack>

                <Tabs position="relative" variant="unstyled" className="w-full" size={"lg"}>
                    <TabList>
                        <CustomTab text="Deposits" />
                        <CustomTab text="Position" />
                    </TabList>
                    <TabIndicator
                        mt="-1.5px"
                        height="2px"
                        bg="darkgreen"
                        borderRadius="1px"
                        />
                    <TabPanels>
                        <TabPanel>
                            <DepositsPanel />
                        </TabPanel>
                        <TabPanel>
                            <PositionPanel />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>
        </FramePage>
    </>)
}

export default Index