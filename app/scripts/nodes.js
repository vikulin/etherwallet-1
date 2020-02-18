"use strict";
var nodes = function() {};
nodes.customNode = require("./nodeHelpers/customNode");
nodes.infuraNode = require("./nodeHelpers/infura");
nodes.metamaskNode = require("./nodeHelpers/metamask");
nodes.nodeTypes = {
	RIV: "RIV",
	R3T: "R3T",
	Custom: "CUSTOM ETH"
};
nodes.ensNodeTypes = [nodes.nodeTypes.RIV, nodes.nodeTypes.Ropsten];
nodes.ensSubNodeTypes = [nodes.nodeTypes.RIV];
nodes.domainsaleNodeTypes = [nodes.nodeTypes.RIV, nodes.nodeTypes.Ropsten];
nodes.customNodeObj = {
	name: "CUS",
	blockExplorerTX: "",
	blockExplorerAddr: "",
	type: nodes.nodeTypes.Custom,
	eip155: false,
	chainId: "",
	tokenList: [],
	abiList: [],
	service: "Custom",
	lib: null
};
nodes.nodeList = {
	eth_mew: {
		name: "RIV",
		blockExplorerTX: "https://etherscan.io/tx/[[txHash]]",
		blockExplorerAddr: "https://etherscan.io/address/[[address]]",
		type: nodes.nodeTypes.ETH,
		eip155: true,
		chainId: 1,
		tokenList: require("./tokens/ethTokens.json"),
		abiList: require("./abiDefinitions/ethAbi.json"),
		service: "myetherwallet.com",
		lib: new nodes.customNode("https://api.myetherwallet.com/eth", "")
	},
	eth_ethscan: {
		name: "ETH",
		blockExplorerTX: "https://etherscan.io/tx/[[txHash]]",
		blockExplorerAddr: "https://etherscan.io/address/[[address]]",
		type: nodes.nodeTypes.ETH,
		eip155: true,
		chainId: 1,
		tokenList: require("./tokens/ethTokens.json"),
		abiList: require("./abiDefinitions/ethAbi.json"),
		service: "etherscan.io",
		lib: require("./nodeHelpers/etherscan")
	},
		rop_mew: {
		name: "RiV TesTneT",
		type: nodes.nodeTypes.Ropsten,
		blockExplorerTX: "https://ropsten.etherscan.io/tx/[[txHash]]",
		blockExplorerAddr: "https://ropsten.etherscan.io/address/[[address]]",
		eip155: true,
		chainId: 3,
		tokenList: require("./tokens/ropstenTokens.json"),
		abiList: require("./abiDefinitions/ropstenAbi.json"),
		service: "myetherwallet.com",
		lib: new nodes.customNode("https://api.myetherwallet.com/rop", "")
	},
		thundercore: {
		name: "THUNDERCORE",
		blockExplorerTX: "https://scan.thundercore.com/transactions/[[txHash]]",
		blockExplorerAddr: "https://scan.thundercore.com/address/[[address]]",
		type: nodes.nodeTypes.THUNDERCORE,
		eip155: true,
		chainId: 108,
		tokenList: require("./tokens/thundercoreTokens.json"),
		abiList: require("./abiDefinitions/thundercoreAbi.json"),
		estimateGas: true,
		service: "thundercore.com",
		lib: new nodes.customNode("https://mainnet-rpc.thundercore.com", "443")
	}
};

nodes.ethPrice = require("./nodeHelpers/ethPrice");
module.exports = nodes;
