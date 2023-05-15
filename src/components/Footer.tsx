import React from 'react';
import { Box, Image } from '@chakra-ui/react';

export function Footer() {

    return (
        <>
            <Box className="w-full flex flex-col text-white justify-between items-start p-4 bg-[#000000] text-xs gap-4 font-['PingFangSC-Regular']">
                <Box>White Paper</Box>
                <Box>Merchants</Box>
                <Box>Terms of use</Box>
                <Box>Privacy Policy</Box>
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
            </Box>
        </>
    );
}