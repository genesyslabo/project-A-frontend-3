import React from 'react';
import {Avatar, Box, Image, Spacer, useDisclosure} from '@chakra-ui/react';
import Link from 'next/link';

export function Header() {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <>
            <Box as='nav' className="w-full flex fixed z-20 top-0 left-0 px-8 justify-between items-center h-12 bg-[#9BDCFF]">
                <Avatar bg={"#02715F"} name='Logo' size={"sm"} src='/' />
                <Spacer />
                <Image src={ isOpen ? "/assets/images/icon-close.png" : "/assets/images/icon-hamburger.png" }
                    onClick={isOpen ? onClose : onOpen}
                    className='w-6' />
            </Box>

            <Box className={
                isOpen ? 
                    "fixed top-24 left-0 bottom-0 z-50 !ml-0 flex flex-col justify-between bg-[#bee2fc] py-8 px-8 pb-12 text-white transition-all duration-300 ease-in-out md:hidden right-0 -translate-x-0"
                    :
                    "fixed top-24 left-0 bottom-0 z-50 !ml-0 flex flex-col justify-between bg-[#bee2fc] py-8 px-8 pb-12 text-white transition-all duration-300 ease-in-out md:hidden -translate-x-full"
            }>
                <Box as="ul" className="mb-8 flex flex-col justify-center space-y-8 font-bold text-[20px] text-[#6E8A99]">
                    <li>
                        About
                    </li>
                    <li>
                        <Link href="">
                            Staking
                        </Link>
                    </li>
                    <li>
                        Marketplace
                    </li>
                    <li>
                        Tokens
                    </li>
                </Box>
            </Box>
        </>
    );
}