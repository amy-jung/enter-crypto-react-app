import web3 from '../web3';

const abi = {
  "contractName": "Identity",
  "abi": [
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "publisherSigned",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_user",
          "type": "address"
        },
        {
          "name": "_registry",
          "type": "address"
        },
        {
          "name": "_fundedAmount",
          "type": "uint256"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "constructor"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Received",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "tokenAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "periodSeconds",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "gasToken",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "gasPrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "gasPayer",
          "type": "address"
        }
      ],
      "name": "ExecuteExecution",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "tokenAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "periodSeconds",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "gasToken",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "gasPrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "gasPayer",
          "type": "address"
        }
      ],
      "name": "FailedExecuteExecution",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipRenounced",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "executionHash",
          "type": "bytes32"
        }
      ],
      "name": "signExecutionHash",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "name": "tokenAmount",
          "type": "uint256"
        },
        {
          "name": "periodSeconds",
          "type": "uint256"
        },
        {
          "name": "gasToken",
          "type": "address"
        },
        {
          "name": "gasPrice",
          "type": "uint256"
        },
        {
          "name": "gasPayer",
          "type": "address"
        }
      ],
      "name": "getExecutionHash",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "executionHash",
          "type": "bytes32"
        },
        {
          "name": "signature",
          "type": "bytes"
        }
      ],
      "name": "getExecutionSigner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "name": "tokenAmount",
          "type": "uint256"
        },
        {
          "name": "periodSeconds",
          "type": "uint256"
        },
        {
          "name": "gasToken",
          "type": "address"
        },
        {
          "name": "gasPrice",
          "type": "uint256"
        },
        {
          "name": "gasPayer",
          "type": "address"
        },
        {
          "name": "signature",
          "type": "bytes"
        }
      ],
      "name": "execute",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x6080604052604051606080610e9483398101604090815281516020830151919092015160008054600160a060020a0319908116331790915560018054600160a060020a0395861690831617905560028054949093169316929092179055600355610e268061006e6000396000f30060806040526004361061008c5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166259698d81146100c45780631b52d9b81461016857806323121669146101e25780634dda969014610239578063715018a61461025157806383c5c93a146102685780638da5cb5b14610280578063f2fde38b14610295575b60408051348152905133917f88a5966d370b9919b20f3e2c13ff65706f196a4e32cc2c12bf57088f88525874919081900360200190a2005b3480156100d057600080fd5b5060408051602060046101043581810135601f8101849004840285018401909552848452610154948235600160a060020a039081169560248035831696604435841696606435966084359660a43587169660c4359660e435909116953695610124949293919092019181908401838280828437509497506102b69650505050505050565b604080519115158252519081900360200190f35b34801561017457600080fd5b5060408051602060046024803582810135601f81018590048502860185019096528585526101c69583359536956044949193909101919081908401838280828437509497506109dd9650505050505050565b60408051600160a060020a039092168252519081900360200190f35b3480156101ee57600080fd5b50610227600160a060020a03600435811690602435811690604435811690606435906084359060a43581169060c4359060e435166109ff565b60408051918252519081900360200190f35b34801561024557600080fd5b50610154600435610b13565b34801561025d57600080fd5b50610266610b4b565b005b34801561027457600080fd5b50610154600435610bb7565b34801561028c57600080fd5b506101c6610bcc565b3480156102a157600080fd5b50610266600160a060020a0360043516610bdb565b6000806000806102cc8d8d8d8d8d8d8d8d6109ff565b92506102d883866109dd565b9150600160a060020a03808316908e161461033d576040805160e560020a62461bcd02815260206004820152601160248201527f496e76616c6964205369676e6174757265000000000000000000000000000000604482015290519081900360640190fd5b604080517f23b872dd000000000000000000000000000000000000000000000000000000008152600160a060020a038f811660048301528e81166024830152604482018d90529151918d16916323b872dd916064808201926020929091908290030181600087803b1580156103b157600080fd5b505af11580156103c5573d6000803e3d6000fd5b505050506040513d60208110156103db57600080fd5b505190508015610493578b600160a060020a03168d600160a060020a03167f3b830cc6db267f2ca5cc6ee903ccfef7e72d7830952990557cccad43b5e8ad118d8d8d8d8d8d6040518087600160a060020a0316600160a060020a0316815260200186815260200185815260200184600160a060020a0316600160a060020a0316815260200183815260200182600160a060020a0316600160a060020a03168152602001965050505050505060405180910390a361053d565b8b600160a060020a03168d600160a060020a03167f75e5ab57aaaec3454cf80f515952895766ae024b6ce2fd793ffa5b5c2a530d6f8d8d8d8d8d8d6040518087600160a060020a0316600160a060020a0316815260200186815260200185815260200184600160a060020a0316600160a060020a0316815260200183815260200182600160a060020a0316600160a060020a03168152602001965050505050505060405180910390a35b60008711156109cd57600160a060020a038816151561069657600054600160a060020a038e811691161480610580575060008381526004602052604090205460ff165b15156105fc576040805160e560020a62461bcd02815260206004820152602b60248201527f5075626c697368657220686173206e6f74207369676e6564207468697320657860448201527f65637574696f6e48617368000000000000000000000000000000000000000000606482015290519081900360840190fd5b6040513390618ca09089906000818181858888f193505050501515610691576040805160e560020a62461bcd02815260206004820152603160248201527f457865637574696f6e20636f6e7472616374206661696c656420746f2070617960448201527f20657468657220746f2072656c61796572000000000000000000000000000000606482015290519081900360840190fd5b6109cd565b600160a060020a0386163014806106b45750600160a060020a038616155b1561084957600054600160a060020a038e8116911614806106e3575060008381526004602052604090205460ff165b151561075f576040805160e560020a62461bcd02815260206004820152602b60248201527f5075626c697368657220686173206e6f74207369676e6564207468697320657860448201527f65637574696f6e48617368000000000000000000000000000000000000000000606482015290519081900360840190fd5b604080517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018990529051600160a060020a038a169163a9059cbb9160448083019260209291908290030181600087803b1580156107c757600080fd5b505af11580156107db573d6000803e3d6000fd5b505050506040513d60208110156107f157600080fd5b50511515610691576040805160e560020a62461bcd02815260206004820152601d60248201527f4661696c656420746f207061792067617320617320636f6e7472616374000000604482015290519081900360640190fd5b8c600160a060020a031686600160a060020a0316141561097d57604080517f23b872dd000000000000000000000000000000000000000000000000000000008152600160a060020a038f81166004830152336024830152604482018a90529151918a16916323b872dd916064808201926020929091908290030181600087803b1580156108d557600080fd5b505af11580156108e9573d6000803e3d6000fd5b505050506040513d60208110156108ff57600080fd5b50511515610691576040805160e560020a62461bcd02815260206004820152602160248201527f4661696c656420746f20706179206761732061732066726f6d206163636f756e60448201527f7400000000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b6040805160e560020a62461bcd02815260206004820152601760248201527f54686520676173506179657220697320696e76616c6964000000000000000000604482015290519081900360640190fd5b9c9b505050505050505050505050565b60006109f8826109ec85610bfe565b9063ffffffff610ca816565b9392505050565b604080517f19000000000000000000000000000000000000000000000000000000000000006020808301919091526000602183018190526c010000000000000000000000003081026022850152600160a060020a03808e1682026036860152808d168202604a860152808c168202605e860152607285018b9052609285018a9052808916820260b286015260c6850188905286160260e6840152835160da81850301815260fa9093019384905282519093918291908401908083835b60208310610ada5780518252601f199092019160209182019101610abb565b5181516020939093036101000a600019018019909116921691909117905260405192018290039091209c9b505050505050505050505050565b60008054600160a060020a03163314610b2b57600080fd5b506000908152600460205260409020805460ff1916600190811790915590565b600054600160a060020a03163314610b6257600080fd5b60008054604051600160a060020a03909116917ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482091a26000805473ffffffffffffffffffffffffffffffffffffffff19169055565b60046020526000908152604090205460ff1681565b600054600160a060020a031681565b600054600160a060020a03163314610bf257600080fd5b610bfb81610d7d565b50565b604080517f19457468657265756d205369676e6564204d6573736167653a0a333200000000602080830191909152603c80830185905283518084039091018152605c909201928390528151600093918291908401908083835b60208310610c765780518252601f199092019160209182019101610c57565b5181516020939093036101000a6000190180199091169216919091179052604051920182900390912095945050505050565b60008060008084516041141515610cc25760009350610d74565b50505060208201516040830151606084015160001a601b60ff82161015610ce757601b015b8060ff16601b14158015610cff57508060ff16601c14155b15610d0d5760009350610d74565b60408051600080825260208083018085528a905260ff8516838501526060830187905260808301869052925160019360a0808501949193601f19840193928390039091019190865af1158015610d67573d6000803e3d6000fd5b5050506020604051035193505b50505092915050565b600160a060020a0381161515610d9257600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a72305820fbd7a5d2a53c68474ebc73f16395ec41a192e012e2a7f41fc65cab6bf71f3be60029",
  "deployedBytecode": "0x60806040526004361061008c5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166259698d81146100c45780631b52d9b81461016857806323121669146101e25780634dda969014610239578063715018a61461025157806383c5c93a146102685780638da5cb5b14610280578063f2fde38b14610295575b60408051348152905133917f88a5966d370b9919b20f3e2c13ff65706f196a4e32cc2c12bf57088f88525874919081900360200190a2005b3480156100d057600080fd5b5060408051602060046101043581810135601f8101849004840285018401909552848452610154948235600160a060020a039081169560248035831696604435841696606435966084359660a43587169660c4359660e435909116953695610124949293919092019181908401838280828437509497506102b69650505050505050565b604080519115158252519081900360200190f35b34801561017457600080fd5b5060408051602060046024803582810135601f81018590048502860185019096528585526101c69583359536956044949193909101919081908401838280828437509497506109dd9650505050505050565b60408051600160a060020a039092168252519081900360200190f35b3480156101ee57600080fd5b50610227600160a060020a03600435811690602435811690604435811690606435906084359060a43581169060c4359060e435166109ff565b60408051918252519081900360200190f35b34801561024557600080fd5b50610154600435610b13565b34801561025d57600080fd5b50610266610b4b565b005b34801561027457600080fd5b50610154600435610bb7565b34801561028c57600080fd5b506101c6610bcc565b3480156102a157600080fd5b50610266600160a060020a0360043516610bdb565b6000806000806102cc8d8d8d8d8d8d8d8d6109ff565b92506102d883866109dd565b9150600160a060020a03808316908e161461033d576040805160e560020a62461bcd02815260206004820152601160248201527f496e76616c6964205369676e6174757265000000000000000000000000000000604482015290519081900360640190fd5b604080517f23b872dd000000000000000000000000000000000000000000000000000000008152600160a060020a038f811660048301528e81166024830152604482018d90529151918d16916323b872dd916064808201926020929091908290030181600087803b1580156103b157600080fd5b505af11580156103c5573d6000803e3d6000fd5b505050506040513d60208110156103db57600080fd5b505190508015610493578b600160a060020a03168d600160a060020a03167f3b830cc6db267f2ca5cc6ee903ccfef7e72d7830952990557cccad43b5e8ad118d8d8d8d8d8d6040518087600160a060020a0316600160a060020a0316815260200186815260200185815260200184600160a060020a0316600160a060020a0316815260200183815260200182600160a060020a0316600160a060020a03168152602001965050505050505060405180910390a361053d565b8b600160a060020a03168d600160a060020a03167f75e5ab57aaaec3454cf80f515952895766ae024b6ce2fd793ffa5b5c2a530d6f8d8d8d8d8d8d6040518087600160a060020a0316600160a060020a0316815260200186815260200185815260200184600160a060020a0316600160a060020a0316815260200183815260200182600160a060020a0316600160a060020a03168152602001965050505050505060405180910390a35b60008711156109cd57600160a060020a038816151561069657600054600160a060020a038e811691161480610580575060008381526004602052604090205460ff165b15156105fc576040805160e560020a62461bcd02815260206004820152602b60248201527f5075626c697368657220686173206e6f74207369676e6564207468697320657860448201527f65637574696f6e48617368000000000000000000000000000000000000000000606482015290519081900360840190fd5b6040513390618ca09089906000818181858888f193505050501515610691576040805160e560020a62461bcd02815260206004820152603160248201527f457865637574696f6e20636f6e7472616374206661696c656420746f2070617960448201527f20657468657220746f2072656c61796572000000000000000000000000000000606482015290519081900360840190fd5b6109cd565b600160a060020a0386163014806106b45750600160a060020a038616155b1561084957600054600160a060020a038e8116911614806106e3575060008381526004602052604090205460ff165b151561075f576040805160e560020a62461bcd02815260206004820152602b60248201527f5075626c697368657220686173206e6f74207369676e6564207468697320657860448201527f65637574696f6e48617368000000000000000000000000000000000000000000606482015290519081900360840190fd5b604080517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018990529051600160a060020a038a169163a9059cbb9160448083019260209291908290030181600087803b1580156107c757600080fd5b505af11580156107db573d6000803e3d6000fd5b505050506040513d60208110156107f157600080fd5b50511515610691576040805160e560020a62461bcd02815260206004820152601d60248201527f4661696c656420746f207061792067617320617320636f6e7472616374000000604482015290519081900360640190fd5b8c600160a060020a031686600160a060020a0316141561097d57604080517f23b872dd000000000000000000000000000000000000000000000000000000008152600160a060020a038f81166004830152336024830152604482018a90529151918a16916323b872dd916064808201926020929091908290030181600087803b1580156108d557600080fd5b505af11580156108e9573d6000803e3d6000fd5b505050506040513d60208110156108ff57600080fd5b50511515610691576040805160e560020a62461bcd02815260206004820152602160248201527f4661696c656420746f20706179206761732061732066726f6d206163636f756e60448201527f7400000000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b6040805160e560020a62461bcd02815260206004820152601760248201527f54686520676173506179657220697320696e76616c6964000000000000000000604482015290519081900360640190fd5b9c9b505050505050505050505050565b60006109f8826109ec85610bfe565b9063ffffffff610ca816565b9392505050565b604080517f19000000000000000000000000000000000000000000000000000000000000006020808301919091526000602183018190526c010000000000000000000000003081026022850152600160a060020a03808e1682026036860152808d168202604a860152808c168202605e860152607285018b9052609285018a9052808916820260b286015260c6850188905286160260e6840152835160da81850301815260fa9093019384905282519093918291908401908083835b60208310610ada5780518252601f199092019160209182019101610abb565b5181516020939093036101000a600019018019909116921691909117905260405192018290039091209c9b505050505050505050505050565b60008054600160a060020a03163314610b2b57600080fd5b506000908152600460205260409020805460ff1916600190811790915590565b600054600160a060020a03163314610b6257600080fd5b60008054604051600160a060020a03909116917ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482091a26000805473ffffffffffffffffffffffffffffffffffffffff19169055565b60046020526000908152604090205460ff1681565b600054600160a060020a031681565b600054600160a060020a03163314610bf257600080fd5b610bfb81610d7d565b50565b604080517f19457468657265756d205369676e6564204d6573736167653a0a333200000000602080830191909152603c80830185905283518084039091018152605c909201928390528151600093918291908401908083835b60208310610c765780518252601f199092019160209182019101610c57565b5181516020939093036101000a6000190180199091169216919091179052604051920182900390912095945050505050565b60008060008084516041141515610cc25760009350610d74565b50505060208201516040830151606084015160001a601b60ff82161015610ce757601b015b8060ff16601b14158015610cff57508060ff16601c14155b15610d0d5760009350610d74565b60408051600080825260208083018085528a905260ff8516838501526060830187905260808301869052925160019360a0808501949193601f19840193928390039091019190865af1158015610d67573d6000803e3d6000fd5b5050506020604051035193505b50505092915050565b600160a060020a0381161515610d9257600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a72305820fbd7a5d2a53c68474ebc73f16395ec41a192e012e2a7f41fc65cab6bf71f3be60029",
  "sourceMap": "273:8371:2:-;;;449:181;;;;;;;;;;;;;;;;;;;;;;;;567:5:9;:18;;-1:-1:-1;;;;;;567:18:9;;;575:10;567:18;;;;;536:19:2;;-1:-1:-1;;;;;536:19:2;;;;;;;;;565:8;:20;;;;;;;;;;;;;;595:12;:28;273:8371;;;;;;",
  "deployedSourceMap": "273:8371:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;678:31;;;699:9;678:31;;;;687:10;;678:31;;;;;;;;;;273:8371;4276:4366;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;4276:4366:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;4276:4366:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;4276:4366:2;;-1:-1:-1;4276:4366:2;;-1:-1:-1;;;;;;;4276:4366:2;;;;;;;;;;;;;;;;;;;3816:302;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;3816:302:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3816:302:2;;-1:-1:-1;3816:302:2;;-1:-1:-1;;;;;;;3816:302:2;;;;;-1:-1:-1;;;;;3816:302:2;;;;;;;;;;;;;;2764:991;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2764:991:2;-1:-1:-1;;;;;2764:991:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2424:184;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2424:184:2;;;;;1001:111:9;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1001:111:9;;;;;;2146:47:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2146:47:2;;;;;238:20:9;;8:9:-1;5:2;;;30:1;27;20:12;5:2;238:20:9;;;;1274:103;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1274:103:9;;;-1:-1:-1;;;;;1274:103:9;;;4276:4366:2;4939:12;5114:21;5268:14;5508:11;5138:120;5168:4;5174:2;5178:12;5192:11;5205:13;5220:8;5230;5240;5138:16;:120::i;:::-;5114:144;;5285:44;5304:13;5319:9;5285:18;:44::i;:::-;5268:61;-1:-1:-1;;;;;;5386:14:2;;;;;;;5378:44;;;;;-1:-1:-1;;;;;5378:44:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;5522:53;;;;;;-1:-1:-1;;;;;5522:53:2;;;;;;;;;;;;;;;;;;;;;;:32;;;;;;:53;;;;;;;;;;;;;;;-1:-1:-1;5522:32:2;:53;;;5:2:-1;;;;30:1;27;20:12;5:2;5522:53:2;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;5522:53:2;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;5522:53:2;;-1:-1:-1;5585:340:2;;;;5656:2;-1:-1:-1;;;;;5616:128:2;5650:4;-1:-1:-1;;;;;5616:128:2;;5660:12;5674:11;5687:13;5702:8;5712;5722;5616:128;;;;-1:-1:-1;;;;;5616:128:2;-1:-1:-1;;;;;5616:128:2;;;;;;;;;;;;;;;;-1:-1:-1;;;;;5616:128:2;-1:-1:-1;;;;;5616:128:2;;;;;;;;;;;-1:-1:-1;;;;;5616:128:2;-1:-1:-1;;;;;5616:128:2;;;;;;;;;;;;;;;;;;;;5585:340;;;5826:2;-1:-1:-1;;;;;5780:134:2;5820:4;-1:-1:-1;;;;;5780:134:2;;5830:12;5844:11;5857:13;5872:8;5882;5892;5780:134;;;;-1:-1:-1;;;;;5780:134:2;-1:-1:-1;;;;;5780:134:2;;;;;;;;;;;;;;;;-1:-1:-1;;;;;5780:134:2;-1:-1:-1;;;;;5780:134:2;;;;;;;;;;;-1:-1:-1;;;;;5780:134:2;-1:-1:-1;;;;;5780:134:2;;;;;;;;;;;;;;;;;;;;5585:340;6151:1;6140:8;:12;6136:2476;;;-1:-1:-1;;;;;6172:22:2;;;6168:2434;;;6494:5;;-1:-1:-1;;;;;6486:13:2;;;6494:5;;6486:13;;:47;;-1:-1:-1;6503:30:2;;;;:15;:30;;;;;;;;6486:47;6457:161;;;;;;;-1:-1:-1;;;;;6457:161:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6645:44;;:10;;6681:5;;6667:8;;6645:44;;;;6667:8;6645:10;6681:5;6645:44;;;;;;6637:192;;;;;;;-1:-1:-1;;;;;6637:192:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6168:2434;;;6874:4;-1:-1:-1;;;;;6854:25:2;;;;:51;;-1:-1:-1;;;;;;6883:22:2;;;6854:51;6850:1752;;;7181:5;;-1:-1:-1;;;;;7173:13:2;;;7181:5;;7173:13;;:47;;-1:-1:-1;7190:30:2;;;;:15;:30;;;;;;;;7173:47;7165:144;;;;;;;-1:-1:-1;;;;;7165:144:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7336:46;;;;;;7361:10;7336:46;;;;;;;;;;;;-1:-1:-1;;;;;7336:24:2;;;;;:46;;;;;;;;;;;;;;-1:-1:-1;7336:24:2;:46;;;5:2:-1;;;;30:1;27;20:12;5:2;7336:46:2;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;7336:46:2;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;7336:46:2;7328:129;;;;;;;-1:-1:-1;;;;;7328:129:2;;;;;;;;;;;;;;;;;;;;;;;;;;;6850:1752;-1:-1:-1;;;;;7482:16:2;;;;;;;7478:1124;;;7784:56;;;;;;-1:-1:-1;;;;;7784:56:2;;;;;;;7819:10;7784:56;;;;;;;;;;;;:28;;;;;;:56;;;;;;;;;;;;;;;-1:-1:-1;7784:28:2;:56;;;5:2:-1;;;;30:1;27;20:12;5:2;7784:56:2;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;7784:56:2;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;7784:56:2;7755:160;;;;;;;-1:-1:-1;;;;;7755:160:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7478:1124;8171:33;;;-1:-1:-1;;;;;8171:33:2;;;;;;;;;;;;;;;;;;;;;;;;;;;7478:1124;8629:6;4276:4366;-1:-1:-1;;;;;;;;;;;;4276:4366:2:o;3816:302::-;4024:7;4054:57;4101:9;4054:38;:13;:36;:38::i;:::-;:46;:57;:46;:57;:::i;:::-;4047:64;3816:302;-1:-1:-1;;;3816:302:2:o;2764:991::-;3427:320;;;3461:10;3427:320;;;;;;;;3374:7;3427:320;;;;;;;3522:4;3427:320;;;;;;-1:-1:-1;;;;;3427:320:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;22:32:-1;26:21;;;22:32;6:49;;3427:320:2;;;;;;;;3404:344;;3374:7;;3427:320;;;3404:344;;;;;3427:320;3404:344;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;;;;365:33;;3404:344:2;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;;2764:991:2:o;2424:184::-;2523:4;719:5:9;;-1:-1:-1;;;;;719:5:9;705:10;:19;697:28;;;;;;-1:-1:-1;2543:30:2;;;;:15;:30;;;;;:37;;-1:-1:-1;;2543:37:2;2576:4;2543:37;;;;;;2576:4;2424:184::o;1001:111:9:-;719:5;;-1:-1:-1;;;;;719:5:9;705:10;:19;697:28;;;;;;1077:5;;;1058:25;;-1:-1:-1;;;;;1077:5:9;;;;1058:25;;;1105:1;1089:18;;-1:-1:-1;;1089:18:9;;;1001:111::o;2146:47:2:-;;;;;;;;;;;;;;;:::o;238:20:9:-;;;-1:-1:-1;;;;;238:20:9;;:::o;1274:103::-;719:5;;-1:-1:-1;;;;;719:5:9;705:10;:19;697:28;;;;;;1343:29;1362:9;1343:18;:29::i;:::-;1274:103;:::o;1678:279:4:-;1887:59;;;;;;;;;;;;;;;;;;;;;26:21:-1;;;22:32;;;6:49;;1887:59:4;;;;;;;;1870:82;;1760:7;;1887:59;;;1870:82;;;;;1887:59;1870:82;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;;;;365:33;;1870:82:4;;;;;;;;;;;;-1:-1:-1;;;;;1678:279:4:o;601:939::-;680:7;697:9;712;727:7;779:4;:11;794:2;779:17;;775:57;;;822:1;806:19;;;;775:57;-1:-1:-1;;;1103:2:4;1093:13;;1087:20;1135:2;1125:13;;1119:20;1175:2;1165:13;;1159:20;1156:1;1151:29;1287:2;1283:6;;;;1279:34;;;1304:2;1299:7;1279:34;1382:1;:7;;1387:2;1382:7;;:18;;;;;1393:1;:7;;1398:2;1393:7;;1382:18;1378:158;;;1426:1;1410:19;;;;1378:158;1504:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1504:25:4;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1504:25:4;;;;;;;;1497:32;;1378:158;601:939;;;;;;;:::o;1512:171:9:-;-1:-1:-1;;;;;1582:23:9;;;;1574:32;;;;;;1638:5;;;1617:38;;-1:-1:-1;;;;;1617:38:9;;;;1638:5;;;1617:38;;;1661:5;:17;;-1:-1:-1;;1661:17:9;-1:-1:-1;;;;;1661:17:9;;;;;;;;;;1512:171::o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"openzeppelin-solidity/contracts/ECRecovery.sol\";\nimport \"openzeppelin-solidity/contracts/math/SafeMath.sol\";\nimport \"openzeppelin-solidity/contracts/ownership/Ownable.sol\";\nimport \"openzeppelin-solidity/contracts/token/ERC20/ERC20.sol\";\n\n\ncontract Identity is Ownable {\n    using ECRecovery for bytes32;\n    using SafeMath for uint256;\n\n    address userAddress;\n    address registry;\n    uint256 fundedAmount;\n\n    constructor(address _user, address _registry, uint256 _fundedAmount) payable {\n        userAddress = _user;\n        registry = _registry;\n        fundedAmount = _fundedAmount;\n    }\n\n    function () public payable {\n        emit Received(msg.sender, msg.value);\n    }\n\n    event Received (address indexed sender, uint value);\n    event ExecuteExecution(\n        address indexed from, //the subscriber\n        address indexed to, //the publisher\n        address tokenAddress, //the token address paid to the publisher\n        uint256 tokenAmount, //the token amount paid to the publisher\n        uint256 periodSeconds, //the period in seconds between payments\n        address gasToken, //the address of the token to pay relayer (0 for eth)\n        uint256 gasPrice, //the amount of tokens or eth to pay relayer (0 for free)\n        address gasPayer //the address that will pay the tokens to the relayer\n    );\n    event FailedExecuteExecution(\n        address indexed from, //the subscriber\n        address indexed to, //the publisher\n        address tokenAddress, //the token address paid to the publisher\n        uint256 tokenAmount, //the token amount paid to the publisher\n        uint256 periodSeconds, //the period in seconds between payments\n        address gasToken, //the address of the token to pay relayer (0 for eth)\n        uint256 gasPrice, //the amount of tokens or eth to pay relayer (0 for free)\n        address gasPayer //the address that will pay the tokens to the relayer\n    );\n\n    // for some cases of delegated execution, this contract will pay a third party\n    // to execute the transfer. If this happens, the owner of this contract must\n    // sign the executionHash\n    mapping(bytes32 => bool) public publisherSigned;\n\n    // only the owner of this contract can sign the executionHash to whitelist\n    // a specific subscription to start rewarding the relayers for paying the\n    // gas of the transactions out of the balance of this contract\n    function signExecutionHash(bytes32 executionHash)\n        public\n        onlyOwner\n        returns(bool)\n    {\n        publisherSigned[executionHash] = true;\n        return true;\n    }\n\n    // given the subscription details, generate a hash and try to kind of follow\n    // the eip-191 standard and eip-1077 standard from my dude @avsa\n    function getExecutionHash(\n        address from, //the subscriber\n        address to, //the publisher\n        address tokenAddress, //the token address paid to the publisher\n        uint256 tokenAmount, //the token amount paid to the publisher\n        uint256 periodSeconds, //the period in seconds between payments\n        address gasToken, //the address of the token to pay relayer (0 for eth)\n        uint256 gasPrice, //the amount of tokens or eth to pay relayer (0 for free)\n        address gasPayer //the address that will pay the tokens to the relayer\n    )\n        public\n        view\n        returns (bytes32)\n    {\n        return keccak256(\n            abi.encodePacked(\n                byte(0x19),\n                byte(0),\n                address(this),\n                from,\n                to,\n                tokenAddress,\n                tokenAmount,\n                periodSeconds,\n                gasToken,\n                gasPrice,\n                gasPayer\n        ));\n    }\n\n    //ecrecover the signer from hash and the signature\n    function getExecutionSigner(\n        bytes32 executionHash, //hash of subscription\n        bytes signature //proof the subscriber signed the meta trasaction\n    )\n        public\n        pure\n        returns (address)\n    {\n        return executionHash.toEthSignedMessageHash().recover(signature);\n    }\n\n    // execute the transferFrom to pay the publisher from the subscriber\n    // the subscriber has full control by approving this contract an allowance\n    function execute(\n        address from, //the subscriber\n        address to, //the publisher\n        address tokenAddress, //the token address paid to the publisher\n        uint256 tokenAmount, //the token amount paid to the publisher\n        uint256 periodSeconds, //the period in seconds between payments\n        address gasToken, //the address of the token to pay relayer (0 for eth)\n        uint256 gasPrice, //the amount of tokens or eth to pay relayer (0 for free)\n        address gasPayer, //the address that will pay the tokens to the relayer\n        bytes signature //proof the subscriber signed the meta trasaction\n    )\n        public\n        returns (bool success)\n    {\n        // make sure the subscription is valid and ready\n        // pulled this out so I have the hash, should be exact code as \"isExecutionReady\"\n        bytes32 executionHash = getExecutionHash(\n            from, to, tokenAddress, tokenAmount, periodSeconds, gasToken, gasPrice, gasPayer\n        );\n        address signer = getExecutionSigner(executionHash, signature);\n\n        //the signature must be valid\n        require(signer == from, \"Invalid Signature\");\n\n        // now, let make the transfer from the subscriber to the publisher\n        bool result = ERC20(tokenAddress).transferFrom(from,to,tokenAmount);\n        if (result) {\n            emit ExecuteExecution(\n                from, to, tokenAddress, tokenAmount, periodSeconds, gasToken, gasPrice, gasPayer\n            );\n        } else {\n            emit FailedExecuteExecution(\n                from, to, tokenAddress, tokenAmount, periodSeconds, gasToken, gasPrice, gasPayer\n            );\n        }\n\n        // it is possible for the subscription execution to be run by a third party\n        // incentivized in the terms of the subscription with a gasToken and gasPrice\n        // pay that out now...\n        if (gasPrice > 0) {\n            if (gasToken == address(0)) {\n                // this is an interesting case where the service will pay the third party\n                // ethereum out of the subscription contract itself\n                // for this to work the publisher must send ethereum to the contract\n                require(\n                    from == owner || publisherSigned[executionHash],\n                    \"Publisher has not signed this executionHash\"\n                );\n\n                require(msg.sender.call.value(gasPrice).gas(36000)(),//still unsure about how much gas to use here\n                        \"Execution contract failed to pay ether to relayer\"\n                );\n            } else if (gasPayer == address(this) || gasPayer == address(0)) {\n                // in this case, this contract will pay a token to the relayer to\n                // incentivize them to pay the gas for the meta transaction\n                // for security, the publisher must have signed the executionHash\n                require(from == owner || publisherSigned[executionHash],\n                        \"Publisher has not signed this executionHash\"\n                );\n\n                require(ERC20(gasToken).transfer(msg.sender, gasPrice),\n                        \"Failed to pay gas as contract\"\n                );\n            } else if (gasPayer == from) {\n                // in this case the relayer is paid with a token from the subscriber\n                // this works best if it is the same token being transferred to the\n                // publisher because it is already in the allowance\n                require(\n                    ERC20(gasToken).transferFrom(from, msg.sender, gasPrice),\n                    \"Failed to pay gas as from account\"\n                );\n            } else {\n                // the subscriber could craft the gasPayer to be a fellow subscriber that\n                // that has approved this contract to move tokens and then exploit that\n                // don't allow that...\n                revert(\"The gasPayer is invalid\");\n                // on the other hand it might be really cool to allow *any* account to\n                // pay the third party as long as they have approved this contract\n                // AND the publisher has signed off on it. The downside would be a\n                // publisher not paying attention and signs a subscription that attacks\n                // a different subscriber\n            }\n        }\n\n        return result;\n    }\n}\n",
  "sourcePath": "/workspace/projects/hackathons/enterCrypto/backend/contracts/Identity.sol",
  "ast": {
    "absolutePath": "/workspace/projects/hackathons/enterCrypto/backend/contracts/Identity.sol",
    "exportedSymbols": {
      "Identity": [
        735
      ]
    },
    "id": 736,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 371,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:2"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/ECRecovery.sol",
        "file": "openzeppelin-solidity/contracts/ECRecovery.sol",
        "id": 372,
        "nodeType": "ImportDirective",
        "scope": 736,
        "sourceUnit": 866,
        "src": "26:56:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "openzeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 373,
        "nodeType": "ImportDirective",
        "scope": 736,
        "sourceUnit": 1408,
        "src": "83:59:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 374,
        "nodeType": "ImportDirective",
        "scope": 736,
        "sourceUnit": 1494,
        "src": "143:63:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "file": "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "id": 375,
        "nodeType": "ImportDirective",
        "scope": 736,
        "sourceUnit": 1537,
        "src": "207:63:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 376,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1493,
              "src": "294:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$1493",
                "typeString": "contract Ownable"
              }
            },
            "id": 377,
            "nodeType": "InheritanceSpecifier",
            "src": "294:7:2"
          }
        ],
        "contractDependencies": [
          1493
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 735,
        "linearizedBaseContracts": [
          735,
          1493
        ],
        "name": "Identity",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 380,
            "libraryName": {
              "contractScope": null,
              "id": 378,
              "name": "ECRecovery",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 865,
              "src": "314:10:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ECRecovery_$865",
                "typeString": "library ECRecovery"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "308:29:2",
            "typeName": {
              "id": 379,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "329:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            }
          },
          {
            "id": 383,
            "libraryName": {
              "contractScope": null,
              "id": 381,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1407,
              "src": "348:8:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$1407",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "342:27:2",
            "typeName": {
              "id": 382,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "361:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 385,
            "name": "userAddress",
            "nodeType": "VariableDeclaration",
            "scope": 735,
            "src": "375:19:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 384,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "375:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 387,
            "name": "registry",
            "nodeType": "VariableDeclaration",
            "scope": 735,
            "src": "400:16:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 386,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "400:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 389,
            "name": "fundedAmount",
            "nodeType": "VariableDeclaration",
            "scope": 735,
            "src": "422:20:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 388,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "422:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 410,
              "nodeType": "Block",
              "src": "526:104:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 400,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 398,
                      "name": "userAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 385,
                      "src": "536:11:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 399,
                      "name": "_user",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 391,
                      "src": "550:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "536:19:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 401,
                  "nodeType": "ExpressionStatement",
                  "src": "536:19:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 404,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 402,
                      "name": "registry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 387,
                      "src": "565:8:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 403,
                      "name": "_registry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 393,
                      "src": "576:9:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "565:20:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 405,
                  "nodeType": "ExpressionStatement",
                  "src": "565:20:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 408,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 406,
                      "name": "fundedAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 389,
                      "src": "595:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 407,
                      "name": "_fundedAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 395,
                      "src": "610:13:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "595:28:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 409,
                  "nodeType": "ExpressionStatement",
                  "src": "595:28:2"
                }
              ]
            },
            "documentation": null,
            "id": 411,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 396,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 391,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 411,
                  "src": "461:13:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 390,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "461:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 393,
                  "name": "_registry",
                  "nodeType": "VariableDeclaration",
                  "scope": 411,
                  "src": "476:17:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 392,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "476:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 395,
                  "name": "_fundedAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 411,
                  "src": "495:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 394,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "495:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "460:57:2"
            },
            "payable": true,
            "returnParameters": {
              "id": 397,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "526:0:2"
            },
            "scope": 735,
            "src": "449:181:2",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 421,
              "nodeType": "Block",
              "src": "663:53:2",
              "statements": [
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 415,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1583,
                          "src": "687:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 416,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "687:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 417,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1583,
                          "src": "699:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 418,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "699:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 414,
                      "name": "Received",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 428,
                      "src": "678:8:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 419,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "678:31:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 420,
                  "nodeType": "EmitStatement",
                  "src": "673:36:2"
                }
              ]
            },
            "documentation": null,
            "id": 422,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 412,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "645:2:2"
            },
            "payable": true,
            "returnParameters": {
              "id": 413,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "663:0:2"
            },
            "scope": 735,
            "src": "636:80:2",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 428,
            "name": "Received",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 427,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 424,
                  "indexed": true,
                  "name": "sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 428,
                  "src": "738:22:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 423,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "738:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 426,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 428,
                  "src": "762:10:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 425,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "762:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "737:36:2"
            },
            "src": "722:52:2"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 446,
            "name": "ExecuteExecution",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 445,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 430,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 446,
                  "src": "811:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 429,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "811:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 432,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 446,
                  "src": "858:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 431,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "858:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 434,
                  "indexed": false,
                  "name": "tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 446,
                  "src": "902:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 433,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "902:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 436,
                  "indexed": false,
                  "name": "tokenAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 446,
                  "src": "974:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 435,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "974:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 438,
                  "indexed": false,
                  "name": "periodSeconds",
                  "nodeType": "VariableDeclaration",
                  "scope": 446,
                  "src": "1044:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 437,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1044:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 440,
                  "indexed": false,
                  "name": "gasToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 446,
                  "src": "1116:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 439,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1116:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 442,
                  "indexed": false,
                  "name": "gasPrice",
                  "nodeType": "VariableDeclaration",
                  "scope": 446,
                  "src": "1196:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 441,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1196:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 444,
                  "indexed": false,
                  "name": "gasPayer",
                  "nodeType": "VariableDeclaration",
                  "scope": 446,
                  "src": "1280:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 443,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1280:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "801:555:2"
            },
            "src": "779:578:2"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 464,
            "name": "FailedExecuteExecution",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 463,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 448,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 464,
                  "src": "1400:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 447,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1400:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 450,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 464,
                  "src": "1447:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 449,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1447:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 452,
                  "indexed": false,
                  "name": "tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 464,
                  "src": "1491:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 451,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1491:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 454,
                  "indexed": false,
                  "name": "tokenAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 464,
                  "src": "1563:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 453,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1563:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 456,
                  "indexed": false,
                  "name": "periodSeconds",
                  "nodeType": "VariableDeclaration",
                  "scope": 464,
                  "src": "1633:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 455,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1633:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 458,
                  "indexed": false,
                  "name": "gasToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 464,
                  "src": "1705:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 457,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1705:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 460,
                  "indexed": false,
                  "name": "gasPrice",
                  "nodeType": "VariableDeclaration",
                  "scope": 464,
                  "src": "1785:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 459,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1785:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 462,
                  "indexed": false,
                  "name": "gasPayer",
                  "nodeType": "VariableDeclaration",
                  "scope": 464,
                  "src": "1869:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 461,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1869:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1390:555:2"
            },
            "src": "1362:584:2"
          },
          {
            "constant": false,
            "id": 468,
            "name": "publisherSigned",
            "nodeType": "VariableDeclaration",
            "scope": 735,
            "src": "2146:47:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
              "typeString": "mapping(bytes32 => bool)"
            },
            "typeName": {
              "id": 467,
              "keyType": {
                "id": 465,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "2154:7:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "2146:24:2",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                "typeString": "mapping(bytes32 => bool)"
              },
              "valueType": {
                "id": 466,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "2165:4:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 485,
              "nodeType": "Block",
              "src": "2533:75:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 481,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 477,
                        "name": "publisherSigned",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 468,
                        "src": "2543:15:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                          "typeString": "mapping(bytes32 => bool)"
                        }
                      },
                      "id": 479,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 478,
                        "name": "executionHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 470,
                        "src": "2559:13:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2543:30:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 480,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2576:4:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "2543:37:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 482,
                  "nodeType": "ExpressionStatement",
                  "src": "2543:37:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 483,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2597:4:2",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 476,
                  "id": 484,
                  "nodeType": "Return",
                  "src": "2590:11:2"
                }
              ]
            },
            "documentation": null,
            "id": 486,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 473,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 472,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1441,
                  "src": "2497:9:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2497:9:2"
              }
            ],
            "name": "signExecutionHash",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 471,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 470,
                  "name": "executionHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 486,
                  "src": "2451:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 469,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2451:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2450:23:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 476,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 475,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 486,
                  "src": "2523:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 474,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2523:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2522:6:2"
            },
            "scope": 735,
            "src": "2424:184:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 530,
              "nodeType": "Block",
              "src": "3387:368:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "30783139",
                                "id": 511,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3466:4:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_25_by_1",
                                  "typeString": "int_const 25"
                                },
                                "value": "0x19"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_25_by_1",
                                  "typeString": "int_const 25"
                                }
                              ],
                              "id": 510,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3461:4:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes1_$",
                                "typeString": "type(bytes1)"
                              },
                              "typeName": "byte"
                            },
                            "id": 512,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3461:10:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "30",
                                "id": 514,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3494:1:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                }
                              ],
                              "id": 513,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3489:4:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes1_$",
                                "typeString": "type(bytes1)"
                              },
                              "typeName": "byte"
                            },
                            "id": 515,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3489:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 517,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1606,
                                "src": "3522:4:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_Identity_$735",
                                  "typeString": "contract Identity"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_Identity_$735",
                                  "typeString": "contract Identity"
                                }
                              ],
                              "id": 516,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3514:7:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 518,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3514:13:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 519,
                            "name": "from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 488,
                            "src": "3545:4:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 520,
                            "name": "to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 490,
                            "src": "3567:2:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 521,
                            "name": "tokenAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 492,
                            "src": "3587:12:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 522,
                            "name": "tokenAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 494,
                            "src": "3617:11:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 523,
                            "name": "periodSeconds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 496,
                            "src": "3646:13:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 524,
                            "name": "gasToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 498,
                            "src": "3677:8:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 525,
                            "name": "gasPrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 500,
                            "src": "3703:8:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 526,
                            "name": "gasPayer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 502,
                            "src": "3729:8:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            },
                            {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 508,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1570,
                            "src": "3427:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 509,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3427:16:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 527,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3427:320:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 507,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1577,
                      "src": "3404:9:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 528,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3404:344:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 506,
                  "id": 529,
                  "nodeType": "Return",
                  "src": "3397:351:2"
                }
              ]
            },
            "documentation": null,
            "id": 531,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getExecutionHash",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 503,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 488,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 531,
                  "src": "2799:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 487,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2799:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 490,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 531,
                  "src": "2838:10:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 489,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2838:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 492,
                  "name": "tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 531,
                  "src": "2874:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 491,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2874:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 494,
                  "name": "tokenAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 531,
                  "src": "2946:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 493,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2946:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 496,
                  "name": "periodSeconds",
                  "nodeType": "VariableDeclaration",
                  "scope": 531,
                  "src": "3016:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 495,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3016:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 498,
                  "name": "gasToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 531,
                  "src": "3088:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 497,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3088:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 500,
                  "name": "gasPrice",
                  "nodeType": "VariableDeclaration",
                  "scope": 531,
                  "src": "3168:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 499,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3168:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 502,
                  "name": "gasPayer",
                  "nodeType": "VariableDeclaration",
                  "scope": 531,
                  "src": "3252:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 501,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3252:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2789:539:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 506,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 505,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 531,
                  "src": "3374:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 504,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3374:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3373:9:2"
            },
            "scope": 735,
            "src": "2764:991:2",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 547,
              "nodeType": "Block",
              "src": "4037:81:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 544,
                        "name": "signature",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 535,
                        "src": "4101:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "expression": {
                            "argumentTypes": null,
                            "id": 540,
                            "name": "executionHash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 533,
                            "src": "4054:13:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "id": 541,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "toEthSignedMessageHash",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 864,
                          "src": "4054:36:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_bytes32_$bound_to$_t_bytes32_$",
                            "typeString": "function (bytes32) pure returns (bytes32)"
                          }
                        },
                        "id": 542,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4054:38:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "id": 543,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "recover",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 848,
                      "src": "4054:46:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_address_$bound_to$_t_bytes32_$",
                        "typeString": "function (bytes32,bytes memory) pure returns (address)"
                      }
                    },
                    "id": 545,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4054:57:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 539,
                  "id": 546,
                  "nodeType": "Return",
                  "src": "4047:64:2"
                }
              ]
            },
            "documentation": null,
            "id": 548,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getExecutionSigner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 536,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 533,
                  "name": "executionHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 548,
                  "src": "3853:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 532,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3853:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 535,
                  "name": "signature",
                  "nodeType": "VariableDeclaration",
                  "scope": 548,
                  "src": "3907:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 534,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3907:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3843:135:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 539,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 538,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 548,
                  "src": "4024:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 537,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4024:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4023:9:2"
            },
            "scope": 735,
            "src": "3816:302:2",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 733,
              "nodeType": "Block",
              "src": "4957:3685:2",
              "statements": [
                {
                  "assignments": [
                    572
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 572,
                      "name": "executionHash",
                      "nodeType": "VariableDeclaration",
                      "scope": 734,
                      "src": "5114:21:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 571,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "5114:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 583,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 574,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 550,
                        "src": "5168:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 575,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 552,
                        "src": "5174:2:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 576,
                        "name": "tokenAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 554,
                        "src": "5178:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 577,
                        "name": "tokenAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 556,
                        "src": "5192:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 578,
                        "name": "periodSeconds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 558,
                        "src": "5205:13:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 579,
                        "name": "gasToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 560,
                        "src": "5220:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 580,
                        "name": "gasPrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 562,
                        "src": "5230:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 581,
                        "name": "gasPayer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 564,
                        "src": "5240:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 573,
                      "name": "getExecutionHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 531,
                      "src": "5138:16:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_address_$_t_uint256_$_t_address_$returns$_t_bytes32_$",
                        "typeString": "function (address,address,address,uint256,uint256,address,uint256,address) view returns (bytes32)"
                      }
                    },
                    "id": 582,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5138:120:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5114:144:2"
                },
                {
                  "assignments": [
                    585
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 585,
                      "name": "signer",
                      "nodeType": "VariableDeclaration",
                      "scope": 734,
                      "src": "5268:14:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 584,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "5268:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 590,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 587,
                        "name": "executionHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 572,
                        "src": "5304:13:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 588,
                        "name": "signature",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 566,
                        "src": "5319:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 586,
                      "name": "getExecutionSigner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 548,
                      "src": "5285:18:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_address_$",
                        "typeString": "function (bytes32,bytes memory) pure returns (address)"
                      }
                    },
                    "id": 589,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5285:44:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5268:61:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 594,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 592,
                          "name": "signer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 585,
                          "src": "5386:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 593,
                          "name": "from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 550,
                          "src": "5396:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "5386:14:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "496e76616c6964205369676e6174757265",
                        "id": 595,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5402:19:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_98abf41928333e3fb96f450e411f323711f90894815c0b92e5e7c34ae876605a",
                          "typeString": "literal_string \"Invalid Signature\""
                        },
                        "value": "Invalid Signature"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_98abf41928333e3fb96f450e411f323711f90894815c0b92e5e7c34ae876605a",
                          "typeString": "literal_string \"Invalid Signature\""
                        }
                      ],
                      "id": 591,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1586,
                        1587
                      ],
                      "referencedDeclaration": 1587,
                      "src": "5378:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 596,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5378:44:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 597,
                  "nodeType": "ExpressionStatement",
                  "src": "5378:44:2"
                },
                {
                  "assignments": [
                    599
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 599,
                      "name": "result",
                      "nodeType": "VariableDeclaration",
                      "scope": 734,
                      "src": "5508:11:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 598,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "5508:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 608,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 604,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 550,
                        "src": "5555:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 605,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 552,
                        "src": "5560:2:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 606,
                        "name": "tokenAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 556,
                        "src": "5563:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 601,
                            "name": "tokenAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 554,
                            "src": "5528:12:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 600,
                          "name": "ERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1536,
                          "src": "5522:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_ERC20_$1536_$",
                            "typeString": "type(contract ERC20)"
                          }
                        },
                        "id": 602,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5522:19:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$1536",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 603,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1518,
                      "src": "5522:32:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 607,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5522:53:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5508:67:2"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 609,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 599,
                    "src": "5589:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 633,
                    "nodeType": "Block",
                    "src": "5761:164:2",
                    "statements": [
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 623,
                              "name": "from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 550,
                              "src": "5820:4:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 624,
                              "name": "to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 552,
                              "src": "5826:2:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 625,
                              "name": "tokenAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 554,
                              "src": "5830:12:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 626,
                              "name": "tokenAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 556,
                              "src": "5844:11:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 627,
                              "name": "periodSeconds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 558,
                              "src": "5857:13:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 628,
                              "name": "gasToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 560,
                              "src": "5872:8:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 629,
                              "name": "gasPrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 562,
                              "src": "5882:8:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 630,
                              "name": "gasPayer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 564,
                              "src": "5892:8:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 622,
                            "name": "FailedExecuteExecution",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 464,
                            "src": "5780:22:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_address_$_t_uint256_$_t_address_$returns$__$",
                              "typeString": "function (address,address,address,uint256,uint256,address,uint256,address)"
                            }
                          },
                          "id": 631,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5780:134:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 632,
                        "nodeType": "EmitStatement",
                        "src": "5775:139:2"
                      }
                    ]
                  },
                  "id": 634,
                  "nodeType": "IfStatement",
                  "src": "5585:340:2",
                  "trueBody": {
                    "id": 621,
                    "nodeType": "Block",
                    "src": "5597:158:2",
                    "statements": [
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 611,
                              "name": "from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 550,
                              "src": "5650:4:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 612,
                              "name": "to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 552,
                              "src": "5656:2:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 613,
                              "name": "tokenAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 554,
                              "src": "5660:12:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 614,
                              "name": "tokenAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 556,
                              "src": "5674:11:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 615,
                              "name": "periodSeconds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 558,
                              "src": "5687:13:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 616,
                              "name": "gasToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 560,
                              "src": "5702:8:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 617,
                              "name": "gasPrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 562,
                              "src": "5712:8:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 618,
                              "name": "gasPayer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 564,
                              "src": "5722:8:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 610,
                            "name": "ExecuteExecution",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 446,
                            "src": "5616:16:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_address_$_t_uint256_$_t_address_$returns$__$",
                              "typeString": "function (address,address,address,uint256,uint256,address,uint256,address)"
                            }
                          },
                          "id": 619,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5616:128:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 620,
                        "nodeType": "EmitStatement",
                        "src": "5611:133:2"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 637,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 635,
                      "name": "gasPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 562,
                      "src": "6140:8:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 636,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6151:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "6140:12:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 730,
                  "nodeType": "IfStatement",
                  "src": "6136:2476:2",
                  "trueBody": {
                    "id": 729,
                    "nodeType": "Block",
                    "src": "6154:2458:2",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 642,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 638,
                            "name": "gasToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 560,
                            "src": "6172:8:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "30",
                                "id": 640,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "6192:1:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                }
                              ],
                              "id": 639,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "6184:7:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 641,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6184:10:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "6172:22:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "condition": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "id": 679,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "id": 673,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 669,
                                "name": "gasPayer",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 564,
                                "src": "6854:8:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 671,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1606,
                                    "src": "6874:4:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_Identity_$735",
                                      "typeString": "contract Identity"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_Identity_$735",
                                      "typeString": "contract Identity"
                                    }
                                  ],
                                  "id": 670,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "6866:7:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": "address"
                                },
                                "id": 672,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "6866:13:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "src": "6854:25:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "||",
                            "rightExpression": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "id": 678,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 674,
                                "name": "gasPayer",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 564,
                                "src": "6883:8:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "30",
                                    "id": 676,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "6903:1:2",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    },
                                    "value": "0"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    }
                                  ],
                                  "id": 675,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "6895:7:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": "address"
                                },
                                "id": 677,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "6895:10:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "src": "6883:22:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "src": "6854:51:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "falseBody": {
                            "condition": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "id": 706,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 704,
                                "name": "gasPayer",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 564,
                                "src": "7482:8:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "argumentTypes": null,
                                "id": 705,
                                "name": "from",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 550,
                                "src": "7494:4:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "src": "7482:16:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "falseBody": {
                              "id": 725,
                              "nodeType": "Block",
                              "src": "7936:666:2",
                              "statements": [
                                {
                                  "expression": {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "hexValue": "54686520676173506179657220697320696e76616c6964",
                                        "id": 722,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "8178:25:2",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_stringliteral_a23139e430e4282b1a0c740ac0e976a10686ce751b181f465050ef1edb7bfaa9",
                                          "typeString": "literal_string \"The gasPayer is invalid\""
                                        },
                                        "value": "The gasPayer is invalid"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_stringliteral_a23139e430e4282b1a0c740ac0e976a10686ce751b181f465050ef1edb7bfaa9",
                                          "typeString": "literal_string \"The gasPayer is invalid\""
                                        }
                                      ],
                                      "id": 721,
                                      "name": "revert",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [
                                        1588,
                                        1589
                                      ],
                                      "referencedDeclaration": 1589,
                                      "src": "8171:6:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                                        "typeString": "function (string memory) pure"
                                      }
                                    },
                                    "id": 723,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "8171:33:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_tuple$__$",
                                      "typeString": "tuple()"
                                    }
                                  },
                                  "id": 724,
                                  "nodeType": "ExpressionStatement",
                                  "src": "8171:33:2"
                                }
                              ]
                            },
                            "id": 726,
                            "nodeType": "IfStatement",
                            "src": "7478:1124:2",
                            "trueBody": {
                              "id": 720,
                              "nodeType": "Block",
                              "src": "7500:430:2",
                              "statements": [
                                {
                                  "expression": {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "arguments": [
                                          {
                                            "argumentTypes": null,
                                            "id": 712,
                                            "name": "from",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 550,
                                            "src": "7813:4:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            }
                                          },
                                          {
                                            "argumentTypes": null,
                                            "expression": {
                                              "argumentTypes": null,
                                              "id": 713,
                                              "name": "msg",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 1583,
                                              "src": "7819:3:2",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_magic_message",
                                                "typeString": "msg"
                                              }
                                            },
                                            "id": 714,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "sender",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "7819:10:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            }
                                          },
                                          {
                                            "argumentTypes": null,
                                            "id": 715,
                                            "name": "gasPrice",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 562,
                                            "src": "7831:8:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          }
                                        ],
                                        "expression": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            },
                                            {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            },
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                              {
                                                "argumentTypes": null,
                                                "id": 709,
                                                "name": "gasToken",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 560,
                                                "src": "7790:8:2",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_address",
                                                  "typeString": "address"
                                                }
                                              }
                                            ],
                                            "expression": {
                                              "argumentTypes": [
                                                {
                                                  "typeIdentifier": "t_address",
                                                  "typeString": "address"
                                                }
                                              ],
                                              "id": 708,
                                              "name": "ERC20",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 1536,
                                              "src": "7784:5:2",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_contract$_ERC20_$1536_$",
                                                "typeString": "type(contract ERC20)"
                                              }
                                            },
                                            "id": 710,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "7784:15:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_contract$_ERC20_$1536",
                                              "typeString": "contract ERC20"
                                            }
                                          },
                                          "id": 711,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberName": "transferFrom",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": 1518,
                                          "src": "7784:28:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                            "typeString": "function (address,address,uint256) external returns (bool)"
                                          }
                                        },
                                        "id": 716,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7784:56:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                        }
                                      },
                                      {
                                        "argumentTypes": null,
                                        "hexValue": "4661696c656420746f20706179206761732061732066726f6d206163636f756e74",
                                        "id": 717,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "7862:35:2",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_stringliteral_14793e3e3905a30586d2b24e3ad0438f041907f0cf302e37f5d900c5e9ac3e25",
                                          "typeString": "literal_string \"Failed to pay gas as from account\""
                                        },
                                        "value": "Failed to pay gas as from account"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                        },
                                        {
                                          "typeIdentifier": "t_stringliteral_14793e3e3905a30586d2b24e3ad0438f041907f0cf302e37f5d900c5e9ac3e25",
                                          "typeString": "literal_string \"Failed to pay gas as from account\""
                                        }
                                      ],
                                      "id": 707,
                                      "name": "require",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [
                                        1586,
                                        1587
                                      ],
                                      "referencedDeclaration": 1587,
                                      "src": "7755:7:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                        "typeString": "function (bool,string memory) pure"
                                      }
                                    },
                                    "id": 718,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "7755:160:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_tuple$__$",
                                      "typeString": "tuple()"
                                    }
                                  },
                                  "id": 719,
                                  "nodeType": "ExpressionStatement",
                                  "src": "7755:160:2"
                                }
                              ]
                            }
                          },
                          "id": 727,
                          "nodeType": "IfStatement",
                          "src": "6850:1752:2",
                          "trueBody": {
                            "id": 703,
                            "nodeType": "Block",
                            "src": "6907:565:2",
                            "statements": [
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      },
                                      "id": 687,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "argumentTypes": null,
                                        "commonType": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        },
                                        "id": 683,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "argumentTypes": null,
                                          "id": 681,
                                          "name": "from",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 550,
                                          "src": "7173:4:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                          "argumentTypes": null,
                                          "id": 682,
                                          "name": "owner",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 1411,
                                          "src": "7181:5:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          }
                                        },
                                        "src": "7173:13:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "||",
                                      "rightExpression": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                          "argumentTypes": null,
                                          "id": 684,
                                          "name": "publisherSigned",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 468,
                                          "src": "7190:15:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                                            "typeString": "mapping(bytes32 => bool)"
                                          }
                                        },
                                        "id": 686,
                                        "indexExpression": {
                                          "argumentTypes": null,
                                          "id": 685,
                                          "name": "executionHash",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 572,
                                          "src": "7206:13:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                          }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "7190:30:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                        }
                                      },
                                      "src": "7173:47:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "5075626c697368657220686173206e6f74207369676e6564207468697320657865637574696f6e48617368",
                                      "id": 688,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "7246:45:2",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_2198900e941c7c5318576480a508652b95192dc7dc973c228b1994fa4ce71340",
                                        "typeString": "literal_string \"Publisher has not signed this executionHash\""
                                      },
                                      "value": "Publisher has not signed this executionHash"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      },
                                      {
                                        "typeIdentifier": "t_stringliteral_2198900e941c7c5318576480a508652b95192dc7dc973c228b1994fa4ce71340",
                                        "typeString": "literal_string \"Publisher has not signed this executionHash\""
                                      }
                                    ],
                                    "id": 680,
                                    "name": "require",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [
                                      1586,
                                      1587
                                    ],
                                    "referencedDeclaration": 1587,
                                    "src": "7165:7:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                      "typeString": "function (bool,string memory) pure"
                                    }
                                  },
                                  "id": 689,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "7165:144:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 690,
                                "nodeType": "ExpressionStatement",
                                "src": "7165:144:2"
                              },
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "arguments": [
                                        {
                                          "argumentTypes": null,
                                          "expression": {
                                            "argumentTypes": null,
                                            "id": 696,
                                            "name": "msg",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1583,
                                            "src": "7361:3:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_magic_message",
                                              "typeString": "msg"
                                            }
                                          },
                                          "id": 697,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberName": "sender",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": null,
                                          "src": "7361:10:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          }
                                        },
                                        {
                                          "argumentTypes": null,
                                          "id": 698,
                                          "name": "gasPrice",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 562,
                                          "src": "7373:8:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          },
                                          {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        ],
                                        "expression": {
                                          "argumentTypes": null,
                                          "arguments": [
                                            {
                                              "argumentTypes": null,
                                              "id": 693,
                                              "name": "gasToken",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 560,
                                              "src": "7342:8:2",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                              }
                                            }
                                          ],
                                          "expression": {
                                            "argumentTypes": [
                                              {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                              }
                                            ],
                                            "id": 692,
                                            "name": "ERC20",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1536,
                                            "src": "7336:5:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_type$_t_contract$_ERC20_$1536_$",
                                              "typeString": "type(contract ERC20)"
                                            }
                                          },
                                          "id": 694,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "typeConversion",
                                          "lValueRequested": false,
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "7336:15:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ERC20_$1536",
                                            "typeString": "contract ERC20"
                                          }
                                        },
                                        "id": 695,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "transfer",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 1559,
                                        "src": "7336:24:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                          "typeString": "function (address,uint256) external returns (bool)"
                                        }
                                      },
                                      "id": 699,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "7336:46:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "4661696c656420746f207061792067617320617320636f6e7472616374",
                                      "id": 700,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "7408:31:2",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_fad8f41fd0c99926eaf7e677842e423c5e5310ba4967cc435e2e6a69b9eaf43d",
                                        "typeString": "literal_string \"Failed to pay gas as contract\""
                                      },
                                      "value": "Failed to pay gas as contract"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      },
                                      {
                                        "typeIdentifier": "t_stringliteral_fad8f41fd0c99926eaf7e677842e423c5e5310ba4967cc435e2e6a69b9eaf43d",
                                        "typeString": "literal_string \"Failed to pay gas as contract\""
                                      }
                                    ],
                                    "id": 691,
                                    "name": "require",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [
                                      1586,
                                      1587
                                    ],
                                    "referencedDeclaration": 1587,
                                    "src": "7328:7:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                      "typeString": "function (bool,string memory) pure"
                                    }
                                  },
                                  "id": 701,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "7328:129:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 702,
                                "nodeType": "ExpressionStatement",
                                "src": "7328:129:2"
                              }
                            ]
                          }
                        },
                        "id": 728,
                        "nodeType": "IfStatement",
                        "src": "6168:2434:2",
                        "trueBody": {
                          "id": 668,
                          "nodeType": "Block",
                          "src": "6196:648:2",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "commonType": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    "id": 650,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      },
                                      "id": 646,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "argumentTypes": null,
                                        "id": 644,
                                        "name": "from",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 550,
                                        "src": "6486:4:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "==",
                                      "rightExpression": {
                                        "argumentTypes": null,
                                        "id": 645,
                                        "name": "owner",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 1411,
                                        "src": "6494:5:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      },
                                      "src": "6486:13:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "||",
                                    "rightExpression": {
                                      "argumentTypes": null,
                                      "baseExpression": {
                                        "argumentTypes": null,
                                        "id": 647,
                                        "name": "publisherSigned",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 468,
                                        "src": "6503:15:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                                          "typeString": "mapping(bytes32 => bool)"
                                        }
                                      },
                                      "id": 649,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 648,
                                        "name": "executionHash",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 572,
                                        "src": "6519:13:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      },
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "IndexAccess",
                                      "src": "6503:30:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    },
                                    "src": "6486:47:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  },
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "5075626c697368657220686173206e6f74207369676e6564207468697320657865637574696f6e48617368",
                                    "id": 651,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "6555:45:2",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_2198900e941c7c5318576480a508652b95192dc7dc973c228b1994fa4ce71340",
                                      "typeString": "literal_string \"Publisher has not signed this executionHash\""
                                    },
                                    "value": "Publisher has not signed this executionHash"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    {
                                      "typeIdentifier": "t_stringliteral_2198900e941c7c5318576480a508652b95192dc7dc973c228b1994fa4ce71340",
                                      "typeString": "literal_string \"Publisher has not signed this executionHash\""
                                    }
                                  ],
                                  "id": 643,
                                  "name": "require",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [
                                    1586,
                                    1587
                                  ],
                                  "referencedDeclaration": 1587,
                                  "src": "6457:7:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                    "typeString": "function (bool,string memory) pure"
                                  }
                                },
                                "id": 652,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "6457:161:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 653,
                              "nodeType": "ExpressionStatement",
                              "src": "6457:161:2"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "arguments": [],
                                    "expression": {
                                      "argumentTypes": [],
                                      "arguments": [
                                        {
                                          "argumentTypes": null,
                                          "hexValue": "3336303030",
                                          "id": 662,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "kind": "number",
                                          "lValueRequested": false,
                                          "nodeType": "Literal",
                                          "src": "6681:5:2",
                                          "subdenomination": null,
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_rational_36000_by_1",
                                            "typeString": "int_const 36000"
                                          },
                                          "value": "36000"
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_rational_36000_by_1",
                                            "typeString": "int_const 36000"
                                          }
                                        ],
                                        "expression": {
                                          "argumentTypes": null,
                                          "arguments": [
                                            {
                                              "argumentTypes": null,
                                              "id": 659,
                                              "name": "gasPrice",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 562,
                                              "src": "6667:8:2",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              }
                                            }
                                          ],
                                          "expression": {
                                            "argumentTypes": [
                                              {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              }
                                            ],
                                            "expression": {
                                              "argumentTypes": null,
                                              "expression": {
                                                "argumentTypes": null,
                                                "expression": {
                                                  "argumentTypes": null,
                                                  "id": 655,
                                                  "name": "msg",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 1583,
                                                  "src": "6645:3:2",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_message",
                                                    "typeString": "msg"
                                                  }
                                                },
                                                "id": 656,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "6645:10:2",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_address",
                                                  "typeString": "address"
                                                }
                                              },
                                              "id": 657,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberName": "call",
                                              "nodeType": "MemberAccess",
                                              "referencedDeclaration": null,
                                              "src": "6645:15:2",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_barecall_payable$__$returns$_t_bool_$",
                                                "typeString": "function () payable returns (bool)"
                                              }
                                            },
                                            "id": 658,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "value",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "6645:21:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_function_setvalue_nonpayable$_t_uint256_$returns$_t_function_barecall_payable$__$returns$_t_bool_$value_$",
                                              "typeString": "function (uint256) returns (function () payable returns (bool))"
                                            }
                                          },
                                          "id": 660,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "functionCall",
                                          "lValueRequested": false,
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "6645:31:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_barecall_payable$__$returns$_t_bool_$value",
                                            "typeString": "function () payable returns (bool)"
                                          }
                                        },
                                        "id": 661,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "gas",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "6645:35:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_setgas_nonpayable$_t_uint256_$returns$_t_function_barecall_payable$__$returns$_t_bool_$gasvalue_$value",
                                          "typeString": "function (uint256) returns (function () payable returns (bool))"
                                        }
                                      },
                                      "id": 663,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "6645:42:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_barecall_payable$__$returns$_t_bool_$gasvalue",
                                        "typeString": "function () payable returns (bool)"
                                      }
                                    },
                                    "id": 664,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "6645:44:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  },
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "457865637574696f6e20636f6e7472616374206661696c656420746f2070617920657468657220746f2072656c61796572",
                                    "id": 665,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "6760:51:2",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_bcb705bdb8964678f5bc2c93d76eb41bed9b71acf3f85b60fb3d9507a0490c17",
                                      "typeString": "literal_string \"Execution contract failed to pay ether to relayer\""
                                    },
                                    "value": "Execution contract failed to pay ether to relayer"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    {
                                      "typeIdentifier": "t_stringliteral_bcb705bdb8964678f5bc2c93d76eb41bed9b71acf3f85b60fb3d9507a0490c17",
                                      "typeString": "literal_string \"Execution contract failed to pay ether to relayer\""
                                    }
                                  ],
                                  "id": 654,
                                  "name": "require",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [
                                    1586,
                                    1587
                                  ],
                                  "referencedDeclaration": 1587,
                                  "src": "6637:7:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                    "typeString": "function (bool,string memory) pure"
                                  }
                                },
                                "id": 666,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "6637:192:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 667,
                              "nodeType": "ExpressionStatement",
                              "src": "6637:192:2"
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 731,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 599,
                    "src": "8629:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 570,
                  "id": 732,
                  "nodeType": "Return",
                  "src": "8622:13:2"
                }
              ]
            },
            "documentation": null,
            "id": 734,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "execute",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 567,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 550,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 734,
                  "src": "4302:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 549,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4302:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 552,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 734,
                  "src": "4341:10:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 551,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4341:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 554,
                  "name": "tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 734,
                  "src": "4377:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 553,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4377:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 556,
                  "name": "tokenAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 734,
                  "src": "4449:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 555,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4449:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 558,
                  "name": "periodSeconds",
                  "nodeType": "VariableDeclaration",
                  "scope": 734,
                  "src": "4519:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 557,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4519:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 560,
                  "name": "gasToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 734,
                  "src": "4591:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 559,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4591:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 562,
                  "name": "gasPrice",
                  "nodeType": "VariableDeclaration",
                  "scope": 734,
                  "src": "4671:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 561,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4671:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 564,
                  "name": "gasPayer",
                  "nodeType": "VariableDeclaration",
                  "scope": 734,
                  "src": "4755:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 563,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4755:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 566,
                  "name": "signature",
                  "nodeType": "VariableDeclaration",
                  "scope": 734,
                  "src": "4835:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 565,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4835:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4292:614:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 570,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 569,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 734,
                  "src": "4939:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 568,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4939:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4938:14:2"
            },
            "scope": 735,
            "src": "4276:4366:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 736,
        "src": "273:8371:2"
      }
    ],
    "src": "0:8645:2"
  },
  "legacyAST": {
    "absolutePath": "/workspace/projects/hackathons/enterCrypto/backend/contracts/Identity.sol",
    "exportedSymbols": {
      "Identity": [
        735
      ]
    },
    "id": 736,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 371,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:2"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/ECRecovery.sol",
        "file": "openzeppelin-solidity/contracts/ECRecovery.sol",
        "id": 372,
        "nodeType": "ImportDirective",
        "scope": 736,
        "sourceUnit": 866,
        "src": "26:56:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "openzeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 373,
        "nodeType": "ImportDirective",
        "scope": 736,
        "sourceUnit": 1408,
        "src": "83:59:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 374,
        "nodeType": "ImportDirective",
        "scope": 736,
        "sourceUnit": 1494,
        "src": "143:63:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "file": "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "id": 375,
        "nodeType": "ImportDirective",
        "scope": 736,
        "sourceUnit": 1537,
        "src": "207:63:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 376,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1493,
              "src": "294:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$1493",
                "typeString": "contract Ownable"
              }
            },
            "id": 377,
            "nodeType": "InheritanceSpecifier",
            "src": "294:7:2"
          }
        ],
        "contractDependencies": [
          1493
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 735,
        "linearizedBaseContracts": [
          735,
          1493
        ],
        "name": "Identity",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 380,
            "libraryName": {
              "contractScope": null,
              "id": 378,
              "name": "ECRecovery",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 865,
              "src": "314:10:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ECRecovery_$865",
                "typeString": "library ECRecovery"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "308:29:2",
            "typeName": {
              "id": 379,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "329:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            }
          },
          {
            "id": 383,
            "libraryName": {
              "contractScope": null,
              "id": 381,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1407,
              "src": "348:8:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$1407",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "342:27:2",
            "typeName": {
              "id": 382,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "361:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 385,
            "name": "userAddress",
            "nodeType": "VariableDeclaration",
            "scope": 735,
            "src": "375:19:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 384,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "375:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 387,
            "name": "registry",
            "nodeType": "VariableDeclaration",
            "scope": 735,
            "src": "400:16:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 386,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "400:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 389,
            "name": "fundedAmount",
            "nodeType": "VariableDeclaration",
            "scope": 735,
            "src": "422:20:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 388,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "422:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 410,
              "nodeType": "Block",
              "src": "526:104:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 400,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 398,
                      "name": "userAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 385,
                      "src": "536:11:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 399,
                      "name": "_user",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 391,
                      "src": "550:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "536:19:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 401,
                  "nodeType": "ExpressionStatement",
                  "src": "536:19:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 404,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 402,
                      "name": "registry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 387,
                      "src": "565:8:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 403,
                      "name": "_registry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 393,
                      "src": "576:9:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "565:20:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 405,
                  "nodeType": "ExpressionStatement",
                  "src": "565:20:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 408,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 406,
                      "name": "fundedAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 389,
                      "src": "595:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 407,
                      "name": "_fundedAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 395,
                      "src": "610:13:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "595:28:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 409,
                  "nodeType": "ExpressionStatement",
                  "src": "595:28:2"
                }
              ]
            },
            "documentation": null,
            "id": 411,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 396,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 391,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 411,
                  "src": "461:13:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 390,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "461:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 393,
                  "name": "_registry",
                  "nodeType": "VariableDeclaration",
                  "scope": 411,
                  "src": "476:17:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 392,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "476:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 395,
                  "name": "_fundedAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 411,
                  "src": "495:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 394,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "495:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "460:57:2"
            },
            "payable": true,
            "returnParameters": {
              "id": 397,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "526:0:2"
            },
            "scope": 735,
            "src": "449:181:2",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 421,
              "nodeType": "Block",
              "src": "663:53:2",
              "statements": [
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 415,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1583,
                          "src": "687:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 416,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "687:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 417,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1583,
                          "src": "699:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 418,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "699:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 414,
                      "name": "Received",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 428,
                      "src": "678:8:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 419,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "678:31:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 420,
                  "nodeType": "EmitStatement",
                  "src": "673:36:2"
                }
              ]
            },
            "documentation": null,
            "id": 422,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 412,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "645:2:2"
            },
            "payable": true,
            "returnParameters": {
              "id": 413,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "663:0:2"
            },
            "scope": 735,
            "src": "636:80:2",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 428,
            "name": "Received",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 427,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 424,
                  "indexed": true,
                  "name": "sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 428,
                  "src": "738:22:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 423,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "738:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 426,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 428,
                  "src": "762:10:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 425,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "762:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "737:36:2"
            },
            "src": "722:52:2"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 446,
            "name": "ExecuteExecution",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 445,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 430,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 446,
                  "src": "811:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 429,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "811:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 432,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 446,
                  "src": "858:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 431,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "858:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 434,
                  "indexed": false,
                  "name": "tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 446,
                  "src": "902:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 433,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "902:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 436,
                  "indexed": false,
                  "name": "tokenAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 446,
                  "src": "974:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 435,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "974:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 438,
                  "indexed": false,
                  "name": "periodSeconds",
                  "nodeType": "VariableDeclaration",
                  "scope": 446,
                  "src": "1044:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 437,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1044:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 440,
                  "indexed": false,
                  "name": "gasToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 446,
                  "src": "1116:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 439,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1116:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 442,
                  "indexed": false,
                  "name": "gasPrice",
                  "nodeType": "VariableDeclaration",
                  "scope": 446,
                  "src": "1196:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 441,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1196:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 444,
                  "indexed": false,
                  "name": "gasPayer",
                  "nodeType": "VariableDeclaration",
                  "scope": 446,
                  "src": "1280:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 443,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1280:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "801:555:2"
            },
            "src": "779:578:2"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 464,
            "name": "FailedExecuteExecution",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 463,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 448,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 464,
                  "src": "1400:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 447,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1400:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 450,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 464,
                  "src": "1447:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 449,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1447:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 452,
                  "indexed": false,
                  "name": "tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 464,
                  "src": "1491:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 451,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1491:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 454,
                  "indexed": false,
                  "name": "tokenAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 464,
                  "src": "1563:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 453,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1563:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 456,
                  "indexed": false,
                  "name": "periodSeconds",
                  "nodeType": "VariableDeclaration",
                  "scope": 464,
                  "src": "1633:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 455,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1633:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 458,
                  "indexed": false,
                  "name": "gasToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 464,
                  "src": "1705:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 457,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1705:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 460,
                  "indexed": false,
                  "name": "gasPrice",
                  "nodeType": "VariableDeclaration",
                  "scope": 464,
                  "src": "1785:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 459,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1785:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 462,
                  "indexed": false,
                  "name": "gasPayer",
                  "nodeType": "VariableDeclaration",
                  "scope": 464,
                  "src": "1869:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 461,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1869:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1390:555:2"
            },
            "src": "1362:584:2"
          },
          {
            "constant": false,
            "id": 468,
            "name": "publisherSigned",
            "nodeType": "VariableDeclaration",
            "scope": 735,
            "src": "2146:47:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
              "typeString": "mapping(bytes32 => bool)"
            },
            "typeName": {
              "id": 467,
              "keyType": {
                "id": 465,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "2154:7:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "2146:24:2",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                "typeString": "mapping(bytes32 => bool)"
              },
              "valueType": {
                "id": 466,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "2165:4:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 485,
              "nodeType": "Block",
              "src": "2533:75:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 481,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 477,
                        "name": "publisherSigned",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 468,
                        "src": "2543:15:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                          "typeString": "mapping(bytes32 => bool)"
                        }
                      },
                      "id": 479,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 478,
                        "name": "executionHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 470,
                        "src": "2559:13:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2543:30:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 480,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2576:4:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "2543:37:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 482,
                  "nodeType": "ExpressionStatement",
                  "src": "2543:37:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 483,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2597:4:2",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 476,
                  "id": 484,
                  "nodeType": "Return",
                  "src": "2590:11:2"
                }
              ]
            },
            "documentation": null,
            "id": 486,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 473,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 472,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1441,
                  "src": "2497:9:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2497:9:2"
              }
            ],
            "name": "signExecutionHash",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 471,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 470,
                  "name": "executionHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 486,
                  "src": "2451:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 469,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2451:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2450:23:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 476,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 475,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 486,
                  "src": "2523:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 474,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2523:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2522:6:2"
            },
            "scope": 735,
            "src": "2424:184:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 530,
              "nodeType": "Block",
              "src": "3387:368:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "30783139",
                                "id": 511,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3466:4:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_25_by_1",
                                  "typeString": "int_const 25"
                                },
                                "value": "0x19"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_25_by_1",
                                  "typeString": "int_const 25"
                                }
                              ],
                              "id": 510,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3461:4:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes1_$",
                                "typeString": "type(bytes1)"
                              },
                              "typeName": "byte"
                            },
                            "id": 512,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3461:10:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "30",
                                "id": 514,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3494:1:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                }
                              ],
                              "id": 513,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3489:4:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes1_$",
                                "typeString": "type(bytes1)"
                              },
                              "typeName": "byte"
                            },
                            "id": 515,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3489:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 517,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1606,
                                "src": "3522:4:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_Identity_$735",
                                  "typeString": "contract Identity"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_Identity_$735",
                                  "typeString": "contract Identity"
                                }
                              ],
                              "id": 516,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3514:7:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 518,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3514:13:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 519,
                            "name": "from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 488,
                            "src": "3545:4:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 520,
                            "name": "to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 490,
                            "src": "3567:2:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 521,
                            "name": "tokenAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 492,
                            "src": "3587:12:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 522,
                            "name": "tokenAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 494,
                            "src": "3617:11:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 523,
                            "name": "periodSeconds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 496,
                            "src": "3646:13:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 524,
                            "name": "gasToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 498,
                            "src": "3677:8:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 525,
                            "name": "gasPrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 500,
                            "src": "3703:8:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 526,
                            "name": "gasPayer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 502,
                            "src": "3729:8:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            },
                            {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 508,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1570,
                            "src": "3427:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 509,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3427:16:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 527,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3427:320:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 507,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1577,
                      "src": "3404:9:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 528,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3404:344:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 506,
                  "id": 529,
                  "nodeType": "Return",
                  "src": "3397:351:2"
                }
              ]
            },
            "documentation": null,
            "id": 531,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getExecutionHash",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 503,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 488,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 531,
                  "src": "2799:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 487,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2799:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 490,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 531,
                  "src": "2838:10:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 489,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2838:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 492,
                  "name": "tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 531,
                  "src": "2874:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 491,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2874:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 494,
                  "name": "tokenAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 531,
                  "src": "2946:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 493,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2946:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 496,
                  "name": "periodSeconds",
                  "nodeType": "VariableDeclaration",
                  "scope": 531,
                  "src": "3016:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 495,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3016:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 498,
                  "name": "gasToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 531,
                  "src": "3088:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 497,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3088:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 500,
                  "name": "gasPrice",
                  "nodeType": "VariableDeclaration",
                  "scope": 531,
                  "src": "3168:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 499,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3168:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 502,
                  "name": "gasPayer",
                  "nodeType": "VariableDeclaration",
                  "scope": 531,
                  "src": "3252:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 501,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3252:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2789:539:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 506,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 505,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 531,
                  "src": "3374:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 504,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3374:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3373:9:2"
            },
            "scope": 735,
            "src": "2764:991:2",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 547,
              "nodeType": "Block",
              "src": "4037:81:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 544,
                        "name": "signature",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 535,
                        "src": "4101:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "expression": {
                            "argumentTypes": null,
                            "id": 540,
                            "name": "executionHash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 533,
                            "src": "4054:13:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "id": 541,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "toEthSignedMessageHash",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 864,
                          "src": "4054:36:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_bytes32_$bound_to$_t_bytes32_$",
                            "typeString": "function (bytes32) pure returns (bytes32)"
                          }
                        },
                        "id": 542,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4054:38:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "id": 543,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "recover",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 848,
                      "src": "4054:46:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_address_$bound_to$_t_bytes32_$",
                        "typeString": "function (bytes32,bytes memory) pure returns (address)"
                      }
                    },
                    "id": 545,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4054:57:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 539,
                  "id": 546,
                  "nodeType": "Return",
                  "src": "4047:64:2"
                }
              ]
            },
            "documentation": null,
            "id": 548,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getExecutionSigner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 536,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 533,
                  "name": "executionHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 548,
                  "src": "3853:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 532,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3853:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 535,
                  "name": "signature",
                  "nodeType": "VariableDeclaration",
                  "scope": 548,
                  "src": "3907:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 534,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3907:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3843:135:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 539,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 538,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 548,
                  "src": "4024:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 537,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4024:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4023:9:2"
            },
            "scope": 735,
            "src": "3816:302:2",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 733,
              "nodeType": "Block",
              "src": "4957:3685:2",
              "statements": [
                {
                  "assignments": [
                    572
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 572,
                      "name": "executionHash",
                      "nodeType": "VariableDeclaration",
                      "scope": 734,
                      "src": "5114:21:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 571,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "5114:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 583,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 574,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 550,
                        "src": "5168:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 575,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 552,
                        "src": "5174:2:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 576,
                        "name": "tokenAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 554,
                        "src": "5178:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 577,
                        "name": "tokenAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 556,
                        "src": "5192:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 578,
                        "name": "periodSeconds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 558,
                        "src": "5205:13:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 579,
                        "name": "gasToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 560,
                        "src": "5220:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 580,
                        "name": "gasPrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 562,
                        "src": "5230:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 581,
                        "name": "gasPayer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 564,
                        "src": "5240:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 573,
                      "name": "getExecutionHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 531,
                      "src": "5138:16:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_address_$_t_uint256_$_t_address_$returns$_t_bytes32_$",
                        "typeString": "function (address,address,address,uint256,uint256,address,uint256,address) view returns (bytes32)"
                      }
                    },
                    "id": 582,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5138:120:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5114:144:2"
                },
                {
                  "assignments": [
                    585
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 585,
                      "name": "signer",
                      "nodeType": "VariableDeclaration",
                      "scope": 734,
                      "src": "5268:14:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 584,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "5268:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 590,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 587,
                        "name": "executionHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 572,
                        "src": "5304:13:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 588,
                        "name": "signature",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 566,
                        "src": "5319:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 586,
                      "name": "getExecutionSigner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 548,
                      "src": "5285:18:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_address_$",
                        "typeString": "function (bytes32,bytes memory) pure returns (address)"
                      }
                    },
                    "id": 589,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5285:44:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5268:61:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 594,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 592,
                          "name": "signer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 585,
                          "src": "5386:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 593,
                          "name": "from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 550,
                          "src": "5396:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "5386:14:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "496e76616c6964205369676e6174757265",
                        "id": 595,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5402:19:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_98abf41928333e3fb96f450e411f323711f90894815c0b92e5e7c34ae876605a",
                          "typeString": "literal_string \"Invalid Signature\""
                        },
                        "value": "Invalid Signature"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_98abf41928333e3fb96f450e411f323711f90894815c0b92e5e7c34ae876605a",
                          "typeString": "literal_string \"Invalid Signature\""
                        }
                      ],
                      "id": 591,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1586,
                        1587
                      ],
                      "referencedDeclaration": 1587,
                      "src": "5378:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 596,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5378:44:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 597,
                  "nodeType": "ExpressionStatement",
                  "src": "5378:44:2"
                },
                {
                  "assignments": [
                    599
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 599,
                      "name": "result",
                      "nodeType": "VariableDeclaration",
                      "scope": 734,
                      "src": "5508:11:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 598,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "5508:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 608,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 604,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 550,
                        "src": "5555:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 605,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 552,
                        "src": "5560:2:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 606,
                        "name": "tokenAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 556,
                        "src": "5563:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 601,
                            "name": "tokenAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 554,
                            "src": "5528:12:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 600,
                          "name": "ERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1536,
                          "src": "5522:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_ERC20_$1536_$",
                            "typeString": "type(contract ERC20)"
                          }
                        },
                        "id": 602,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5522:19:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$1536",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 603,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1518,
                      "src": "5522:32:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 607,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5522:53:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5508:67:2"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 609,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 599,
                    "src": "5589:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 633,
                    "nodeType": "Block",
                    "src": "5761:164:2",
                    "statements": [
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 623,
                              "name": "from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 550,
                              "src": "5820:4:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 624,
                              "name": "to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 552,
                              "src": "5826:2:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 625,
                              "name": "tokenAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 554,
                              "src": "5830:12:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 626,
                              "name": "tokenAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 556,
                              "src": "5844:11:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 627,
                              "name": "periodSeconds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 558,
                              "src": "5857:13:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 628,
                              "name": "gasToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 560,
                              "src": "5872:8:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 629,
                              "name": "gasPrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 562,
                              "src": "5882:8:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 630,
                              "name": "gasPayer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 564,
                              "src": "5892:8:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 622,
                            "name": "FailedExecuteExecution",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 464,
                            "src": "5780:22:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_address_$_t_uint256_$_t_address_$returns$__$",
                              "typeString": "function (address,address,address,uint256,uint256,address,uint256,address)"
                            }
                          },
                          "id": 631,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5780:134:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 632,
                        "nodeType": "EmitStatement",
                        "src": "5775:139:2"
                      }
                    ]
                  },
                  "id": 634,
                  "nodeType": "IfStatement",
                  "src": "5585:340:2",
                  "trueBody": {
                    "id": 621,
                    "nodeType": "Block",
                    "src": "5597:158:2",
                    "statements": [
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 611,
                              "name": "from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 550,
                              "src": "5650:4:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 612,
                              "name": "to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 552,
                              "src": "5656:2:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 613,
                              "name": "tokenAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 554,
                              "src": "5660:12:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 614,
                              "name": "tokenAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 556,
                              "src": "5674:11:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 615,
                              "name": "periodSeconds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 558,
                              "src": "5687:13:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 616,
                              "name": "gasToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 560,
                              "src": "5702:8:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 617,
                              "name": "gasPrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 562,
                              "src": "5712:8:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 618,
                              "name": "gasPayer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 564,
                              "src": "5722:8:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 610,
                            "name": "ExecuteExecution",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 446,
                            "src": "5616:16:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_address_$_t_uint256_$_t_address_$returns$__$",
                              "typeString": "function (address,address,address,uint256,uint256,address,uint256,address)"
                            }
                          },
                          "id": 619,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5616:128:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 620,
                        "nodeType": "EmitStatement",
                        "src": "5611:133:2"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 637,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 635,
                      "name": "gasPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 562,
                      "src": "6140:8:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 636,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6151:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "6140:12:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 730,
                  "nodeType": "IfStatement",
                  "src": "6136:2476:2",
                  "trueBody": {
                    "id": 729,
                    "nodeType": "Block",
                    "src": "6154:2458:2",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 642,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 638,
                            "name": "gasToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 560,
                            "src": "6172:8:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "30",
                                "id": 640,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "6192:1:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                }
                              ],
                              "id": 639,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "6184:7:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 641,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6184:10:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "6172:22:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "condition": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "id": 679,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "id": 673,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 669,
                                "name": "gasPayer",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 564,
                                "src": "6854:8:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 671,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1606,
                                    "src": "6874:4:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_Identity_$735",
                                      "typeString": "contract Identity"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_Identity_$735",
                                      "typeString": "contract Identity"
                                    }
                                  ],
                                  "id": 670,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "6866:7:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": "address"
                                },
                                "id": 672,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "6866:13:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "src": "6854:25:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "||",
                            "rightExpression": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "id": 678,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 674,
                                "name": "gasPayer",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 564,
                                "src": "6883:8:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "30",
                                    "id": 676,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "6903:1:2",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    },
                                    "value": "0"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    }
                                  ],
                                  "id": 675,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "6895:7:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": "address"
                                },
                                "id": 677,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "6895:10:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "src": "6883:22:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "src": "6854:51:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "falseBody": {
                            "condition": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "id": 706,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 704,
                                "name": "gasPayer",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 564,
                                "src": "7482:8:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "argumentTypes": null,
                                "id": 705,
                                "name": "from",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 550,
                                "src": "7494:4:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "src": "7482:16:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "falseBody": {
                              "id": 725,
                              "nodeType": "Block",
                              "src": "7936:666:2",
                              "statements": [
                                {
                                  "expression": {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "hexValue": "54686520676173506179657220697320696e76616c6964",
                                        "id": 722,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "8178:25:2",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_stringliteral_a23139e430e4282b1a0c740ac0e976a10686ce751b181f465050ef1edb7bfaa9",
                                          "typeString": "literal_string \"The gasPayer is invalid\""
                                        },
                                        "value": "The gasPayer is invalid"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_stringliteral_a23139e430e4282b1a0c740ac0e976a10686ce751b181f465050ef1edb7bfaa9",
                                          "typeString": "literal_string \"The gasPayer is invalid\""
                                        }
                                      ],
                                      "id": 721,
                                      "name": "revert",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [
                                        1588,
                                        1589
                                      ],
                                      "referencedDeclaration": 1589,
                                      "src": "8171:6:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                                        "typeString": "function (string memory) pure"
                                      }
                                    },
                                    "id": 723,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "8171:33:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_tuple$__$",
                                      "typeString": "tuple()"
                                    }
                                  },
                                  "id": 724,
                                  "nodeType": "ExpressionStatement",
                                  "src": "8171:33:2"
                                }
                              ]
                            },
                            "id": 726,
                            "nodeType": "IfStatement",
                            "src": "7478:1124:2",
                            "trueBody": {
                              "id": 720,
                              "nodeType": "Block",
                              "src": "7500:430:2",
                              "statements": [
                                {
                                  "expression": {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "arguments": [
                                          {
                                            "argumentTypes": null,
                                            "id": 712,
                                            "name": "from",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 550,
                                            "src": "7813:4:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            }
                                          },
                                          {
                                            "argumentTypes": null,
                                            "expression": {
                                              "argumentTypes": null,
                                              "id": 713,
                                              "name": "msg",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 1583,
                                              "src": "7819:3:2",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_magic_message",
                                                "typeString": "msg"
                                              }
                                            },
                                            "id": 714,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "sender",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "7819:10:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            }
                                          },
                                          {
                                            "argumentTypes": null,
                                            "id": 715,
                                            "name": "gasPrice",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 562,
                                            "src": "7831:8:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          }
                                        ],
                                        "expression": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            },
                                            {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            },
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                              {
                                                "argumentTypes": null,
                                                "id": 709,
                                                "name": "gasToken",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 560,
                                                "src": "7790:8:2",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_address",
                                                  "typeString": "address"
                                                }
                                              }
                                            ],
                                            "expression": {
                                              "argumentTypes": [
                                                {
                                                  "typeIdentifier": "t_address",
                                                  "typeString": "address"
                                                }
                                              ],
                                              "id": 708,
                                              "name": "ERC20",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 1536,
                                              "src": "7784:5:2",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_contract$_ERC20_$1536_$",
                                                "typeString": "type(contract ERC20)"
                                              }
                                            },
                                            "id": 710,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "7784:15:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_contract$_ERC20_$1536",
                                              "typeString": "contract ERC20"
                                            }
                                          },
                                          "id": 711,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberName": "transferFrom",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": 1518,
                                          "src": "7784:28:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                            "typeString": "function (address,address,uint256) external returns (bool)"
                                          }
                                        },
                                        "id": 716,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7784:56:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                        }
                                      },
                                      {
                                        "argumentTypes": null,
                                        "hexValue": "4661696c656420746f20706179206761732061732066726f6d206163636f756e74",
                                        "id": 717,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "7862:35:2",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_stringliteral_14793e3e3905a30586d2b24e3ad0438f041907f0cf302e37f5d900c5e9ac3e25",
                                          "typeString": "literal_string \"Failed to pay gas as from account\""
                                        },
                                        "value": "Failed to pay gas as from account"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                        },
                                        {
                                          "typeIdentifier": "t_stringliteral_14793e3e3905a30586d2b24e3ad0438f041907f0cf302e37f5d900c5e9ac3e25",
                                          "typeString": "literal_string \"Failed to pay gas as from account\""
                                        }
                                      ],
                                      "id": 707,
                                      "name": "require",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [
                                        1586,
                                        1587
                                      ],
                                      "referencedDeclaration": 1587,
                                      "src": "7755:7:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                        "typeString": "function (bool,string memory) pure"
                                      }
                                    },
                                    "id": 718,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "7755:160:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_tuple$__$",
                                      "typeString": "tuple()"
                                    }
                                  },
                                  "id": 719,
                                  "nodeType": "ExpressionStatement",
                                  "src": "7755:160:2"
                                }
                              ]
                            }
                          },
                          "id": 727,
                          "nodeType": "IfStatement",
                          "src": "6850:1752:2",
                          "trueBody": {
                            "id": 703,
                            "nodeType": "Block",
                            "src": "6907:565:2",
                            "statements": [
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      },
                                      "id": 687,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "argumentTypes": null,
                                        "commonType": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        },
                                        "id": 683,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "argumentTypes": null,
                                          "id": 681,
                                          "name": "from",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 550,
                                          "src": "7173:4:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                          "argumentTypes": null,
                                          "id": 682,
                                          "name": "owner",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 1411,
                                          "src": "7181:5:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          }
                                        },
                                        "src": "7173:13:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "||",
                                      "rightExpression": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                          "argumentTypes": null,
                                          "id": 684,
                                          "name": "publisherSigned",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 468,
                                          "src": "7190:15:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                                            "typeString": "mapping(bytes32 => bool)"
                                          }
                                        },
                                        "id": 686,
                                        "indexExpression": {
                                          "argumentTypes": null,
                                          "id": 685,
                                          "name": "executionHash",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 572,
                                          "src": "7206:13:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                          }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "7190:30:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                        }
                                      },
                                      "src": "7173:47:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "5075626c697368657220686173206e6f74207369676e6564207468697320657865637574696f6e48617368",
                                      "id": 688,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "7246:45:2",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_2198900e941c7c5318576480a508652b95192dc7dc973c228b1994fa4ce71340",
                                        "typeString": "literal_string \"Publisher has not signed this executionHash\""
                                      },
                                      "value": "Publisher has not signed this executionHash"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      },
                                      {
                                        "typeIdentifier": "t_stringliteral_2198900e941c7c5318576480a508652b95192dc7dc973c228b1994fa4ce71340",
                                        "typeString": "literal_string \"Publisher has not signed this executionHash\""
                                      }
                                    ],
                                    "id": 680,
                                    "name": "require",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [
                                      1586,
                                      1587
                                    ],
                                    "referencedDeclaration": 1587,
                                    "src": "7165:7:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                      "typeString": "function (bool,string memory) pure"
                                    }
                                  },
                                  "id": 689,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "7165:144:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 690,
                                "nodeType": "ExpressionStatement",
                                "src": "7165:144:2"
                              },
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "arguments": [
                                        {
                                          "argumentTypes": null,
                                          "expression": {
                                            "argumentTypes": null,
                                            "id": 696,
                                            "name": "msg",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1583,
                                            "src": "7361:3:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_magic_message",
                                              "typeString": "msg"
                                            }
                                          },
                                          "id": 697,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberName": "sender",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": null,
                                          "src": "7361:10:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          }
                                        },
                                        {
                                          "argumentTypes": null,
                                          "id": 698,
                                          "name": "gasPrice",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 562,
                                          "src": "7373:8:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          },
                                          {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        ],
                                        "expression": {
                                          "argumentTypes": null,
                                          "arguments": [
                                            {
                                              "argumentTypes": null,
                                              "id": 693,
                                              "name": "gasToken",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 560,
                                              "src": "7342:8:2",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                              }
                                            }
                                          ],
                                          "expression": {
                                            "argumentTypes": [
                                              {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                              }
                                            ],
                                            "id": 692,
                                            "name": "ERC20",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1536,
                                            "src": "7336:5:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_type$_t_contract$_ERC20_$1536_$",
                                              "typeString": "type(contract ERC20)"
                                            }
                                          },
                                          "id": 694,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "typeConversion",
                                          "lValueRequested": false,
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "7336:15:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ERC20_$1536",
                                            "typeString": "contract ERC20"
                                          }
                                        },
                                        "id": 695,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "transfer",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 1559,
                                        "src": "7336:24:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                          "typeString": "function (address,uint256) external returns (bool)"
                                        }
                                      },
                                      "id": 699,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "7336:46:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "4661696c656420746f207061792067617320617320636f6e7472616374",
                                      "id": 700,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "7408:31:2",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_fad8f41fd0c99926eaf7e677842e423c5e5310ba4967cc435e2e6a69b9eaf43d",
                                        "typeString": "literal_string \"Failed to pay gas as contract\""
                                      },
                                      "value": "Failed to pay gas as contract"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      },
                                      {
                                        "typeIdentifier": "t_stringliteral_fad8f41fd0c99926eaf7e677842e423c5e5310ba4967cc435e2e6a69b9eaf43d",
                                        "typeString": "literal_string \"Failed to pay gas as contract\""
                                      }
                                    ],
                                    "id": 691,
                                    "name": "require",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [
                                      1586,
                                      1587
                                    ],
                                    "referencedDeclaration": 1587,
                                    "src": "7328:7:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                      "typeString": "function (bool,string memory) pure"
                                    }
                                  },
                                  "id": 701,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "7328:129:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 702,
                                "nodeType": "ExpressionStatement",
                                "src": "7328:129:2"
                              }
                            ]
                          }
                        },
                        "id": 728,
                        "nodeType": "IfStatement",
                        "src": "6168:2434:2",
                        "trueBody": {
                          "id": 668,
                          "nodeType": "Block",
                          "src": "6196:648:2",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "commonType": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    "id": 650,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      },
                                      "id": 646,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "argumentTypes": null,
                                        "id": 644,
                                        "name": "from",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 550,
                                        "src": "6486:4:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "==",
                                      "rightExpression": {
                                        "argumentTypes": null,
                                        "id": 645,
                                        "name": "owner",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 1411,
                                        "src": "6494:5:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      },
                                      "src": "6486:13:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "||",
                                    "rightExpression": {
                                      "argumentTypes": null,
                                      "baseExpression": {
                                        "argumentTypes": null,
                                        "id": 647,
                                        "name": "publisherSigned",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 468,
                                        "src": "6503:15:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                                          "typeString": "mapping(bytes32 => bool)"
                                        }
                                      },
                                      "id": 649,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 648,
                                        "name": "executionHash",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 572,
                                        "src": "6519:13:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      },
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "IndexAccess",
                                      "src": "6503:30:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    },
                                    "src": "6486:47:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  },
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "5075626c697368657220686173206e6f74207369676e6564207468697320657865637574696f6e48617368",
                                    "id": 651,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "6555:45:2",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_2198900e941c7c5318576480a508652b95192dc7dc973c228b1994fa4ce71340",
                                      "typeString": "literal_string \"Publisher has not signed this executionHash\""
                                    },
                                    "value": "Publisher has not signed this executionHash"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    {
                                      "typeIdentifier": "t_stringliteral_2198900e941c7c5318576480a508652b95192dc7dc973c228b1994fa4ce71340",
                                      "typeString": "literal_string \"Publisher has not signed this executionHash\""
                                    }
                                  ],
                                  "id": 643,
                                  "name": "require",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [
                                    1586,
                                    1587
                                  ],
                                  "referencedDeclaration": 1587,
                                  "src": "6457:7:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                    "typeString": "function (bool,string memory) pure"
                                  }
                                },
                                "id": 652,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "6457:161:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 653,
                              "nodeType": "ExpressionStatement",
                              "src": "6457:161:2"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "arguments": [],
                                    "expression": {
                                      "argumentTypes": [],
                                      "arguments": [
                                        {
                                          "argumentTypes": null,
                                          "hexValue": "3336303030",
                                          "id": 662,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "kind": "number",
                                          "lValueRequested": false,
                                          "nodeType": "Literal",
                                          "src": "6681:5:2",
                                          "subdenomination": null,
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_rational_36000_by_1",
                                            "typeString": "int_const 36000"
                                          },
                                          "value": "36000"
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_rational_36000_by_1",
                                            "typeString": "int_const 36000"
                                          }
                                        ],
                                        "expression": {
                                          "argumentTypes": null,
                                          "arguments": [
                                            {
                                              "argumentTypes": null,
                                              "id": 659,
                                              "name": "gasPrice",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 562,
                                              "src": "6667:8:2",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              }
                                            }
                                          ],
                                          "expression": {
                                            "argumentTypes": [
                                              {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              }
                                            ],
                                            "expression": {
                                              "argumentTypes": null,
                                              "expression": {
                                                "argumentTypes": null,
                                                "expression": {
                                                  "argumentTypes": null,
                                                  "id": 655,
                                                  "name": "msg",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 1583,
                                                  "src": "6645:3:2",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_message",
                                                    "typeString": "msg"
                                                  }
                                                },
                                                "id": 656,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "6645:10:2",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_address",
                                                  "typeString": "address"
                                                }
                                              },
                                              "id": 657,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberName": "call",
                                              "nodeType": "MemberAccess",
                                              "referencedDeclaration": null,
                                              "src": "6645:15:2",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_barecall_payable$__$returns$_t_bool_$",
                                                "typeString": "function () payable returns (bool)"
                                              }
                                            },
                                            "id": 658,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "value",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "6645:21:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_function_setvalue_nonpayable$_t_uint256_$returns$_t_function_barecall_payable$__$returns$_t_bool_$value_$",
                                              "typeString": "function (uint256) returns (function () payable returns (bool))"
                                            }
                                          },
                                          "id": 660,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "functionCall",
                                          "lValueRequested": false,
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "6645:31:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_barecall_payable$__$returns$_t_bool_$value",
                                            "typeString": "function () payable returns (bool)"
                                          }
                                        },
                                        "id": 661,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "gas",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "6645:35:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_setgas_nonpayable$_t_uint256_$returns$_t_function_barecall_payable$__$returns$_t_bool_$gasvalue_$value",
                                          "typeString": "function (uint256) returns (function () payable returns (bool))"
                                        }
                                      },
                                      "id": 663,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "6645:42:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_barecall_payable$__$returns$_t_bool_$gasvalue",
                                        "typeString": "function () payable returns (bool)"
                                      }
                                    },
                                    "id": 664,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "6645:44:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  },
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "457865637574696f6e20636f6e7472616374206661696c656420746f2070617920657468657220746f2072656c61796572",
                                    "id": 665,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "6760:51:2",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_bcb705bdb8964678f5bc2c93d76eb41bed9b71acf3f85b60fb3d9507a0490c17",
                                      "typeString": "literal_string \"Execution contract failed to pay ether to relayer\""
                                    },
                                    "value": "Execution contract failed to pay ether to relayer"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    {
                                      "typeIdentifier": "t_stringliteral_bcb705bdb8964678f5bc2c93d76eb41bed9b71acf3f85b60fb3d9507a0490c17",
                                      "typeString": "literal_string \"Execution contract failed to pay ether to relayer\""
                                    }
                                  ],
                                  "id": 654,
                                  "name": "require",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [
                                    1586,
                                    1587
                                  ],
                                  "referencedDeclaration": 1587,
                                  "src": "6637:7:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                    "typeString": "function (bool,string memory) pure"
                                  }
                                },
                                "id": 666,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "6637:192:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 667,
                              "nodeType": "ExpressionStatement",
                              "src": "6637:192:2"
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 731,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 599,
                    "src": "8629:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 570,
                  "id": 732,
                  "nodeType": "Return",
                  "src": "8622:13:2"
                }
              ]
            },
            "documentation": null,
            "id": 734,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "execute",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 567,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 550,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 734,
                  "src": "4302:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 549,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4302:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 552,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 734,
                  "src": "4341:10:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 551,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4341:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 554,
                  "name": "tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 734,
                  "src": "4377:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 553,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4377:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 556,
                  "name": "tokenAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 734,
                  "src": "4449:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 555,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4449:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 558,
                  "name": "periodSeconds",
                  "nodeType": "VariableDeclaration",
                  "scope": 734,
                  "src": "4519:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 557,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4519:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 560,
                  "name": "gasToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 734,
                  "src": "4591:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 559,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4591:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 562,
                  "name": "gasPrice",
                  "nodeType": "VariableDeclaration",
                  "scope": 734,
                  "src": "4671:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 561,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4671:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 564,
                  "name": "gasPayer",
                  "nodeType": "VariableDeclaration",
                  "scope": 734,
                  "src": "4755:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 563,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4755:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 566,
                  "name": "signature",
                  "nodeType": "VariableDeclaration",
                  "scope": 734,
                  "src": "4835:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 565,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4835:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4292:614:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 570,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 569,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 734,
                  "src": "4939:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 568,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4939:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4938:14:2"
            },
            "scope": 735,
            "src": "4276:4366:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 736,
        "src": "273:8371:2"
      }
    ],
    "src": "0:8645:2"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-09-08T20:45:48.850Z"
}

var contract = "undefined";
if (web3 !== "undefined") {
  contract = new web3.eth.Contract(abi, address);
}
export default contract;