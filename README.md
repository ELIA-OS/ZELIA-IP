# Zcash Transaction Verifier

A Node.js library for verifying Zcash transactions, with support for both transparent-to-shielded (t2z) and shielded-to-shielded (z2z) transactions.

## Features

- ✅ Verify Zcash transactions using multiple blockchain explorers
- 🔒 Support for shielded transactions (JoinSplit, Sapling, Orchard)
- 🔄 Automatic fallback between multiple API providers
- 📝 Transaction type detection (transparent, t2z, z2z)
- 💰 Confirmation status checking
- 🔍 Memo pattern detection (when available)

## Supported Explorers

- Blockchair
- Zcha.in
- ZcashExplorer

## Installation

```bash
npm install axios
```

## Usage

### Basic Transaction Verification

```javascript
const { verifyZcashTransaction } = require('./verify-t2z-transaction');

// Verify a transaction
const result = await verifyZcashTransaction(
    'your-tx-hash',
    'expected-inscription', // optional
    0.001 // expected amount in ZEC (optional)
);

console.log(result);
```

### Standalone Verification

```javascript
const { verifyMintTransaction } = require('./verify-zcash-tx');

// Verify a mint transaction
const result = await verifyMintTransaction(
    'tx-hash',
    'token-id'
);

console.log(result);
```

### Command Line Usage

```bash
# Verify a transaction
node verify-t2z-transaction.js <tx-hash>

# Verify a mint transaction
node verify-zcash-tx.js <tx-hash> <token-id>
```

## API Reference

### verifyZcashTransaction(txHash, expectedInscription, expectedAmount)

Verifies a Zcash transaction and determines its type.

**Parameters:**
- `txHash` (string): The transaction hash to verify
- `expectedInscription` (string, optional): Expected memo inscription
- `expectedAmount` (number, optional): Expected amount in ZEC

**Returns:**
```javascript
{
    verified: boolean,
    confirmations: number,
    explorerUsed: string,
    type: 't-to-z' | 'transparent' | 'shielded',
    hasJoinSplit: boolean,
    hasSapling: boolean,
    hasShieldedOutput: boolean,
    warning: string
}
```

### verifyT2ZTransaction(txHash, expectedInscription, expectedAmount)

Specifically handles transparent-to-shielded transactions.

### checkTransactionExists(txHash)

Quick check to see if a transaction exists on the blockchain.

## Transaction Types

### Transparent-to-Shielded (t2z)
Transactions that send from transparent addresses to shielded addresses. These show transparent inputs but have outputs to the shielded pool.

### Shielded-to-Shielded (z2z)
Fully shielded transactions where both inputs and outputs are in the shielded pool.

## Important Notes

⚠️ **Memo Encryption**: Memos in shielded transactions are encrypted and cannot be read without the viewing key. This verifier checks for transaction existence and shielded components but cannot decrypt memos.

⚠️ **API Rate Limits**: Multiple explorers are used to avoid rate limiting. The library automatically falls back to alternative providers.

## Configuration

You can modify the explorer list in the code:

```javascript
const explorers = [
    {
        name: 'Blockchair',
        infoUrl: `https://api.blockchair.com/zcash/dashboards/transaction/${txHash}`,
        rawUrl: `https://api.blockchair.com/zcash/raw/transaction/${txHash}`
    },
    // Add more explorers...
];
```

## Example Output

```javascript
{
  verified: true,
  confirmations: 5,
  explorerUsed: 'Blockchair',
  type: 't-to-z',
  hasJoinSplit: false,
  hasSapling: true,
  hasShieldedOutput: true,
  amountCorrect: true,
  memoMatches: true,
  warning: 'T-to-Z transaction verified by existence. Memo requires viewing key to decrypt.'
}
```

## Error Handling

The library includes comprehensive error handling:

```javascript
try {
    const result = await verifyZcashTransaction(txHash);
    if (!result.verified) {
        console.error('Verification failed:', result.error);
    }
} catch (error) {
    console.error('Error:', error.message);
}
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Disclaimer

This library is for verification purposes only. Always ensure you have proper security measures in place when handling cryptocurrency transactions.
