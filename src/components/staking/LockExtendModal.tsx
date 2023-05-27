import { Box, Button, Flex, Grid, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SmallButton from "../SmallButton";
import { ContractService } from "../../service/contractService";
import CustomToast from "../CustomToast";
import { LockStakingFutureAPR } from "../LockStakingAPR";


const LockExtendModal: React.FC<{
    openModal: Boolean
}> = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [weekValue, setWeekValue] = useState(1)
    const [inTransaction, setInTransaction] = useState(false);
    const [amount, setAmount] = useState(0);

    const [unlockOn, setUnlockOn] = useState("")

    const toast = useToast()

    const lockStaking = async () => {
        toast({
            position: 'top-right',
            duration: 1000000,
            render: () => (<CustomToast status={"info"} 
                title={"Transactioning!"} 
                description={"The transaction is in progress, please waiting..."} />)
          })
        
        setInTransaction(true)
        try {
            
            const result = await ContractService.reEnterLockStaking(amount, weekValue);
            console.log(result)
            onClose();
            toast({
                position: 'top-right',
                render: () => (<CustomToast status={"success"} 
                    title={"Staked!"} 
                    description={"Your funds have been staked in the pool."} />)
              })
        } catch(err) {
            console.log('staking', err);
            toast({
                position: 'top-right',
                render: () => (<CustomToast status={"error"} 
                    title={"Error"} 
                    description={"There has some issue happened."} />)
              })
        } finally {
            toast.closeAll();
            setInTransaction(false);
        }
    }

    useEffect(() => {
        const currentDate = new Date();

        const weeksLater = new Date(currentDate.getTime() + weekValue * 7 * 24 * 60 * 60 * 1000);

        console.log(weeksLater);
        setUnlockOn(weeksLater.toLocaleString())
    }, [weekValue])

    useEffect(() => {
        const fetchData = async () => {
            const result = await ContractService.userLockStakingAmount();
            setAmount(result)
        }

        fetchData()
    }, [])

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
                <ModalHeader className=" bg-white">Extend Lock</ModalHeader>
                <ModalCloseButton />
                <ModalBody className=" bg-white">
                    <Flex className="flex-col gap-2">
                        <Flex>
                            <Text className="grow text-[#5B7A8A] text-xs font-medium">
                                ADD FLARE TO LOCK
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
                        <Text className="text-xs font-medium mt-4">
                            <Box as="span" color={"darkgreen"}>ADD</Box> DURATION
                        </Text>
                        <Grid className="grid-cols-5 gap-2 mt-2">
                            <SmallButton text="1W" onClick={() => setWeekValue(1)} />
                            <SmallButton text="5W" onClick={() => setWeekValue(5)} />
                            <SmallButton text="10W" onClick={() => setWeekValue(10)} />
                            <SmallButton text="15W" onClick={() => setWeekValue(15)} />
                            <SmallButton text="Max" onClick={() => setWeekValue(52)} />
                        </Grid>

                        <Flex className="flex-row items-center mt-4 gap-2">
                            <Box className="inline grow">
                                <Input variant='filled' placeholder='' bg={"#ECFDFF"} 
                                    className="font-bold text-right"
                                    value={weekValue} onChange={(event) => setWeekValue(parseInt(event.target.value))} />
                            </Box>
                            <Text className="inline text-sm font-medium">Week</Text>
                        </Flex>

                        <Text className="text-xs font-medium mt-4">
                            <Box as="span" color={"darkgreen"}>LOCK</Box> OVERVIEW
                        </Text>

                        <Grid className="grid-cols-2 gap-2 text-[12px] font-medium bg-[#ECFDFF] p-4"
                            borderRadius={"7px"} color={"lightfont"}>
                            <Box>FLARELOCKED TO BE LOCKED</Box>
                            <Box className="text-right text-black text-base">0.00-&gt;0.00</Box>
                            <Box>APR</Box>
                            <Box className="text-right text-black text-base"><LockStakingFutureAPR amount={amount} week={weekValue} /></Box>
                            <Box>DURATION</Box>
                            <Box className="text-right text-black text-base">{weekValue} week{weekValue > 1 ? 's':''}</Box>
                            <Box>YIELD BOOST</Box>
                            <Box className="text-right text-black text-base">1.38x</Box>
                            <Box>UNLOCK ON</Box>
                            <Box className="text-right text-black text-base">{unlockOn} </Box>
                            <Box>EXPECTED ROI</Box>
                            <Box className="text-right text-black text-base">$0.05</Box>
                        </Grid>

                        <Button
                            size="lg"
                            bg="darkgreen"
                            color={"white"}
                            borderColor="darkgreen"
                            bgImg={"linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)"}
                            onClick={lockStaking}
                            disabled={!weekValue || weekValue <= 0 || weekValue >= 52 || inTransaction }
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

export default LockExtendModal