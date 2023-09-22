# 3SPACE ART

PACE is an ERC-20 compatible token.
It implements governance-inspired features with openzeppelin's ERC20Burnable.

## Setup

- Create an file named .env and fill the next enviroment variables

```
# Secret key for deploying contracts
TEST_ADMIN=
ADMIN=
ETHERSCAN_API_KEY=
INFURA_API_KEY=
```

- Install dependencies with `yarn`

## Deployment

You can deploy Pace Token to the networks via the following command:

```
yarn hardhat deploy --network {mainnet | ropsten}
```

You can alwo verify automatically via the command:

```
yarn hardhat etherscan-verify --network {mainnet | ropsten}
```

## Test

```
yarn hardhat test test/pace.spec.ts
```


## Multisig-Wallet
- 0x43C8646015715C2eA70a414672625aD6b7148CCA (Marketplace)
- 0x1fb6AC9281f1d57977e54ca8BD5F4f71eB357EA9 (Artpool)
- 0x5708511A3e6f07bd3d3d9C18C1a7e6568D1685a1 (Ecosystem)
- 0x3C5c7dd4216C036ef5cA4bb3216295fD4f2A5060 (Airdrop)
- 0x13Ed3a591F0265dED728a28D24Ed8a540a489036 (Team)
- 0x147ca5CeD525956931b037725DBC53F695cee049 (Investors)
