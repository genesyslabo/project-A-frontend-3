import { Box, Button, Flex, Grid, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Text, useDisclosure, useToast } from "@chakra-ui/react"
import { BigNumber } from "ethers";
import React, { useEffect, useState } from "react"
import { flareUsdRate } from "../../common/constants";
import { ContractService } from "../../service/contractService";
import SmallButton from "../SmallButton";
import CustomToast, { ToastContent } from "../CustomToast";

const StakingModal: React.FC<{
    openModal: Boolean,
    onClose: Function
}> = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [balance, setBalance] = useState(0);
    const [sliderValue, setSliderValue] = useState(0)
    const [stakeValue, setStakeValue] = useState(0)
    const [usdValue, setUsdValue] = useState(0)
    const [inTransaction, setInTransaction] = useState(false);
    const [roi, setRoi] = useState(0)

    const toast = useToast()

    const handleSliderChange = (value) => {
        setSliderValue(value)
        
        try {
            const v = BigNumber.from(balance + "").mul(value).div(100);
            setStakeValue(v.toNumber())
        } catch (err) {
            toast({
                position: 'top-right',
                render: () => (<CustomToast status={"error"} 
                    title={"Error!"} 
                    description={err} />)
            })
        }
    }

    const handleInputChange = (event) => {
        const value = event.target.value
        if (value > balance) {
            setStakeValue(balance)
            setSliderValue(100)
        } else {
            setStakeValue(value)
            try {
                const v = BigNumber.from(value + "").mul(100).div(BigNumber.from(balance + ""))
                setSliderValue(+(parseFloat(v.toString()).toFixed(0)))
            } catch (err) {
                toast({
                    position: 'top-right',
                    render: () => (<CustomToast status={"error"} 
                        title={"Error!"} 
                        description={err} />)
                  })
            }
            
        }
    }

    const staking = async () => {
        toast({
            position: 'top-right',
            duration: 10000000,
            render: () => (<CustomToast status={"info"} 
                title={"Transacting!"} 
                description={"The transaction is in progress, please waiting..."} />)
          })
        setInTransaction(true)
        
        try {
            const result = await ContractService.enterStaking(stakeValue);
            console.log(result)
            closeModal();
            toast({
                position: 'top-right',
                render: () => (<CustomToast status={"success"} 
                    title={"Staked!"} 
                    description={"Your funds have been staked in the pool."} />)
              })
            location.reload();
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
            setInTransaction(false)
        }
    }

    const calcRoi = async () => {
        if (!stakeValue) return;
        const result = await ContractService.stakingROI(stakeValue);
        setRoi(result);
    }

    const closeModal = () => {
        onClose()
        props.onClose()
    }

    useEffect(() => {
        setUsdValue(flareUsdRate * stakeValue)
        calcRoi()
    }, [stakeValue])


    useEffect(() => {
        const fetchBalance = async () => {
            const result = await ContractService.balanceOf();
            setBalance(parseInt(result + ""));
        };

        fetchBalance();
    }, []);

    useEffect(() => {
        if (props.openModal) {
            onOpen()
        } else {
            onClose()
        }
    }, [props.openModal])

    return (<>
        <Modal isOpen={isOpen} onClose={closeModal}>
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
                            <Input variant='unstyled' 
                                placeholder='' 
                                className="font-bold text-right"
                                value={stakeValue} 
                                onChange={handleInputChange} />
                            <Text className="text-xs text-[#666666]">
                                {usdValue} USD
                            </Text>
                        </Flex>
                        <Text className="text-right text-[#6E8A99] text-xs">
                            Balance: {balance} Flare
                        </Text>
                        <Box pt={6} pb={2}>
                            <Slider aria-label='slider-ex-6' value={sliderValue} onChange={handleSliderChange}>
                                <SliderMark
                                    value={sliderValue}
                                    textAlign='center'
                                    bg='darkgreen'
                                    color='white'
                                    mt='-10'
                                    ml='-5'
                                    w='12'
                                    >
                                {sliderValue}%
                                </SliderMark>

                                <SliderTrack bg={"lightgreen"}>
                                    <SliderFilledTrack bg={"darkgreen"} />
                                </SliderTrack>

                                <SliderThumb boxSize={6}>
                                    <Box color='tomato' />
                                </SliderThumb>
                            </Slider>
                        </Box>
                        <Grid className="grid-cols-4 gap-2 mt-2">
                            <SmallButton text="25%" onClick={() => handleSliderChange(25)} />
                            <SmallButton text="50%" onClick={() => handleSliderChange(50)} />
                            <SmallButton text="75%" onClick={() => handleSliderChange(75)} />
                            <SmallButton text="Max" onClick={() => handleSliderChange(100)} />
                        </Grid>
                        <Flex className="flex-row">
                            <Flex className="flex-col gap-2 grow text-xs text-[#676768]">
                                <Text>xxNFT x1 +25% &gt;</Text>
                                <Text>Annual ROI at current rates;</Text>
                            </Flex>
                            <Flex className="items-center font-medium text-sm">
                               ${roi}
                            </Flex>
                        </Flex>

                        <Button
                            size="lg"
                            bg="darkgreen"
                            color={"white"}
                            borderColor="darkgreen"
                            bgImg={"linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)"}
                            onClick={staking}
                            disabled={!stakeValue || stakeValue <= 0 || inTransaction }
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
                            Get Flare
                        </Button>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    </>)
}

export default StakingModal