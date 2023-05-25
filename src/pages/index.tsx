import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, AvatarBadge, Box, Button, Flex, Grid, HStack, IconButton, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, RadioGroup, Spacer, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Tag, TagLabel, TagLeftIcon, Text, VStack, useDisclosure, useToast } from "@chakra-ui/react"
import { LockIcon, MinusIcon, SmallAddIcon } from '@chakra-ui/icons'
import { FramePage } from "../components/FramePage"
import { StakingAPR } from "../components/StakingAPR"
import { LockStakingCurrentAPR, LockStakingFutureAPR } from "../components/LockStakingAPR"
import { StakingAmount } from "../components/StakingAmount"
import { LockStakingAmount } from "../components/LockStakingAmount"
import { LockStakingTime } from "../components/LockStakingTime"
import { LockStaking } from "../components/LockStaking"
import Staking from "../components/Staking"
import { Balance } from "../components/Balance"
import { Allowance } from "../components/Allowance"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { RadioCard } from "../components/CustomRadio"

// const CustomSwitchTab: React.FC<{ text: string }> = (props) => {
//     return (<>
//         <Tab
//             className={"text-[#20B4CA] bg-white px-4 text-center font-medium text-base"}
//             _active={{
//                 bg: 'darkgreen',
//                 transform: 'scale(0.95)',
//                 borderBottom: 0,
//                 color: 'white'
//             }}
//             _selected={{
//                 color: 'white',
//                 bg: 'darkgreen'
//             }}
//             _hover={{
//                 color: '#9BDCFF'
//             }}>
//             {props.text}
//         </Tab>
//     </>)
// }

const Flexible: React.FC<{
    openModal: Boolean
}> = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        if (props.openModal) {
            onOpen()
        } else {
            onClose()
        }
    }, [props.openModal])

    return (<>
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
                        <Flex className="flex-col items-end bg-[#CFF8FF] rounded-lg gap-2 p-2">
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
                            bgImg={"linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)"}
                            _hover={{ bgImg: "linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)" }}
                            _active={{
                                bgImg: "linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)",
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
    </>)
}

const FlareToLock: React.FC<{
    openModal: Boolean
}> = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    useEffect(() => {
        if (props.openModal) {
            onOpen()
        } else {
            onClose()
        }
    }, [props.openModal])

    return (<>
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
                        <Flex className="flex-col items-end bg-[#ECFDFF] rounded-lg gap-2 p-2">
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
                                <Input variant='filled' placeholder='' bg={"#ECFDFF"} />
                            </Box>
                            <Text className="inline text-sm font-medium">Week</Text>
                        </Flex>

                        <Text className="text-xs font-medium mt-4">
                            <Box as="span" color={"darkgreen"}>LOCK</Box> OVERVIEW
                        </Text>

                        <Grid className="grid-cols-2 gap-2 text-[12px] font-medium bg-[#ECFDFF] p-4"
                            borderRadius={"7px"} color={"lightfont"}>
                            <Box>FLARELOCKED TO BE LOCKED</Box>
                            <Box className="text-right text-black text-base">20.00-&gt;40.00</Box>
                            <Box>xxNFT x1 +25%</Box>
                            <Box className="text-right text-black text-base">30%</Box>
                            <Box>APR</Box>
                            <Box className="text-right text-black text-base">1.74%</Box>
                            <Box>DURATION</Box>
                            <Box className="text-right text-black text-base">1 weeks</Box>
                            <Box>YIELD BOOST</Box>
                            <Box className="text-right text-black text-base">1.38x</Box>
                            <Box>UNLOCK ON</Box>
                            <Box className="text-right text-black text-base">May 17th,2023 11:38 </Box>
                            <Box>EXPECTED ROI</Box>
                            <Box className="text-right text-black text-base">$0.05</Box>
                        </Grid>

                        <Button
                            size="lg"
                            bg="darkgreen"
                            color={"white"}
                            borderColor="darkgreen"
                            bgImg={"linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)"}
                            _hover={{ bgImg: "linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)" }}
                            _active={{
                                bgImg: "linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)",
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

const DepositsPanel = () => {
    const [isFlexibleOpen, setFlexibleOpen] = useState(false);
    const [isFlareToLockOpen, setFlareToLockOpen] = useState(false);

    return (
        <>
            <Flexible openModal={isFlexibleOpen} />
            <FlareToLock openModal={isFlareToLockOpen} />

            <Accordion defaultIndex={[0]} allowMultiple className="w-full">

                <AccordionItem mt={4}>
                    <AccordionButton className="bg-white rounded-2xl">
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

                                <VStack className="grow justify-center" alignItems={"start"}>
                                    <Text className="text-[#1E1E1E] text-sm font-bold !mt-0">
                                        Flexible FLARE
                                    </Text>
                                </VStack>
                            </HStack>
                            <VStack alignItems={"start"}>
                                <Text className="text-[#6E8A99] text-xs font-medium">
                                    APR
                                </Text>
                                <StakingAPR />
                            </VStack>
                        </Flex>
                        <AccordionIcon color={"darkgreen"} fontSize={32} />
                    </AccordionButton>

                    <AccordionPanel
                        pb={4}
                        className="bg-[#ECFDFF] text-[#507589] rounded-b-2xl mt-2"
                    >
                        <Flex
                            border={"1px solid #96E6FF"}
                            borderRadius={"8px"}
                            p={"20px"}
                            my={"10px"}
                            className="flex-row justify-between"
                        >
                            <Flex className="flex-col">
                                <Text className="text-[#FE9D1C] text-sm font-medium">
                                    Your Balance
                                </Text>
                                <Balance />
                            </Flex>

                            <Flex className="flex-col">
                                <Text className="text-[#FE9D1C] text-sm font-medium">
                                    Your Allowance
                                </Text>
                                <Allowance />
                            </Flex>

                            <Flex className="flex-col">
                                <Text className="text-[#FE9D1C] text-sm font-medium">
                                    Your Amount
                                </Text>
                                <StakingAmount />
                            </Flex>

                        </Flex>
                        <Staking />
                    </AccordionPanel>
                </AccordionItem>

                {/* <AccordionItem>
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
                            <VStack className="!hidden md:!flex">
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
                                    20.65%
                                </Text>
                            </VStack>
                            <VStack className="!hidden md:!flex">
                                <Text className="text-[#6E8A99] text-[11px] font-medium whitespace-nowrap">
                                    Total staked
                                </Text>
                                <Text className="text-black text-[14px] font-medium !mt-0">
                                    241,951,557 FLARE
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
                        >
                            <Text className="mb-2 text-black font-medium text-sm">
                                <Box as="span" color={"#FE9D1C"}>
                                    STAKE
                                </Box>
                                FLARE
                            </Text>
                            <HStack className="items-stretch justify-between">
                                <VStack className="justify-start items-start">
                                    <Text className="text-black font-bold text-xl">
                                        20.0000
                                    </Text>
                                    <Text className="w-full font-medium text-xs text-left">
                                        ~50.98USD
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
                                        />

                                    <IconButton
                                        variant='outline'
                                        borderColor={"#20B4CA"}
                                        color={"#20B4CA"}
                                        aria-label='Call Sage'
                                        fontSize='20px'
                                        icon={<SmallAddIcon />}
                                        />
                                </HStack>
                            </HStack>
                        </VStack>
                        <Grid className="grid-cols-2 gap-4 md:gap-2 md:py-4 text-black text-[14px]">
                            <Box>Total staked</Box>
                            <Box className="text-right font-medium">
                                241,951,557 FLARE
                            </Box>
                            <Box>Total locked</Box>
                            <Box className="text-right font-medium">
                                189,65,524 FLARE
                            </Box>
                            <Box>Average lock duration</Box>
                            <Box className="text-right font-medium">
                                41 weeks
                            </Box>
                            <Box>Performance Fee</Box>
                            <Box className="text-right font-medium">0-2%</Box>
                        </Grid>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem mt={4}>
                    <AccordionButton className="!bg-white rounded-2xl">
                        <Flex className="w-full flex-row items-center justify-between gap-4">
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
                                    <Text className="text-[#FE9D1C] text-[10px] font-medium">
                                        locked
                                    </Text>
                                    <Text className="text-black font-bold text-sm !mt-0">
                                        stake FLARE
                                    </Text>
                                    <Text className="text-[#6E8A99] text-[10px] !mt-0">
                                        Stake, Earn-And more!
                                    </Text>
                                </VStack>
                            </HStack>

                            <VStack className="text-left" alignItems={"start"}>
                                <Text className="text-[#6E8A99] text-xs font-medium">
                                    APR
                                </Text>
                                <LockStakingCurrentAPR />
                            </VStack>

                            <VStack className="!hidden md:!flex">
                                <Text className="text-[#6E8A99] text-[11px] font-medium whitespace-nowrap">
                                    Total staked
                                </Text>
                                <LockStakingAmount />
                            </VStack>
                        </Flex>
                        <AccordionIcon color={"darkgreen"} fontSize={32} />
                    </AccordionButton>

                    <AccordionPanel
                        pb={4}
                        className="bg-[#ECFDFF] text-[#507589] rounded-b-2xl mt-2"
                    >
                        <Box className="flex flex-row gap-2 items-center mt-2">
                            <Text
                                color={"#FE9D1C"}
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
                        <Flex className="flex-col md:flex-row md:gap-4">
                            <Grid className="grid-cols-2 gap-4 md:gap-0 md:py-4 items-center text-black text-[14px] !hidden md:!grid">
                                <Box>Total locked</Box>
                                <Box className="text-right font-medium">
                                    189,65,524 FLARE
                                </Box>
                                <Box>Average lock duration</Box>
                                <Box className="text-right font-medium">
                                    41 weeks
                                </Box>
                                <Box>Performance Fee</Box>
                                <Box className="text-right font-medium">0-2%</Box>
                            </Grid>
                            <Grid
                                border={"1px solid #96E6FF"}
                                borderRadius={"8px"}
                                p={"20px"}
                                my={"20px"}
                                className="grid-cols-2"
                            >
                                <Text className="text-[#FE9D1C] font-medium text-sm">
                                    RECENT FLARE PROFIT
                                </Text>
                                <Text className="text-[#FE9D1C] font-medium text-sm">
                                    YIELD BOOST
                                </Text>
                                <Text className="text-black font-bold text-xl">
                                    0.0000
                                </Text>
                                <Text className="text-black font-bold text-xl">
                                    1.38x
                                </Text>
                                <Text className="font-medium text-xs">
                                    ~0.00USD
                                </Text>
                                <Text className="font-medium text-xs">
                                    Lock for 1 week
                                </Text>
                            </Grid>
                            <Flex
                                border={"1px solid #96E6FF"}
                                borderRadius={"8px"}
                                p={"20px"}
                                my={"20px"}
                                className="flex-col gap-4"
                            >
                                <Grid className="grid-cols-2">
                                    <Text className="font-medium text-sm">
                                        <span className="text-[#FE9D1C]">
                                            FLARE
                                        </span>
                                        LOCKED
                                    </Text>
                                    <Text className=" font-medium text-sm">
                                        ULNLOCJS IN
                                    </Text>
                                    <Text className="text-black font-bold text-xl">
                                        20.0000
                                    </Text>
                                    <LockStakingTime />
                                    <Text className="font-medium text-xs">
                                        ~50.98USD
                                    </Text>
                                    <Text className="font-medium text-xs">
                                        On May 10,2023,11:38
                                    </Text>
                                </Grid>
                                <Button
                                    size="lg"
                                    bg="darkgreen"
                                    color={"white"}
                                    fontSize={16}
                                    borderColor="darkgreen"
                                    bgImg={"linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)"}
                                    _hover={{ bgImg: "linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)" }}
                                    _active={{
                                        bgImg: "linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)",
                                        transform: "scale(0.98)",
                                    }}
                                >
                                    Staking
                                </Button>
                            </Flex>
                        </Flex>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem mt={4}>
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
                        className="bg-[#ECFDFF] text-[#507589] rounded-b-2xl mt-2"
                    >
                        <Grid className="grid-cols-2 gap-2 mt-4">
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
                        >
                            <Text className="mb-2 text-black font-medium text-sm">
                                <Box as="span" color={"#FE9D1C"}>
                                    STAKE
                                </Box>{" "}
                                FLARE
                            </Text>
                            <Button
                                size="lg"
                                bg="darkgreen"
                                color={"white"}
                                borderColor="darkgreen"
                                bgImg={"linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)"}
                                _hover={{ bgImg: "linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)" }}
                                _active={{
                                    bgImg: "linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)",
                                    transform: "scale(0.98)",
                                }}
                                onClick={() => setFlexibleOpen(true)}
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
                            <Box className="text-right font-medium">
                                241,951,557 FLARE
                            </Box>
                            <Box>Total locked</Box>
                            <Box className="text-right font-medium">
                                189,65,524 FLARE
                            </Box>
                            <Box>Average lock duration</Box>
                            <Box className="text-right font-medium">
                                41 weeks
                            </Box>
                            <Box>Performance Fee</Box>
                            <Box className="text-right font-medium">0-2%</Box>
                        </Grid>
                    </AccordionPanel>
                </AccordionItem>


                <AccordionItem mt={4}>
                    <AccordionButton className="!bg-white rounded-2xl">
                        <Flex className="w-full flex-row items-center justify-between gap-2">
                            <HStack>
                                <Avatar bg={"#20B4CA"} name=" ">
                                    <AvatarBadge boxSize='1.25em' bg='transparent' borderColor="transparent">
                                        <Image src="/assets/images/icon-cyclic.png" />
                                    </AvatarBadge>
                                </Avatar>
                                <VStack className="text-left !items-start">
                                    <Text className="text-black text-xs font-bold text-left">Flexible FLARE</Text>
                                    <Text className="!mt-0" color={"lightfont"} fontSize={"10px"}>Flexible staking on the side.</Text>
                                </VStack>
                            </HStack>
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

                    <AccordionPanel pb={4} className="bg-[#ECFDFF] text-[#507589] rounded-b-2xl text-sm font-medium mt-2">
                        <Grid className="grid-cols-2 gap-2 my-4">
                            <Box color={"lightfont"}>Flexible APY</Box>
                            <Box className="text-right text-black">0.96%</Box>
                            <Box color={"lightfont"}>Locked APY</Box>
                            <Box className="text-right text-black">Up to 20.96%</Box>
                        </Grid>

                        <VStack border={"1px solid #96E6FF"} borderRadius={"10px"} p={"20px"} my={"20px"} gap={2} align={"left"}>
                            <Text className="mb-2 text-sm font-medium" color={"#FE9D1C"}>RECENT FLARE PROFIT</Text>
                            <Flex className="flex-row items-start gap-8">
                                <Flex className="flex-col">
                                    <Box className="text-black text-xl">0</Box>
                                    <Box className="whitespace-nowrap">~ 0USD</Box>
                                </Flex>
                                <Box className="text-black text-sm grow underline">0.1% unstaking fee if withdraw within 72h</Box>
                            </Flex>
                        </VStack>
                        <VStack border={"1px solid #96E6FF"} borderRadius={"10px"} p={"20px"} my={"20px"} gap={2} align={"left"}>
                            <Text className="mb-2 text-black font-medium"><Box as="span" color={"#FE9D1C"}>STAKE</Box> FLARE</Text>
                            <Button
                                size='lg'
                                bg='darkgreen'
                                color={"white"}
                                borderColor='darkgreen'
                                bgImg={"linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)"}
                                _hover={{ bgImg: "linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)" }}
                                _active={{
                                    bgImg: "linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)",
                                    transform: 'scale(0.98)',
                                }}
                                onClick={() => setFlareToLockOpen(true)}
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
                    <AccordionButton className="bg-white rounded-2xl">
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

                                <VStack className="grow justify-center" alignItems={"start"}>
                                    <Text className="text-[#FE9D1C] font-medium text-[10px] !mt-0">locked</Text>
                                    <Text className="text-[#1E1E1E] text-sm font-bold !mt-0">
                                        stake FLARE
                                    </Text>
                                    <Text className="text-[#6E8A99] text-[10px] !mt-0">
                                        Stake, Earn-And more!
                                    </Text>
                                </VStack>
                            </HStack>
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
                        className="bg-[#ECFDFF] text-[#507589] rounded-b-2xl mt-2"
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
                            border={"1px solid #96E6FF"}
                            borderRadius={"8px"}
                            p={"20px"}
                            my={"10px"}
                            className="flex-row gap-2"
                        >
                            <Flex className="flex-col">
                                <Text className="text-[#FE9D1C] text-sm font-medium">
                                    RECENT FLARE PROFIT
                                </Text>
                                <Text className="text-black font-bold text-xl">
                                    0.0000
                                </Text>
                                <Text className="text-xs font-medium">~0.00USD</Text>
                            </Flex>

                            <Flex className="flex-col">
                                <Text className="text-[#FE9D1C] text-sm font-medium">
                                    YIELD BOOST
                                </Text>
                                <Text className="text-black font-bold text-xl">
                                    1.38x
                                </Text>
                                <Text className="text-xs font-medium">Lock for 1 week</Text>
                            </Flex>
                        </Flex>
                        <Flex
                            border={"1px solid #96E6FF"}
                            borderRadius={"8px"}
                            p={"20px"}
                            my={"20px"}
                            className="flex-col gap-4"
                        >
                            <Grid className="grid-cols-2">
                                <Text className="text-sm font-medium">
                                    <span className="text-[#FE9D1C]">
                                        FLARE
                                    </span>
                                    LOCKED
                                </Text>
                                <Text className="text-sm font-medium">ULNLOCJS IN</Text>
                                <Text className="text-black font-bold text-xl">
                                    20.0000
                                </Text>
                                <LockStakingTime />
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
                                    bgImg={"linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)"}
                                    _hover={{ bgImg: "linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)" }}
                                    _active={{
                                        bgImg: "linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)",
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
                                    bgImg={"linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)"}
                                    _hover={{ bgImg: "linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)" }}
                                    _active={{
                                        bgImg: "linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)",
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
                    <AccordionButton className="bg-white rounded-2xl">
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

                                <VStack className="grow justify-center" alignItems={"start"}>
                                    <Text className="text-[#FE9D1C] font-medium text-[10px] !mt-0">locked</Text>
                                    <Text className="text-[#1E1E1E] text-sm font-bold !mt-0">
                                        stake FLARE
                                    </Text>
                                    <Text className="text-[#6E8A99] text-[10px] !mt-0">
                                        Stake, Earn-And more!
                                    </Text>
                                </VStack>
                            </HStack>
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
                        className="bg-[#ECFDFF] text-[#507589] rounded-b-2xl mt-2"
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
                            border={"1px solid #96E6FF"}
                            borderRadius={"8px"}
                            p={"20px"}
                            my={"10px"}
                            className="flex-row gap-2"
                        >
                            <Flex className="flex-col">
                                <Text className="text-[#FE9D1C] text-sm font-medium">
                                    RECENT FLARE PROFIT
                                </Text>
                                <Text className="text-black font-bold text-xl">
                                    0.0000
                                </Text>
                                <Text className="text-xs font-medium">~0.00USD</Text>
                            </Flex>

                            <Flex className="flex-col">
                                <Text className="text-[#FE9D1C] text-sm font-medium">
                                    YIELD BOOST
                                </Text>
                                <Text className="text-black font-bold text-xl">
                                    1.38x
                                </Text>
                                <Text className="text-xs font-medium">Lock for 1 week</Text>
                            </Flex>
                        </Flex>
                        <Flex
                            border={"1px solid #96E6FF"}
                            borderRadius={"8px"}
                            p={"20px"}
                            my={"20px"}
                            className="flex-col gap-4"
                        >
                            <Grid className="grid-cols-2">
                                <Text className="text-sm font-medium">
                                    <span className="text-[#FE9D1C]">
                                        FLARE
                                    </span>
                                    LOCKED
                                </Text>
                                <Text className="text-sm font-medium">ULNLOCJS IN</Text>
                                <Text className="text-black font-bold text-xl">
                                    20.0000
                                </Text>
                                <LockStakingTime />
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
                                    bgImg={"linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)"}
                                    _hover={{ bgImg: "linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)" }}
                                    _active={{
                                        bgImg: "linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)",
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
                                    bgImg={"linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)"}
                                    _hover={{ bgImg: "linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)" }}
                                    _active={{
                                        bgImg: "linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)",
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
                    <AccordionButton className="bg-white rounded-2xl">
                        <Flex className="w-full flex-row items-center justify-between gap-2">
                            <HStack>
                                <Avatar bg={"#20B4CA"} name=" ">
                                    <AvatarBadge boxSize='1.25em' bg='transparent' borderColor="transparent">
                                        <Image src="/assets/images/icon-cyclic.png" />
                                    </AvatarBadge>
                                </Avatar>
                                <VStack className="text-left !items-start">
                                    <Text className="text-black text-xs font-bold text-left">Flexible FLARE</Text>
                                    <Text className="!mt-0" color={"lightfont"} fontSize={"10px"}>Flexible staking on the side.</Text>
                                </VStack>
                            </HStack>
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

                    <AccordionPanel pb={4} className="bg-[#ECFDFF] text-[#507589] rounded-b-2xl text-sm font-medium mt-2">
                        <Grid className="grid-cols-2 gap-2 my-4">
                            <Box color={"lightfont"}>Flexible APY</Box>
                            <Box className="text-right text-black">0.96%</Box>
                            <Box color={"lightfont"}>Locked APY</Box>
                            <Box className="text-right text-black">Up to 20.96%</Box>
                        </Grid>

                        <VStack border={"1px solid #96E6FF"} borderRadius={"10px"} p={"20px"} my={"20px"} gap={2} align={"left"}>
                            <Text className="mb-2 text-sm font-medium" color={"#FE9D1C"}>RECENT FLARE PROFIT</Text>
                            <Flex className="flex-row items-start gap-8">
                                <Flex className="flex-col">
                                    <Box className="text-black text-xl">0</Box>
                                    <Box className="whitespace-nowrap">~ 0USD</Box>
                                </Flex>
                                <Box className="text-black text-sm grow underline">0.1% unstaking fee if withdraw within 72h</Box>
                            </Flex>
                        </VStack>
                        <VStack border={"1px solid #96E6FF"} borderRadius={"10px"} p={"20px"} my={"20px"} gap={2} align={"left"}>
                            <Text className="mb-2 text-black font-medium"><Box as="span" color={"#FE9D1C"}>STAKE</Box> FLARE</Text>
                            <Button
                                size='lg'
                                bg='darkgreen'
                                color={"white"}
                                borderColor='darkgreen'
                                bgImg={"linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)"}
                                _hover={{ bgImg: "linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)" }}
                                _active={{
                                    bgImg: "linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)",
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
                </AccordionItem> */}
            </Accordion>

        </>
    );
}

const Index = () => {

    return (<>
        <FramePage menu="staking">
            <Flex className="flex flex-col justify-center items-center pt-4">
                <Box className="w-full flex flex-col gap-2 bg-white rounded-2xl p-4">
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