import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { Claim } from './pages/Claim'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const { chains, provider } = configureChains(
  [mainnet],
  [
    alchemyProvider({ apiKey: process.env.REACT_APP_ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: "BostonDAO",
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

const walletButtonTheme = lightTheme({
  accentColor: '#93c4c7',
  accentColorForeground: 'white',
  borderRadius: 'small',
  fontStack: 'system',
});

function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={walletButtonTheme}>
        <main style={{ backgroundColor: `rgba(252, 189, 75, .1)` }}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/claim" element={<Claim />} />
            </Routes>
          </BrowserRouter>
        </main>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
