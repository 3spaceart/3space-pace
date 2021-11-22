import { BigNumber } from "ethers";
import { expect } from "chai";
import { ethers } from "hardhat";

const TOTAL_SUPPLY = '100000000'

describe("PACE token", function () {
  context('Deployed', async () => {
    it('Checks initial configuration', async () => {
      const [deployer] = await ethers.getSigners();
      const tokenFactory = await ethers.getContractFactory("Pace");
      const token = await tokenFactory.deploy();

      await token.deployed();
      expect(await token.name()).to.be.eq('3SPACE ART')
      expect(await token.symbol()).to.eq('PACE')
      const totalSupply = await token.totalSupply() as BigNumber
      expect(totalSupply.eq(ethers.utils.parseEther(TOTAL_SUPPLY))).to.be.true
      const deployerBalance = await token.balanceOf(deployer.address) as BigNumber
      expect(deployerBalance.eq(ethers.utils.parseEther(TOTAL_SUPPLY))).to.be.true
    });
  })
});
