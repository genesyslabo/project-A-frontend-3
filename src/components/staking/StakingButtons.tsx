import { useEffect, useState } from "react";
import { ContractService } from "../../service/contractService";
import FlexibleBox from "./FlexibleBox";
import FlexibleLockBox from "./FlexibleLockBox";

const StakingButtons = () => {
    const [component, setComponent] = useState(<FlexibleBox />);
    
    useEffect(() => {
        const fetchData = async () => {
            const amount = await ContractService.userStakingAmount();
            console.log('lock staking amount', amount)
            if (amount > 0) {
                setComponent(<FlexibleLockBox />);
            }
        };

        fetchData();
    }, []);

  return component;
}

export default StakingButtons