/// utility methods
const writeValue = (elementId, value) => document.getElementById(elementId).textContent = value;
const toEthString = wei => wei / 10**18 + ' ETH';

/// constants
const abi = []; // espeoTokenIco-abi.json at https://gist.github.com/tcichowicz/6567312563ae2aed1e6764b88a8e7976 
const targetApi = 'https://ropsten.infura.io/';
const contractAddress = ' 	0x6f97834f631fe2fa68b09a19a70ea22705983034';

/// getting contract
const web3 = new Web3(new Web3.providers.HttpProvider(targetApi));
const espeoTokenIco = web3.eth.contract(abi).at(contractAddress);

/// read and display values
writeValue('contractAddress', contractAddress);
writeValue('totalRaised', toEthString(espeoTokenIco.totalRaised()));
