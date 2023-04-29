require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const privateKey = process.env.DEPLOYER_SIGNER_PRIVATE_KEY;
const sepoliaProjectId = process.env.ALCHEMY_PROJECT_ID_SEPOLIA;
const goerliProjectId = process.env.ALCHEMY_PROJECT_ID_GOERLI;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${sepoliaProjectId}`,
      accounts: [privateKey],
    },
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${goerliProjectId}`,
      accounts: [privateKey],
    },
  },
};
