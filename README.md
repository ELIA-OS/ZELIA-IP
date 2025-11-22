# ZELIA GENESIS NFT COLLECTION

![ZELIA Genesis Banner](banner.png)

<div align="center">

**999 Genesis NFTs | Zcash Blockchain | Privacy-First Digital Art**

[![Zcash](https://img.shields.io/badge/Blockchain-Zcash-F4B728?style=for-the-badge&logo=zcash)](https://z.cash)
[![Protocol](https://img.shields.io/badge/Protocol-Zerdinals-8B5CF6?style=for-the-badge)]()
[![Collection](https://img.shields.io/badge/Supply-999_NFTs-E11D48?style=for-the-badge)]()

[Website](https://eliaos.io) • [Twitter](https://x.com/ELIAosvm) • [Explore Collection](#collection-details)

</div>

---

## 📖 About

**ZELIA Genesis** is a limited collection of 999 unique NFTs inscribed on the Zcash blockchain using the Zerdinals protocol. This collection represents the intersection of privacy-preserving technology and digital art, built on the foundation of ELIA OS - an encrypted layer intelligence architecture.

### Key Features

- 🔢 **Limited Supply**: Only 999 NFTs will ever exist
- 🔒 **Privacy-First**: Built on Zcash's shielded transaction technology
- 🎨 **Unique Artwork**: Each NFT is individually crafted and numbered
- 💎 **Rarity Tiers**: 6 distinct rarity levels with special attributes
- 📝 **On-Chain Inscriptions**: Metadata and ownership secured via ZK-proofs
- 🌐 **Decentralized**: Hosted on IPFS with immutable references

---

## 🎯 Collection Details

### Supply Breakdown

| Tier | Count | Percentage | Description |
|------|-------|------------|-------------|
| 🌟 **LEGENDARY** | 4 | 0.4% | The rarest and most coveted pieces |
| ✨ **MYTHIC** | 20 | 2.0% | Exceptionally rare artworks |
| 💎 **EPIC** | 75 | 7.5% | Highly sought-after pieces |
| 🔷 **RARE** | 200 | 20.0% | Notable and distinguished |
| 🔹 **UNCOMMON** | 300 | 30.0% | Above average quality |
| ⚪ **COMMON** | 400 | 40.0% | Standard collection pieces |

### Mint Information

- **Mint Price**: 10 USD equivalent in ZEC
- **Blockchain**: Zcash Mainnet
- **Protocol**: Zerdinals (ZRC-721)
- **Transaction Type**: Transparent-to-Shielded (t2z) with encrypted memos
- **Payment Address**: `zs1...` (shielded address)

---

## 🛠️ Technical Specifications

### Inscription Format

Each ZELIA Genesis NFT is inscribed using the ZRC-721 standard:

```
zrc721:ZRCG:{tokenId}:ipfs://{CID}
```

- **Protocol**: `zrc721`
- **Collection ID**: `ZRCG` (ZELIA Genesis)
- **Token ID**: `1-999`
- **Metadata**: IPFS-hosted JSON

### Metadata Structure

```json
{
  "name": "ZELIA Genesis #1",
  "description": "Genesis NFT #1 of 999.",
  "image": "ipfs://...",
  "attributes": [
    {
      "trait_type": "Number",
      "value": 1
    },
    {
      "trait_type": "Collection",
      "value": "Genesis"
    },
    {
      "trait_type": "Rarity",
      "value": "LEGENDARY"
    },
    {
      "trait_type": "Rarity Rank",
      "value": 1
    },
    {
      "trait_type": "Protocol",
      "value": "Zerdinals"
    },
    {
      "trait_type": "Blockchain",
      "value": "Zcash"
    }
  ],
  "external_url": "https://eliaos.io/nft/1",
  "created_on": "https://eliaos.io"
}
```

### Blockchain Integration

- **Network**: Zcash Mainnet
- **Memo Field**: Encrypted inscription data in shielded outputs
- **Verification**: Multi-explorer validation (Blockchair, Zcha.in, ZcashExplorer)
- **Privacy**: Zero-knowledge proofs for transaction privacy
- **Storage**: Distributed via IPFS with content-addressed identifiers

---

## 🔐 Privacy & Security

### Why Zcash?

ZELIA Genesis leverages Zcash's advanced privacy features:

- **Shielded Transactions**: Zero-knowledge proofs hide sender, receiver, and amount
- **Encrypted Memos**: Inscription data stored in encrypted memo fields
- **Selective Disclosure**: View keys allow optional transparency
- **AES-256 Encryption**: Military-grade encryption for all shielded data

### Verification Methods

1. **Public Registry**: Transaction IDs linked to public inscription database
2. **On-Chain Verification**: Blockchain explorers confirm transaction existence
3. **Viewing Keys**: Optional memo decryption for transparency
4. **Multi-Explorer**: Cross-validation across multiple blockchain explorers

---

## 📜 Intellectual Property Rights

### Copyright & Ownership

**All intellectual property rights for ZELIA Genesis NFTs are reserved by ELIA OS Foundation.**

#### Ownership Rights

When you purchase a ZELIA Genesis NFT, you own:

✅ The NFT itself (on-chain inscription and metadata)  
✅ The specific digital artwork associated with your NFT  
✅ Personal, non-commercial display rights  
✅ The right to resell or transfer your NFT  

You **DO NOT** own:

❌ The underlying intellectual property or copyright  
❌ Rights to reproduce, distribute, or create derivatives  
❌ Commercial usage rights without explicit license  
❌ The ZELIA brand, logo, or collection name  

#### Commercial Use License

Commercial use of ZELIA Genesis artwork requires a separate commercial license from ELIA OS Foundation. Contact: [licensing@eliaos.io](mailto:licensing@eliaos.io)

#### Permitted Uses

- Display your NFT in digital wallets, galleries, and personal social media
- Use your NFT as a profile picture or avatar
- Resell or transfer your NFT on compatible marketplaces
- Showcase your NFT in virtual worlds and metaverse platforms (personal use)

#### Prohibited Uses

- Creating merchandise featuring the artwork without permission
- Using the artwork in commercial projects or for profit
- Claiming ownership of the intellectual property
- Creating derivative works or modified versions for distribution
- Sublicensing or transferring intellectual property rights

#### ELIA OS Foundation Rights

ELIA OS Foundation retains all rights to:

- Use collection artwork for marketing and promotion
- Create derivative collections or special editions
- License artwork to third parties
- Enforce intellectual property protection
- Modify terms for future collections

### Open Source Components

While the artwork is copyrighted, certain technical components are open source:

- ✅ **Verification Scripts**: MIT License
- ✅ **Metadata Generation Tools**: MIT License
- ✅ **Smart Contract Templates**: Open Source
- ❌ **Artwork & Designs**: All Rights Reserved

### Trademark Notice

"ZELIA," "ELIA OS," and associated logos are trademarks of ELIA OS Foundation. Unauthorized use is prohibited.

---

## 🚀 Getting Started

### For Collectors

1. **Get a Zcash Wallet**: Use YWallet, ZecWallet, or Nighthawk
2. **Acquire ZEC**: Purchase Zcash from exchanges
3. **Mint Your NFT**: Send payment with inscription memo to mint address
4. **Verify Ownership**: Check transaction on blockchain explorers
5. **View Your NFT**: Use compatible wallets or our web interface

### For Developers

```bash
# Clone the repository
git clone https://github.com/eliaos/zelia-genesis

# Install dependencies
npm install

# Verify a transaction
node verify-zcash-tx.js <transaction-id> <token-id>

# Generate metadata
node generate-metadata.js
```

### For Traders

- Transaction verification via blockchain explorers
- Public inscription registry for metadata lookup
- Transparent ownership history on Zcash blockchain
- Compatible with privacy-preserving marketplaces

---

## 🔗 Resources

### Official Links

- **Website**: [https://eliaos.io](https://eliaos.io)
- **Twitter**: [@ELIAosvm](https://x.com/ELIAosvm)
- **Creator**: [@biiiiymeister](https://x.com/biiiiymeister)
- **Documentation**: [https://docs.eliaos.io](https://docs.eliaos.io)

### Blockchain Explorers

- **Blockchair**: [https://blockchair.com/zcash](https://blockchair.com/zcash)
- **Zcha.in**: [https://explorer.zcha.in](https://explorer.zcha.in)
- **ZcashExplorer**: [https://zcashexplorer.app](https://zcashexplorer.app)

### Technical Documentation

- **Zcash Protocol**: [https://z.cash/technology](https://z.cash/technology)
- **Zerdinals Standard**: [Protocol Documentation]
- **IPFS**: [https://ipfs.io](https://ipfs.io)

---

## 🤝 Community & Support

### Join the Community

- 💬 **Discord**: [Coming Soon]
- 🐦 **Twitter**: [@ELIAosvm](https://x.com/ELIAosvm)
- 📧 **Email**: support@eliaos.io

### Support

For technical support, verification issues, or general inquiries:

- **Technical Support**: tech@eliaos.io
- **General Inquiries**: info@eliaos.io
- **Licensing**: licensing@eliaos.io

---

## ⚖️ Legal

### Disclaimer

This NFT collection is provided "as is" without warranty of any kind. ELIA OS Foundation makes no representations regarding the future value, utility, or market performance of ZELIA Genesis NFTs.

### Terms of Service

By purchasing or holding a ZELIA Genesis NFT, you agree to:

- Respect intellectual property rights
- Comply with applicable laws and regulations
- Use the NFT in accordance with permitted uses
- Not engage in fraudulent or manipulative activities

### Privacy Policy

We respect user privacy and leverage Zcash's privacy features. Personal data is handled in accordance with GDPR and applicable privacy laws.

---

## 📊 Rarity Distribution

View the complete rarity distribution in `rarity-mapping.json`

Special Token Assignments:

**LEGENDARY Tokens**: 36, 86, 358, 407  
**MYTHIC Tokens**: 428, 503, 585, 541, 575, 597, 587, 890, 880, 926, 838, 958, 988, 998, 725, 577, 365, 441, 392, 567  
**EPIC Tokens**: 363, 771, 745, 760, 727, 785, 768, 497, 491, 431, 349, 346, 278, 203, 142, 504, 959, 618, 24, 76, 699, 875, 869, 866, 889, 687, 553, 270, 68, 598

All remaining tokens are randomly distributed across RARE, UNCOMMON, and COMMON tiers.

---

## 📝 Version History

- **v1.0.0** - Genesis Collection Launch (2025)
  - Initial release of 999 NFTs
  - ZRC-721 protocol implementation
  - IPFS metadata hosting
  - Privacy-preserving verification system

---

## 🏗️ Built With

- **Blockchain**: Zcash (ZEC)
- **Protocol**: Zerdinals (ZRC-721)
- **Storage**: IPFS (InterPlanetary File System)
- **Encryption**: Zero-Knowledge Proofs (ZK-SNARKs)
- **Framework**: Node.js, Python
- **Verification**: Multi-explorer API integration

---

## 📄 License

### Code Components
MIT License - See [LICENSE](LICENSE) file for details

### Artwork & Intellectual Property
All Rights Reserved © 2025 ELIA OS Foundation

Artwork, designs, and ZELIA branding are protected by copyright and trademark law. See [Intellectual Property Rights](#intellectual-property-rights) section for detailed terms.

---

<div align="center">

**Building the Future of Privacy-Preserving Digital Art**

*ZELIA Genesis is a project of ELIA OS Foundation, a non-profit organization dedicated to advancing privacy-preserving technologies.*

© 2025 ELIA OS Foundation. All Rights Reserved.

[Back to Top](#zelia-genesis-nft-collection)

</div>
