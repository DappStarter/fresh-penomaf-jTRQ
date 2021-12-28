require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nasty fresh space strike crawl rifle unit gesture cover army gesture'; 
let testAccounts = [
"0xbba8a6f246c52e6fbfee874d7a1edbf0f6ade3fca2018a65a22c91b1a0553de4",
"0x71cef2779eb7b8c89e622320e882cb5df1c405d7ab38946c21c976ceff979f88",
"0x35aef12ea293ab8418e26a82e4e91e4c4251c50eac07ae6700b83a14de7036c3",
"0x178470af5aa6a65ad64049f07d2502b20d5eabb52fd9d628dcd8def2e37f9305",
"0xb8eef5a550718993d42265ddb8946667856e0e12cb64ef67bd4b81553571c648",
"0xa448d87e7c3c8ef1de72a951266f7fa12ddfb5b3590d325e04f956926054ef17",
"0x457f9fdbd2d12a0b07cd2d9b293a62d49765504b3be5a2c3e7ee389aa4475411",
"0x6632c21d8e8f6dbef1e208f3e3f9c5adf0f54348e45731dc26d7a7110c57db25",
"0x7b66613d5795976619faf7762d483ce2fee32e313c3d6b2ace229d55edafcd73",
"0xb3a93a2a37023c0b9b6dbb876ef188a5c41517d9b7b79df88dd1a1c7d369a252"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

