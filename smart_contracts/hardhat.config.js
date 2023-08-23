

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/aat3pGN8UFyrnmjZdbKAhkAT2PnP9-4T',
      accounts: ['e44f4b7b4df4c9a78aa38a1c3a8ea9c179df59eb0a4419f8639d16573e8be7f3'],
    },
  },
};