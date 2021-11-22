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
