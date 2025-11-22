# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Security Considerations

### Private Keys
⚠️ **NEVER** commit or share private keys, viewing keys, or spending keys in your repository.

### Viewing Keys
- Viewing keys allow decryption of shielded transaction memos
- Store viewing keys securely using environment variables or secure key management systems
- Never hardcode viewing keys in your source code

### API Keys
- If using paid blockchain explorer APIs, store API keys in environment variables
- Use `.env` files that are excluded in `.gitignore`

### Sensitive Data
The following should NEVER be committed to version control:
- Private keys (spending keys)
- Viewing keys
- API keys
- Wallet addresses (unless public-facing)
- Transaction hashes from production systems
- User data or personal information

## Best Practices

1. **Environment Variables**: Use `.env` files for configuration
   ```bash
   ZCASH_PAYMENT_ADDRESS=zs1...
   ZCASH_VIEWING_KEY=zxviews...
   ```

2. **Configuration Files**: Use `config.js` (gitignored) instead of `config.example.js`

3. **Secure Storage**: 
   - Use hardware wallets for key storage
   - Use encrypted databases for sensitive data
   - Implement proper access controls

4. **Rate Limiting**: Implement rate limiting when querying blockchain explorers

5. **Input Validation**: Always validate transaction hashes and addresses

## Reporting a Vulnerability

If you discover a security vulnerability, please email [YOUR_SECURITY_EMAIL] with:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

Please do NOT create a public GitHub issue for security vulnerabilities.

## Disclaimer

This software is provided "as is" without warranty. Always audit code before using in production with real funds.
