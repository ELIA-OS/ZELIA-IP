// config.example.js - Example configuration file
// Copy this to config.js and fill in your values

module.exports = {
    // Your Zcash shielded payment address (zs1...)
    paymentAddress: 'YOUR_ZCASH_SHIELDED_ADDRESS_HERE',
    
    // Mint price in USD
    mintPriceUSD: 1.00,
    
    // Collection identifier
    collectionId: 'YOUR_COLLECTION_ID',
    
    // API timeouts (milliseconds)
    timeout: 10000,
    
    // Minimum confirmations required
    minConfirmations: 1,
    
    // Explorer preferences (in order of preference)
    explorerPriority: [
        'Blockchair',
        'Zcha.in',
        'ZcashExplorer'
    ],
    
    // User agent for API requests
    userAgent: 'ZRC-721-Verifier/1.0',
    
    // Enable debug logging
    debug: true
};
