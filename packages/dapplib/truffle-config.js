require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture strong rival oval method good kangaroo army gather'; 
let testAccounts = [
"0x3af9fefe16408af67384d438fc9b1967db90251a63098d1c02e5aab9aa872edc",
"0xbadfd027bef75dc3e5057f17d16d90fcec019aca6a9522345e41df0a55da5ca7",
"0x78555ff6b74970ff9eeaccb2c14dad9d73bccc7c72726b4852e2f9d4f784a46e",
"0x729a50769f2f470431f14569def617c6f9b6cf6e13629bbdfa699388d047f11b",
"0x184056d7f0250365890039c316d773d724af41992c34af64f73ea208fe579796",
"0xabef7d827d424285391e008014a6cd27cd97aaf76e11a45979d5904784d0a3ce",
"0x156a13cdf49863b42cc83ec726c3767692e7bf06fa4f334f75925a8ad6a28da1",
"0xf9ea7f157573c91c4b0159b23fa280d850ae5ad3c7a7e72cce4b9fe938f0a352",
"0x04e43ea023ac945631abd81a572be7c4d07d2e15028acf0cd67d55e2b7d851ee",
"0xf9dbd26dbaed51ed8062a675ed5a6873ab1e976b0f63f63e104e8f73d6e15b9a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


