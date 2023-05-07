import {ChakraProvider} from '@chakra-ui/react'

import {theme} from '../theme'
import {AppProps} from 'next/app'
import "../style/global.css"
import { Provider } from 'react-redux'
import Head from 'next/head'

import '@rainbow-me/rainbowkit/styles.css';
import {
    darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { Chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { bscTestnet, mainnet } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { isDev } from '../common/utils/tools'

function MyApp({Component, pageProps}: AppProps) {

    const supportedChains: Chain[] = isDev() ? [mainnet, bscTestnet] : [mainnet]

    const { chains, provider } = configureChains(
        supportedChains,
        [
          alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
          publicProvider()
        ]
      );
      
      const { connectors } = getDefaultWallets({
        appName: 'cnmb',
        projectId: '5e11f3f7e6b29093952056699fabe64c',
        chains
      });
      
      const wagmiClient = createClient({
        autoConnect: true,
        connectors,
        provider
      })
      
    return (
        <>
            <Head>
            <title></title>
            <link rel="icon" href="/assets/favicon.ico" />
            </Head>
            {/* <Provider store={store}> */}
                <ChakraProvider theme={theme}>
                    <WagmiConfig client={wagmiClient}>
                        <RainbowKitProvider modalSize="compact" showRecentTransactions={true} chains={chains} initialChain={mainnet} theme={darkTheme()}>
                            <Component {...pageProps} />
                        </RainbowKitProvider>
                    </WagmiConfig>
                </ChakraProvider>
            {/* </Provider> */}
        </>
    )
}

export default MyApp
