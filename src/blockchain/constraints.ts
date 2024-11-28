// export const nicknameABI = [
//     {
//         "inputs": [{"internalType": "address", "name": "", "type": "address"}],
//         "name": "addrNick",
//         "outputs": [{"internalType": "string", "name": "", "type": "string"}],
//         "stateMutability": "view",
//         "type": "function"
//     }, {
//         "inputs": [{"internalType": "string", "name": "_nickOld", "type": "string"}, {
//             "internalType": "string",
//             "name": "_nickNew",
//             "type": "string"
//         }], "name": "changeNick", "outputs": [], "stateMutability": "nonpayable", "type": "function"
//     }, {
//         "inputs": [{"internalType": "string", "name": "", "type": "string"}],
//         "name": "nickAddr",
//         "outputs": [{"internalType": "address", "name": "", "type": "address"}],
//         "stateMutability": "view",
//         "type": "function"
//     }, {
//         "inputs": [{"internalType": "string", "name": "_nick", "type": "string"}],
//         "name": "setNick",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     }]
// export const nicknameAddress = '0x7908898bE341C6342476f7084beDF06E9B839806'

export const nicknameAddress =
  '0x9292d66a6907853a45E843A62F620a03aC739084'; // AMOY
export const nicknameABI = [
  {
    inputs: [{internalType: 'address', name: '', type: 'address'}],
    name: 'addrNick',
    outputs: [{internalType: 'string', name: '', type: 'string'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'string', name: '_nickOld', type: 'string'},
      {
        internalType: 'string',
        name: '_nickNew',
        type: 'string',
      },
    ],
    name: 'changeNick',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{internalType: 'string', name: '', type: 'string'}],
    name: 'nickAddr',
    outputs: [{internalType: 'address', name: '', type: 'address'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{internalType: 'string', name: '_nick', type: 'string'}],
    name: 'setNick',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export const MaticToken = '0x0000000000000000000000000000000000001010'

export const MaticABI = [
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "internalType": "address",
      "name": "previousAddress",
      "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "newAddress", "type": "address"}],
    "name": "ChildChainChanged",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "token", "type": "address"}, {
      "indexed": true,
      "internalType": "address",
      "name": "from",
      "type": "address"
    }, {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}, {
      "indexed": false,
      "internalType": "uint256",
      "name": "input1",
      "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "output1", "type": "uint256"}],
    "name": "Deposit",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "token", "type": "address"}, {
      "indexed": true,
      "internalType": "address",
      "name": "from",
      "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "to", "type": "address"}, {
      "indexed": false,
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "input1", "type": "uint256"}, {
      "indexed": false,
      "internalType": "uint256",
      "name": "input2",
      "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "output1", "type": "uint256"}, {
      "indexed": false,
      "internalType": "uint256",
      "name": "output2",
      "type": "uint256"
    }],
    "name": "LogFeeTransfer",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "token", "type": "address"}, {
      "indexed": true,
      "internalType": "address",
      "name": "from",
      "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "to", "type": "address"}, {
      "indexed": false,
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "input1", "type": "uint256"}, {
      "indexed": false,
      "internalType": "uint256",
      "name": "input2",
      "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "output1", "type": "uint256"}, {
      "indexed": false,
      "internalType": "uint256",
      "name": "output2",
      "type": "uint256"
    }],
    "name": "LogTransfer",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "internalType": "address",
      "name": "previousOwner",
      "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "OwnershipTransferred",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "internalType": "address",
      "name": "previousAddress",
      "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "newAddress", "type": "address"}],
    "name": "ParentChanged",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "from", "type": "address"}, {
      "indexed": true,
      "internalType": "address",
      "name": "to",
      "type": "address"
    }, {"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}],
    "name": "Transfer",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "token", "type": "address"}, {
      "indexed": true,
      "internalType": "address",
      "name": "from",
      "type": "address"
    }, {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}, {
      "indexed": false,
      "internalType": "uint256",
      "name": "input1",
      "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "output1", "type": "uint256"}],
    "name": "Withdraw",
    "type": "event"
  }, {
    "constant": true,
    "inputs": [],
    "name": "CHAINID",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "EIP712_DOMAIN_HASH",
    "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "EIP712_DOMAIN_SCHEMA_HASH",
    "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "EIP712_TOKEN_TRANSFER_ORDER_SCHEMA_HASH",
    "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"internalType": "address", "name": "account", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "newAddress", "type": "address"}],
    "name": "changeChildChain",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "childChain",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "currentSupply",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [{"internalType": "uint8", "name": "", "type": "uint8"}],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "user", "type": "address"}, {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }],
    "name": "deposit",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "name": "disabledHashes",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"internalType": "bytes32", "name": "hash", "type": "bytes32"}, {
      "internalType": "bytes",
      "name": "sig",
      "type": "bytes"
    }],
    "name": "ecrecovery",
    "outputs": [{"internalType": "address", "name": "result", "type": "address"}],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"internalType": "address", "name": "spender", "type": "address"}, {
      "internalType": "uint256",
      "name": "tokenIdOrAmount",
      "type": "uint256"
    }, {"internalType": "bytes32", "name": "data", "type": "bytes32"}, {
      "internalType": "uint256",
      "name": "expiration",
      "type": "uint256"
    }],
    "name": "getTokenTransferOrderHash",
    "outputs": [{"internalType": "bytes32", "name": "orderHash", "type": "bytes32"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "_childChain", "type": "address"}, {
      "internalType": "address",
      "name": "_token",
      "type": "address"
    }],
    "name": "initialize",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "isOwner",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "networkId",
    "outputs": [{"internalType": "bytes", "name": "", "type": "bytes"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "parent",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "", "type": "address"}],
    "name": "setParent",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "token",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "to", "type": "address"}, {
      "internalType": "uint256",
      "name": "value",
      "type": "uint256"
    }],
    "name": "transfer",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"internalType": "bytes", "name": "sig", "type": "bytes"}, {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }, {"internalType": "bytes32", "name": "data", "type": "bytes32"}, {
      "internalType": "uint256",
      "name": "expiration",
      "type": "uint256"
    }, {"internalType": "address", "name": "to", "type": "address"}],
    "name": "transferWithSig",
    "outputs": [{"internalType": "address", "name": "from", "type": "address"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"internalType": "uint256", "name": "amount", "type": "uint256"}],
    "name": "withdraw",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }]

// export const USDCToken = '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359'; // Polygon
export const USDCToken = '0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582'; // AMOY

export const USDCABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'authorizer',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'nonce',
        type: 'bytes32',
      },
    ],
    name: 'AuthorizationCanceled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'authorizer',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'nonce',
        type: 'bytes32',
      },
    ],
    name: 'AuthorizationUsed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_account',
        type: 'address',
      },
    ],
    name: 'Blacklisted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'newBlacklister',
        type: 'address',
      },
    ],
    name: 'BlacklisterChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'burner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Burn',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'newMasterMinter',
        type: 'address',
      },
    ],
    name: 'MasterMinterChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'minter',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Mint',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'minter',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minterAllowedAmount',
        type: 'uint256',
      },
    ],
    name: 'MinterConfigured',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'oldMinter',
        type: 'address',
      },
    ],
    name: 'MinterRemoved',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {anonymous: false, inputs: [], name: 'Pause', type: 'event'},
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'newAddress',
        type: 'address',
      },
    ],
    name: 'PauserChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'newRescuer',
        type: 'address',
      },
    ],
    name: 'RescuerChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {indexed: true, internalType: 'address', name: 'from', type: 'address'},
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_account',
        type: 'address',
      },
    ],
    name: 'UnBlacklisted',
    type: 'event',
  },
  {anonymous: false, inputs: [], name: 'Unpause', type: 'event'},
  {
    inputs: [],
    name: 'CANCEL_AUTHORIZATION_TYPEHASH',
    outputs: [{internalType: 'bytes32', name: '', type: 'bytes32'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{internalType: 'bytes32', name: '', type: 'bytes32'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'PERMIT_TYPEHASH',
    outputs: [{internalType: 'bytes32', name: '', type: 'bytes32'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'RECEIVE_WITH_AUTHORIZATION_TYPEHASH',
    outputs: [{internalType: 'bytes32', name: '', type: 'bytes32'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'TRANSFER_WITH_AUTHORIZATION_TYPEHASH',
    outputs: [{internalType: 'bytes32', name: '', type: 'bytes32'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'address', name: 'owner', type: 'address'},
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'address', name: 'spender', type: 'address'},
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [{internalType: 'bool', name: '', type: 'bool'}],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'address', name: 'authorizer', type: 'address'},
      {
        internalType: 'bytes32',
        name: 'nonce',
        type: 'bytes32',
      },
    ],
    name: 'authorizationState',
    outputs: [{internalType: 'bool', name: '', type: 'bool'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{internalType: 'address', name: 'account', type: 'address'}],
    name: 'balanceOf',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{internalType: 'address', name: '_account', type: 'address'}],
    name: 'blacklist',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'blacklister',
    outputs: [{internalType: 'address', name: '', type: 'address'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{internalType: 'uint256', name: '_amount', type: 'uint256'}],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'address', name: 'authorizer', type: 'address'},
      {
        internalType: 'bytes32',
        name: 'nonce',
        type: 'bytes32',
      },
      {internalType: 'uint8', name: 'v', type: 'uint8'},
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32',
      },
      {internalType: 'bytes32', name: 's', type: 'bytes32'},
    ],
    name: 'cancelAuthorization',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'address', name: 'minter', type: 'address'},
      {
        internalType: 'uint256',
        name: 'minterAllowedAmount',
        type: 'uint256',
      },
    ],
    name: 'configureMinter',
    outputs: [{internalType: 'bool', name: '', type: 'bool'}],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'currency',
    outputs: [{internalType: 'string', name: '', type: 'string'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [{internalType: 'uint8', name: '', type: 'uint8'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'address', name: 'spender', type: 'address'},
      {
        internalType: 'uint256',
        name: 'decrement',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [{internalType: 'bool', name: '', type: 'bool'}],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'address', name: 'spender', type: 'address'},
      {
        internalType: 'uint256',
        name: 'increment',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [{internalType: 'bool', name: '', type: 'bool'}],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'string', name: 'tokenName', type: 'string'},
      {
        internalType: 'string',
        name: 'tokenSymbol',
        type: 'string',
      },
      {internalType: 'string', name: 'tokenCurrency', type: 'string'},
      {
        internalType: 'uint8',
        name: 'tokenDecimals',
        type: 'uint8',
      },
      {internalType: 'address', name: 'newMasterMinter', type: 'address'},
      {
        internalType: 'address',
        name: 'newPauser',
        type: 'address',
      },
      {internalType: 'address', name: 'newBlacklister', type: 'address'},
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{internalType: 'string', name: 'newName', type: 'string'}],
    name: 'initializeV2',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'address', name: 'lostAndFound', type: 'address'},
    ],
    name: 'initializeV2_1',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{internalType: 'address', name: '_account', type: 'address'}],
    name: 'isBlacklisted',
    outputs: [{internalType: 'bool', name: '', type: 'bool'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{internalType: 'address', name: 'account', type: 'address'}],
    name: 'isMinter',
    outputs: [{internalType: 'bool', name: '', type: 'bool'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'masterMinter',
    outputs: [{internalType: 'address', name: '', type: 'address'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'address', name: '_to', type: 'address'},
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'mint',
    outputs: [{internalType: 'bool', name: '', type: 'bool'}],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{internalType: 'address', name: 'minter', type: 'address'}],
    name: 'minterAllowance',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [{internalType: 'string', name: '', type: 'string'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{internalType: 'address', name: 'owner', type: 'address'}],
    name: 'nonces',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{internalType: 'address', name: '', type: 'address'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [{internalType: 'bool', name: '', type: 'bool'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pauser',
    outputs: [{internalType: 'address', name: '', type: 'address'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'address', name: 'owner', type: 'address'},
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {internalType: 'uint256', name: 'value', type: 'uint256'},
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
      {internalType: 'uint8', name: 'v', type: 'uint8'},
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32',
      },
      {internalType: 'bytes32', name: 's', type: 'bytes32'},
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'address', name: 'from', type: 'address'},
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {internalType: 'uint256', name: 'value', type: 'uint256'},
      {
        internalType: 'uint256',
        name: 'validAfter',
        type: 'uint256',
      },
      {internalType: 'uint256', name: 'validBefore', type: 'uint256'},
      {
        internalType: 'bytes32',
        name: 'nonce',
        type: 'bytes32',
      },
      {internalType: 'uint8', name: 'v', type: 'uint8'},
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32',
      },
      {internalType: 'bytes32', name: 's', type: 'bytes32'},
    ],
    name: 'receiveWithAuthorization',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{internalType: 'address', name: 'minter', type: 'address'}],
    name: 'removeMinter',
    outputs: [{internalType: 'bool', name: '', type: 'bool'}],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: 'tokenContract',
        type: 'address',
      },
      {internalType: 'address', name: 'to', type: 'address'},
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'rescueERC20',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rescuer',
    outputs: [{internalType: 'address', name: '', type: 'address'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [{internalType: 'string', name: '', type: 'string'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'address', name: 'to', type: 'address'},
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [{internalType: 'bool', name: '', type: 'bool'}],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'address', name: 'from', type: 'address'},
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {internalType: 'uint256', name: 'value', type: 'uint256'},
    ],
    name: 'transferFrom',
    outputs: [{internalType: 'bool', name: '', type: 'bool'}],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{internalType: 'address', name: 'newOwner', type: 'address'}],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'address', name: 'from', type: 'address'},
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {internalType: 'uint256', name: 'value', type: 'uint256'},
      {
        internalType: 'uint256',
        name: 'validAfter',
        type: 'uint256',
      },
      {internalType: 'uint256', name: 'validBefore', type: 'uint256'},
      {
        internalType: 'bytes32',
        name: 'nonce',
        type: 'bytes32',
      },
      {internalType: 'uint8', name: 'v', type: 'uint8'},
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32',
      },
      {internalType: 'bytes32', name: 's', type: 'bytes32'},
    ],
    name: 'transferWithAuthorization',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{internalType: 'address', name: '_account', type: 'address'}],
    name: 'unBlacklist',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'address', name: '_newBlacklister', type: 'address'},
    ],
    name: 'updateBlacklister',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'address', name: '_newMasterMinter', type: 'address'},
    ],
    name: 'updateMasterMinter',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{internalType: 'address', name: '_newPauser', type: 'address'}],
    name: 'updatePauser',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{internalType: 'address', name: 'newRescuer', type: 'address'}],
    name: 'updateRescuer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'version',
    outputs: [{internalType: 'string', name: '', type: 'string'}],
    stateMutability: 'view',
    type: 'function',
  },
];


// export const USDCABI = [
//     {
//         anonymous: false,
//         inputs: [
//             {
//                 indexed: true,
//                 internalType: "address",
//                 name: "owner",
//                 type: "address",
//             },
//             {
//                 indexed: true,
//                 internalType: "address",
//                 name: "spender",
//                 type: "address",
//             },
//             {
//                 indexed: false,
//                 internalType: "uint256",
//                 name: "value",
//                 type: "uint256",
//             },
//         ],
//         name: "Approval",
//         type: "event",
//     },
//     {
//         anonymous: false,
//         inputs: [
//             {
//                 indexed: true,
//                 internalType: "address",
//                 name: "authorizer",
//                 type: "address",
//             },
//             {
//                 indexed: true,
//                 internalType: "bytes32",
//                 name: "nonce",
//                 type: "bytes32",
//             },
//         ],
//         name: "AuthorizationCanceled",
//         type: "event",
//     },
//     {
//         anonymous: false,
//         inputs: [
//             {
//                 indexed: true,
//                 internalType: "address",
//                 name: "authorizer",
//                 type: "address",
//             },
//             {
//                 indexed: true,
//                 internalType: "bytes32",
//                 name: "nonce",
//                 type: "bytes32",
//             },
//         ],
//         name: "AuthorizationUsed",
//         type: "event",
//     },
//     {
//         anonymous: false,
//         inputs: [
//             {
//                 indexed: true,
//                 internalType: "address",
//                 name: "_account",
//                 type: "address",
//             },
//         ],
//         name: "Blacklisted",
//         type: "event",
//     },
//     {
//         anonymous: false,
//         inputs: [
//             {
//                 indexed: true,
//                 internalType: "address",
//                 name: "newBlacklister",
//                 type: "address",
//             },
//         ],
//         name: "BlacklisterChanged",
//         type: "event",
//     },
//     {
//         anonymous: false,
//         inputs: [
//             {
//                 indexed: true,
//                 internalType: "address",
//                 name: "burner",
//                 type: "address",
//             },
//             {
//                 indexed: false,
//                 internalType: "uint256",
//                 name: "amount",
//                 type: "uint256",
//             },
//         ],
//         name: "Burn",
//         type: "event",
//     },
//     {
//         anonymous: false,
//         inputs: [
//             {
//                 indexed: true,
//                 internalType: "address",
//                 name: "newMasterMinter",
//                 type: "address",
//             },
//         ],
//         name: "MasterMinterChanged",
//         type: "event",
//     },
//     {
//         anonymous: false,
//         inputs: [
//             {
//                 indexed: true,
//                 internalType: "address",
//                 name: "minter",
//                 type: "address",
//             },
//             {
//                 indexed: true,
//                 internalType: "address",
//                 name: "to",
//                 type: "address",
//             },
//             {
//                 indexed: false,
//                 internalType: "uint256",
//                 name: "amount",
//                 type: "uint256",
//             },
//         ],
//         name: "Mint",
//         type: "event",
//     },
//     {
//         anonymous: false,
//         inputs: [
//             {
//                 indexed: true,
//                 internalType: "address",
//                 name: "minter",
//                 type: "address",
//             },
//             {
//                 indexed: false,
//                 internalType: "uint256",
//                 name: "minterAllowedAmount",
//                 type: "uint256",
//             },
//         ],
//         name: "MinterConfigured",
//         type: "event",
//     },
//     {
//         anonymous: false,
//         inputs: [
//             {
//                 indexed: true,
//                 internalType: "address",
//                 name: "oldMinter",
//                 type: "address",
//             },
//         ],
//         name: "MinterRemoved",
//         type: "event",
//     },
//     {
//         anonymous: false,
//         inputs: [
//             {
//                 indexed: false,
//                 internalType: "address",
//                 name: "previousOwner",
//                 type: "address",
//             },
//             {
//                 indexed: false,
//                 internalType: "address",
//                 name: "newOwner",
//                 type: "address",
//             },
//         ],
//         name: "OwnershipTransferred",
//         type: "event",
//     },
//     {anonymous: false, inputs: [], name: "Pause", type: "event"},
//     {
//         anonymous: false,
//         inputs: [
//             {
//                 indexed: true,
//                 internalType: "address",
//                 name: "newAddress",
//                 type: "address",
//             },
//         ],
//         name: "PauserChanged",
//         type: "event",
//     },
//     {
//         anonymous: false,
//         inputs: [
//             {
//                 indexed: true,
//                 internalType: "address",
//                 name: "newRescuer",
//                 type: "address",
//             },
//         ],
//         name: "RescuerChanged",
//         type: "event",
//     },
//     {
//         anonymous: false,
//         inputs: [
//             {indexed: true, internalType: "address", name: "from", type: "address"},
//             {
//                 indexed: true,
//                 internalType: "address",
//                 name: "to",
//                 type: "address",
//             },
//             {
//                 indexed: false,
//                 internalType: "uint256",
//                 name: "value",
//                 type: "uint256",
//             },
//         ],
//         name: "Transfer",
//         type: "event",
//     },
//     {
//         anonymous: false,
//         inputs: [
//             {
//                 indexed: true,
//                 internalType: "address",
//                 name: "_account",
//                 type: "address",
//             },
//         ],
//         name: "UnBlacklisted",
//         type: "event",
//     },
//     {anonymous: false, inputs: [], name: "Unpause", type: "event"},
//     {
//         inputs: [],
//         name: "CANCEL_AUTHORIZATION_TYPEHASH",
//         outputs: [{internalType: "bytes32", name: "", type: "bytes32"}],
//         stateMutability: "view",
//         type: "function",
//     },
//     {
//         inputs: [],
//         name: "DOMAIN_SEPARATOR",
//         outputs: [{internalType: "bytes32", name: "", type: "bytes32"}],
//         stateMutability: "view",
//         type: "function",
//     },
//     {
//         inputs: [],
//         name: "PERMIT_TYPEHASH",
//         outputs: [{internalType: "bytes32", name: "", type: "bytes32"}],
//         stateMutability: "view",
//         type: "function",
//     },
//     {
//         inputs: [],
//         name: "RECEIVE_WITH_AUTHORIZATION_TYPEHASH",
//         outputs: [{internalType: "bytes32", name: "", type: "bytes32"}],
//         stateMutability: "view",
//         type: "function",
//     },
//     {
//         inputs: [],
//         name: "TRANSFER_WITH_AUTHORIZATION_TYPEHASH",
//         outputs: [{internalType: "bytes32", name: "", type: "bytes32"}],
//         stateMutability: "view",
//         type: "function",
//     },
//     {
//         inputs: [
//             {internalType: "address", name: "owner", type: "address"},
//             {
//                 internalType: "address",
//                 name: "spender",
//                 type: "address",
//             },
//         ],
//         name: "allowance",
//         outputs: [{internalType: "uint256", name: "", type: "uint256"}],
//         stateMutability: "view",
//         type: "function",
//     },
//     {
//         inputs: [
//             {internalType: "address", name: "spender", type: "address"},
//             {
//                 internalType: "uint256",
//                 name: "value",
//                 type: "uint256",
//             },
//         ],
//         name: "approve",
//         outputs: [{internalType: "bool", name: "", type: "bool"}],
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     {
//         inputs: [
//             {internalType: "address", name: "authorizer", type: "address"},
//             {
//                 internalType: "bytes32",
//                 name: "nonce",
//                 type: "bytes32",
//             },
//         ],
//         name: "authorizationState",
//         outputs: [{internalType: "bool", name: "", type: "bool"}],
//         stateMutability: "view",
//         type: "function",
//     },
//     {
//         inputs: [{internalType: "address", name: "account", type: "address"}],
//         name: "balanceOf",
//         outputs: [{internalType: "uint256", name: "", type: "uint256"}],
//         stateMutability: "view",
//         type: "function",
//     },
//     {
//         inputs: [{internalType: "address", name: "_account", type: "address"}],
//         name: "blacklist",
//         outputs: [],
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     {
//         inputs: [],
//         name: "blacklister",
//         outputs: [{internalType: "address", name: "", type: "address"}],
//         stateMutability: "view",
//         type: "function",
//     },
//     {
//         inputs: [{internalType: "uint256", name: "_amount", type: "uint256"}],
//         name: "burn",
//         outputs: [],
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     {
//         inputs: [
//             {internalType: "address", name: "authorizer", type: "address"},
//             {
//                 internalType: "bytes32",
//                 name: "nonce",
//                 type: "bytes32",
//             },
//             {internalType: "uint8", name: "v", type: "uint8"},
//             {
//                 internalType: "bytes32",
//                 name: "r",
//                 type: "bytes32",
//             },
//             {internalType: "bytes32", name: "s", type: "bytes32"},
//         ],
//         name: "cancelAuthorization",
//         outputs: [],
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     {
//         inputs: [
//             {internalType: "address", name: "minter", type: "address"},
//             {
//                 internalType: "uint256",
//                 name: "minterAllowedAmount",
//                 type: "uint256",
//             },
//         ],
//         name: "configureMinter",
//         outputs: [{internalType: "bool", name: "", type: "bool"}],
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     {
//         inputs: [],
//         name: "currency",
//         outputs: [{internalType: "string", name: "", type: "string"}],
//         stateMutability: "view",
//         type: "function",
//     },
//     {
//         inputs: [],
//         name: "decimals",
//         outputs: [{internalType: "uint8", name: "", type: "uint8"}],
//         stateMutability: "view",
//         type: "function",
//     },
//     {
//         inputs: [
//             {internalType: "address", name: "spender", type: "address"},
//             {
//                 internalType: "uint256",
//                 name: "decrement",
//                 type: "uint256",
//             },
//         ],
//         name: "decreaseAllowance",
//         outputs: [{internalType: "bool", name: "", type: "bool"}],
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     {
//         inputs: [
//             {internalType: "address", name: "spender", type: "address"},
//             {
//                 internalType: "uint256",
//                 name: "increment",
//                 type: "uint256",
//             },
//         ],
//         name: "increaseAllowance",
//         outputs: [{internalType: "bool", name: "", type: "bool"}],
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     {
//         inputs: [
//             {internalType: "string", name: "tokenName", type: "string"},
//             {
//                 internalType: "string",
//                 name: "tokenSymbol",
//                 type: "string",
//             },
//             {internalType: "string", name: "tokenCurrency", type: "string"},
//             {
//                 internalType: "uint8",
//                 name: "tokenDecimals",
//                 type: "uint8",
//             },
//             {internalType: "address", name: "newMasterMinter", type: "address"},
//             {
//                 internalType: "address",
//                 name: "newPauser",
//                 type: "address",
//             },
//             {internalType: "address", name: "newBlacklister", type: "address"},
//             {
//                 internalType: "address",
//                 name: "newOwner",
//                 type: "address",
//             },
//         ],
//         name: "initialize",
//         outputs: [],
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     {
//         inputs: [{internalType: "string", name: "newName", type: "string"}],
//         name: "initializeV2",
//         outputs: [],
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     {
//         inputs: [{internalType: "address", name: "lostAndFound", type: "address"}],
//         name: "initializeV2_1",
//         outputs: [],
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     {
//         inputs: [{internalType: "address", name: "_account", type: "address"}],
//         name: "isBlacklisted",
//         outputs: [{internalType: "bool", name: "", type: "bool"}],
//         stateMutability: "view",
//         type: "function",
//     },
//     {
//         inputs: [{internalType: "address", name: "account", type: "address"}],
//         name: "isMinter",
//         outputs: [{internalType: "bool", name: "", type: "bool"}],
//         stateMutability: "view",
//         type: "function",
//     },
//     {
//         inputs: [],
//         name: "masterMinter",
//         outputs: [{internalType: "address", name: "", type: "address"}],
//         stateMutability: "view",
//         type: "function",
//     },
//     {
//         inputs: [
//             {internalType: "address", name: "_to", type: "address"},
//             {
//                 internalType: "uint256",
//                 name: "_amount",
//                 type: "uint256",
//             },
//         ],
//         name: "mint",
//         outputs: [{internalType: "bool", name: "", type: "bool"}],
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     {
//         inputs: [{internalType: "address", name: "minter", type: "address"}],
//         name: "minterAllowance",
//         outputs: [{internalType: "uint256", name: "", type: "uint256"}],
//         stateMutability: "view",
//         type: "function",
//     },
//     {
//         inputs: [],
//         name: "name",
//         outputs: [{internalType: "string", name: "", type: "string"}],
//         stateMutability: "view",
//         type: "function",
//     },
//     {
//         inputs: [{internalType: "address", name: "owner", type: "address"}],
//         name: "nonces",
//         outputs: [{internalType: "uint256", name: "", type: "uint256"}],
//         stateMutability: "view",
//         type: "function",
//     },
//     {
//         inputs: [],
//         name: "owner",
//         outputs: [{internalType: "address", name: "", type: "address"}],
//         stateMutability: "view",
//         type: "function",
//     },
//     {
//         inputs: [],
//         name: "pause",
//         outputs: [],
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     {
//         inputs: [],
//         name: "paused",
//         outputs: [{internalType: "bool", name: "", type: "bool"}],
//         stateMutability: "view",
//         type: "function",
//     },
//     {
//         inputs: [],
//         name: "pauser",
//         outputs: [{internalType: "address", name: "", type: "address"}],
//         stateMutability: "view",
//         type: "function",
//     },
//     {
//         inputs: [
//             {internalType: "address", name: "owner", type: "address"},
//             {
//                 internalType: "address",
//                 name: "spender",
//                 type: "address",
//             },
//             {internalType: "uint256", name: "value", type: "uint256"},
//             {
//                 internalType: "uint256",
//                 name: "deadline",
//                 type: "uint256",
//             },
//             {internalType: "uint8", name: "v", type: "uint8"},
//             {
//                 internalType: "bytes32",
//                 name: "r",
//                 type: "bytes32",
//             },
//             {internalType: "bytes32", name: "s", type: "bytes32"},
//         ],
//         name: "permit",
//         outputs: [],
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     {
//         inputs: [
//             {internalType: "address", name: "from", type: "address"},
//             {
//                 internalType: "address",
//                 name: "to",
//                 type: "address",
//             },
//             {internalType: "uint256", name: "value", type: "uint256"},
//             {
//                 internalType: "uint256",
//                 name: "validAfter",
//                 type: "uint256",
//             },
//             {internalType: "uint256", name: "validBefore", type: "uint256"},
//             {
//                 internalType: "bytes32",
//                 name: "nonce",
//                 type: "bytes32",
//             },
//             {internalType: "uint8", name: "v", type: "uint8"},
//             {
//                 internalType: "bytes32",
//                 name: "r",
//                 type: "bytes32",
//             },
//             {internalType: "bytes32", name: "s", type: "bytes32"},
//         ],
//         name: "receiveWithAuthorization",
//         outputs: [],
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     {
//         inputs: [{internalType: "address", name: "minter", type: "address"}],
//         name: "removeMinter",
//         outputs: [{internalType: "bool", name: "", type: "bool"}],
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     {
//         inputs: [
//             {
//                 internalType: "contract IERC20",
//                 name: "tokenContract",
//                 type: "address",
//             },
//             {internalType: "address", name: "to", type: "address"},
//             {
//                 internalType: "uint256",
//                 name: "amount",
//                 type: "uint256",
//             },
//         ],
//         name: "rescueERC20",
//         outputs: [],
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     {
//         inputs: [],
//         name: "rescuer",
//         outputs: [{internalType: "address", name: "", type: "address"}],
//         stateMutability: "view",
//         type: "function",
//     },
//     {
//         inputs: [],
//         name: "symbol",
//         outputs: [{internalType: "string", name: "", type: "string"}],
//         stateMutability: "view",
//         type: "function",
//     },
//     {
//         inputs: [],
//         name: "totalSupply",
//         outputs: [{internalType: "uint256", name: "", type: "uint256"}],
//         stateMutability: "view",
//         type: "function",
//     },
//     {
//         inputs: [
//             {internalType: "address", name: "to", type: "address"},
//             {
//                 internalType: "uint256",
//                 name: "value",
//                 type: "uint256",
//             },
//         ],
//         name: "transfer",
//         outputs: [{internalType: "bool", name: "", type: "bool"}],
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     {
//         inputs: [
//             {internalType: "address", name: "from", type: "address"},
//             {
//                 internalType: "address",
//                 name: "to",
//                 type: "address",
//             },
//             {internalType: "uint256", name: "value", type: "uint256"},
//         ],
//         name: "transferFrom",
//         outputs: [{internalType: "bool", name: "", type: "bool"}],
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     {
//         inputs: [{internalType: "address", name: "newOwner", type: "address"}],
//         name: "transferOwnership",
//         outputs: [],
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     {
//         inputs: [
//             {internalType: "address", name: "from", type: "address"},
//             {
//                 internalType: "address",
//                 name: "to",
//                 type: "address",
//             },
//             {internalType: "uint256", name: "value", type: "uint256"},
//             {
//                 internalType: "uint256",
//                 name: "validAfter",
//                 type: "uint256",
//             },
//             {internalType: "uint256", name: "validBefore", type: "uint256"},
//             {
//                 internalType: "bytes32",
//                 name: "nonce",
//                 type: "bytes32",
//             },
//             {internalType: "uint8", name: "v", type: "uint8"},
//             {
//                 internalType: "bytes32",
//                 name: "r",
//                 type: "bytes32",
//             },
//             {internalType: "bytes32", name: "s", type: "bytes32"},
//         ],
//         name: "transferWithAuthorization",
//         outputs: [],
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     {
//         inputs: [{internalType: "address", name: "_account", type: "address"}],
//         name: "unBlacklist",
//         outputs: [],
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     {
//         inputs: [],
//         name: "unpause",
//         outputs: [],
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     {
//         inputs: [{internalType: "address", name: "_newBlacklister", type: "address"}],
//         name: "updateBlacklister",
//         outputs: [],
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     {
//         inputs: [{internalType: "address", name: "_newMasterMinter", type: "address"}],
//         name: "updateMasterMinter",
//         outputs: [],
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     {
//         inputs: [{internalType: "address", name: "_newPauser", type: "address"}],
//         name: "updatePauser",
//         outputs: [],
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     {
//         inputs: [{internalType: "address", name: "newRescuer", type: "address"}],
//         name: "updateRescuer",
//         outputs: [],
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     {
//         inputs: [],
//         name: "version",
//         outputs: [{internalType: "string", name: "", type: "string"}],
//         stateMutability: "view",
//         type: "function",
//     },
// ]
// export const streamContractAddress = '0xa4173D36929ff39d81cF7fCED3B9F45251B440ac'
export const streamContractAddress = '0x3207E5e7B70B911b8C3884528aE356EE541Bc9F2'

// export const streamContractABI = [
//     {
//         "inputs": [{"internalType": "address", "name": "_history", "type": "address"}],
//         "stateMutability": "nonpayable",
//         "type": "constructor"
//     }, {
//         "inputs": [{"internalType": "address", "name": "target", "type": "address"}],
//         "name": "AddressEmptyCode",
//         "type": "error"
//     }, {
//         "inputs": [{"internalType": "address", "name": "account", "type": "address"}],
//         "name": "AddressInsufficientBalance",
//         "type": "error"
//     }, {"inputs": [], "name": "FailedInnerCall", "type": "error"}, {
//         "inputs": [{
//             "internalType": "address",
//             "name": "token",
//             "type": "address"
//         }], "name": "SafeERC20FailedOperation", "type": "error"
//     }, {
//         "anonymous": false,
//         "inputs": [{
//             "indexed": true,
//             "internalType": "address",
//             "name": "previousOwner",
//             "type": "address"
//         }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
//         "name": "OwnershipTransferred",
//         "type": "event"
//     }, {
//         "anonymous": false,
//         "inputs": [{"indexed": false, "internalType": "address", "name": "account", "type": "address"}],
//         "name": "Paused",
//         "type": "event"
//     }, {
//         "anonymous": false,
//         "inputs": [{"indexed": false, "internalType": "address", "name": "account", "type": "address"}],
//         "name": "Unpaused",
//         "type": "event"
//     }, {
//         "anonymous": false,
//         "inputs": [{"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}, {
//             "indexed": true,
//             "internalType": "address",
//             "name": "reciver",
//             "type": "address"
//         }],
//         "name": "withdrawFee",
//         "type": "event"
//     }, {
//         "inputs": [],
//         "name": "Ierc20permitusdc",
//         "outputs": [{"internalType": "contract IERC20PermitUSDC", "name": "", "type": "address"}],
//         "stateMutability": "view",
//         "type": "function"
//     }, {
//         "inputs": [{"internalType": "uint256", "name": "streamId", "type": "uint256"}, {
//             "internalType": "address",
//             "name": "who",
//             "type": "address"
//         }],
//         "name": "balanceOf",
//         "outputs": [{"internalType": "uint256", "name": "balance", "type": "uint256"}],
//         "stateMutability": "view",
//         "type": "function"
//     }, {
//         "inputs": [],
//         "name": "bank",
//         "outputs": [{"internalType": "address", "name": "", "type": "address"}],
//         "stateMutability": "view",
//         "type": "function"
//     }, {
//         "inputs": [{"internalType": "uint256", "name": "streamId", "type": "uint256"}],
//         "name": "cancelStream",
//         "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     }, {
//         "inputs": [{"internalType": "uint256", "name": "_newFeeRate", "type": "uint256"}],
//         "name": "changeFeeRate",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     }, {
//         "inputs": [],
//         "name": "contractFeeBalance",
//         "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
//         "stateMutability": "view",
//         "type": "function"
//     }, {
//         "inputs": [{
//             "components": [{
//                 "internalType": "uint256",
//                 "name": "deposit",
//                 "type": "uint256"
//             }, {"internalType": "address", "name": "recipient", "type": "address"}, {
//                 "internalType": "address",
//                 "name": "sender",
//                 "type": "address"
//             }, {"internalType": "uint64[2]", "name": "time", "type": "uint64[2]"}, {
//                 "internalType": "uint8",
//                 "name": "whoCancel",
//                 "type": "uint8"
//             }, {"internalType": "uint128", "name": "rate", "type": "uint128"}],
//             "internalType": "struct IHistory.StreamDetails",
//             "name": "streamDetails",
//             "type": "tuple"
//         }, {
//             "components": [{"internalType": "uint8", "name": "v", "type": "uint8"}, {
//                 "internalType": "bytes32",
//                 "name": "r",
//                 "type": "bytes32"
//             }, {"internalType": "bytes32", "name": "s", "type": "bytes32"}, {
//                 "internalType": "uint256",
//                 "name": "deadline",
//                 "type": "uint256"
//             }, {"internalType": "uint256", "name": "value2", "type": "uint256"}],
//             "internalType": "struct MyStream.Sig",
//             "name": "sig",
//             "type": "tuple"
//         }, {"internalType": "uint64", "name": "duration", "type": "uint64"}, {
//             "internalType": "string",
//             "name": "title",
//             "type": "string"
//         }], "name": "createStream_2", "outputs": [], "stateMutability": "nonpayable", "type": "function"
//     }, {
//         "inputs": [],
//         "name": "feeRate",
//         "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
//         "stateMutability": "view",
//         "type": "function"
//     }, {
//         "inputs": [],
//         "name": "forwarder",
//         "outputs": [{"internalType": "address", "name": "", "type": "address"}],
//         "stateMutability": "view",
//         "type": "function"
//     }, {
//         "inputs": [{"internalType": "uint256", "name": "id", "type": "uint256"}],
//         "name": "getStream",
//         "outputs": [{
//             "components": [{
//                 "internalType": "uint256",
//                 "name": "ratePerSecond",
//                 "type": "uint256"
//             }, {"internalType": "uint256", "name": "remainingBalance", "type": "uint256"}, {
//                 "internalType": "uint256",
//                 "name": "remainder",
//                 "type": "uint256"
//             }, {"internalType": "bool", "name": "isEntity", "type": "bool"}],
//             "internalType": "struct MyStream.Stream",
//             "name": "stream",
//             "type": "tuple"
//         }],
//         "stateMutability": "view",
//         "type": "function"
//     }, {
//         "inputs": [],
//         "name": "getTrustedForwarder",
//         "outputs": [{"internalType": "address", "name": "forwarder", "type": "address"}],
//         "stateMutability": "view",
//         "type": "function"
//     }, {
//         "inputs": [],
//         "name": "history",
//         "outputs": [{"internalType": "contract IHistory", "name": "", "type": "address"}],
//         "stateMutability": "view",
//         "type": "function"
//     }, {
//         "inputs": [{"internalType": "address", "name": "forwarder", "type": "address"}],
//         "name": "isTrustedForwarder",
//         "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
//         "stateMutability": "view",
//         "type": "function"
//     }, {
//         "inputs": [],
//         "name": "minDeposit",
//         "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
//         "stateMutability": "view",
//         "type": "function"
//     }, {
//         "inputs": [],
//         "name": "nextStreamId",
//         "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
//         "stateMutability": "view",
//         "type": "function"
//     }, {
//         "inputs": [],
//         "name": "numberOfFeeWithdraws",
//         "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
//         "stateMutability": "view",
//         "type": "function"
//     }, {
//         "inputs": [],
//         "name": "owner",
//         "outputs": [{"internalType": "address", "name": "", "type": "address"}],
//         "stateMutability": "view",
//         "type": "function"
//     }, {"inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {
//         "inputs": [],
//         "name": "paused",
//         "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
//         "stateMutability": "view",
//         "type": "function"
//     }, {
//         "inputs": [{
//             "components": [{"internalType": "uint8", "name": "v", "type": "uint8"}, {
//                 "internalType": "bytes32",
//                 "name": "r",
//                 "type": "bytes32"
//             }, {"internalType": "bytes32", "name": "s", "type": "bytes32"}, {
//                 "internalType": "uint256",
//                 "name": "deadline",
//                 "type": "uint256"
//             }, {"internalType": "uint256", "name": "value2", "type": "uint256"}],
//             "internalType": "struct MyStream.Sig",
//             "name": "sig",
//             "type": "tuple"
//         }], "name": "permitUSDC", "outputs": [], "stateMutability": "nonpayable", "type": "function"
//     }, {
//         "inputs": [],
//         "name": "renounceOwnership",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     }, {
//         "inputs": [{"internalType": "address", "name": "_newBank", "type": "address"}],
//         "name": "setBank",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     }, {
//         "inputs": [{"internalType": "address", "name": "_newForwarder", "type": "address"}],
//         "name": "setForwarder",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     }, {
//         "inputs": [{"internalType": "uint256", "name": "_withDrawFee", "type": "uint256"}],
//         "name": "setWithdrawFee",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     }, {
//         "inputs": [],
//         "name": "token",
//         "outputs": [{"internalType": "contract IERC20", "name": "", "type": "address"}],
//         "stateMutability": "view",
//         "type": "function"
//     }, {
//         "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
//         "name": "transferOwnership",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     }, {"inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {
//         "inputs": [],
//         "name": "versionRecipient",
//         "outputs": [{"internalType": "string", "name": "", "type": "string"}],
//         "stateMutability": "view",
//         "type": "function"
//     }, {
//         "inputs": [],
//         "name": "withDrawFee",
//         "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
//         "stateMutability": "view",
//         "type": "function"
//     }, {
//         "inputs": [{"internalType": "uint256", "name": "amount", "type": "uint256"}, {
//             "internalType": "address",
//             "name": "reciver",
//             "type": "address"
//         }],
//         "name": "withdrawFeeForHolders",
//         "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     }, {
//         "inputs": [{"internalType": "uint256", "name": "streamId", "type": "uint256"}],
//         "name": "withdrawFromStream",
//         "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     }, {
//         "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
//         "name": "withdraws",
//         "outputs": [{"internalType": "uint256", "name": "amount", "type": "uint256"}, {
//             "internalType": "uint256",
//             "name": "time",
//             "type": "uint256"
//         }, {"internalType": "address", "name": "who", "type": "address"}],
//         "stateMutability": "view",
//         "type": "function"
//     }]
export const streamContractABI = [
  {
    "constant": false,
    "inputs": [{"indexed": false, "internalType": "address", "name": "_history", "type": "address"}, {
      "indexed": false,
      "internalType": "contract ERC2771Forwarder",
      "name": "forwarder",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }, {
    "constant": false,
    "inputs": [{"indexed": false, "internalType": "address", "name": "target", "type": "address"}],
    "name": "AddressEmptyCode",
    "payable": false,
    "type": "error"
  }, {"constant": false, "inputs": [], "name": "FailedCall", "payable": false, "type": "error"}, {
    "constant": false,
    "inputs": [{"indexed": false, "internalType": "uint256", "name": "balance", "type": "uint256"}, {
      "indexed": false,
      "internalType": "uint256",
      "name": "needed",
      "type": "uint256"
    }],
    "name": "InsufficientBalance",
    "payable": false,
    "type": "error"
  }, {
    "constant": false,
    "inputs": [{"indexed": false, "internalType": "address", "name": "token", "type": "address"}],
    "name": "SafeERC20FailedOperation",
    "payable": false,
    "type": "error"
  }, {
    "constant": false,
    "inputs": [{"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}, {
      "indexed": true,
      "internalType": "address",
      "name": "reciver",
      "type": "address"
    }],
    "name": "withdrawFee",
    "payable": false,
    "type": "event"
  }, {
    "constant": false,
    "inputs": [],
    "name": "Ierc20permitusdc",
    "outputs": [{"internalType": "contract IERC20PermitUSDC", "name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"indexed": false, "internalType": "uint256", "name": "streamId", "type": "uint256"}, {
      "indexed": false,
      "internalType": "uint256",
      "name": "rate",
      "type": "uint256"
    }],
    "name": "addRateToHistory",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"indexed": false, "internalType": "uint256", "name": "streamId", "type": "uint256"}, {
      "indexed": false,
      "internalType": "address",
      "name": "who",
      "type": "address"
    }],
    "name": "balanceOf",
    "outputs": [{"internalType": "uint256", "name": "balance", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "bank",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"indexed": false, "internalType": "uint256", "name": "streamId", "type": "uint256"}],
    "name": "cancelStream",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"indexed": false, "internalType": "uint256", "name": "_newFeeRate", "type": "uint256"}],
    "name": "changeFeeRate",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "contractFeeBalance",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "components": [{"name": "deposit", "type": "uint256"}, {
        "name": "recipient",
        "type": "address"
      }, {"name": "sender", "type": "address"}, {"name": "time", "type": "uint64[3]"}, {
        "name": "whoCancel",
        "type": "uint8"
      }], "indexed": false, "internalType": "struct IHistory.StreamDetails", "name": "streamDetails", "type": "tuple"
    }, {
      "components": [{"name": "v", "type": "uint8"}, {"name": "r", "type": "bytes32"}, {
        "name": "s",
        "type": "bytes32"
      }, {"name": "deadline", "type": "uint256"}, {"name": "value2", "type": "uint256"}],
      "indexed": false,
      "internalType": "struct MyStream.Sig",
      "name": "sig",
      "type": "tuple"
    }, {"indexed": false, "internalType": "string", "name": "title", "type": "string"}],
    "name": "createStream",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"indexed": false, "internalType": "uint256", "name": "streamId", "type": "uint256"}],
    "name": "deltaOf",
    "outputs": [{"internalType": "uint256", "name": "delta", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "feeRate",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"indexed": false, "internalType": "uint256", "name": "id", "type": "uint256"}],
    "name": "getStream",
    "outputs": [{
      "components": [{"name": "ratePerSecond", "type": "uint256"}, {
        "name": "remainingBalance",
        "type": "uint256"
      }, {"name": "remainder", "type": "uint256"}, {"name": "withdrawalAmount", "type": "uint256"}, {
        "name": "duration",
        "type": "uint256"
      }, {"name": "isEntity", "type": "bool"}],
      "internalType": "struct MyStream.Stream",
      "name": "stream",
      "type": "tuple"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "history",
    "outputs": [{"internalType": "contract IHistory", "name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"indexed": false, "internalType": "address", "name": "forwarder", "type": "address"}],
    "name": "isTrustedForwarder",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "minDeposit",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "nextStreamId",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "numberOfFeeWithdraws",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "owner",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "components": [{"name": "v", "type": "uint8"}, {"name": "r", "type": "bytes32"}, {
        "name": "s",
        "type": "bytes32"
      }, {"name": "deadline", "type": "uint256"}, {"name": "value2", "type": "uint256"}],
      "indexed": false,
      "internalType": "struct MyStream.Sig",
      "name": "sig",
      "type": "tuple"
    }],
    "name": "permitUSDC",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"indexed": false, "internalType": "address", "name": "_newBank", "type": "address"}],
    "name": "setBank",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"indexed": false, "internalType": "uint256", "name": "_withDrawFee", "type": "uint256"}],
    "name": "setWithdrawFee",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "token",
    "outputs": [{"internalType": "contract IERC20", "name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "trustedForwarder",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "withDrawFee",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}, {
      "indexed": false,
      "internalType": "address",
      "name": "reciver",
      "type": "address"
    }],
    "name": "withdrawFeeForHolders",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"indexed": false, "internalType": "uint256", "name": "streamId", "type": "uint256"}],
    "name": "withdrawFromStream",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"indexed": false, "internalType": "uint256", "name": "", "type": "uint256"}],
    "name": "withdraws",
    "outputs": [{"internalType": "uint256", "name": "amount", "type": "uint256"}, {
      "internalType": "uint256",
      "name": "time",
      "type": "uint256"
    }, {"internalType": "address", "name": "who", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }]

// export const historyContractAddress = '0xcbfeeE16bfcAFb5A0a60745b5cE3Ad7162D4E808'
export const historyContractAddress = '0xaC3Ecf7293005293443880f0aFcd22e6Dd6B3461'

// export const historyContractABI = [
//     {
//         "anonymous": false,
//         "inputs": [{
//             "indexed": true,
//             "internalType": "address",
//             "name": "previousOwner",
//             "type": "address"
//         }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
//         "name": "OwnershipTransferred",
//         "type": "event"
//     }, {
//         "inputs": [{"internalType": "uint256", "name": "_id", "type": "uint256"}, {
//             "internalType": "uint256",
//             "name": "_amount",
//             "type": "uint256"
//         }], "name": "addCancel", "outputs": [], "stateMutability": "nonpayable", "type": "function"
//     }, {
//         "inputs": [{
//             "internalType": "uint256",
//             "name": "streamId",
//             "type": "uint256"
//         }, {
//             "components": [{
//                 "internalType": "uint256",
//                 "name": "deposit",
//                 "type": "uint256"
//             }, {"internalType": "address", "name": "recipient", "type": "address"}, {
//                 "internalType": "address",
//                 "name": "sender",
//                 "type": "address"
//             }, {"internalType": "uint64[2]", "name": "time", "type": "uint64[2]"}, {
//                 "internalType": "uint8",
//                 "name": "whoCancel",
//                 "type": "uint8"
//             }, {"internalType": "uint128", "name": "rate", "type": "uint128"}, {
//                 "internalType": "uint128",
//                 "name": "duration",
//                 "type": "uint128"
//             }], "internalType": "struct History.StreamDetails", "name": "streamDetails", "type": "tuple"
//         }, {"internalType": "string", "name": "title", "type": "string"}],
//         "name": "addStream",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     }, {
//         "inputs": [{"internalType": "uint256", "name": "_id", "type": "uint256"}, {
//             "internalType": "uint256",
//             "name": "_amount",
//             "type": "uint256"
//         }], "name": "addWithdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function"
//     }, {
//         "inputs": [{"internalType": "address", "name": "", "type": "address"}, {
//             "internalType": "uint256",
//             "name": "",
//             "type": "uint256"
//         }],
//         "name": "addressIds",
//         "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
//         "stateMutability": "view",
//         "type": "function"
//     }, {
//         "inputs": [{"internalType": "address", "name": "_newStreamContract", "type": "address"}],
//         "name": "changeStreamContract",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     }, {
//         "inputs": [{"internalType": "uint256", "name": "_id", "type": "uint256"}],
//         "name": "getHistoryStream",
//         "outputs": [{
//             "components": [{
//                 "internalType": "uint256",
//                 "name": "deposit",
//                 "type": "uint256"
//             }, {"internalType": "uint64", "name": "startTime", "type": "uint64"}, {
//                 "internalType": "uint64",
//                 "name": "stopTime",
//                 "type": "uint64"
//             }, {"internalType": "uint64", "name": "cancelTime", "type": "uint64"}, {
//                 "internalType": "uint256",
//                 "name": "recipientAmountOnCancel",
//                 "type": "uint256"
//             }, {"internalType": "address", "name": "sender", "type": "address"}, {
//                 "internalType": "uint32",
//                 "name": "numberOfWithdraws",
//                 "type": "uint32"
//             }, {"internalType": "address", "name": "recipient", "type": "address"}, {
//                 "internalType": "uint8",
//                 "name": "status",
//                 "type": "uint8"
//             }, {"internalType": "uint8", "name": "whoCancel", "type": "uint8"}, {
//                 "internalType": "uint128",
//                 "name": "ratePerSecond",
//                 "type": "uint128"
//             }, {"internalType": "string", "name": "purpose", "type": "string"}],
//             "internalType": "struct History.StreamHistory",
//             "name": "streamHistory",
//             "type": "tuple"
//         }],
//         "stateMutability": "view",
//         "type": "function"
//     }, {
//         "inputs": [{"internalType": "address", "name": "_user", "type": "address"}],
//         "name": "getNumberOfArray",
//         "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
//         "stateMutability": "view",
//         "type": "function"
//     }, {
//         "inputs": [],
//         "name": "getStreamCounter",
//         "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
//         "stateMutability": "view",
//         "type": "function"
//     }, {
//         "inputs": [{"internalType": "uint256", "name": "_id", "type": "uint256"}],
//         "name": "getStreamToken",
//         "outputs": [{"internalType": "address", "name": "", "type": "address"}],
//         "stateMutability": "view",
//         "type": "function"
//     }, {
//         "inputs": [],
//         "name": "owner",
//         "outputs": [{"internalType": "address", "name": "", "type": "address"}],
//         "stateMutability": "view",
//         "type": "function"
//     }, {
//         "inputs": [],
//         "name": "renounceOwnership",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     }, {
//         "inputs": [],
//         "name": "streamContract",
//         "outputs": [{"internalType": "contract IStream", "name": "", "type": "address"}],
//         "stateMutability": "view",
//         "type": "function"
//     }, {
//         "inputs": [],
//         "name": "streamCounter",
//         "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
//         "stateMutability": "view",
//         "type": "function"
//     }, {
//         "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
//         "name": "streams",
//         "outputs": [{"internalType": "uint256", "name": "deposit", "type": "uint256"}, {
//             "internalType": "uint64",
//             "name": "startTime",
//             "type": "uint64"
//         }, {"internalType": "uint64", "name": "stopTime", "type": "uint64"}, {
//             "internalType": "uint64",
//             "name": "cancelTime",
//             "type": "uint64"
//         }, {
//             "internalType": "uint256",
//             "name": "recipientAmountOnCancel",
//             "type": "uint256"
//         }, {"internalType": "address", "name": "sender", "type": "address"}, {
//             "internalType": "uint32",
//             "name": "numberOfWithdraws",
//             "type": "uint32"
//         }, {"internalType": "address", "name": "recipient", "type": "address"}, {
//             "internalType": "uint8",
//             "name": "status",
//             "type": "uint8"
//         }, {"internalType": "uint8", "name": "whoCancel", "type": "uint8"}, {
//             "internalType": "uint128",
//             "name": "ratePerSecond",
//             "type": "uint128"
//         }, {"internalType": "string", "name": "purpose", "type": "string"}],
//         "stateMutability": "view",
//         "type": "function"
//     }, {
//         "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
//         "name": "transferOwnership",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     }, {
//         "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}, {
//             "internalType": "uint256",
//             "name": "",
//             "type": "uint256"
//         }],
//         "name": "withdraws",
//         "outputs": [{"internalType": "uint256", "name": "amount", "type": "uint256"}, {
//             "internalType": "uint256",
//             "name": "timeW",
//             "type": "uint256"
//         }],
//         "stateMutability": "view",
//         "type": "function"
//     }]
export const historyContractABI = [
  {
    "constant": false,
    "inputs": [{
      "indexed": true,
      "internalType": "address",
      "name": "previousOwner",
      "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "OwnershipTransferred",
    "payable": false,
    "type": "event"
  }, {
    "constant": false,
    "inputs": [{"indexed": false, "internalType": "uint256", "name": "_id", "type": "uint256"}, {
      "indexed": false,
      "internalType": "uint256",
      "name": "_amount",
      "type": "uint256"
    }],
    "name": "addCancel",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "indexed": false,
      "internalType": "uint256",
      "name": "streamId",
      "type": "uint256"
    }, {
      "components": [{"name": "deposit", "type": "uint256"}, {
        "name": "recipient",
        "type": "address"
      }, {"name": "sender", "type": "address"}, {"name": "time", "type": "uint64[3]"}, {
        "name": "whoCancel",
        "type": "uint8"
      }], "indexed": false, "internalType": "struct History.StreamDetails", "name": "streamDetails", "type": "tuple"
    }, {"indexed": false, "internalType": "string", "name": "title", "type": "string"}],
    "name": "addStream",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"indexed": false, "internalType": "uint256", "name": "_id", "type": "uint256"}, {
      "indexed": false,
      "internalType": "uint256",
      "name": "_amount",
      "type": "uint256"
    }],
    "name": "addWithdraw",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"indexed": false, "internalType": "address", "name": "", "type": "address"}, {
      "indexed": false,
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "name": "addressIds",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"indexed": false, "internalType": "address", "name": "_newStreamContract", "type": "address"}],
    "name": "changeStreamContract",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"indexed": false, "internalType": "uint256", "name": "_id", "type": "uint256"}],
    "name": "getHistoryStream",
    "outputs": [{
      "components": [{"name": "deposit", "type": "uint256"}, {
        "name": "startTime",
        "type": "uint64"
      }, {"name": "stopTime", "type": "uint64"}, {"name": "blockTime", "type": "uint64"}, {
        "name": "cancelTime",
        "type": "uint64"
      }, {"name": "recipientAmountOnCancel", "type": "uint256"}, {
        "name": "sender",
        "type": "address"
      }, {"name": "numberOfWithdraws", "type": "uint32"}, {"name": "recipient", "type": "address"}, {
        "name": "status",
        "type": "uint8"
      }, {"name": "whoCancel", "type": "uint8"}, {"name": "purpose", "type": "string"}],
      "internalType": "struct History.StreamHistory",
      "name": "streamHistory",
      "type": "tuple"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"indexed": false, "internalType": "address", "name": "_user", "type": "address"}],
    "name": "getNumberOfArray",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "getStreamCounter",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "owner",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "streamContract",
    "outputs": [{"internalType": "contract IStream", "name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "streamCounter",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"indexed": false, "internalType": "uint256", "name": "", "type": "uint256"}],
    "name": "streams",
    "outputs": [{"internalType": "uint256", "name": "deposit", "type": "uint256"}, {
      "internalType": "uint64",
      "name": "startTime",
      "type": "uint64"
    }, {"internalType": "uint64", "name": "stopTime", "type": "uint64"}, {
      "internalType": "uint64",
      "name": "blockTime",
      "type": "uint64"
    }, {"internalType": "uint64", "name": "cancelTime", "type": "uint64"}, {
      "internalType": "uint256",
      "name": "recipientAmountOnCancel",
      "type": "uint256"
    }, {"internalType": "address", "name": "sender", "type": "address"}, {
      "internalType": "uint32",
      "name": "numberOfWithdraws",
      "type": "uint32"
    }, {"internalType": "address", "name": "recipient", "type": "address"}, {
      "internalType": "uint8",
      "name": "status",
      "type": "uint8"
    }, {"internalType": "uint8", "name": "whoCancel", "type": "uint8"}, {
      "internalType": "string",
      "name": "purpose",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"indexed": false, "internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"indexed": false, "internalType": "uint256", "name": "", "type": "uint256"}, {
      "indexed": false,
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "name": "withdraws",
    "outputs": [{"internalType": "uint256", "name": "amount", "type": "uint256"}, {
      "internalType": "uint256",
      "name": "timeW",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }]

export const gsnPaymasterAddress = "0x3E663e989ad138ae750646A75EA5665d171eBE51"

export const ERC2771ForwarderAddress = '0x915Ac16548C17A952ca0f544752a554c4896182a'; // AMOY
export const ERC2771ForwarderABI = [
  {
    "inputs": [{"indexed": false, "internalType": "string", "name": "name", "type": "string"}],
    "stateMutability": "nonpayable",
    "type": "constructor"
  }, {
    "inputs": [{"indexed": false, "internalType": "uint48", "name": "deadline", "type": "uint48"}],
    "name": "ERC2771ForwarderExpiredRequest",
    "type": "error"
  }, {
    "inputs": [{"indexed": false, "internalType": "address", "name": "signer", "type": "address"}, {
      "indexed": false,
      "internalType": "address",
      "name": "from",
      "type": "address"
    }],
    "name": "ERC2771ForwarderInvalidSigner",
    "type": "error"
  }, {
    "inputs": [{
      "indexed": false,
      "internalType": "uint256",
      "name": "requestedValue",
      "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "msgValue", "type": "uint256"}],
    "name": "ERC2771ForwarderMismatchedValue",
    "type": "error"
  }, {
    "inputs": [{"indexed": false, "internalType": "address", "name": "target", "type": "address"}, {
      "indexed": false,
      "internalType": "address",
      "name": "forwarder",
      "type": "address"
    }],
    "name": "ERC2771UntrustfulTarget",
    "type": "error"
  }, {"inputs": [], "name": "FailedCall", "type": "error"}, {
    "inputs": [{"indexed": false, "internalType": "uint256", "name": "balance", "type": "uint256"}, {
      "indexed": false,
      "internalType": "uint256",
      "name": "needed",
      "type": "uint256"
    }],
    "name": "InsufficientBalance",
    "type": "error"
  }, {
    "inputs": [{"indexed": false, "internalType": "address", "name": "account", "type": "address"}, {
      "indexed": false,
      "internalType": "uint256",
      "name": "currentNonce",
      "type": "uint256"
    }],
    "name": "InvalidAccountNonce",
    "type": "error"
  }, {
    "inputs": [],
    "name": "InvalidShortString",
    "type": "error"
  }, {
    "inputs": [{"indexed": false, "internalType": "string", "name": "str", "type": "string"}],
    "name": "StringTooLong",
    "type": "error"
  }, {
    "inputs": [],
    "name": "EIP712DomainChanged",
    "type": "event"
  }, {
    "inputs": [{"indexed": true, "internalType": "address", "name": "signer", "type": "address"}, {
      "indexed": false,
      "internalType": "uint256",
      "name": "nonce",
      "type": "uint256"
    }, {"indexed": false, "internalType": "bool", "name": "success", "type": "bool"}],
    "name": "ExecutedForwardRequest",
    "type": "event"
  }, {
    "inputs": [],
    "name": "eip712Domain",
    "outputs": [{"internalType": "bytes1", "name": "fields", "type": "bytes1"}, {
      "internalType": "string",
      "name": "name",
      "type": "string"
    }, {"internalType": "string", "name": "version", "type": "string"}, {
      "internalType": "uint256",
      "name": "chainId",
      "type": "uint256"
    }, {"internalType": "address", "name": "verifyingContract", "type": "address"}, {
      "internalType": "bytes32",
      "name": "salt",
      "type": "bytes32"
    }, {"internalType": "uint256[]", "name": "extensions", "type": "uint256[]"}],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [
      {
        "components": [
          {"name": "from", "type": "address"},
          {"name": "to", "type": "address"},
          {"name": "value", "type": "uint256"},
          {"name": "gas", "type": "uint256"},
          {"name": "deadline", "type": "uint48"},
          {"name": "data", "type": "bytes"},
          {"name": "signature", "type": "bytes"}
        ],
        "indexed": false,
        "internalType": "struct ERC2771Forwarder.ForwardRequestData",
        "name": "request",
        "type": "tuple"
      }],
    "name": "execute",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }, {
    "inputs": [{
      "components": [{"name": "from", "type": "address"}, {"name": "to", "type": "address"}, {
        "name": "value",
        "type": "uint256"
      }, {"name": "gas", "type": "uint256"}, {"name": "deadline", "type": "uint48"}, {
        "name": "data",
        "type": "bytes"
      }, {"name": "signature", "type": "bytes"}],
      "indexed": false,
      "internalType": "struct ERC2771Forwarder.ForwardRequestData[]",
      "name": "requests",
      "type": "tuple[]"
    }, {"indexed": false, "internalType": "address payable", "name": "refundReceiver", "type": "address"}],
    "name": "executeBatch",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }, {
    "inputs": [{"indexed": false, "internalType": "address", "name": "owner", "type": "address"}],
    "name": "nonces",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "components": [{"name": "from", "type": "address"}, {"name": "to", "type": "address"}, {
        "name": "value",
        "type": "uint256"
      }, {"name": "gas", "type": "uint256"}, {"name": "deadline", "type": "uint48"}, {
        "name": "data",
        "type": "bytes"
      }, {"name": "signature", "type": "bytes"}],
      "indexed": false,
      "internalType": "struct ERC2771Forwarder.ForwardRequestData",
      "name": "request",
      "type": "tuple"
    }],
    "name": "verify",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
  }]
// export const ERC2771ForwarderABI = [
//   {
//     inputs: [
//       {
//         internalType: 'string',
//         name: 'name',
//         type: 'string',
//       },
//     ],
//     stateMutability: 'nonpayable',
//     type: 'constructor',
//   }, {
//     inputs: [
//       {
//         internalType: 'uint48',
//         name: 'deadline',
//         type: 'uint48',
//       },
//     ],
//     name: 'ERC2771ForwarderExpiredRequest',
//     type: 'error',
//   }, {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'signer',
//         type: 'address',
//       },
//       {
//         internalType: 'address',
//         name: 'from',
//         type: 'address',
//       },
//     ],
//     name: 'ERC2771ForwarderInvalidSigner',
//     type: 'error',
//   }, {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: 'requestedValue',
//         type: 'uint256',
//       },
//       {
//         internalType: 'uint256',
//         name: 'msgValue',
//         type: 'uint256',
//       },
//     ],
//     name: 'ERC2771ForwarderMismatchedValue',
//     type: 'error',
//   }, {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'target',
//         type: 'address',
//       },
//       {
//         internalType: 'address',
//         name: 'forwarder',
//         type: 'address',
//       },
//     ],
//     name: 'ERC2771UntrustfulTarget',
//     type: 'error',
//   }, {
//     inputs: [],
//     name: 'FailedCall',
//     type: 'error',
//   }, {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: 'balance',
//         type: 'uint256',
//       },
//       {
//         internalType: 'uint256',
//         name: 'needed',
//         type: 'uint256',
//       },
//     ],
//     name: 'InsufficientBalance',
//     type: 'error',
//   }, {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'account',
//         type: 'address',
//       },
//       {
//         internalType: 'uint256',
//         name: 'currentNonce',
//         type: 'uint256',
//       },
//     ],
//     name: 'InvalidAccountNonce',
//     type: 'error',
//   }, {
//     inputs: [],
//     name: 'InvalidShortString',
//     type: 'error',
//   }, {
//     inputs: [
//       {
//         internalType: 'string',
//         name: 'str',
//         type: 'string',
//       },
//     ],
//     name: 'StringTooLong',
//     type: 'error',
//   }, {
//     anonymous: false,
//     inputs: [],
//     name: 'EIP712DomainChanged',
//     type: 'event',
//   }, {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: 'address',
//         name: 'signer',
//         type: 'address',
//       },
//       {
//         indexed: false,
//         internalType: 'uint256',
//         name: 'nonce',
//         type: 'uint256',
//       },
//       {
//         indexed: false,
//         internalType: 'bool',
//         name: 'success',
//         type: 'bool',
//       },
//     ],
//     name: 'ExecutedForwardRequest',
//     type: 'event',
//   }, {
//     inputs: [],
//     name: 'eip712Domain',
//     outputs: [
//       {
//         internalType: 'bytes1',
//         name: 'fields',
//         type: 'bytes1',
//       },
//       {
//         internalType: 'string',
//         name: 'name',
//         type: 'string',
//       },
//       {
//         internalType: 'string',
//         name: 'version',
//         type: 'string',
//       },
//       {
//         internalType: 'uint256',
//         name: 'chainId',
//         type: 'uint256',
//       },
//       {
//         internalType: 'address',
//         name: 'verifyingContract',
//         type: 'address',
//       },
//       {
//         internalType: 'bytes32',
//         name: 'salt',
//         type: 'bytes32',
//       },
//       {
//         internalType: 'uint256[]',
//         name: 'extensions',
//         type: 'uint256[]',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   }, {
//     inputs: [
//       {
//         components: [
//           {
//             internalType: 'address',
//             name: 'from',
//             type: 'address',
//           },
//           {
//             internalType: 'address',
//             name: 'to',
//             type: 'address',
//           },
//           {
//             internalType: 'uint256',
//             name: 'value',
//             type: 'uint256',
//           },
//           {
//             internalType: 'uint256',
//             name: 'gas',
//             type: 'uint256',
//           },
//           {
//             internalType: 'uint48',
//             name: 'deadline',
//             type: 'uint48',
//           },
//           {
//             internalType: 'bytes',
//             name: 'data',
//             type: 'bytes',
//           },
//           {
//             internalType: 'bytes',
//             name: 'signature',
//             type: 'bytes',
//           },
//         ],
//         internalType: 'struct ERC2771Forwarder.ForwardRequestData',
//         name: 'request',
//         type: 'tuple',
//       },
//     ],
//     name: 'execute',
//     outputs: [],
//     stateMutability: 'payable',
//     type: 'function',
//   }, {
//     inputs: [
//       {
//         components: [
//           {
//             internalType: 'address',
//             name: 'from',
//             type: 'address',
//           },
//           {
//             internalType: 'address',
//             name: 'to',
//             type: 'address',
//           },
//           {
//             internalType: 'uint256',
//             name: 'value',
//             type: 'uint256',
//           },
//           {
//             internalType: 'uint256',
//             name: 'gas',
//             type: 'uint256',
//           },
//           {
//             internalType: 'uint48',
//             name: 'deadline',
//             type: 'uint48',
//           },
//           {
//             internalType: 'bytes',
//             name: 'data',
//             type: 'bytes',
//           },
//           {
//             internalType: 'bytes',
//             name: 'signature',
//             type: 'bytes',
//           },
//         ],
//         internalType: 'struct ERC2771Forwarder.ForwardRequestData[]',
//         name: 'requests',
//         type: 'tuple[]',
//       },
//       {
//         internalType: 'address payable',
//         name: 'refundReceiver',
//         type: 'address',
//       },
//     ],
//     name: 'executeBatch',
//     outputs: [],
//     stateMutability: 'payable',
//     type: 'function',
//   }, {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'owner',
//         type: 'address',
//       },
//     ],
//     name: 'nonces',
//     outputs: [
//       {
//         internalType: 'uint256',
//         name: '',
//         type: 'uint256',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   }, {
//     inputs: [
//       {
//         components: [
//           {
//             internalType: 'address',
//             name: 'from',
//             type: 'address',
//           },
//           {
//             internalType: 'address',
//             name: 'to',
//             type: 'address',
//           },
//           {
//             internalType: 'uint256',
//             name: 'value',
//             type: 'uint256',
//           },
//           {
//             internalType: 'uint256',
//             name: 'gas',
//             type: 'uint256',
//           },
//           {
//             internalType: 'uint48',
//             name: 'deadline',
//             type: 'uint48',
//           },
//           {
//             internalType: 'bytes',
//             name: 'data',
//             type: 'bytes',
//           },
//           {
//             internalType: 'bytes',
//             name: 'signature',
//             type: 'bytes',
//           },
//         ],
//         internalType: 'struct ERC2771Forwarder.ForwardRequestData',
//         name: 'request',
//         type: 'tuple',
//       },
//     ],
//     name: 'verify',
//     outputs: [
//       {
//         internalType: 'bool',
//         name: '',
//         type: 'bool',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
// ]