import { Box, Button, Flex, Grid, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, RadioGroup, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Text, useDisclosure, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RadioCard } from "../CustomRadio";
import SmallButton from "../SmallButton";
import { ContractService } from "../../service/contractService";
import { MinLockStakingAmount, flareUsdRate } from "../../common/constants";
import CustomToast from "../CustomToast";
import { BigNumber } from "ethers";
import { LockStakingFutureAPR } from "../LockStakingAPR";
import { useAccount, useSigner } from "wagmi";


const LockStakingModal: React.FC<{
    openModal: Boolean,
    onClose: Function
}> = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isConnected, address } = useAccount();
    const {data: signer} = useSigner();

    const [balance, setBalance] = useState(0);
    const [sliderValue, setSliderValue] = useState(0)
    const [stakeValue, setStakeValue] = useState(0)

    const [weekValue, setWeekValue] = useState(1)
    const [usdValue, setUsdValue] = useState(0)
    const [inTransaction, setInTransaction] = useState(false);
    const [maxWeeks, setMaxWeeks] = useState(52);
    const [minLockAmount, setMinLockAmount] = useState(0);

    const [unlockOn, setUnlockOn] = useState("")
    const [boost, setBoost] = useState(0);
    const [roi, setRoi] = useState(0)

    const toast = useToast()

    const handleSliderChange = (value) => {
        setSliderValue(value)
        
        const v = BigNumber.from(balance + "").mul(value).div(100);
        setStakeValue(v.toNumber())
    }

    const handleInputChange = (event) => {
        const value = event.target.value
        if (isNaN(value) || value == 0) {
            return;
        }
        if (value > balance) {
            setStakeValue(balance)
            setSliderValue(100)
        } else {
            setStakeValue(value)
            const v = BigNumber.from(value + "").mul(100).div(BigNumber.from(balance + ""))
            setSliderValue(+(parseFloat(v.toString()).toFixed(0)))
        }
    }

    const handleWeekInputChange = (event) => {
        const value = event.target.value
        if (isNaN(value) || value == 0) {
            return;
        }
        setWeekValue(parseInt(value))
    }

    const lockStaking = async () => {
        toast({
            position: 'top-right',
            duration: 1000000,
            render: () => (<CustomToast status={"info"} 
                title={"Transacting!"} 
                description={"The transaction is in progress, please waiting..."} />)
          })
        
        setInTransaction(true)

        // 60秒后刷新页面，目的是在手机上跳转后，有时候无法跳转回来，导致会一直显示交易中
        setTimeout(function() {
            location.reload();
        }, 60000);
        
        try {
            const result = await ContractService.enterLockStaking(stakeValue, weekValue, address, signer);
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
            setInTransaction(false);
        }
    }

    const calcBoost = async () => {
        if (!stakeValue) return;
        const result = await ContractService.calculateBoost(stakeValue, weekValue, address, signer);
        setBoost(result);
    }

    const calcRoi = async () => {
        if (!stakeValue || !weekValue) return;
        const result = await ContractService.lockStakingROI(stakeValue, weekValue, address, signer);
        setRoi(result);
    }

    const fetchBalance = async () => {
        const result = await ContractService.balanceOf(address, signer);
        setBalance(parseInt(result + ""));
    };
    
    const fetchMaxWeeks = async () => {
        const result = await ContractService.getMaxWeeks(signer);
        setMaxWeeks(result);
    };

    const fetchMinLockAmount = async () => {
        const result = await ContractService.getMinLockAmount(signer);
        setMinLockAmount(result);
        setStakeValue(result)
    };

    const closeModal = () => {
        onClose()
        props.onClose()
    }

    useEffect(() => {
        if (stakeValue < minLockAmount) {
            // setStakeValue(minLockAmount)
            // setSliderValue(1)
            toast({
                position: 'top-right',
                render: () => (<CustomToast status={"info"} 
                    title={"Tips!"} 
                    description={`The min lock amount is ${minLockAmount}`} />)
              })
            // return;
        }
        setUsdValue(flareUsdRate * stakeValue)
    }, [stakeValue])

    useEffect(() => {
        if (!weekValue) {
            setWeekValue(0)
            return;
        }
        if (weekValue > maxWeeks) {
            setWeekValue(maxWeeks);
            toast({
                position: 'top-right',
                render: () => (<CustomToast status={"info"} 
                    title={"Tips!"} 
                    description={`The max weeks is ${maxWeeks}`} />)
              })
            return;
        }
        const currentDate = new Date();

        const weeksLater = new Date(currentDate.getTime() + weekValue * 7 * 24 * 60 * 60 * 1000);

        setUnlockOn(weeksLater.toLocaleString())
    }, [weekValue])

    useEffect(() => {
        calcBoost()
        calcRoi()
    }, [weekValue, stakeValue])
    
    useEffect(() => {
        if (isConnected) {
            fetchBalance();

            fetchMaxWeeks();

            fetchMinLockAmount();
        }
    }, [isConnected]);

    useEffect(() => {
        if (props.openModal) {
            setWeekValue(0)
            setSliderValue(0)
            setStakeValue(0)
            onOpen()
        } else {
            onClose()
        }
    }, [props.openModal])

    return (<>
        <Modal isOpen={isOpen} onClose={closeModal}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader className=" bg-white">FLARE TO LOCK</ModalHeader>
                <ModalCloseButton />
                <ModalBody className=" bg-white h-[80vh] overflow-y-auto">
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
                            <Slider aria-label='slider-ex-6' value={sliderValue} onChange={handleSliderChange}
                                focusThumbOnChange={false}>
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
                        <Text className="text-xs font-medium mt-4">
                            <Box as="span" color={"darkgreen"}>ADD</Box> DURATION
                        </Text>
                        <Grid className="grid-cols-5 gap-2 mt-2">
                            <SmallButton text="1W" onClick={() => setWeekValue(1)} />
                            <SmallButton text="5W" onClick={() => setWeekValue(5)} />
                            <SmallButton text="10W" onClick={() => setWeekValue(10)} />
                            <SmallButton text="15W" onClick={() => setWeekValue(15)} />
                            <SmallButton text="Max" onClick={() => setWeekValue(maxWeeks)} />
                        </Grid>

                        <Flex className="flex-row items-center mt-4 gap-2">
                            <Box className="inline grow">
                                <Input variant='filled' placeholder='' bg={"#ECFDFF"} 
                                    className="font-bold text-right"
                                    value={weekValue} onChange={handleWeekInputChange} />
                            </Box>
                            <Text className="inline text-sm font-medium">Week</Text>
                        </Flex>

                        <Text className="text-xs font-medium mt-4">
                            <Box as="span" color={"darkgreen"}>LOCK</Box> OVERVIEW
                        </Text>

                        <Grid className="grid-cols-2 gap-2 text-[12px] font-medium bg-[#ECFDFF] p-4"
                            borderRadius={"7px"} color={"lightfont"}>
                            <Box>FLARELOCKED TO BE LOCKED</Box>
                            <Box className="text-right text-black text-base">0.00-&gt;{+parseFloat(stakeValue + "").toFixed(2)}</Box>
                            <Box>APR</Box>
                            <Box className="text-right text-black text-base"><LockStakingFutureAPR amount={stakeValue} week={weekValue} /></Box>
                            <Box>DURATION</Box>
                            <Box className="text-right text-black text-base">{weekValue} week{weekValue > 1 ? 's':''}</Box>
                            <Box>YIELD BOOST</Box>
                            <Box className="text-right text-black text-base">{boost}x</Box>
                            <Box>UNLOCK ON</Box>
                            <Box className="text-right text-black text-base">{unlockOn}</Box>
                            <Box>EXPECTED ROI</Box>
                            <Box className="text-right text-black text-base">${roi}</Box>
                        </Grid>

                        <Button
                            size="lg"
                            bg="darkgreen"
                            color={"white"}
                            borderColor="darkgreen"
                            bgImg={"linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)"}
                            onClick={lockStaking}
                            disabled={!stakeValue || stakeValue < minLockAmount || stakeValue > balance || !weekValue || weekValue <= 0 || weekValue > maxWeeks || inTransaction }
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

export default LockStakingModal