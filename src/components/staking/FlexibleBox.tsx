import { useEffect, useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import Link from "next/link";
import StakingModal from "./FlexibleModal";
import { useAccount } from "wagmi";

const FlexibleBox = () => {
    const [isFlexibleOpen, setFlexibleOpen] = useState(false);
    const { isConnected } = useAccount();
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        setDisabled(!isConnected)
    }, [isConnected])

    return (<>
        <StakingModal openModal={isFlexibleOpen} onClose={() => setFlexibleOpen(false)} />

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
            disabled={disabled}
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
    </>)
}

export default FlexibleBox