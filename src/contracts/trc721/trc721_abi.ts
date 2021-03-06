export default {
    'entrys': [{
        'inputs': [{'name': 'name', 'type': 'string'}, {'name': 'symbol', 'type': 'string'}],
        'stateMutability': 'Nonpayable',
        'type': 'Constructor'
    }, {
        'inputs': [{'indexed': true, 'name': 'owner', 'type': 'address'}, {'indexed': true, 'name': 'approved', 'type': 'address'}, {
            'indexed': true,
            'name': 'tokenId',
            'type': 'uint256'
        }], 'name': 'Approval', 'type': 'Event'
    }, {
        'inputs': [{'indexed': true, 'name': 'owner', 'type': 'address'}, {'indexed': true, 'name': 'operator', 'type': 'address'}, {'name': 'approved', 'type': 'bool'}],
        'name': 'ApprovalForAll',
        'type': 'Event'
    }, {'inputs': [{'indexed': true, 'name': 'account', 'type': 'address'}], 'name': 'MinterAdded', 'type': 'Event'}, {
        'inputs': [{
            'indexed': true,
            'name': 'account',
            'type': 'address'
        }], 'name': 'MinterRemoved', 'type': 'Event'
    }, {
        'inputs': [{'indexed': true, 'name': 'from', 'type': 'address'}, {'indexed': true, 'name': 'to', 'type': 'address'}, {
            'indexed': true,
            'name': 'tokenId',
            'type': 'uint256'
        }], 'name': 'Transfer', 'type': 'Event'
    }, {'inputs': [{'name': 'account', 'type': 'address'}], 'name': 'addMinter', 'stateMutability': 'Nonpayable', 'type': 'Function'}, {
        'inputs': [{
            'name': 'to',
            'type': 'address'
        }, {'name': 'tokenId', 'type': 'uint256'}], 'name': 'approve', 'stateMutability': 'Nonpayable', 'type': 'Function'
    }, {
        'outputs': [{'type': 'uint256'}],
        'constant': true,
        'inputs': [{'name': 'owner', 'type': 'address'}],
        'name': 'balanceOf',
        'stateMutability': 'View',
        'type': 'Function'
    }, {'outputs': [{'type': 'string'}], 'constant': true, 'name': 'baseURI', 'stateMutability': 'View', 'type': 'Function'}, {
        'inputs': [{'name': 'tokenId', 'type': 'uint256'}],
        'name': 'burn',
        'stateMutability': 'Nonpayable',
        'type': 'Function'
    }, {
        'outputs': [{'type': 'address'}],
        'constant': true,
        'inputs': [{'name': 'tokenId', 'type': 'uint256'}],
        'name': 'getApproved',
        'stateMutability': 'View',
        'type': 'Function'
    }, {
        'outputs': [{'type': 'bool'}],
        'constant': true,
        'inputs': [{'name': 'owner', 'type': 'address'}, {'name': 'operator', 'type': 'address'}],
        'name': 'isApprovedForAll',
        'stateMutability': 'View',
        'type': 'Function'
    }, {
        'outputs': [{'type': 'bool'}],
        'constant': true,
        'inputs': [{'name': 'account', 'type': 'address'}],
        'name': 'isMinter',
        'stateMutability': 'View',
        'type': 'Function'
    }, {
        'outputs': [{'type': 'bool'}],
        'inputs': [{'name': 'to', 'type': 'address[]'}, {'name': 'tokenId', 'type': 'uint256[]'}, {'name': 'uri', 'type': 'string[]'}],
        'name': 'mintMultiple',
        'stateMutability': 'Nonpayable',
        'type': 'Function'
    }, {
        'outputs': [{'type': 'bool'}],
        'inputs': [{'name': 'to', 'type': 'address'}, {'name': 'tokenId', 'type': 'uint256'}, {'name': 'uri', 'type': 'string'}, {
            'name': 'recipientAddresses',
            'type': 'address[]'
        }, {'name': 'cashbackValues', 'type': 'uint256[]'}],
        'name': 'mintWithCashback',
        'stateMutability': 'Nonpayable',
        'type': 'Function'
    }, {
        'outputs': [{'type': 'bool'}],
        'inputs': [{'name': 'to', 'type': 'address'}, {'name': 'tokenId', 'type': 'uint256'}, {'name': 'tokenURI', 'type': 'string'}],
        'name': 'mintWithTokenURI',
        'stateMutability': 'Nonpayable',
        'type': 'Function'
    }, {'outputs': [{'type': 'string'}], 'constant': true, 'name': 'name', 'stateMutability': 'View', 'type': 'Function'}, {
        'outputs': [{'type': 'address'}],
        'constant': true,
        'inputs': [{'name': 'tokenId', 'type': 'uint256'}],
        'name': 'ownerOf',
        'stateMutability': 'View',
        'type': 'Function'
    }, {'name': 'renounceMinter', 'stateMutability': 'Nonpayable', 'type': 'Function'}, {
        'payable': true,
        'inputs': [{'name': 'to', 'type': 'address'}, {'name': 'tokenId', 'type': 'uint256'}],
        'name': 'safeTransfer',
        'stateMutability': 'Payable',
        'type': 'Function'
    }, {
        'inputs': [{'name': 'from', 'type': 'address'}, {'name': 'to', 'type': 'address'}, {'name': 'tokenId', 'type': 'uint256'}],
        'name': 'safeTransferFrom',
        'stateMutability': 'Nonpayable',
        'type': 'Function'
    }, {
        'inputs': [{'name': 'from', 'type': 'address'}, {'name': 'to', 'type': 'address'}, {'name': 'tokenId', 'type': 'uint256'}, {'name': '_data', 'type': 'bytes'}],
        'name': 'safeTransferFrom',
        'stateMutability': 'Nonpayable',
        'type': 'Function'
    }, {
        'inputs': [{'name': 'to', 'type': 'address'}, {'name': 'approved', 'type': 'bool'}],
        'name': 'setApprovalForAll',
        'stateMutability': 'Nonpayable',
        'type': 'Function'
    }, {
        'outputs': [{'type': 'bool'}],
        'constant': true,
        'inputs': [{'name': 'interfaceId', 'type': 'bytes4'}],
        'name': 'supportsInterface',
        'stateMutability': 'View',
        'type': 'Function'
    }, {'outputs': [{'type': 'string'}], 'constant': true, 'name': 'symbol', 'stateMutability': 'View', 'type': 'Function'}, {
        'outputs': [{'type': 'uint256'}],
        'constant': true,
        'inputs': [{'name': 'index', 'type': 'uint256'}],
        'name': 'tokenByIndex',
        'stateMutability': 'View',
        'type': 'Function'
    }, {
        'outputs': [{'type': 'address[]'}],
        'constant': true,
        'inputs': [{'name': 'tokenId', 'type': 'uint256'}],
        'name': 'tokenCashbackRecipients',
        'stateMutability': 'View',
        'type': 'Function'
    }, {
        'outputs': [{'type': 'uint256[]'}],
        'constant': true,
        'inputs': [{'name': 'tokenId', 'type': 'uint256'}],
        'name': 'tokenCashbackValues',
        'stateMutability': 'View',
        'type': 'Function'
    }, {
        'outputs': [{'type': 'uint256'}],
        'constant': true,
        'inputs': [{'name': 'owner', 'type': 'address'}, {'name': 'index', 'type': 'uint256'}],
        'name': 'tokenOfOwnerByIndex',
        'stateMutability': 'View',
        'type': 'Function'
    }, {
        'outputs': [{'type': 'string'}],
        'constant': true,
        'inputs': [{'name': 'tokenId', 'type': 'uint256'}],
        'name': 'tokenURI',
        'stateMutability': 'View',
        'type': 'Function'
    }, {
        'outputs': [{'type': 'uint256[]'}],
        'constant': true,
        'inputs': [{'name': 'owner', 'type': 'address'}],
        'name': 'tokensOfOwner',
        'stateMutability': 'View',
        'type': 'Function'
    }, {'outputs': [{'type': 'uint256'}], 'constant': true, 'name': 'totalSupply', 'stateMutability': 'View', 'type': 'Function'}, {
        'inputs': [{
            'name': 'from',
            'type': 'address'
        }, {'name': 'to', 'type': 'address'}, {'name': 'tokenId', 'type': 'uint256'}], 'name': 'transferFrom', 'stateMutability': 'Nonpayable', 'type': 'Function'
    }, {
        'outputs': [{'type': 'bool'}],
        'inputs': [{'name': 'tokenId', 'type': 'uint256'}, {'name': 'cashbackValue', 'type': 'uint256'}],
        'name': 'updateCashbackForAuthor',
        'stateMutability': 'Nonpayable',
        'type': 'Function'
    }]
}
