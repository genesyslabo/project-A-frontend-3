import { useEffect, useState } from "react";
import { ContractService } from "../../service/contractService";
import FlexibleBox from "./FlexibleBox";
import FlexibleLockBox from "./FlexibleLockBox";
import { useAccount, useSigner } from "wagmi";

const StakingButtons = () => {
    const { isConnected, address } = useAccount();
    const {data: signer} = useSigner();

    const [component, setComponent] = useState(<FlexibleBox />);
    
    const fetchData = async () => {
        const amount = await ContractService.userStakingAmount(address, signer);
        
        if (amount > 0) {
            setComponent(<FlexibleLockBox />);
        }
    };

    useEffect(() => {
        if (isConnected) {
            fetchData();
        }
        
    }, [isConnected]);

  return component;
}

export default StakingButtons