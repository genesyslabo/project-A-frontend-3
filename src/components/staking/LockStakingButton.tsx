import { Button } from "@chakra-ui/react"
import LockStakingModal from "./LockStakingModal"
import { useState } from "react"

const StakingButton: React.FC<{}> = () => {
    const [openModal, setOpenModal] = useState(false);

    return (<>
        <LockStakingModal openModal={openModal} />
        <Button
            size="lg"
            bg="darkgreen"
            color={"white"}
            fontSize={16}
            borderColor="darkgreen"
            bgImg={"linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)"}
            onClick={() => setOpenModal(true)}
            _hover={{ bgImg: "linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)" }}
            _active={{
                bgImg: "linear-gradient(135deg, #1AC1CE 0%, #00B3EB 100%)",
                transform: "scale(0.98)",
            }}
        >
            Staking
        </Button>
    </>)
}

export default StakingButton