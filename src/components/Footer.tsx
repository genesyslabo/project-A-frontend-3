import React from 'react';
import { Box, Flex, Image, Spacer } from '@chakra-ui/react';

export function Footer() {

    return (
        <>
            <Box className="w-full flex text-white justify-center items-center bg-[#000000] text-xs font-['PingFangSC-Regular']">
                <Box className='flex flex-col w-full md:!w-10/12 lg:!w-8/12 p-4'>
                    <Flex className='w-full flex-col md:flex-row gap-4 md:gap-8 justify-between items-start md:items-center'>
                        <Box>White Paper</Box>
                        <Box>Merchants</Box>
                        <Box>Terms of use</Box>
                        <Box>Privacy Policy</Box>
                        <Spacer />
                        <Box className='flex flex-row gap-6'>
                            <Box className='py-4 w-8'>
                                <Image src='/assets/images/icon-twitter.png' />
                            </Box>
                            <Box className='py-4 w-8'>
                                <Image src='/assets/images/icon-discord.png' />
                            </Box>
                            <Box className='py-4 w-8'>
                                <Image src='/assets/images/icon-youtube.png' />
                            </Box>
                            <Box className='py-4 w-8'>
                                <Image src='/assets/images/icon-medium.png' />
                            </Box>
                            <Box className='py-4 w-8'>
                                <Image src='/assets/images/icon-unknow.png' />
                            </Box>
                        </Box>
                    </Flex>
                    <Flex className='text-xs'>
                        &copy;Createra 2023
                    </Flex>
                </Box>
            </Box>
        </>
    );
}