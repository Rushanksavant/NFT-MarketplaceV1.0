/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  defaultNetwork: "hardhat",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.projectid}`,
      accounts: [process.env.KEY]
    },
  },
  solidity: "0.8.1",
};