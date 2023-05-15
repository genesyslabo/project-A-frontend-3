import { Avatar, AvatarBadge, Box, Circle, Flex, Grid, Image, Text } from "@chakra-ui/react"
import { FramePage } from "../components/FramePage"
import React from "react"


const Airdrop = () => {
   
    return (<>
        <FramePage menu="airdrop">
            <Flex className="flex flex-col justify-center items-center pt-4 gap-6">
                <Flex color={"darkgreen"} className="w-full text-2xl font-medium items-start">Flare claim check</Flex>

                <Flex className="w-full flex-col gap-2 bg-[#EDF8FF] rounded-2xl p-[2px]">
                    <Flex className="flex-col md:flex-row gap-8 p-4 bg-[#e1f3fe] rounded-t-2xl">
                        <Flex className="flex-col gap-2 grow">
                            <Text className="text-[#6E8A99] text-sm font-bold">
                                ACCOUNT
                            </Text>
                            <Text className="text-black text-base">
                                0x7e8a2Af0335c9BB45664Ad1bd83163F7E3
                            </Text>
                        </Flex>
                        <Flex className="flex-col gap-2">
                            <Text className="text-[#6E8A99] text-sm font-bold">
                                BALANCE
                            </Text>
                            <Flex className="flex-row items-center text-black text-base">
                                0 APE 
                                <Circle size='16px' bg='#02715F' color='white' className="ml-1" />
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex className="items-center text-base text-black p-3 pb-8">
                        Tokens are currently not claimable.
                    </Flex>
                </Flex>

                <Flex className="flex-col md:flex-row items-center text-[#6E8A99] text-xs gap-2">
                    <Text className="font-medium">VERIFIED SMART CONTRACT ADDRESS:</Text>
                    <Text className="">0x025C6da5BD0e6A5dd1350fda9e3B6a614B205a1F</Text>
                </Flex>

                <Flex className="flex-col gap-2">
                    <Flex color={"darkgreen"} className="w-full text-2xl font-medium items-start">NFT claim check</Flex>

                    <Text className="text-base text-[#666666]">
                        Enter the Token ID to see if a Bored Ape, Mutant Ape, or companion Kennel Club NFT is eligible for a one-time claim of ApeCoin.
                    </Text>

                    <Flex className="items-center text-base text-black p-3 pb-8 bg-[#EDF8FF] rounded-2xl">
                        Tokens are currently not claimable.
                    </Flex>

                    <Text className="text-xs text-[#6E8A99]">
                    Please note: this checker updates in real time as tokens are claimed. If you are purchasing a Bored Ape, Mutant, or Kennel Club NFT on the secondary market, keep in mind that it’s possible for someone to claim immediately after you have checked, making the Bored Ape, Mutant Ape, or Kennel Club NFT no longer eligible.F
                    </Text>
                </Flex>
            </Flex>
        </FramePage>
    </>)
}

export default Airdrop