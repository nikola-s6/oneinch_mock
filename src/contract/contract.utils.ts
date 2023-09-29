import Contract from './entity/contract.entity';

interface Contracts {
  [name: string]: Contract;
}

export const contracts: Contracts = {
  AggregationRouterV5: {
    name: 'AggregationRouterV5',
    address: '0xF7979231905665865fEfD36C65243104C998038a',
    abi: [
      {
        type: 'constructor',
        inputs: [
          {
            name: 'weth',
            type: 'address',
            internalType: 'contract IWETH',
          },
        ],
        stateMutability: 'nonpayable',
      },
      {
        name: 'AccessDenied',
        type: 'error',
        inputs: [],
      },
      {
        name: 'AdvanceNonceFailed',
        type: 'error',
        inputs: [],
      },
      {
        name: 'AlreadyFilled',
        type: 'error',
        inputs: [],
      },
      {
        name: 'ArbitraryStaticCallFailed',
        type: 'error',
        inputs: [],
      },
      {
        name: 'BadPool',
        type: 'error',
        inputs: [],
      },
      {
        name: 'BadSignature',
        type: 'error',
        inputs: [],
      },
      {
        name: 'ETHTransferFailed',
        type: 'error',
        inputs: [],
      },
      {
        name: 'ETHTransferFailed',
        type: 'error',
        inputs: [],
      },
      {
        name: 'EmptyPools',
        type: 'error',
        inputs: [],
      },
      {
        name: 'EthDepositRejected',
        type: 'error',
        inputs: [],
      },
      {
        name: 'GetAmountCallFailed',
        type: 'error',
        inputs: [],
      },
      {
        name: 'IncorrectDataLength',
        type: 'error',
        inputs: [],
      },
      {
        name: 'InsufficientBalance',
        type: 'error',
        inputs: [],
      },
      {
        name: 'InvalidMsgValue',
        type: 'error',
        inputs: [],
      },
      {
        name: 'InvalidMsgValue',
        type: 'error',
        inputs: [],
      },
      {
        name: 'InvalidatedOrder',
        type: 'error',
        inputs: [],
      },
      {
        name: 'MakingAmountExceeded',
        type: 'error',
        inputs: [],
      },
      {
        name: 'MakingAmountTooLow',
        type: 'error',
        inputs: [],
      },
      {
        name: 'OnlyOneAmountShouldBeZero',
        type: 'error',
        inputs: [],
      },
      {
        name: 'OrderExpired',
        type: 'error',
        inputs: [],
      },
      {
        name: 'PermitLengthTooLow',
        type: 'error',
        inputs: [],
      },
      {
        name: 'PredicateIsNotTrue',
        type: 'error',
        inputs: [],
      },
      {
        name: 'PrivateOrder',
        type: 'error',
        inputs: [],
      },
      {
        name: 'RFQBadSignature',
        type: 'error',
        inputs: [],
      },
      {
        name: 'RFQPrivateOrder',
        type: 'error',
        inputs: [],
      },
      {
        name: 'RFQSwapWithZeroAmount',
        type: 'error',
        inputs: [],
      },
      {
        name: 'RFQZeroTargetIsForbidden',
        type: 'error',
        inputs: [],
      },
      {
        name: 'ReentrancyDetected',
        type: 'error',
        inputs: [],
      },
      {
        name: 'RemainingAmountIsZero',
        type: 'error',
        inputs: [],
      },
      {
        name: 'ReservesCallFailed',
        type: 'error',
        inputs: [],
      },
      {
        name: 'ReturnAmountIsNotEnough',
        type: 'error',
        inputs: [],
      },
      {
        name: 'SafePermitBadLength',
        type: 'error',
        inputs: [],
      },
      {
        name: 'SafeTransferFailed',
        type: 'error',
        inputs: [],
      },
      {
        name: 'SafeTransferFromFailed',
        type: 'error',
        inputs: [],
      },
      {
        name: 'SimulationResults',
        type: 'error',
        inputs: [
          {
            name: 'success',
            type: 'bool',
            internalType: 'bool',
          },
          {
            name: 'res',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
      },
      {
        name: 'SwapAmountTooLarge',
        type: 'error',
        inputs: [],
      },
      {
        name: 'SwapWithZeroAmount',
        type: 'error',
        inputs: [],
      },
      {
        name: 'TakingAmountExceeded',
        type: 'error',
        inputs: [],
      },
      {
        name: 'TakingAmountIncreased',
        type: 'error',
        inputs: [],
      },
      {
        name: 'TakingAmountTooHigh',
        type: 'error',
        inputs: [],
      },
      {
        name: 'TransferFromMakerToTakerFailed',
        type: 'error',
        inputs: [],
      },
      {
        name: 'TransferFromTakerToMakerFailed',
        type: 'error',
        inputs: [],
      },
      {
        name: 'UnknownOrder',
        type: 'error',
        inputs: [],
      },
      {
        name: 'WrongAmount',
        type: 'error',
        inputs: [],
      },
      {
        name: 'WrongGetter',
        type: 'error',
        inputs: [],
      },
      {
        name: 'ZeroAddress',
        type: 'error',
        inputs: [],
      },
      {
        name: 'ZeroMinReturn',
        type: 'error',
        inputs: [],
      },
      {
        name: 'ZeroReturnAmount',
        type: 'error',
        inputs: [],
      },
      {
        name: 'ZeroTargetIsForbidden',
        type: 'error',
        inputs: [],
      },
      {
        name: 'NonceIncreased',
        type: 'event',
        inputs: [
          {
            name: 'maker',
            type: 'address',
            indexed: true,
            internalType: 'address',
          },
          {
            name: 'newNonce',
            type: 'uint256',
            indexed: false,
            internalType: 'uint256',
          },
        ],
        anonymous: false,
      },
      {
        name: 'OrderCanceled',
        type: 'event',
        inputs: [
          {
            name: 'maker',
            type: 'address',
            indexed: true,
            internalType: 'address',
          },
          {
            name: 'orderHash',
            type: 'bytes32',
            indexed: false,
            internalType: 'bytes32',
          },
          {
            name: 'remainingRaw',
            type: 'uint256',
            indexed: false,
            internalType: 'uint256',
          },
        ],
        anonymous: false,
      },
      {
        name: 'OrderFilled',
        type: 'event',
        inputs: [
          {
            name: 'maker',
            type: 'address',
            indexed: true,
            internalType: 'address',
          },
          {
            name: 'orderHash',
            type: 'bytes32',
            indexed: false,
            internalType: 'bytes32',
          },
          {
            name: 'remaining',
            type: 'uint256',
            indexed: false,
            internalType: 'uint256',
          },
        ],
        anonymous: false,
      },
      {
        name: 'OrderFilledRFQ',
        type: 'event',
        inputs: [
          {
            name: 'orderHash',
            type: 'bytes32',
            indexed: false,
            internalType: 'bytes32',
          },
          {
            name: 'makingAmount',
            type: 'uint256',
            indexed: false,
            internalType: 'uint256',
          },
        ],
        anonymous: false,
      },
      {
        name: 'OwnershipTransferred',
        type: 'event',
        inputs: [
          {
            name: 'previousOwner',
            type: 'address',
            indexed: true,
            internalType: 'address',
          },
          {
            name: 'newOwner',
            type: 'address',
            indexed: true,
            internalType: 'address',
          },
        ],
        anonymous: false,
      },
      {
        name: 'advanceNonce',
        type: 'function',
        inputs: [
          {
            name: 'amount',
            type: 'uint8',
            internalType: 'uint8',
          },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
      },
      {
        name: 'and',
        type: 'function',
        inputs: [
          {
            name: 'offsets',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'data',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'bool',
            internalType: 'bool',
          },
        ],
        stateMutability: 'view',
      },
      {
        name: 'arbitraryStaticCall',
        type: 'function',
        inputs: [
          {
            name: 'target',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'data',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        stateMutability: 'view',
      },
      {
        name: 'cancelOrder',
        type: 'function',
        inputs: [
          {
            name: 'order',
            type: 'tuple',
            components: [
              {
                name: 'salt',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'makerAsset',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'takerAsset',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'maker',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'receiver',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'allowedSender',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'makingAmount',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'takingAmount',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'offsets',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'interactions',
                type: 'bytes',
                internalType: 'bytes',
              },
            ],
            internalType: 'struct OrderLib.Order',
          },
        ],
        outputs: [
          {
            name: 'orderRemaining',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'orderHash',
            type: 'bytes32',
            internalType: 'bytes32',
          },
        ],
        stateMutability: 'nonpayable',
      },
      {
        name: 'cancelOrderRFQ',
        type: 'function',
        inputs: [
          {
            name: 'orderInfo',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
      },
      {
        name: 'cancelOrderRFQ',
        type: 'function',
        inputs: [
          {
            name: 'orderInfo',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'additionalMask',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
      },
      {
        name: 'checkPredicate',
        type: 'function',
        inputs: [
          {
            name: 'order',
            type: 'tuple',
            components: [
              {
                name: 'salt',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'makerAsset',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'takerAsset',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'maker',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'receiver',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'allowedSender',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'makingAmount',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'takingAmount',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'offsets',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'interactions',
                type: 'bytes',
                internalType: 'bytes',
              },
            ],
            internalType: 'struct OrderLib.Order',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'bool',
            internalType: 'bool',
          },
        ],
        stateMutability: 'view',
      },
      {
        name: 'clipperSwap',
        type: 'function',
        inputs: [
          {
            name: 'clipperExchange',
            type: 'address',
            internalType: 'contract IClipperExchangeInterface',
          },
          {
            name: 'srcToken',
            type: 'address',
            internalType: 'contract IERC20',
          },
          {
            name: 'dstToken',
            type: 'address',
            internalType: 'contract IERC20',
          },
          {
            name: 'inputAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'outputAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'goodUntil',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'r',
            type: 'bytes32',
            internalType: 'bytes32',
          },
          {
            name: 'vs',
            type: 'bytes32',
            internalType: 'bytes32',
          },
        ],
        outputs: [
          {
            name: 'returnAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        stateMutability: 'payable',
      },
      {
        name: 'clipperSwapTo',
        type: 'function',
        inputs: [
          {
            name: 'clipperExchange',
            type: 'address',
            internalType: 'contract IClipperExchangeInterface',
          },
          {
            name: 'recipient',
            type: 'address',
            internalType: 'address payable',
          },
          {
            name: 'srcToken',
            type: 'address',
            internalType: 'contract IERC20',
          },
          {
            name: 'dstToken',
            type: 'address',
            internalType: 'contract IERC20',
          },
          {
            name: 'inputAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'outputAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'goodUntil',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'r',
            type: 'bytes32',
            internalType: 'bytes32',
          },
          {
            name: 'vs',
            type: 'bytes32',
            internalType: 'bytes32',
          },
        ],
        outputs: [
          {
            name: 'returnAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        stateMutability: 'payable',
      },
      {
        name: 'clipperSwapToWithPermit',
        type: 'function',
        inputs: [
          {
            name: 'clipperExchange',
            type: 'address',
            internalType: 'contract IClipperExchangeInterface',
          },
          {
            name: 'recipient',
            type: 'address',
            internalType: 'address payable',
          },
          {
            name: 'srcToken',
            type: 'address',
            internalType: 'contract IERC20',
          },
          {
            name: 'dstToken',
            type: 'address',
            internalType: 'contract IERC20',
          },
          {
            name: 'inputAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'outputAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'goodUntil',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'r',
            type: 'bytes32',
            internalType: 'bytes32',
          },
          {
            name: 'vs',
            type: 'bytes32',
            internalType: 'bytes32',
          },
          {
            name: 'permit',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
        outputs: [
          {
            name: 'returnAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
      },
      {
        name: 'eq',
        type: 'function',
        inputs: [
          {
            name: 'value',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'data',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'bool',
            internalType: 'bool',
          },
        ],
        stateMutability: 'view',
      },
      {
        name: 'fillOrder',
        type: 'function',
        inputs: [
          {
            name: 'order',
            type: 'tuple',
            components: [
              {
                name: 'salt',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'makerAsset',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'takerAsset',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'maker',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'receiver',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'allowedSender',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'makingAmount',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'takingAmount',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'offsets',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'interactions',
                type: 'bytes',
                internalType: 'bytes',
              },
            ],
            internalType: 'struct OrderLib.Order',
          },
          {
            name: 'signature',
            type: 'bytes',
            internalType: 'bytes',
          },
          {
            name: 'interaction',
            type: 'bytes',
            internalType: 'bytes',
          },
          {
            name: 'makingAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'takingAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'skipPermitAndThresholdAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: '',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: '',
            type: 'bytes32',
            internalType: 'bytes32',
          },
        ],
        stateMutability: 'payable',
      },
      {
        name: 'fillOrderRFQ',
        type: 'function',
        inputs: [
          {
            name: 'order',
            type: 'tuple',
            components: [
              {
                name: 'info',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'makerAsset',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'takerAsset',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'maker',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'allowedSender',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'makingAmount',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'takingAmount',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
            internalType: 'struct OrderRFQLib.OrderRFQ',
          },
          {
            name: 'signature',
            type: 'bytes',
            internalType: 'bytes',
          },
          {
            name: 'flagsAndAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: '',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: '',
            type: 'bytes32',
            internalType: 'bytes32',
          },
        ],
        stateMutability: 'payable',
      },
      {
        name: 'fillOrderRFQCompact',
        type: 'function',
        inputs: [
          {
            name: 'order',
            type: 'tuple',
            components: [
              {
                name: 'info',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'makerAsset',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'takerAsset',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'maker',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'allowedSender',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'makingAmount',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'takingAmount',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
            internalType: 'struct OrderRFQLib.OrderRFQ',
          },
          {
            name: 'r',
            type: 'bytes32',
            internalType: 'bytes32',
          },
          {
            name: 'vs',
            type: 'bytes32',
            internalType: 'bytes32',
          },
          {
            name: 'flagsAndAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        outputs: [
          {
            name: 'filledMakingAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'filledTakingAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'orderHash',
            type: 'bytes32',
            internalType: 'bytes32',
          },
        ],
        stateMutability: 'payable',
      },
      {
        name: 'fillOrderRFQTo',
        type: 'function',
        inputs: [
          {
            name: 'order',
            type: 'tuple',
            components: [
              {
                name: 'info',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'makerAsset',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'takerAsset',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'maker',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'allowedSender',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'makingAmount',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'takingAmount',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
            internalType: 'struct OrderRFQLib.OrderRFQ',
          },
          {
            name: 'signature',
            type: 'bytes',
            internalType: 'bytes',
          },
          {
            name: 'flagsAndAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'target',
            type: 'address',
            internalType: 'address',
          },
        ],
        outputs: [
          {
            name: 'filledMakingAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'filledTakingAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'orderHash',
            type: 'bytes32',
            internalType: 'bytes32',
          },
        ],
        stateMutability: 'payable',
      },
      {
        name: 'fillOrderRFQToWithPermit',
        type: 'function',
        inputs: [
          {
            name: 'order',
            type: 'tuple',
            components: [
              {
                name: 'info',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'makerAsset',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'takerAsset',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'maker',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'allowedSender',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'makingAmount',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'takingAmount',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
            internalType: 'struct OrderRFQLib.OrderRFQ',
          },
          {
            name: 'signature',
            type: 'bytes',
            internalType: 'bytes',
          },
          {
            name: 'flagsAndAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'target',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'permit',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: '',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: '',
            type: 'bytes32',
            internalType: 'bytes32',
          },
        ],
        stateMutability: 'nonpayable',
      },
      {
        name: 'fillOrderTo',
        type: 'function',
        inputs: [
          {
            name: 'order_',
            type: 'tuple',
            components: [
              {
                name: 'salt',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'makerAsset',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'takerAsset',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'maker',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'receiver',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'allowedSender',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'makingAmount',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'takingAmount',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'offsets',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'interactions',
                type: 'bytes',
                internalType: 'bytes',
              },
            ],
            internalType: 'struct OrderLib.Order',
          },
          {
            name: 'signature',
            type: 'bytes',
            internalType: 'bytes',
          },
          {
            name: 'interaction',
            type: 'bytes',
            internalType: 'bytes',
          },
          {
            name: 'makingAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'takingAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'skipPermitAndThresholdAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'target',
            type: 'address',
            internalType: 'address',
          },
        ],
        outputs: [
          {
            name: 'actualMakingAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'actualTakingAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'orderHash',
            type: 'bytes32',
            internalType: 'bytes32',
          },
        ],
        stateMutability: 'payable',
      },
      {
        name: 'fillOrderToWithPermit',
        type: 'function',
        inputs: [
          {
            name: 'order',
            type: 'tuple',
            components: [
              {
                name: 'salt',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'makerAsset',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'takerAsset',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'maker',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'receiver',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'allowedSender',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'makingAmount',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'takingAmount',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'offsets',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'interactions',
                type: 'bytes',
                internalType: 'bytes',
              },
            ],
            internalType: 'struct OrderLib.Order',
          },
          {
            name: 'signature',
            type: 'bytes',
            internalType: 'bytes',
          },
          {
            name: 'interaction',
            type: 'bytes',
            internalType: 'bytes',
          },
          {
            name: 'makingAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'takingAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'skipPermitAndThresholdAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'target',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'permit',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: '',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: '',
            type: 'bytes32',
            internalType: 'bytes32',
          },
        ],
        stateMutability: 'nonpayable',
      },
      {
        name: 'gt',
        type: 'function',
        inputs: [
          {
            name: 'value',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'data',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'bool',
            internalType: 'bool',
          },
        ],
        stateMutability: 'view',
      },
      {
        name: 'hashOrder',
        type: 'function',
        inputs: [
          {
            name: 'order',
            type: 'tuple',
            components: [
              {
                name: 'salt',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'makerAsset',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'takerAsset',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'maker',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'receiver',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'allowedSender',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'makingAmount',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'takingAmount',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'offsets',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'interactions',
                type: 'bytes',
                internalType: 'bytes',
              },
            ],
            internalType: 'struct OrderLib.Order',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'bytes32',
            internalType: 'bytes32',
          },
        ],
        stateMutability: 'view',
      },
      {
        name: 'increaseNonce',
        type: 'function',
        inputs: [],
        outputs: [],
        stateMutability: 'nonpayable',
      },
      {
        name: 'invalidatorForOrderRFQ',
        type: 'function',
        inputs: [
          {
            name: 'maker',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'slot',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        stateMutability: 'view',
      },
      {
        name: 'lt',
        type: 'function',
        inputs: [
          {
            name: 'value',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'data',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'bool',
            internalType: 'bool',
          },
        ],
        stateMutability: 'view',
      },
      {
        name: 'nonce',
        type: 'function',
        inputs: [
          {
            name: '',
            type: 'address',
            internalType: 'address',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        stateMutability: 'view',
      },
      {
        name: 'nonceEquals',
        type: 'function',
        inputs: [
          {
            name: 'makerAddress',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'makerNonce',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'bool',
            internalType: 'bool',
          },
        ],
        stateMutability: 'view',
      },
      {
        name: 'or',
        type: 'function',
        inputs: [
          {
            name: 'offsets',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'data',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'bool',
            internalType: 'bool',
          },
        ],
        stateMutability: 'view',
      },
      {
        name: 'owner',
        type: 'function',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'address',
            internalType: 'address',
          },
        ],
        stateMutability: 'view',
      },
      {
        name: 'remaining',
        type: 'function',
        inputs: [
          {
            name: 'orderHash',
            type: 'bytes32',
            internalType: 'bytes32',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        stateMutability: 'view',
      },
      {
        name: 'remainingRaw',
        type: 'function',
        inputs: [
          {
            name: 'orderHash',
            type: 'bytes32',
            internalType: 'bytes32',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        stateMutability: 'view',
      },
      {
        name: 'remainingsRaw',
        type: 'function',
        inputs: [
          {
            name: 'orderHashes',
            type: 'bytes32[]',
            internalType: 'bytes32[]',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'uint256[]',
            internalType: 'uint256[]',
          },
        ],
        stateMutability: 'view',
      },
      {
        name: 'renounceOwnership',
        type: 'function',
        inputs: [],
        outputs: [],
        stateMutability: 'nonpayable',
      },
      {
        name: 'rescueFunds',
        type: 'function',
        inputs: [
          {
            name: 'token',
            type: 'address',
            internalType: 'contract IERC20',
          },
          {
            name: 'amount',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
      },
      {
        name: 'simulate',
        type: 'function',
        inputs: [
          {
            name: 'target',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'data',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
      },
      {
        name: 'swap',
        type: 'function',
        inputs: [
          {
            name: 'executor',
            type: 'address',
            internalType: 'contract IAggregationExecutor',
          },
          {
            name: 'desc',
            type: 'tuple',
            components: [
              {
                name: 'srcToken',
                type: 'address',
                internalType: 'contract IERC20',
              },
              {
                name: 'dstToken',
                type: 'address',
                internalType: 'contract IERC20',
              },
              {
                name: 'srcReceiver',
                type: 'address',
                internalType: 'address payable',
              },
              {
                name: 'dstReceiver',
                type: 'address',
                internalType: 'address payable',
              },
              {
                name: 'amount',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'minReturnAmount',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'flags',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
            internalType: 'struct GenericRouter.SwapDescription',
          },
          {
            name: 'permit',
            type: 'bytes',
            internalType: 'bytes',
          },
          {
            name: 'data',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
        outputs: [
          {
            name: 'returnAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'spentAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        stateMutability: 'payable',
      },
      {
        name: 'timestampBelow',
        type: 'function',
        inputs: [
          {
            name: 'time',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'bool',
            internalType: 'bool',
          },
        ],
        stateMutability: 'view',
      },
      {
        name: 'timestampBelowAndNonceEquals',
        type: 'function',
        inputs: [
          {
            name: 'timeNonceAccount',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'bool',
            internalType: 'bool',
          },
        ],
        stateMutability: 'view',
      },
      {
        name: 'transferOwnership',
        type: 'function',
        inputs: [
          {
            name: 'newOwner',
            type: 'address',
            internalType: 'address',
          },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
      },
      {
        name: 'uniswapV3Swap',
        type: 'function',
        inputs: [
          {
            name: 'amount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'minReturn',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'pools',
            type: 'uint256[]',
            internalType: 'uint256[]',
          },
        ],
        outputs: [
          {
            name: 'returnAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        stateMutability: 'payable',
      },
      {
        name: 'uniswapV3SwapCallback',
        type: 'function',
        inputs: [
          {
            name: 'amount0Delta',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'amount1Delta',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: '',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
      },
      {
        name: 'uniswapV3SwapTo',
        type: 'function',
        inputs: [
          {
            name: 'recipient',
            type: 'address',
            internalType: 'address payable',
          },
          {
            name: 'amount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'minReturn',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'pools',
            type: 'uint256[]',
            internalType: 'uint256[]',
          },
        ],
        outputs: [
          {
            name: 'returnAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        stateMutability: 'payable',
      },
      {
        name: 'uniswapV3SwapToWithPermit',
        type: 'function',
        inputs: [
          {
            name: 'recipient',
            type: 'address',
            internalType: 'address payable',
          },
          {
            name: 'srcToken',
            type: 'address',
            internalType: 'contract IERC20',
          },
          {
            name: 'amount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'minReturn',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'pools',
            type: 'uint256[]',
            internalType: 'uint256[]',
          },
          {
            name: 'permit',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
        outputs: [
          {
            name: 'returnAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
      },
      {
        name: 'unoswap',
        type: 'function',
        inputs: [
          {
            name: 'srcToken',
            type: 'address',
            internalType: 'contract IERC20',
          },
          {
            name: 'amount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'minReturn',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'pools',
            type: 'uint256[]',
            internalType: 'uint256[]',
          },
        ],
        outputs: [
          {
            name: 'returnAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        stateMutability: 'payable',
      },
      {
        name: 'unoswapTo',
        type: 'function',
        inputs: [
          {
            name: 'recipient',
            type: 'address',
            internalType: 'address payable',
          },
          {
            name: 'srcToken',
            type: 'address',
            internalType: 'contract IERC20',
          },
          {
            name: 'amount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'minReturn',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'pools',
            type: 'uint256[]',
            internalType: 'uint256[]',
          },
        ],
        outputs: [
          {
            name: 'returnAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        stateMutability: 'payable',
      },
      {
        name: 'unoswapToWithPermit',
        type: 'function',
        inputs: [
          {
            name: 'recipient',
            type: 'address',
            internalType: 'address payable',
          },
          {
            name: 'srcToken',
            type: 'address',
            internalType: 'contract IERC20',
          },
          {
            name: 'amount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'minReturn',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'pools',
            type: 'uint256[]',
            internalType: 'uint256[]',
          },
          {
            name: 'permit',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
        outputs: [
          {
            name: 'returnAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
      },
      {
        type: 'receive',
        stateMutability: 'payable',
      },
    ],
  },
  UniswapV2Factory: {
    name: 'UniswapV2Factory',
    address: '0x0832563a5E40753F0FC1a503FC6A45721765993e',
    abi: [
      {
        type: 'constructor',
        inputs: [
          {
            name: '_feeToSetter',
            type: 'address',
            internalType: 'address',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
      },
      {
        name: 'PairCreated',
        type: 'event',
        inputs: [
          {
            name: 'token0',
            type: 'address',
            indexed: true,
            internalType: 'address',
          },
          {
            name: 'token1',
            type: 'address',
            indexed: true,
            internalType: 'address',
          },
          {
            name: 'pair',
            type: 'address',
            indexed: false,
            internalType: 'address',
          },
          {
            name: '',
            type: 'uint256',
            indexed: false,
            internalType: 'uint256',
          },
        ],
        anonymous: false,
      },
      {
        name: 'allPairs',
        type: 'function',
        inputs: [
          {
            name: '',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'address',
            internalType: 'address',
          },
        ],
        payable: false,
        constant: true,
        stateMutability: 'view',
      },
      {
        name: 'allPairsLength',
        type: 'function',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        payable: false,
        constant: true,
        stateMutability: 'view',
      },
      {
        name: 'createPair',
        type: 'function',
        inputs: [
          {
            name: 'tokenA',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'tokenB',
            type: 'address',
            internalType: 'address',
          },
        ],
        outputs: [
          {
            name: 'pair',
            type: 'address',
            internalType: 'address',
          },
        ],
        payable: false,
        constant: false,
        stateMutability: 'nonpayable',
      },
      {
        name: 'feeTo',
        type: 'function',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'address',
            internalType: 'address',
          },
        ],
        payable: false,
        constant: true,
        stateMutability: 'view',
      },
      {
        name: 'feeToSetter',
        type: 'function',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'address',
            internalType: 'address',
          },
        ],
        payable: false,
        constant: true,
        stateMutability: 'view',
      },
      {
        name: 'getPair',
        type: 'function',
        inputs: [
          {
            name: '',
            type: 'address',
            internalType: 'address',
          },
          {
            name: '',
            type: 'address',
            internalType: 'address',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'address',
            internalType: 'address',
          },
        ],
        payable: false,
        constant: true,
        stateMutability: 'view',
      },
      {
        name: 'setFeeTo',
        type: 'function',
        inputs: [
          {
            name: '_feeTo',
            type: 'address',
            internalType: 'address',
          },
        ],
        outputs: [],
        payable: false,
        constant: false,
        stateMutability: 'nonpayable',
      },
      {
        name: 'setFeeToSetter',
        type: 'function',
        inputs: [
          {
            name: '_feeToSetter',
            type: 'address',
            internalType: 'address',
          },
        ],
        outputs: [],
        payable: false,
        constant: false,
        stateMutability: 'nonpayable',
      },
    ],
  },
  WETH: {
    name: 'WETH',
    address: '0xC74aba1ddF0c0E97a9b6c706A4B9D59E25DEa2Cd',
    abi: [
      {
        name: 'Approval',
        type: 'event',
        inputs: [
          {
            name: 'src',
            type: 'address',
            indexed: true,
            internalType: 'address',
          },
          {
            name: 'guy',
            type: 'address',
            indexed: true,
            internalType: 'address',
          },
          {
            name: 'wad',
            type: 'uint256',
            indexed: false,
            internalType: 'uint256',
          },
        ],
        anonymous: false,
      },
      {
        name: 'Deposit',
        type: 'event',
        inputs: [
          {
            name: 'dst',
            type: 'address',
            indexed: true,
            internalType: 'address',
          },
          {
            name: 'wad',
            type: 'uint256',
            indexed: false,
            internalType: 'uint256',
          },
        ],
        anonymous: false,
      },
      {
        name: 'Transfer',
        type: 'event',
        inputs: [
          {
            name: 'src',
            type: 'address',
            indexed: true,
            internalType: 'address',
          },
          {
            name: 'dst',
            type: 'address',
            indexed: true,
            internalType: 'address',
          },
          {
            name: 'wad',
            type: 'uint256',
            indexed: false,
            internalType: 'uint256',
          },
        ],
        anonymous: false,
      },
      {
        name: 'Withdrawal',
        type: 'event',
        inputs: [
          {
            name: 'src',
            type: 'address',
            indexed: true,
            internalType: 'address',
          },
          {
            name: 'wad',
            type: 'uint256',
            indexed: false,
            internalType: 'uint256',
          },
        ],
        anonymous: false,
      },
      {
        name: 'allowance',
        type: 'function',
        inputs: [
          {
            name: '',
            type: 'address',
            internalType: 'address',
          },
          {
            name: '',
            type: 'address',
            internalType: 'address',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        stateMutability: 'view',
      },
      {
        name: 'approve',
        type: 'function',
        inputs: [
          {
            name: 'guy',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'wad',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'bool',
            internalType: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
      },
      {
        name: 'balanceOf',
        type: 'function',
        inputs: [
          {
            name: '',
            type: 'address',
            internalType: 'address',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        stateMutability: 'view',
      },
      {
        name: 'decimals',
        type: 'function',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'uint8',
            internalType: 'uint8',
          },
        ],
        stateMutability: 'view',
      },
      {
        name: 'deposit',
        type: 'function',
        inputs: [],
        outputs: [],
        stateMutability: 'payable',
      },
      {
        name: 'name',
        type: 'function',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'string',
            internalType: 'string',
          },
        ],
        stateMutability: 'view',
      },
      {
        name: 'symbol',
        type: 'function',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'string',
            internalType: 'string',
          },
        ],
        stateMutability: 'view',
      },
      {
        name: 'totalSupply',
        type: 'function',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        stateMutability: 'view',
      },
      {
        name: 'transfer',
        type: 'function',
        inputs: [
          {
            name: 'dst',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'wad',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'bool',
            internalType: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
      },
      {
        name: 'transferFrom',
        type: 'function',
        inputs: [
          {
            name: 'src',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'dst',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'wad',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'bool',
            internalType: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
      },
      {
        name: 'withdraw',
        type: 'function',
        inputs: [
          {
            name: 'wad',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
      },
    ],
  },
  Apein: {
    name: 'Apein',
    address: '0xc2C8c06a4dD3866f8e4E2da2c4292F8D586DA988',
    abi: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'previousAdmin',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'newAdmin',
            type: 'address',
          },
        ],
        name: 'AdminChanged',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'beacon',
            type: 'address',
          },
        ],
        name: 'BeaconUpgraded',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'data',
            type: 'uint256',
          },
        ],
        name: 'DstReceiver',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'EtherDeposit',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint8',
            name: 'version',
            type: 'uint8',
          },
        ],
        name: 'Initialized',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            components: [
              {
                internalType: 'contract IERC20',
                name: 'srcToken',
                type: 'address',
              },
              {
                internalType: 'contract IERC20',
                name: 'dstToken',
                type: 'address',
              },
              {
                internalType: 'address payable',
                name: 'srcReceiver',
                type: 'address',
              },
              {
                internalType: 'address payable',
                name: 'dstReceiver',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'minReturnAmount',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'flags',
                type: 'uint256',
              },
            ],
            indexed: false,
            internalType: 'struct SwapDescription',
            name: 'desc',
            type: 'tuple',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'returnAmount',
            type: 'uint256',
          },
        ],
        name: 'OneInchSwap',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'returnAmount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'spentAmount',
            type: 'uint256',
          },
        ],
        name: 'OneInchSwapResult',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'spentAmount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        name: 'UniswapSwap',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'Upgraded',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'contract IERC20',
            name: 'token',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'deposit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getOneInchAddress',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'oneInchAggregator',
            type: 'address',
          },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'proxiableUUID',
        outputs: [
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
        ],
        name: 'swapV2',
        outputs: [
          {
            internalType: 'address',
            name: 'dstReceiver',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'returnAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'spentAmount',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'transferOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
        ],
        name: 'uniswap',
        outputs: [
          {
            internalType: 'address',
            name: 'srcToken',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'srcAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'returnAmount',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
        ],
        name: 'uniswapV3',
        outputs: [
          {
            internalType: 'uint256',
            name: 'returnAmount',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'srcToken',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'spentAmount',
            type: 'uint256',
          },
        ],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'upgradeImplementation',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'upgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'contract IERC20[]',
            name: 'tokens',
            type: 'address[]',
          },
          {
            internalType: 'address',
            name: 'destination',
            type: 'address',
          },
          {
            internalType: 'uint256[]',
            name: 'amount',
            type: 'uint256[]',
          },
        ],
        name: 'withdraw',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        stateMutability: 'payable',
        type: 'receive',
      },
    ],
  },
  Token: {
    name: 'Token',
    address: '1',
    abi: [
      {
        type: 'constructor',
        inputs: [
          {
            name: 'name',
            type: 'string',
            internalType: 'string',
          },
          {
            name: 'symbol',
            type: 'string',
            internalType: 'string',
          },
          {
            name: 'totalSupply',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
      },
      {
        name: 'Approval',
        type: 'event',
        inputs: [
          {
            name: 'owner',
            type: 'address',
            indexed: true,
            internalType: 'address',
          },
          {
            name: 'spender',
            type: 'address',
            indexed: true,
            internalType: 'address',
          },
          {
            name: 'value',
            type: 'uint256',
            indexed: false,
            internalType: 'uint256',
          },
        ],
        anonymous: false,
      },
      {
        name: 'Transfer',
        type: 'event',
        inputs: [
          {
            name: 'from',
            type: 'address',
            indexed: true,
            internalType: 'address',
          },
          {
            name: 'to',
            type: 'address',
            indexed: true,
            internalType: 'address',
          },
          {
            name: 'value',
            type: 'uint256',
            indexed: false,
            internalType: 'uint256',
          },
        ],
        anonymous: false,
      },
      {
        name: 'allowance',
        type: 'function',
        inputs: [
          {
            name: 'owner',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'spender',
            type: 'address',
            internalType: 'address',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        stateMutability: 'view',
      },
      {
        name: 'approve',
        type: 'function',
        inputs: [
          {
            name: 'spender',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'amount',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'bool',
            internalType: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
      },
      {
        name: 'balanceOf',
        type: 'function',
        inputs: [
          {
            name: 'account',
            type: 'address',
            internalType: 'address',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        stateMutability: 'view',
      },
      {
        name: 'decimals',
        type: 'function',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'uint8',
            internalType: 'uint8',
          },
        ],
        stateMutability: 'view',
      },
      {
        name: 'decreaseAllowance',
        type: 'function',
        inputs: [
          {
            name: 'spender',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'subtractedValue',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'bool',
            internalType: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
      },
      {
        name: 'increaseAllowance',
        type: 'function',
        inputs: [
          {
            name: 'spender',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'addedValue',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'bool',
            internalType: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
      },
      {
        name: 'name',
        type: 'function',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'string',
            internalType: 'string',
          },
        ],
        stateMutability: 'view',
      },
      {
        name: 'symbol',
        type: 'function',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'string',
            internalType: 'string',
          },
        ],
        stateMutability: 'view',
      },
      {
        name: 'totalSupply',
        type: 'function',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        stateMutability: 'view',
      },
      {
        name: 'transfer',
        type: 'function',
        inputs: [
          {
            name: 'to',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'amount',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'bool',
            internalType: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
      },
      {
        name: 'transferFrom',
        type: 'function',
        inputs: [
          {
            name: 'from',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'to',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'amount',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'bool',
            internalType: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
      },
      {
        name: 'transferUnchecked',
        type: 'function',
        inputs: [
          {
            name: 'to',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'amount',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
      },
    ],
  },
  UniswapV2Pair: {
    name: 'UniswapV2Pair',
    address: '2',
    abi: [
      {
        type: 'constructor',
        inputs: [],
        payable: false,
        stateMutability: 'nonpayable',
      },
      {
        name: 'Approval',
        type: 'event',
        inputs: [
          {
            name: 'owner',
            type: 'address',
            indexed: true,
            internalType: 'address',
          },
          {
            name: 'spender',
            type: 'address',
            indexed: true,
            internalType: 'address',
          },
          {
            name: 'value',
            type: 'uint256',
            indexed: false,
            internalType: 'uint256',
          },
        ],
        anonymous: false,
      },
      {
        name: 'Burn',
        type: 'event',
        inputs: [
          {
            name: 'sender',
            type: 'address',
            indexed: true,
            internalType: 'address',
          },
          {
            name: 'amount0',
            type: 'uint256',
            indexed: false,
            internalType: 'uint256',
          },
          {
            name: 'amount1',
            type: 'uint256',
            indexed: false,
            internalType: 'uint256',
          },
          {
            name: 'to',
            type: 'address',
            indexed: true,
            internalType: 'address',
          },
        ],
        anonymous: false,
      },
      {
        name: 'Mint',
        type: 'event',
        inputs: [
          {
            name: 'sender',
            type: 'address',
            indexed: true,
            internalType: 'address',
          },
          {
            name: 'amount0',
            type: 'uint256',
            indexed: false,
            internalType: 'uint256',
          },
          {
            name: 'amount1',
            type: 'uint256',
            indexed: false,
            internalType: 'uint256',
          },
        ],
        anonymous: false,
      },
      {
        name: 'Swap',
        type: 'event',
        inputs: [
          {
            name: 'sender',
            type: 'address',
            indexed: true,
            internalType: 'address',
          },
          {
            name: 'amount0In',
            type: 'uint256',
            indexed: false,
            internalType: 'uint256',
          },
          {
            name: 'amount1In',
            type: 'uint256',
            indexed: false,
            internalType: 'uint256',
          },
          {
            name: 'amount0Out',
            type: 'uint256',
            indexed: false,
            internalType: 'uint256',
          },
          {
            name: 'amount1Out',
            type: 'uint256',
            indexed: false,
            internalType: 'uint256',
          },
          {
            name: 'to',
            type: 'address',
            indexed: true,
            internalType: 'address',
          },
        ],
        anonymous: false,
      },
      {
        name: 'Sync',
        type: 'event',
        inputs: [
          {
            name: 'reserve0',
            type: 'uint112',
            indexed: false,
            internalType: 'uint112',
          },
          {
            name: 'reserve1',
            type: 'uint112',
            indexed: false,
            internalType: 'uint112',
          },
        ],
        anonymous: false,
      },
      {
        name: 'Transfer',
        type: 'event',
        inputs: [
          {
            name: 'from',
            type: 'address',
            indexed: true,
            internalType: 'address',
          },
          {
            name: 'to',
            type: 'address',
            indexed: true,
            internalType: 'address',
          },
          {
            name: 'value',
            type: 'uint256',
            indexed: false,
            internalType: 'uint256',
          },
        ],
        anonymous: false,
      },
      {
        name: 'DOMAIN_SEPARATOR',
        type: 'function',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'bytes32',
            internalType: 'bytes32',
          },
        ],
        payable: false,
        constant: true,
        stateMutability: 'view',
      },
      {
        name: 'MINIMUM_LIQUIDITY',
        type: 'function',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        payable: false,
        constant: true,
        stateMutability: 'view',
      },
      {
        name: 'PERMIT_TYPEHASH',
        type: 'function',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'bytes32',
            internalType: 'bytes32',
          },
        ],
        payable: false,
        constant: true,
        stateMutability: 'view',
      },
      {
        name: 'allowance',
        type: 'function',
        inputs: [
          {
            name: '',
            type: 'address',
            internalType: 'address',
          },
          {
            name: '',
            type: 'address',
            internalType: 'address',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        payable: false,
        constant: true,
        stateMutability: 'view',
      },
      {
        name: 'approve',
        type: 'function',
        inputs: [
          {
            name: 'spender',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'value',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'bool',
            internalType: 'bool',
          },
        ],
        payable: false,
        constant: false,
        stateMutability: 'nonpayable',
      },
      {
        name: 'balanceOf',
        type: 'function',
        inputs: [
          {
            name: '',
            type: 'address',
            internalType: 'address',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        payable: false,
        constant: true,
        stateMutability: 'view',
      },
      {
        name: 'burn',
        type: 'function',
        inputs: [
          {
            name: 'to',
            type: 'address',
            internalType: 'address',
          },
        ],
        outputs: [
          {
            name: 'amount0',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'amount1',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        payable: false,
        constant: false,
        stateMutability: 'nonpayable',
      },
      {
        name: 'decimals',
        type: 'function',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'uint8',
            internalType: 'uint8',
          },
        ],
        payable: false,
        constant: true,
        stateMutability: 'view',
      },
      {
        name: 'factory',
        type: 'function',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'address',
            internalType: 'address',
          },
        ],
        payable: false,
        constant: true,
        stateMutability: 'view',
      },
      {
        name: 'getReserves',
        type: 'function',
        inputs: [],
        outputs: [
          {
            name: '_reserve0',
            type: 'uint112',
            internalType: 'uint112',
          },
          {
            name: '_reserve1',
            type: 'uint112',
            internalType: 'uint112',
          },
          {
            name: '_blockTimestampLast',
            type: 'uint32',
            internalType: 'uint32',
          },
        ],
        payable: false,
        constant: true,
        stateMutability: 'view',
      },
      {
        name: 'initialize',
        type: 'function',
        inputs: [
          {
            name: '_token0',
            type: 'address',
            internalType: 'address',
          },
          {
            name: '_token1',
            type: 'address',
            internalType: 'address',
          },
        ],
        outputs: [],
        payable: false,
        constant: false,
        stateMutability: 'nonpayable',
      },
      {
        name: 'kLast',
        type: 'function',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        payable: false,
        constant: true,
        stateMutability: 'view',
      },
      {
        name: 'mint',
        type: 'function',
        inputs: [
          {
            name: 'to',
            type: 'address',
            internalType: 'address',
          },
        ],
        outputs: [
          {
            name: 'liquidity',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        payable: false,
        constant: false,
        stateMutability: 'nonpayable',
      },
      {
        name: 'name',
        type: 'function',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'string',
            internalType: 'string',
          },
        ],
        payable: false,
        constant: true,
        stateMutability: 'view',
      },
      {
        name: 'nonces',
        type: 'function',
        inputs: [
          {
            name: '',
            type: 'address',
            internalType: 'address',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        payable: false,
        constant: true,
        stateMutability: 'view',
      },
      {
        name: 'permit',
        type: 'function',
        inputs: [
          {
            name: 'owner',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'spender',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'value',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'deadline',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'v',
            type: 'uint8',
            internalType: 'uint8',
          },
          {
            name: 'r',
            type: 'bytes32',
            internalType: 'bytes32',
          },
          {
            name: 's',
            type: 'bytes32',
            internalType: 'bytes32',
          },
        ],
        outputs: [],
        payable: false,
        constant: false,
        stateMutability: 'nonpayable',
      },
      {
        name: 'price0CumulativeLast',
        type: 'function',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        payable: false,
        constant: true,
        stateMutability: 'view',
      },
      {
        name: 'price1CumulativeLast',
        type: 'function',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        payable: false,
        constant: true,
        stateMutability: 'view',
      },
      {
        name: 'skim',
        type: 'function',
        inputs: [
          {
            name: 'to',
            type: 'address',
            internalType: 'address',
          },
        ],
        outputs: [],
        payable: false,
        constant: false,
        stateMutability: 'nonpayable',
      },
      {
        name: 'swap',
        type: 'function',
        inputs: [
          {
            name: 'amount0Out',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'amount1Out',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'to',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'data',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
        outputs: [],
        payable: false,
        constant: false,
        stateMutability: 'nonpayable',
      },
      {
        name: 'symbol',
        type: 'function',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'string',
            internalType: 'string',
          },
        ],
        payable: false,
        constant: true,
        stateMutability: 'view',
      },
      {
        name: 'sync',
        type: 'function',
        inputs: [],
        outputs: [],
        payable: false,
        constant: false,
        stateMutability: 'nonpayable',
      },
      {
        name: 'token0',
        type: 'function',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'address',
            internalType: 'address',
          },
        ],
        payable: false,
        constant: true,
        stateMutability: 'view',
      },
      {
        name: 'token1',
        type: 'function',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'address',
            internalType: 'address',
          },
        ],
        payable: false,
        constant: true,
        stateMutability: 'view',
      },
      {
        name: 'totalSupply',
        type: 'function',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        payable: false,
        constant: true,
        stateMutability: 'view',
      },
      {
        name: 'transfer',
        type: 'function',
        inputs: [
          {
            name: 'to',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'value',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'bool',
            internalType: 'bool',
          },
        ],
        payable: false,
        constant: false,
        stateMutability: 'nonpayable',
      },
      {
        name: 'transferFrom',
        type: 'function',
        inputs: [
          {
            name: 'from',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'to',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'value',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'bool',
            internalType: 'bool',
          },
        ],
        payable: false,
        constant: false,
        stateMutability: 'nonpayable',
      },
    ],
  },
  TokenFactory: {
    name: 'TokenFactory',
    address: '0x0C52A671dA8772856D5A4A0f6660D1356fEB9971',
    abi: [
      {
        type: 'constructor',
        inputs: [],
        stateMutability: 'nonpayable',
      },
      {
        name: 'TokenDeployed',
        type: 'event',
        inputs: [
          {
            name: 'token',
            type: 'address',
            indexed: false,
            internalType: 'address',
          },
          {
            name: 'creator',
            type: 'address',
            indexed: false,
            internalType: 'address',
          },
          {
            name: 'name',
            type: 'string',
            indexed: false,
            internalType: 'string',
          },
          {
            name: 'supply',
            type: 'uint256',
            indexed: false,
            internalType: 'uint256',
          },
        ],
        anonymous: false,
      },
      {
        name: 'deployToken',
        type: 'function',
        inputs: [
          {
            name: 'name',
            type: 'string',
            internalType: 'string',
          },
          {
            name: 'symbol',
            type: 'string',
            internalType: 'string',
          },
          {
            name: 'totalSupply',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
      },
      {
        name: 'getTokenWeight',
        type: 'function',
        inputs: [
          {
            name: 'token',
            type: 'address',
            internalType: 'address',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        stateMutability: 'view',
      },
    ],
  },
  OneInchExecutor: {
    name: 'OneInchExecutor',
    address: '0x3a0EE8B44664B73C2054B50F023AF6981A0ff0D4',
    abi: [
      {
        type: 'constructor',
        inputs: [
          {
            name: 'tokenFactory',
            type: 'address',
            internalType: 'contract TokenFactory',
          },
        ],
        stateMutability: 'nonpayable',
      },
      {
        name: 'ReceivedData',
        type: 'event',
        inputs: [
          {
            name: 'data',
            type: 'bytes',
            indexed: false,
            internalType: 'bytes',
          },
        ],
        anonymous: false,
      },
      {
        type: 'fallback',
        stateMutability: 'payable',
      },
      {
        name: 'execute',
        type: 'function',
        inputs: [
          {
            name: '_srcTokenOwner',
            type: 'address',
            internalType: 'address',
          },
        ],
        outputs: [],
        stateMutability: 'payable',
      },
    ],
  },
};
