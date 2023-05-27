import { CheckIcon, InfoOutlineIcon, NotAllowedIcon, WarningTwoIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";

export const ToastContent = (props) => {
    return {
        position: 'top-right',
        render: () => (<CustomToast status={props.status || "info"} 
            title={props.title || "Tips"} 
            description={props.description || ""} />)
      }
}

const CustomToast = (props) => {
    const bgColor = {
        'success': "darkgreen",
        'error': '#d33227',
        'warning': 'orange',
        'info': '#74DEFF'
    }

    const toastIcon = () => {
        switch(props.status) {
            case 'success':
                return (<CheckIcon />)
            case 'error':
                return (<NotAllowedIcon />)
            case 'warning':
                return (<WarningTwoIcon />)
            case 'info':
                return (<InfoOutlineIcon />)
        }
        return (<CheckIcon />)
    }

    return (
      <Flex
        bg={"white"}
        color="black"
        p={0}
        borderRadius="md"
        boxShadow="md"
        className="flex-row min-h-[60px] gap-2"
      >
        <Flex bg={bgColor[props.status]} className="justify-center items-center basis-2/12 text-white">
            { toastIcon() }
        </Flex>
        <Flex className="flex-col gap-2 basis-10/12 grow justify-center">
            <Text className="text-sm font-bold">{props.title}</Text>
            <Text className="text-[#6F8B9A] font-medium text-xs">{props.description}</Text>
        </Flex>
      </Flex>
    );
  };
  
export default CustomToast