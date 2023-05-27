import { Box } from "@chakra-ui/react"

const SmallButton:React.FC<{text: string, onClick: Function}> = (props) => {

    return (
        <Box as='label' className="items-center justify-center font-bold">
            <Box
            className="flex items-center justify-center rounded-xl"
            cursor='pointer'
            bg={"#CFF8FF"}
            color={"darkgreen"}
            onClick={() => props.onClick()}
            >
            {props.text}
            </Box>
      </Box>
    )
}

export default SmallButton