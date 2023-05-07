import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, HStack, Image, Spacer, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text, VStack, useDisclosure, useToast } from "@chakra-ui/react"
import { FramePage } from "../components/FramePage"


const DepositsPanel = () => {
    return (<>
        <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
                <AccordionButton className="bg-white rounded-t-2xl">
                    <Flex className="w-full flex-col gap-2">
                        <Flex className="flex-row items-center py-2">
                            <Image src="/assets/images/icon-currency.png" className="w-8" />
                            <Text className="text-black">USDC-ETHLP</Text>
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
                    <AccordionIcon color={"darkgreen"} />
                </AccordionButton>
                
                <AccordionPanel pb={4} className="bg-[#C4E8FF] text-[#507589] rounded-b-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
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

const Index = () => {
   
    return (<>
        <FramePage menu="home">
            <Flex className="flex flex-col justify-center items-center pt-24 md:pt-0">
                <HStack>
                    <Box className="text-[56px]" color={"darkgreen"} fontFamily={"PingFangSC-Semibold"}>Vesting</Box>
                    <Spacer />
                    <Tabs variant='soft-rounded' colorScheme='green'>
                        <TabList>
                            <Tab>Live</Tab>
                            <Tab>Finished</Tab>
                        </TabList>
                    </Tabs>
                </HStack>

                <Tabs position="relative" variant="unstyled" className="w-full" size={"lg"}>
                    <TabList>
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
                            Deposits
                        </Tab>
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
                        >Position</Tab>
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
                            <p>two!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>
        </FramePage>
    </>)
}

export default Index