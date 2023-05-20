import { Tab } from "@chakra-ui/react"

const CustomTab: React.FC<{ text: string, textSize?: string }> = (props) => {
    return (
        <Tab
            className={`text-[#6E8A99] ${props.textSize || '!text-lg'} font-bold`}
            paddingInlineStart={0}
            _active={{
                bg: 'transparent',
                transform: 'scale(0.95)',
                borderBottom: 0,
                borderColor: 'transparent',
                color: 'darkgreen'
            }}
            _selected={{ 
                color: 'darkgreen',
            }}
            _hover={{
                bg: 'transparent',
            }}
        >
            { props.text }
        </Tab>
    )
}

export default CustomTab