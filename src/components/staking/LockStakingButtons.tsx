import { useEffect, useState } from "react";
import { ContractService } from "../../service/contractService";
import StakingButton from "./LockStakingButton";
import AddFlareButtons from "./AddFlareButtons";
import LockUnstakingButton from "./LockUnstakingButton";
import { useAccount, useSigner } from "wagmi";

const LockStakingButtons = () => {
    const { isConnected, address } = useAccount();
    const {data: signer} = useSigner();
    const [component, setComponent] = useState(<StakingButton />);
    
    const fetchData = async () => {
        const amount = await ContractService.userLockStakingAmount(address, signer);
        
        if (amount > 0) {
            const times = await ContractService.userLockStakingTime(address, signer);
            if (times[2] > times[1]) {
                setComponent(<AddFlareButtons />);
            } else {
                setComponent(<LockUnstakingButton />);
            }
        } else {
            setComponent(<StakingButton />);
        }
    };

    useEffect(() => {

        if (isConnected && null != signer) {
            fetchData();
        }
        
    }, [isConnected, signer]);

  return component;
}

export default LockStakingButtons