import {Header} from "../components/Header";
import React, { PropsWithChildren } from "react";
import 'react-reflex/styles.css'
import {  Container, Flex } from "@chakra-ui/react";
import { Footer } from "./Footer";


export const FramePage: React.FC<PropsWithChildren<{
    menu?: string
}>> = (
    props
) => {
    return (<>
            <Flex className="w-full min-h-screen flex flex-col gap-0">
                <Header />
                <Container 
                    mb={20} 
                    className="w-full !max-w-full px-8 mt-24" 
                    h={"100%"} 
                    minH={{ sm: "80%", md: "100vh" }}
                    >
                    { props.children }
                </Container>
                <Footer />
            </Flex>
        </>)
}