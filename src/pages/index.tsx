import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, AvatarBadge, Box, Button, Flex, Grid, HStack, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, RadioGroup, Spacer, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Tag, TagLabel, TagLeftIcon, Text, VStack, useDisclosure, useToast } from "@chakra-ui/react"
import { LockIcon } from '@chakra-ui/icons'
import { FramePage } from "../components/FramePage"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import Link from "next/link"
import React, { PropsWithChildren } from "react"
import { RadioCard } from "../components/CustomRadio"

const CustomSwitchTab: React.FC<{ text: string }> = (props) => {
    return (<>
        <Tab
            className={"text-[#02715F] bg-white px-4 text-center font-medium text-base"}
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
            className={"text-[#6E8A99] text-lg font-medium"}
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
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <AccordionButton className="bg-white rounded-t-2xl">
                        <Flex className="w-full flex-row items-center gap-4">
                            <Avatar bg={"#02715F"} name=" ">
                                <AvatarBadge
                                    boxSize="1.25em"
                                    bg="transparent"
                                    borderColor="transparent"
                                >
                                    <Image src="/assets/images/icon-cyclic.png" />
                                </AvatarBadge>
                            </Avatar>

                            <VStack className="text-left" alignItems={"start"}>
                                <Text className="text-[#0094FF] text-[10px] font-medium">locked</Text>
                                <Text className="text-black font-bold text-sm !mt-0">
                                    stake FLARE
                                </Text>
                                <Text className="text-[#6E8A99] text-[10px] !mt-0">
                                    Stake, Earn-And more!
                                </Text>
                            </VStack>

                            <VStack className="text-left" alignItems={"start"}>
                                <Text className="text-[#6E8A99] text-xs font-medium">
                                    APR
                                </Text>
                                <Text className="text-black text-base font-medium">
                                    34.63%
                                </Text>
                            </VStack>
                        </Flex>
                        <AccordionIcon color={"darkgreen"} fontSize={32} />
                    </AccordionButton>

                    <AccordionPanel
                        pb={4}
                        className="bg-[#D2EEFF] text-[#507589] rounded-b-2xl"
                    >
                        <Box className="flex flex-row gap-2 items-center mt-2">
                            <Text
                                color={"#0094FF"}
                                fontSize={"12px"}
                                fontWeight={"500"}
                            >
                                MY POSITION
                            </Text>
                            <Tag
                                size="sm"
                                bg={"darkgreen"}
                                color={"white"}
                                borderRadius="full"
                            >
                                <TagLeftIcon boxSize="12px" as={LockIcon} />
                                <TagLabel>Locked</TagLabel>
                            </Tag>
                        </Box>
                        <Grid
                            border={"1px solid rgba(0,166,139,1)"}
                            borderRadius={"8px"}
                            p={"20px"}
                            my={"20px"}
                            className="grid-cols-2"
                        >
                            <Text className="text-[#0094FF] font-medium text-sm">
                                RECENT FLARE PROFIT
                            </Text>
                            <Text className="text-[#0094FF] font-medium text-sm">
                                YIELD BOOST
                            </Text>
                            <Text className="text-black font-bold text-xl">
                                0.0000
                            </Text>
                            <Text className="text-black font-bold text-xl">
                                1.38x
                            </Text>
                            <Text className="font-medium text-sx">~0.00USD</Text>
                            <Text className="font-medium text-sx">Lock for 1 week</Text>
                        </Grid>
                        <Flex
                            border={"1px solid rgba(0,166,139,1)"}
                            borderRadius={"8px"}
                            p={"20px"}
                            my={"20px"}
                            className="flex-col gap-4"
                        >
                            <Grid className="grid-cols-2">
                                <Text className="font-medium text-sm">
                                    <span className="text-[#0094FF]">
                                        FLARE
                                    </span>
                                    LOCKED
                                </Text>
                                <Text className=" font-medium text-sm">ULNLOCJS IN</Text>
                                <Text className="text-black font-bold text-xl">
                                    20.0000
                                </Text>
                                <Text className="text-black font-bold text-xl">
                                    7 days
                                </Text>
                                <Text className="font-medium text-sx">~50.98USD</Text>
                                <Text className="font-medium text-sx">
                                    On May 10,2023,11:38
                                </Text>
                            </Grid>
                            <Button
                                size="lg"
                                bg="darkgreen"
                                color={"white"}
                                fontSize={16}
                                borderColor="darkgreen"
                                _hover={{ bg: "#00A68B" }}
                                _active={{
                                    bg: "#00A68B",
                                    transform: "scale(0.98)",
                                }}
                            >
                                Staking
                            </Button>
                        </Flex>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem mt={4}>
                    <AccordionButton className="bg-white rounded-t-2xl">
                        <Flex className="w-full flex-row items-center gap-2">
                            <Avatar bg={"#02715F"} name=" ">
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
                            <VStack>
                                <Text className="text-[#6E8A99] text-[11px] font-medium whitespace-nowrap">
                                    Flexible APY
                                </Text>
                                <Text className="text-black text-[14px] font-medium !mt-0">
                                    0.93%
                                </Text>
                            </VStack>
                            <VStack>
                                <Text className="text-[#6E8A99] text-[11px] font-medium whitespace-nowrap">
                                    Locked APR
                                </Text>
                                <Text className="text-[#6E8A99] text-[14px] font-medium !mt-0">
                                    Up to
                                </Text>
                                <Text className="text-black text-[14px] font-medium !mt-0">
                                    20.93%
                                </Text>
                            </VStack>
                        </Flex>
                        <AccordionIcon color={"darkgreen"} fontSize={32} />
                    </AccordionButton>

                    <AccordionPanel
                        pb={4}
                        className="bg-[#D2EEFF] text-[#507589] rounded-b-2xl"
                    >
                        <Grid className="grid-cols-2 gap-2 mt-4">
                            <Box className="text-base font-medium">Flexible APY</Box>
                            <Box className="text-right text-black text-base font-medium">0.63%</Box>
                            <Box className="text-base font-medium">Locked APR</Box>
                            <Box className="text-right text-black text-base font-medium">
                                Up to 20.63%
                            </Box>
                        </Grid>
                        <VStack
                            border={"1px solid rgba(0,166,139,1)"}
                            borderRadius={"8px"}
                            p={"20px"}
                            my={"20px"}
                            gap={2}
                            align={"left"}
                        >
                            <Text className="mb-2 font-medium text-sm" color={"#0094FF"}>
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
                            border={"1px solid rgba(0,166,139,1)"}
                            borderRadius={"8px"}
                            p={"20px"}
                            my={"20px"}
                            gap={2}
                            align={"left"}
                        >
                            <Text className="mb-2 text-black font-medium text-sm">
                                <Box as="span" color={"#0094FF"}>
                                    STAKE
                                </Box>{" "}
                                FLARE
                            </Text>
                            <Button
                                size="lg"
                                bg="darkgreen"
                                color={"white"}
                                borderColor="darkgreen"
                                _hover={{ bg: "#00A68B" }}
                                _active={{
                                    bg: "#00A68B",
                                    transform: "scale(0.98)",
                                }}
                                onClick={isOpen ? onClose : onOpen}
                            >
                                Flexible
                            </Button>
                            <Link href={""}>
                                <Text className="underline text-sm font-medium">
                                    What's the difference?
                                </Text>
                            </Link>
                        </VStack>
                        <Grid className="grid-cols-2 gap-4 text-black text-[14px]">
                            <Box>Total staked</Box>
                            <Box className="text-right font-medium">241,951,557 FLARE</Box>
                            <Box>Total locked</Box>
                            <Box className="text-right font-medium">189,65,524 FLARE</Box>
                            <Box>Average lock duration</Box>
                            <Box className="text-right font-medium">41 weeks</Box>
                            <Box>Performance Fee</Box>
                            <Box className="text-right font-medium">0-2%</Box>
                        </Grid>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>FLEXIBLE</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex className="flex-col gap-2">
                            <Flex>
                                <Text className="grow text-[#5B7A8A] text-xs font-medium">
                                    FLARE TO STAKE
                                </Text>
                                <Flex className="gap-1 items-center">
                                    <Box
                                        bg={"darkgreen"}
                                        className="rounded-full w-4 h-4"
                                    ></Box>
                                    <Box className="font-bold text-sm">
                                        FLARE
                                    </Box>
                                </Flex>
                            </Flex>
                            <Flex className="flex-col items-end bg-[#D2EEFF] rounded-lg gap-2 p-2">
                                <Text className="font-bold">20</Text>
                                <Text className="text-xs text-[#666666]">
                                    -241,951,557 USD
                                </Text>
                            </Flex>
                            <Text className="text-right text-[#6E8A99] text-xs">
                                Balance: 20.2313131
                            </Text>
                            <RadioGroup
                                name="form-name"
                                className="grid grid-cols-4 gap-2 mt-2"
                            >
                                <RadioCard>20%</RadioCard>
                                <RadioCard>50%</RadioCard>
                                <RadioCard>75%</RadioCard>
                                <RadioCard>Max</RadioCard>
                            </RadioGroup>
                            <Flex className="flex-row">
                                <Flex className="flex-col gap-2 grow text-xs text-[#676768]">
                                    <Text>xxNFT x1 +25% &gt;</Text>
                                    <Text>Annual ROI at current rates;</Text>
                                </Flex>
                                <Flex className="items-center font-medium text-sm">
                                    35%
                                </Flex>
                            </Flex>

                            <Button
                                size="lg"
                                bg="darkgreen"
                                color={"white"}
                                borderColor="darkgreen"
                                _hover={{ bg: "#00A68B" }}
                                _active={{
                                    bg: "#00A68B",
                                    transform: "scale(0.98)",
                                }}
                            >
                                Confirm
                            </Button>

                            <Button
                                size="lg"
                                bg="white"
                                color={"darkgreen"}
                                variant="outline"
                                borderColor={"darkgreen"}
                                _hover={{}}
                                _active={{
                                    bg: "white",
                                    transform: "scale(0.98)",
                                }}
                            >
                                Add FLARE LOCKED
                            </Button>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

const PositionPanel = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (<>
        <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
                <AccordionButton className="bg-white rounded-t-2xl">
                    <Flex className="w-full flex-row items-center gap-2">
                        <Avatar bg={"#02715F"} name=" ">
                            <AvatarBadge boxSize='1.25em' bg='transparent' borderColor="transparent">
                                <Image src="/assets/images/icon-cyclic.png" />
                            </AvatarBadge>
                        </Avatar>
                        <VStack className="text-left !items-start">
                            <Text className="text-black text-xs font-bold text-left">Flexible FLARE</Text>
                            <Text className="!mt-0" color={"lightfont"} fontSize={"10px"}>Flexible staking on the side.</Text>
                        </VStack>
                        <Flex className="text-left flex-col">
                            <Text color={"lightfont"} className="text-[11px]">Flexible APY</Text>
                            <Text className="text-black text-sm font-medium">0.96%</Text>
                        </Flex>
                        <Flex className="text-left flex-col" color={"lightfont"}>
                            <Text className="text-[11px] !mt-0 font-medium">Locked APR</Text>
                            <Text className="text-[14px] !mt-0 font-medium">Up to</Text>
                            <Text className="text-black !mt-0 text-[14px] font-medium">20.96%</Text>
                        </Flex>
                    </Flex>
                    <AccordionIcon color={"darkgreen"} fontSize={32} />
                </AccordionButton>
                
                <AccordionPanel pb={4} className="bg-[#D2EEFF] text-[#507589] rounded-b-2xl text-sm font-medium">
                    <Grid className="grid-cols-2 gap-2 my-4">
                        <Box color={"lightfont"}>Flexible APY</Box>
                        <Box className="text-right text-black">0.96%</Box>
                        <Box color={"lightfont"}>Locked APY</Box>
                        <Box className="text-right text-black">Up to 20.96%</Box>
                    </Grid>
                    
                    <VStack border={"1px solid rgba(0,166,139,1)"} borderRadius={"10px"} p={"20px"} my={"20px"} gap={2} align={"left"}>
                        <Text className="mb-2 text-sm font-medium" color={"#0094FF"}>RECENT FLARE PROFIT</Text>
                        <Flex className="flex-row items-start gap-8">
                            <Flex className="flex-col">
                                <Box className="text-black text-xl">0</Box>
                                <Box className="whitespace-nowrap">~ 0USD</Box>    
                            </Flex>
                            <Box className="text-black text-sm grow underline">0.1% unstaking fee if withdraw within 72h</Box>
                        </Flex>
                    </VStack>
                    <VStack border={"1px solid rgba(0,166,139,1)"} borderRadius={"10px"} p={"20px"} my={"20px"} gap={2} align={"left"}>
                        <Text className="mb-2 text-black font-medium"><Box as="span" color={"#0094FF"}>STAKE</Box> FLARE</Text>
                        <Button 
                            size='lg'
                            bg='darkgreen'
                            color={"white"}
                            borderColor='darkgreen'
                            _hover={{ bg: '#00A68B' }}
                            _active={{
                                bg: '#00A68B',
                                transform: 'scale(0.98)',
                            }}
                            onClick={isOpen ? onClose : onOpen}
                            >Add FLARE</Button>
                        <Link href={""}>
                            <Text className="underline text-sm">What's the difference?</Text>
                        </Link>
                    </VStack>
                    <Grid className="grid-cols-2 gap-2 text-black text-[14px]">
                        <Box>Total staked</Box>
                        <Box className="text-right">241,951,557 FLARE</Box>
                        <Box>Total locked</Box>
                        <Box className="text-right">189,65,524 FLARE</Box>
                        <Box>Average lock duration</Box>
                        <Box className="text-right">41 weeks</Box>
                        <Box>Performance Fee</Box>
                        <Box className="text-right">0-2%</Box>
                    </Grid>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem mt={4}>
                <AccordionButton className="bg-white rounded-t-2xl">
                    <Flex className="w-full flex-row items-center gap-2">
                        <Avatar bg={"#02715F"} name=" ">
                            <AvatarBadge
                                boxSize="1.25em"
                                bg="transparent"
                                borderColor="transparent"
                            >
                                <Image src="/assets/images/icon-cyclic.png" />
                            </AvatarBadge>
                        </Avatar>

                        <VStack className="grow justify-center" alignItems={"start"}>
                            <Text className="text-[#0094FF] font-medium text-[10px] !mt-0">locked</Text>
                            <Text className="text-[#1E1E1E] text-sm font-bold !mt-0">
                                stake FLARE
                            </Text>
                            <Text className="text-[#6E8A99] text-[10px] !mt-0">
                                Stake, Earn-And more!
                            </Text>
                        </VStack>
                        <VStack alignItems={"start"}>
                            <Text className="text-[#6E8A99] text-xs font-medium">
                                APR
                            </Text>
                            <Text className="text-black text-base font-medium">
                                34.63%
                            </Text>
                        </VStack>
                    </Flex>
                    <AccordionIcon color={"darkgreen"} fontSize={32} />
                </AccordionButton>

                <AccordionPanel
                    pb={4}
                    className="bg-[#D2EEFF] text-[#507589] rounded-b-2xl"
                >
                    <Box className="flex flex-row gap-2 items-center mt-2">
                        <Text
                            color={"darkgreen"}
                            fontSize={"12px"}
                            fontWeight={"500"}
                        >
                            MY POSITION
                        </Text>
                        <Tag
                            size="sm"
                            bg={"darkgreen"}
                            color={"white"}
                            borderRadius="full"
                        >
                            <TagLeftIcon boxSize="12px" as={LockIcon} />
                            <TagLabel>Locked</TagLabel>
                        </Tag>
                    </Box>
                    <Flex
                        border={"1px solid rgba(0,166,139,1)"}
                        borderRadius={"8px"}
                        p={"20px"}
                        my={"10px"}
                        className="flex-row gap-2"
                    >
                        <Flex className="flex-col">
                            <Text className="text-[#0094FF] text-sm font-medium">
                                RECENT FLARE PROFIT
                            </Text>
                            <Text className="text-black font-bold text-xl">
                                0.0000
                            </Text>
                            <Text className="text-xs font-medium">~0.00USD</Text>
                        </Flex>
                        
                        <Flex className="flex-col">
                            <Text className="text-[#0094FF] text-sm font-medium">
                                YIELD BOOST
                            </Text>
                            <Text className="text-black font-bold text-xl">
                                1.38x
                            </Text>
                            <Text className="text-xs font-medium">Lock for 1 week</Text>
                        </Flex>
                    </Flex>
                    <Flex
                        border={"1px solid rgba(0,166,139,1)"}
                        borderRadius={"8px"}
                        p={"20px"}
                        my={"20px"}
                        className="flex-col gap-4"
                    >
                        <Grid className="grid-cols-2">
                            <Text className="text-sm font-medium">
                                <span className="text-[#0094FF]">
                                    FLARE
                                </span>
                                LOCKED
                            </Text>
                            <Text className="text-sm font-medium">ULNLOCJS IN</Text>
                            <Text className="text-black font-bold text-xl">
                                20.0000
                            </Text>
                            <Text className="text-black font-bold text-xl">
                                7 days
                            </Text>
                            <Text className="text-xs font-medium">~50.98USD</Text>
                            <Text className="text-xs font-medium">
                                On May 10,2023,11:38
                            </Text>
                        </Grid>
                        <Grid className="grid-cols-2 gap-2">
                            <Button
                                size="lg"
                                bg="darkgreen"
                                color={"white"}
                                borderColor="darkgreen"
                                fontSize={16}
                                _hover={{ bg: "#00A68B" }}
                                _active={{
                                    bg: "#00A68B",
                                    transform: "scale(0.98)",
                                }}
                            >
                                ADD FLARE
                            </Button>
                            <Button
                                size="lg"
                                bg="darkgreen"
                                color={"white"}
                                fontSize={16}
                                borderColor="darkgreen"
                                _hover={{ bg: "#00A68B" }}
                                _active={{
                                    bg: "#00A68B",
                                    transform: "scale(0.98)",
                                }}
                            >
                                Extend
                            </Button>
                        </Grid>
                    </Flex>
                </AccordionPanel>
            </AccordionItem>



            <AccordionItem mt={4}>
                <AccordionButton className="bg-white rounded-t-2xl">
                    <Flex className="w-full flex-row items-center gap-2">
                        <Avatar bg={"#02715F"} name=" ">
                            <AvatarBadge
                                boxSize="1.25em"
                                bg="transparent"
                                borderColor="transparent"
                            >
                                <Image src="/assets/images/icon-cyclic.png" />
                            </AvatarBadge>
                        </Avatar>

                        <VStack className="grow justify-center" alignItems={"start"}>
                            <Text className="text-[#0094FF] font-medium text-[10px] !mt-0">locked</Text>
                            <Text className="text-[#1E1E1E] text-sm font-bold !mt-0">
                                stake FLARE
                            </Text>
                            <Text className="text-[#6E8A99] text-[10px] !mt-0">
                                Stake, Earn-And more!
                            </Text>
                        </VStack>
                        <VStack alignItems={"start"}>
                            <Text className="text-[#6E8A99] text-xs font-medium">
                                APR
                            </Text>
                            <Text className="text-black text-base font-medium">
                                34.63%
                            </Text>
                        </VStack>
                    </Flex>
                    <AccordionIcon color={"darkgreen"} fontSize={32} />
                </AccordionButton>

                <AccordionPanel
                    pb={4}
                    className="bg-[#D2EEFF] text-[#507589] rounded-b-2xl"
                >
                    <Box className="flex flex-row gap-2 items-center mt-2">
                        <Text
                            color={"darkgreen"}
                            fontSize={"12px"}
                            fontWeight={"500"}
                        >
                            MY POSITION
                        </Text>
                        <Tag
                            size="sm"
                            bg={"darkgreen"}
                            color={"white"}
                            borderRadius="full"
                        >
                            <TagLeftIcon boxSize="12px" as={LockIcon} />
                            <TagLabel>Locked</TagLabel>
                        </Tag>
                    </Box>
                    <Flex
                        border={"1px solid rgba(0,166,139,1)"}
                        borderRadius={"8px"}
                        p={"20px"}
                        my={"10px"}
                        className="flex-row gap-2"
                    >
                        <Flex className="flex-col">
                            <Text className="text-[#0094FF] text-sm font-medium">
                                RECENT FLARE PROFIT
                            </Text>
                            <Text className="text-black font-bold text-xl">
                                0.0000
                            </Text>
                            <Text className="text-xs font-medium">~0.00USD</Text>
                        </Flex>
                        
                        <Flex className="flex-col">
                            <Text className="text-[#0094FF] text-sm font-medium">
                                YIELD BOOST
                            </Text>
                            <Text className="text-black font-bold text-xl">
                                1.38x
                            </Text>
                            <Text className="text-xs font-medium">Lock for 1 week</Text>
                        </Flex>
                    </Flex>
                    <Flex
                        border={"1px solid rgba(0,166,139,1)"}
                        borderRadius={"8px"}
                        p={"20px"}
                        my={"20px"}
                        className="flex-col gap-4"
                    >
                        <Grid className="grid-cols-2">
                            <Text className="text-sm font-medium">
                                <span className="text-[#0094FF]">
                                    FLARE
                                </span>
                                LOCKED
                            </Text>
                            <Text className="text-sm font-medium">ULNLOCJS IN</Text>
                            <Text className="text-black font-bold text-xl">
                                20.0000
                            </Text>
                            <Text className="text-black font-bold text-xl">
                                7 days
                            </Text>
                            <Text className="text-xs font-medium">~50.98USD</Text>
                            <Text className="text-xs font-medium">
                                On May 10,2023,11:38
                            </Text>
                        </Grid>
                        <Grid className="grid-cols-2 gap-2">
                            <Button
                                size="lg"
                                bg="darkgreen"
                                color={"white"}
                                borderColor="darkgreen"
                                fontSize={16}
                                _hover={{ bg: "#00A68B" }}
                                _active={{
                                    bg: "#00A68B",
                                    transform: "scale(0.98)",
                                }}
                            >
                                ADD FLARE
                            </Button>
                            <Button
                                size="lg"
                                bg="darkgreen"
                                color={"white"}
                                fontSize={16}
                                borderColor="darkgreen"
                                _hover={{ bg: "#00A68B" }}
                                _active={{
                                    bg: "#00A68B",
                                    transform: "scale(0.98)",
                                }}
                            >
                                Extend
                            </Button>
                        </Grid>
                    </Flex>
                </AccordionPanel>
            </AccordionItem>


            <AccordionItem mt={4}>
                <AccordionButton className="bg-white rounded-t-2xl">
                    <Flex className="w-full flex-row items-center gap-2">
                        <Avatar bg={"#02715F"} name=" ">
                            <AvatarBadge boxSize='1.25em' bg='transparent' borderColor="transparent">
                                <Image src="/assets/images/icon-cyclic.png" />
                            </AvatarBadge>
                        </Avatar>
                        <VStack className="text-left !items-start">
                            <Text className="text-black text-xs font-bold text-left">Flexible FLARE</Text>
                            <Text className="!mt-0" color={"lightfont"} fontSize={"10px"}>Flexible staking on the side.</Text>
                        </VStack>
                        <Flex className="text-left flex-col">
                            <Text color={"lightfont"} className="text-[11px]">Flexible APY</Text>
                            <Text className="text-black text-sm font-medium">0.96%</Text>
                        </Flex>
                        <Flex className="text-left flex-col" color={"lightfont"}>
                            <Text className="text-[11px] !mt-0 font-medium">Locked APR</Text>
                            <Text className="text-[14px] !mt-0 font-medium">Up to</Text>
                            <Text className="text-black !mt-0 text-[14px] font-medium">20.96%</Text>
                        </Flex>
                    </Flex>
                    <AccordionIcon color={"darkgreen"} fontSize={32} />
                </AccordionButton>
                
                <AccordionPanel pb={4} className="bg-[#D2EEFF] text-[#507589] rounded-b-2xl text-sm font-medium">
                    <Grid className="grid-cols-2 gap-2 my-4">
                        <Box color={"lightfont"}>Flexible APY</Box>
                        <Box className="text-right text-black">0.96%</Box>
                        <Box color={"lightfont"}>Locked APY</Box>
                        <Box className="text-right text-black">Up to 20.96%</Box>
                    </Grid>
                    
                    <VStack border={"1px solid rgba(0,166,139,1)"} borderRadius={"10px"} p={"20px"} my={"20px"} gap={2} align={"left"}>
                        <Text className="mb-2 text-sm font-medium" color={"#0094FF"}>RECENT FLARE PROFIT</Text>
                        <Flex className="flex-row items-start gap-8">
                            <Flex className="flex-col">
                                <Box className="text-black text-xl">0</Box>
                                <Box className="whitespace-nowrap">~ 0USD</Box>    
                            </Flex>
                            <Box className="text-black text-sm grow underline">0.1% unstaking fee if withdraw within 72h</Box>
                        </Flex>
                    </VStack>
                    <VStack border={"1px solid rgba(0,166,139,1)"} borderRadius={"10px"} p={"20px"} my={"20px"} gap={2} align={"left"}>
                        <Text className="mb-2 text-black font-medium"><Box as="span" color={"#0094FF"}>STAKE</Box> FLARE</Text>
                        <Button 
                            size='lg'
                            bg='darkgreen'
                            color={"white"}
                            borderColor='darkgreen'
                            _hover={{ bg: '#00A68B' }}
                            _active={{
                                bg: '#00A68B',
                                transform: 'scale(0.98)',
                            }}>Add FLARE</Button>
                        <Link href={""}>
                            <Text className="underline text-sm">What's the difference?</Text>
                        </Link>
                    </VStack>
                    <Grid className="grid-cols-2 gap-2 text-black text-[14px]">
                        <Box>Total staked</Box>
                        <Box className="text-right">241,951,557 FLARE</Box>
                        <Box>Total locked</Box>
                        <Box className="text-right">189,65,524 FLARE</Box>
                        <Box>Average lock duration</Box>
                        <Box className="text-right">41 weeks</Box>
                        <Box>Performance Fee</Box>
                        <Box className="text-right">0-2%</Box>
                    </Grid>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader className=" bg-white">FLARE TO LOCK</ModalHeader>
                <ModalCloseButton />
                <ModalBody className=" bg-white">
                    <Flex className="flex-col gap-2">
                        <Flex>
                            <Text className="grow text-[#5B7A8A] text-xs font-medium">
                                FLARE TO STAKE
                            </Text>
                            <Flex className="gap-1 items-center">
                                <Box
                                    bg={"darkgreen"}
                                    className="rounded-full w-4 h-4"
                                ></Box>
                                <Box className="font-bold text-sm">
                                    FLARE
                                </Box>
                            </Flex>
                        </Flex>
                        <Flex className="flex-col items-end bg-[#D2EEFF] rounded-lg gap-2 p-2">
                            <Text className="font-bold">20</Text>
                            <Text className="text-xs text-[#666666]">
                                -241,951,557 USD
                            </Text>
                        </Flex>
                        <Text className="text-right text-[#6E8A99] text-xs">
                            Balance: 20.2313131
                        </Text>
                        <RadioGroup
                            name="form-name"
                            className="grid grid-cols-4 gap-2 mt-2"
                        >
                            <RadioCard>20%</RadioCard>
                            <RadioCard>50%</RadioCard>
                            <RadioCard>75%</RadioCard>
                            <RadioCard>Max</RadioCard>
                        </RadioGroup>
                        <Text className="text-xs font-medium mt-4">
                            <Box as="span" color={"darkgreen"}>ADD</Box> DURATION
                        </Text>
                        <RadioGroup
                            name="form-name"
                            className="grid grid-cols-5 gap-2 mt-2"
                        >
                            <RadioCard>1W</RadioCard>
                            <RadioCard>5W</RadioCard>
                            <RadioCard>10W</RadioCard>
                            <RadioCard>15W</RadioCard>
                            <RadioCard>Max</RadioCard>
                        </RadioGroup>

                        <Flex className="flex-row items-center mt-4 gap-2">
                            <Box className="inline grow">
                                <Input variant='filled' placeholder='' bg={"#D2EEFF"} />
                            </Box>
                            <Text className="inline text-sm font-medium">Week</Text>
                        </Flex>

                        <Text className="text-xs font-medium mt-4">
                            <Box as="span" color={"darkgreen"}>LOCK</Box> OVERVIEW
                        </Text>

                        <Grid className="grid-cols-2 gap-2 text-black text-[14px] bg-[#D2EEFF] p-4" borderRadius={"7px"}>
                            <Box>FLARELOCKED TO BE LOCKED</Box>
                            <Box className="text-right">20.00-&lt;40.00</Box>
                            <Box>xxNFT x1 +25%</Box>
                            <Box className="text-right">30%</Box>
                            <Box>APR</Box>
                            <Box className="text-right">1.74%</Box>
                            <Box>DURATION</Box>
                            <Box className="text-right">1 weeks</Box>
                            <Box>YIELD BOOST</Box>
                            <Box className="text-right">1.38x</Box>
                            <Box>UNLOCK ON</Box>
                            <Box className="text-right">May 17th,2023 11:38 </Box>
                            <Box>EXPECTED ROI</Box>
                            <Box className="text-right">$0.05</Box>
                        </Grid>

                        <Button
                            size="lg"
                            bg="darkgreen"
                            color={"white"}
                            borderColor="darkgreen"
                            _hover={{ bg: "#00A68B" }}
                            _active={{
                                bg: "#00A68B",
                                transform: "scale(0.98)",
                            }}
                        >
                            Confirm
                        </Button>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    </>)
}

const Index = () => {
   
    return (<>
        <FramePage menu="staking">
            <Flex className="flex flex-col justify-center items-center pt-4 md:pt-0">
                <Box className="w-full flex flex-col gap-2 bg-[#EDF8FF] rounded-2xl p-4">
                    <Box className="flex flex-row gap-2 items-center">
                        <Box>
                            <Avatar bg={"#BEE1F4"} name=" " size={"lg"} />
                        </Box>
                        <Box className="flex flex-col gap-0">
                            <Text className="text-black font-bold text-base">Flare Staking</Text>
                            <Text className="text-[#6E8A99] text-xs">Collateralize assets to borrow liquidity.</Text>
                            <Text className="text-[#6E8A99] text-xs underline">Learn More</Text>
                        </Box>
                    </Box>
                    <Grid className="grid-cols-2 gap-2">
                        <Box className="text-black text-xl font-medium">816</Box>
                        <Box className="text-black text-xl font-medium">911</Box>
                        <Box className="text-[#6E8A99] text-xs">Total sked</Box>
                        <Box className="text-[#6E8A99] text-xs">Total reward</Box>
                    </Grid>
                </Box>

                <HStack className="w-full mt-4 mb-2">
                    <Box className="text-[24px] font-bold" color={"darkgreen"}>Vesting</Box>
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
                        <TabPanel px={0}>
                            <DepositsPanel />
                        </TabPanel>
                        <TabPanel px={0}>
                            <PositionPanel />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>
        </FramePage>
    </>)
}

export default Index