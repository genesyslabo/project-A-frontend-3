import React, { useEffect, useState } from 'react';
import {Avatar, Box, Button, Flex, Image, Spacer, TabIndicator, TabList, Tabs, useDisclosure} from '@chakra-ui/react';
import Link from 'next/link';
import { CustomConnectButton } from './CustomConnectButton';
import CustomTab from './CustomTab';
import { useRouter } from 'next/router';

export function Header(props) {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const router = useRouter();
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabsChange = (index) => {
        switch (index) {
            case 0:
                router.push('/');
                break;
            case 2:
                router.push('/airdrop')
                break;
        
            default:
                break;
        }
    }

    useEffect(() => {console.log('menu', props.menu)
        if (props.menu) {
            switch (props.menu) {
                case 'airdrop':
                    setTabIndex(2);console.log('index')
                    break;
            
                default:
                    break;
            }
        }
    }, [props.menu]);

    return (
        <>
            <Box as='nav' className="w-full flex fixed z-20 top-0 left-0 justify-between items-center bg-[#BEF6FF]">
                <Flex className='w-full md:!w-10/12 lg:!w-8/12 gap-2 px-8 md:px-4 h-12 justify-between items-center mx-auto'>
                    {/* <Avatar bg={"#02715F"} name='Logo' size={"sm"} src='/' /> */}
                    <Link href={"/"}><Image src='/assets/logo.png' className='cursor-pointer' /></Link>
                    <Tabs position="relative" 
                        variant="unstyled" 
                        className="w-full !hidden md:!block" 
                        size={"lg"} 
                        index={tabIndex}
                        onChange={handleTabsChange}>
                        <TabList gap={6}>
                            <CustomTab textSize='!text-base' text="ENTRANCE" />
                            <CustomTab textSize='!text-base' text="ABOUT" />
                            <CustomTab textSize='!text-base' text="AIRDROP" />
                        </TabList>
                        <TabIndicator
                            mt="-12.5px"
                            height="2px"
                            bg="darkgreen"
                            width={10}
                            borderRadius="1px"
                            />
                    </Tabs>
                    <Spacer />
                    
                    <CustomConnectButton />
                    <Image src={ isOpen ? "/assets/images/icon-close.png" : "/assets/images/icon-hamburger.png" }
                        onClick={isOpen ? onClose : onOpen}
                        className='md:hidden w-4 ml-4' />
                    <Button
                        size="sm"
                        bg="darkgreen"
                        ml={4}
                        minW={40}
                        color={"white"}
                        borderColor="darkgreen"
                        fontSize={14}
                        _hover={{ bg: "#00A68B" }}
                        className='!hidden md:!inline-flex grow'
                        _active={{
                            bg: "#00A68B",
                            transform: "scale(0.98)",
                        }}
                    >
                        START EXPLORING
                    </Button>
                </Flex>
            </Box>

            <Box className={
                isOpen ? 
                    "fixed top-12 left-0 bottom-0 z-50 !ml-0 flex flex-col justify-between bg-[#D5FAFF] py-8 px-8 pb-12 text-white transition-all duration-300 ease-in-out md:hidden right-0 -translate-x-0"
                    :
                    "fixed top-12 left-0 bottom-0 z-50 !ml-0 flex flex-col justify-between bg-[#D5FAFF] py-8 px-8 pb-12 text-white transition-all duration-300 ease-in-out md:hidden -translate-x-full"
            }>
                <Box as="ul" className="mb-8 flex flex-col justify-center space-y-8 font-bold text-[20px] text-[#6E8A99]">
                    <Box as='li' color={props.menu == 'about' ? 'darkgreen' : ''}>
                        About
                    </Box>
                    <Box as='li' color={props.menu == 'staking' ? 'darkgreen' : ''}>
                        <Link href="/">
                            Staking
                        </Link>
                    </Box>
                    <Box as='li' color={props.menu == 'marketplace' ? 'darkgreen' : ''}>
                        Marketplace
                    </Box>
                    <Box as='li' color={props.menu == 'tokens' ? 'darkgreen' : ''}>
                        Tokens
                    </Box>
                    <Box as='li' color={props.menu == 'airdrop' ? 'darkgreen' : ''}>
                        <Link href="/airdrop">Airdrop</Link>
                    </Box>
                </Box>
            </Box>
        </>
    );
}