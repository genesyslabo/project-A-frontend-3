import { Button, Grid } from "@chakra-ui/react"
import LockExtendModal from "./LockExtendModal"
import { useState } from "react";
import LockAddStakingModal from "./LockAddStakingModal";

const AddFlareButtons: React.FC<{}> = () => {
    const [isExtendOpen, setExtendOpen] = useState(false);
    const [isAddFlareOpen, setAddFlareOpen] = useState(false);

    return (<>
        <LockExtendModal openModal={isExtendOpen} />
        <LockAddStakingModal openModal={isAddFlareOpen} />

        <Grid className="grid-cols-2 gap-2">
            <Button
                size="lg"
                bg="darkgreen"
                color={"white"}
                borderColor="darkgreen"
                fontSize={16}
                onClick={() => setAddFlareOpen(true)}
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
                onClick={() => setExtendOpen(true)}
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
    </>)
}

export default AddFlareButtons