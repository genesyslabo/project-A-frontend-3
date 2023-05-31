import { Accordion, Avatar, Box, Image, Flex, Grid, HStack, Spacer, Text, useBreakpointValue} from "@chakra-ui/react"
import { FramePage } from "../components/FramePage"
import React, { useState } from 'react';
import { ContractService } from '../service/contractService';

const Upper = () => {
  const height = useBreakpointValue({ base: "160px", md: "200px" })
  const p1Height = useBreakpointValue({ base: "80px", md: "140px" })
  const p1Bottom = useBreakpointValue({ base: "130px", md: "80px" })
  const p2Hight = useBreakpointValue({ base: "100px", md: "160px" })
  const p2Bottom = useBreakpointValue({ base: "160px", md: "120px" })
  const t1Bottom = useBreakpointValue({ base: "80px", md: "35px" })

  return (
    <Box position="relative" h="320px" bg="black">
      <Image
        src="/assets/images/marketplace-background.png"
        objectFit="cover"
        w="full"
        h={height}
        position="absolute"
      />
      <Image
        src="/assets/images/marketplace-person1.png"
        position="absolute"
        left="0"
        bottom={p1Bottom}
        h={p1Height}
      />
      <Flex position="absolute" right="0" bottom={p2Bottom}>
        <Image
          src="/assets/images/marketplace-person2.png"
          h={p2Hight}
        />
        <Image
          src="/assets/images/marketplace-person3.png"
          h={p2Hight}
        />
      </Flex>
      <Text
        position="absolute"
        bottom={t1Bottom}
        color="white"
        fontSize="18px"
        p={3}
        fontWeight="bold"
      >
        Snoop Dogg
      </Text>
      <Text
        position="absolute"
        bottom="0px"
        color="#898B8E"
        fontSize="12px"
        fontWeight="normal"
        p={3}
      >
        Accesss to Snoop Dogg lifestyle: attend Snoop's parties, get access to exclusive NFTs, and enjoy priceless experiences.
      </Text>
    </Box>
  );
};

const Offers = () => {
    return (
        <>
        </>
    );
}

const MarketPlace = () => {

    return (<>
        <FramePage menu="marketplace">
            <Upper />
            <Offers />
        </FramePage>
    </>)
}

export default MarketPlace
