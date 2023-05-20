import { Box, Grid, HStack, useRadio, useRadioGroup } from "@chakra-ui/react"


// 1. Create a component that consumes the `useRadio` hook
export const RadioCard = (props) => {
    const { getInputProps, getCheckboxProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()
  
    return (
      <Box as='label' className="items-center justify-center font-bold">
        <input {...input} />
        <Box
          {...checkbox}
          className="flex items-center justify-center rounded-xl"
          cursor='pointer'
          bg={"#CFF8FF"}
          color={"darkgreen"}
          _checked={{
            bg: 'darkgreen',
            color: 'white',
            boxShadow: '0px 1.88724px 0px #007200',
            borderRadius: '66px',
            borderColor: 'darkgreen',
          }}
        >
          {props.children}
        </Box>
      </Box>
    )
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
export const RadioGroup:React.FC<{options: Array<any>, onChange: Function, value: string|number}> = (props) => {
    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'framework',
        defaultValue: props.value,
        onChange: (event) => { props.onChange(event) },
    })

    const group = getRootProps()

    return (
        <Grid {...group} 
            bgColor={"#10141C"} 
            borderRadius={66} 
            color={"darkgreen"} 
            fontSize={{ sm: 12, md: 18 }}
            px={1}>
            {props.options.map((value) => {
                const radio = getRadioProps({ value })
                return (
                <RadioCard key={value} value={value} {...radio}>
                    {value}
                </RadioCard>
                )
            })}
        </Grid>
    )
}