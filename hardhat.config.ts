import 'dotenv/config';
import '@typechain/hardhat'
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-ethers';
import 'hardhat-deploy';

import { HardhatUserConfig } from 'hardhat/types';

const config: HardhatUserConfig = {
  solidity: '0.8.4',
  namedAccounts: {
    deployer: 0,
  },
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
      chainId: 3,
      gasPrice: 20000000000,
      accounts: [process.env.TEST_ADMIN || ''],
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      chainId: 1,
      accounts: [process.env.ADMIN || ''],
    }
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || '',
  },
};

export default config;
