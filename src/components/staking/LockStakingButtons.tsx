import { useEffect, useState } from "react";
import { ContractService } from "../../service/contractService";
import StakingButton from "./LockStakingButton";
import AddFlareButtons from "./AddFlareButtons";
import LockUnstakingButton from "./LockUnstakingButton";

const LockStakingButtons = () => {
    const [component, setComponent] = useState(<StakingButton />);

    useEffect(() => {
        const fetchData = async () => {
            const amount = await ContractService.userLockStakingAmount();
            console.log('lock staking amount', amount)
            if (amount > 0) {
                const times = await ContractService.userLockStakingTime();
                if (times[2] > times[1]) {
                    setComponent(<AddFlareButtons />);
                } else {
                    setComponent(<LockUnstakingButton />);
                }
            } else {
                setComponent(<StakingButton />);
            }
        };

        fetchData();
    }, []);

  return component;
}

export default LockStakingButtons